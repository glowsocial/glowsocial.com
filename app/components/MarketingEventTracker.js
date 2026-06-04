"use client";

import { useEffect } from "react";

function sendMarketingEvent(target) {
  if (typeof window.gtag !== "function") return;

  const {
    analyticsEvent,
    analyticsLabel,
    analyticsLocation,
    analyticsPlan,
  } = target.dataset;

  if (!analyticsEvent) return;

  const eventParameters = {
    event_category: "homepage",
    event_label: analyticsLabel || analyticsLocation || analyticsPlan || analyticsEvent,
    transport_type: "beacon",
  };

  if (analyticsLocation) {
    eventParameters.cta_location = analyticsLocation;
  }

  if (analyticsPlan) {
    eventParameters.plan = analyticsPlan;
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
