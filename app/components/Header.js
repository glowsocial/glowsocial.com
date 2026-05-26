"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change (escape key too)
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container">
        <Link href="/" className="site-logo" onClick={closeAll}>
          <img src="/images/glow-social-logo.png" alt="Glow Social" />
        </Link>

        {/* Desktop Nav */}
        <nav className="site-nav">
          <Link href="/how-it-works">HOW IT WORKS</Link>
          <Link href="/pricing">PRICING</Link>

          {/* Compare Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown("compare")}
              aria-expanded={activeDropdown === "compare"}
            >
              COMPARE
              <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeDropdown === "compare" && (
              <div className="nav-dropdown">
                <Link href="/compare/marky-alternative" onClick={closeAll}>VS MARKY</Link>
                <Link href="/compare/later-alternative" onClick={closeAll}>VS LATER</Link>
                <Link href="/blog/buffer-vs-glow-social" onClick={closeAll}>VS BUFFER</Link>
                <Link href="/blog/hootsuite-vs-glow-social" onClick={closeAll}>VS HOOTSUITE</Link>
                <Link href="/blog/sprout-social-vs-glow-social" onClick={closeAll}>VS SPROUT SOCIAL</Link>
                <Link href="/compare/chatgpt-alternative" onClick={closeAll}>VS CHATGPT</Link>
                <Link href="/compare/loomly-alternative" onClick={closeAll}>VS LOOMLY</Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown("resources")}
              aria-expanded={activeDropdown === "resources"}
            >
              RESOURCES
              <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeDropdown === "resources" && (
              <div className="nav-dropdown">
                <Link href="/blog" onClick={closeAll}>BLOG</Link>
                <Link href="/affordable-social-media-management" onClick={closeAll}>AFFORDABLE SOCIAL MEDIA</Link>
                <Link href="/about" onClick={closeAll}>ABOUT</Link>
                <Link href="/manifesto" onClick={closeAll}>MANIFESTO</Link>
                <Link href="/research" onClick={closeAll}>RESEARCH</Link>
                <Link href="/tools" onClick={closeAll}>TOOLS</Link>
                <a href="https://app.glowsocial.com/kb" onClick={closeAll}>HELP CENTER</a>
              </div>
            )}
          </div>
        </nav>

        <div className="header-ctas">
          <a href="https://app.glowsocial.com/login" className="btn btn--outline">
            LOG IN
          </a>
          <a href="https://app.glowsocial.com/signup" className="btn btn--primary">
            GET STARTED
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${mobileOpen ? "is-active" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link href="/how-it-works" onClick={closeAll}>HOW IT WORKS</Link>
            <Link href="/pricing" onClick={closeAll}>PRICING</Link>

            {/* Compare accordion */}
            <button
              className="mobile-nav-section"
              onClick={() => toggleDropdown("m-compare")}
            >
              COMPARE
              <svg className={`nav-chevron ${activeDropdown === "m-compare" ? "is-open" : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeDropdown === "m-compare" && (
              <div className="mobile-nav-sub">
                <Link href="/compare/marky-alternative" onClick={closeAll}>VS MARKY</Link>
                <Link href="/compare/later-alternative" onClick={closeAll}>VS LATER</Link>
                <Link href="/blog/buffer-vs-glow-social" onClick={closeAll}>VS BUFFER</Link>
                <Link href="/blog/hootsuite-vs-glow-social" onClick={closeAll}>VS HOOTSUITE</Link>
                <Link href="/blog/sprout-social-vs-glow-social" onClick={closeAll}>VS SPROUT SOCIAL</Link>
                <Link href="/compare/chatgpt-alternative" onClick={closeAll}>VS CHATGPT</Link>
                <Link href="/compare/loomly-alternative" onClick={closeAll}>VS LOOMLY</Link>
              </div>
            )}

            {/* Resources accordion */}
            <button
              className="mobile-nav-section"
              onClick={() => toggleDropdown("m-resources")}
            >
              RESOURCES
              <svg className={`nav-chevron ${activeDropdown === "m-resources" ? "is-open" : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeDropdown === "m-resources" && (
              <div className="mobile-nav-sub">
                <Link href="/blog" onClick={closeAll}>BLOG</Link>
                <Link href="/affordable-social-media-management" onClick={closeAll}>AFFORDABLE SOCIAL MEDIA</Link>
                <Link href="/about" onClick={closeAll}>ABOUT</Link>
                <Link href="/manifesto" onClick={closeAll}>MANIFESTO</Link>
                <Link href="/research" onClick={closeAll}>RESEARCH</Link>
                <Link href="/tools" onClick={closeAll}>TOOLS</Link>
                <a href="https://app.glowsocial.com/kb" onClick={closeAll}>HELP CENTER</a>
              </div>
            )}

            <div className="mobile-nav-ctas">
              <a href="https://app.glowsocial.com/login" className="btn btn--outline btn--block" onClick={closeAll}>
                LOG IN
              </a>
              <a href="https://app.glowsocial.com/signup" className="btn btn--primary btn--block" onClick={closeAll}>
                GET STARTED
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
