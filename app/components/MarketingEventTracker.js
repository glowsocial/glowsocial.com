"use client";

import { useEffect } from "react";

function sendMarketingEvent(target) {
  if (typeof window.gtag !== "function") return;
  if (window.__glowAnalyticsConsent !== "granted") return;

  const {
    analyticsCategory,
    analyticsEvent,
    analyticsLabel,
    analyticsLocation,
    analyticsPlan,
  } = target.dataset;

  if (!analyticsEvent) return;

  const eventParameters = {
    event_category: analyticsCategory || "marketing",
    event_label: analyticsLabel || analyticsLocation || analyticsPlan || analyticsEvent,
    page_path: window.location.pathname,
    transport_type: "beacon",
  };

  if (analyticsLocation) {
    eventParameters.cta_location = analyticsLocation;
  }

  if (analyticsPlan) {
    eventParameters.plan = analyticsPlan;
  }

  if (target instanceof HTMLAnchorElement) {
    eventParameters.link_url = target.href;
  }

  if (target instanceof HTMLFormElement) {
    eventParameters.form_action = target.action;
    if (target.id) {
      eventParameters.form_id = target.id;
    }
  }

  const ctaText = target.textContent?.replace(/\s+/g, " ").trim();
  if (ctaText) {
    eventParameters.cta_text = ctaText.slice(0, 80);
  }

  window.gtag("event", analyticsEvent, eventParameters);
}

export default function MarketingEventTracker() {
  useEffect(() => {
    function trackClick(event) {
      if (!(event.target instanceof Element)) return;

      const trackedElement = event.target.closest("[data-analytics-event]");
      if (!trackedElement) return;

      sendMarketingEvent(trackedElement);
    }

    function trackSubmit(event) {
      if (!(event.target instanceof HTMLFormElement)) return;

      if (!event.target.dataset.analyticsEvent) return;

      sendMarketingEvent(event.target);
    }

    document.addEventListener("click", trackClick);
    document.addEventListener("submit", trackSubmit);

    return () => {
      document.removeEventListener("click", trackClick);
      document.removeEventListener("submit", trackSubmit);
    };
  }, []);

  return null;
}
