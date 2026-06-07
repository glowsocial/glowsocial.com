"use client";

import { useEffect, useRef } from "react";

export default function StickyMobileCta() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const stickyCta = ctaRef.current;
    const hero = document.querySelector(".hero");
    const suppressSections = Array.from(
      document.querySelectorAll(".pricing, .final-cta, .faq")
    );

    if (!stickyCta || !hero) {
      stickyCta?.classList.add("visible");
      return undefined;
    }

    let frameId = null;

    const updateVisibility = () => {
      frameId = null;
      const heroHasPassed = hero.getBoundingClientRect().bottom <= 0;
      const hasSuppressSectionInView = suppressSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
      });

      stickyCta.classList.toggle(
        "visible",
        heroHasPassed && !hasSuppressSectionInView
      );
    };

    const requestVisibilityUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateVisibility);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", requestVisibilityUpdate, { passive: true });
    window.addEventListener("resize", requestVisibilityUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", requestVisibilityUpdate);
      window.removeEventListener("resize", requestVisibilityUpdate);
    };
  }, []);

  return (
    <div className="sticky-mobile-cta" id="stickyCta" ref={ctaRef}>
      <a
        href="https://app.glowsocial.com/preview"
        data-analytics-event="sticky_cta_click"
        data-analytics-label="Sticky preview CTA"
        data-analytics-location="sticky_mobile"
      >
        SEE MY POSTS
      </a>
    </div>
  );
}
