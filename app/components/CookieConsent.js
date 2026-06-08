"use client";

import { useEffect, useState } from "react";

const ANALYTICS_ID = "G-W571GNWJRB";
const CONSENT_KEY = "glow-cookie-consent-v1";
const CONSENT_COOKIE = "glow_cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365;
const ACCEPTED = "analytics-accepted";
const REJECTED = "analytics-rejected";

function normalizeConsent(value) {
  return value === ACCEPTED || value === REJECTED ? value : null;
}

function getCookieConsent() {
  try {
    const cookie = document.cookie
      .split(";")
      .map((part) => part.trim())
      .find((part) => part.startsWith(`${CONSENT_COOKIE}=`));

    if (!cookie) return null;

    return normalizeConsent(decodeURIComponent(cookie.slice(CONSENT_COOKIE.length + 1)));
  } catch {
    return null;
  }
}

function getStoredConsent() {
  try {
    const localConsent = normalizeConsent(window.localStorage.getItem(CONSENT_KEY));

    if (localConsent) {
      return localConsent;
    }
  } catch {
    // Fall back to the essential consent cookie below.
  }

  return getCookieConsent();
}

function storeConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // The essential consent cookie below still preserves the choice if possible.
  }

  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(value)}; Max-Age=${CONSENT_MAX_AGE}; path=/; SameSite=Lax${secure}`;
  } catch {
    // If all browser storage is blocked, honor the choice for this page view only.
  }
}

function expireCookie(name) {
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  const domains = [
    hostname,
    domainParts.length > 1 ? `.${domainParts.slice(-2).join(".")}` : hostname,
  ];

  domains.forEach((domain) => {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
  });
  document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
}

function deleteAnalyticsCookies() {
  document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name === "_gid" || name.startsWith("_ga_"))
    .forEach(expireCookie);
}

function disableAnalytics() {
  window.__glowAnalyticsConsent = "denied";
  window[`ga-disable-${ANALYTICS_ID}`] = true;

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  document.getElementById("google-analytics-src")?.remove();
  window.__glowAnalyticsLoaded = false;
  deleteAnalyticsCookies();
}

function loadAnalytics() {
  if (window.__glowAnalyticsLoaded) return;

  window.__glowAnalyticsLoaded = true;
  window.__glowAnalyticsConsent = "granted";
  window[`ga-disable-${ANALYTICS_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_ID, {
    anonymize_ip: true,
  });

  if (!document.getElementById("google-analytics-src")) {
    const script = document.createElement("script");
    script.id = "google-analytics-src";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
    script.async = true;
    document.head.appendChild(script);
  }
}

export default function CookieConsent() {
  const [status, setStatus] = useState("loading");
  const [isManaging, setIsManaging] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [globalPrivacyControl, setGlobalPrivacyControl] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storedConsent = getStoredConsent();
      const hasGlobalPrivacyControl = Boolean(navigator.globalPrivacyControl);

      setGlobalPrivacyControl(hasGlobalPrivacyControl);

      if (storedConsent === ACCEPTED && !hasGlobalPrivacyControl) {
        setAnalyticsEnabled(true);
        setStatus(ACCEPTED);
        loadAnalytics();
        return;
      }

      if (storedConsent === REJECTED || hasGlobalPrivacyControl) {
        setAnalyticsEnabled(false);
        setStatus(REJECTED);
        disableAnalytics();
        return;
      }

      disableAnalytics();
      setStatus("undecided");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    function openCookieSettings(event) {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest("[data-cookie-settings-open]");
      if (!trigger) return;

      event.preventDefault();
      const storedConsent = getStoredConsent();
      setAnalyticsEnabled(storedConsent === ACCEPTED && !navigator.globalPrivacyControl);
      setStatus("undecided");
      setIsManaging(true);
    }

    document.addEventListener("click", openCookieSettings);
    return () => document.removeEventListener("click", openCookieSettings);
  }, []);

  function acceptAnalytics() {
    storeConsent(ACCEPTED);
    setAnalyticsEnabled(true);
    setIsManaging(false);
    setStatus(ACCEPTED);
    loadAnalytics();
  }

  function rejectAnalytics() {
    storeConsent(REJECTED);
    setAnalyticsEnabled(false);
    setIsManaging(false);
    setStatus(REJECTED);
    disableAnalytics();
  }

  function savePreferences() {
    if (analyticsEnabled && !globalPrivacyControl) {
      acceptAnalytics();
      return;
    }

    rejectAnalytics();
  }

  if (status === "loading" || status === ACCEPTED || status === REJECTED) {
    return null;
  }

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie preferences">
      <div className="cookie-consent-copy">
        <strong>Cookie preferences</strong>
        <p>
          We use essential cookies to run the site. Analytics stays off unless you allow it.
        </p>
      </div>

      {isManaging ? (
        <div className="cookie-consent-manage">
          <label className="cookie-consent-toggle">
            <input
              type="checkbox"
              checked={analyticsEnabled && !globalPrivacyControl}
              disabled={globalPrivacyControl}
              onChange={(event) => setAnalyticsEnabled(event.target.checked)}
            />
            <span>
              <strong>Analytics cookies</strong>
              <small>
                Help us understand site visits. Advertising storage stays off.
              </small>
            </span>
          </label>
          {globalPrivacyControl ? (
            <p className="cookie-consent-note">
              Your browser is sending Global Privacy Control, so analytics remains off.
            </p>
          ) : null}
          <div className="cookie-consent-actions">
            <button type="button" className="cookie-consent-btn cookie-consent-btn--primary" onClick={savePreferences}>
              Save preferences
            </button>
            <button type="button" className="cookie-consent-btn" onClick={rejectAnalytics}>
              Reject
            </button>
          </div>
        </div>
      ) : (
        <div className="cookie-consent-actions">
          <button type="button" className="cookie-consent-btn cookie-consent-btn--primary" onClick={acceptAnalytics}>
            Accept analytics
          </button>
          <button type="button" className="cookie-consent-btn" onClick={rejectAnalytics}>
            Reject
          </button>
          <button type="button" className="cookie-consent-btn" onClick={() => setIsManaging(true)}>
            Manage
          </button>
        </div>
      )}
    </div>
  );
}
