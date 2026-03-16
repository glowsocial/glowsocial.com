"use client";

import { useEffect } from "react";

export default function LetsMeet() {
  useEffect(() => {
    // Load the Paperform embed script
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Let&apos;s Meet</h1>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">
          <div data-paperform-id="kathleenscalendar"></div>
        </div>
      </article>
    </>
  );
}
