"use client";

import { useEffect, useRef } from "react";

export default function StickyMobileCta() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const stickyCta = ctaRef.current;
    const hero = document.querySelector(".hero");

    if (!stickyCta || !hero || !("IntersectionObserver" in window)) {
      stickyCta?.classList.add("visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        stickyCta.classList.toggle("visible", !entries[0].isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky-mobile-cta" id="stickyCta" ref={ctaRef}>
      <a href="https://app.glowsocial.com/">SEE WHAT WE&apos;D POST</a>
    </div>
  );
}
