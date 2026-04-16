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
          <Link href="/how-glow-social-works">How It Works</Link>
          <Link href="/pricing">Pricing</Link>

          {/* Compare Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className="nav-dropdown-trigger"
              onClick={() => toggleDropdown("compare")}
              aria-expanded={activeDropdown === "compare"}
            >
              Compare
              <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeDropdown === "compare" && (
              <div className="nav-dropdown">
                <Link href="/compare/marky-alternative" onClick={closeAll}>vs Marky</Link>
                <Link href="/compare/later-alternative" onClick={closeAll}>vs Later</Link>
                <Link href="/blog/buffer-vs-glow-social" onClick={closeAll}>vs Buffer</Link>
                <Link href="/blog/hootsuite-vs-glow-social" onClick={closeAll}>vs Hootsuite</Link>
                <Link href="/blog/sprout-social-vs-glow-social" onClick={closeAll}>vs Sprout Social</Link>
                <Link href="/compare/chatgpt-alternative" onClick={closeAll}>vs ChatGPT</Link>
                <Link href="/compare/loomly-alternative" onClick={closeAll}>vs Loomly</Link>
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
              Resources
              <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeDropdown === "resources" && (
              <div className="nav-dropdown">
                <Link href="/blog" onClick={closeAll}>Blog</Link>
                <Link href="/about" onClick={closeAll}>About</Link>
                <Link href="/manifesto" onClick={closeAll}>Manifesto</Link>
                <Link href="/research" onClick={closeAll}>Research</Link>
                <a href="https://app.glowsocial.com/kb" onClick={closeAll}>Help Center</a>
              </div>
            )}
          </div>
        </nav>

        <div className="header-ctas">
          <a href="https://app.glowsocial.com/login" className="btn btn--outline">
            Log In
          </a>
          <a href="https://app.glowsocial.com/signup" className="btn btn--primary">
            Get Started
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
            <Link href="/how-glow-social-works" onClick={closeAll}>How It Works</Link>
            <Link href="/pricing" onClick={closeAll}>Pricing</Link>

            {/* Compare accordion */}
            <button
              className="mobile-nav-section"
              onClick={() => toggleDropdown("m-compare")}
            >
              Compare
              <svg className={`nav-chevron ${activeDropdown === "m-compare" ? "is-open" : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeDropdown === "m-compare" && (
              <div className="mobile-nav-sub">
                <Link href="/compare/marky-alternative" onClick={closeAll}>vs Marky</Link>
                <Link href="/compare/later-alternative" onClick={closeAll}>vs Later</Link>
                <Link href="/blog/buffer-vs-glow-social" onClick={closeAll}>vs Buffer</Link>
                <Link href="/blog/hootsuite-vs-glow-social" onClick={closeAll}>vs Hootsuite</Link>
                <Link href="/blog/sprout-social-vs-glow-social" onClick={closeAll}>vs Sprout Social</Link>
                <Link href="/compare/chatgpt-alternative" onClick={closeAll}>vs ChatGPT</Link>
                <Link href="/compare/loomly-alternative" onClick={closeAll}>vs Loomly</Link>
              </div>
            )}

            {/* Resources accordion */}
            <button
              className="mobile-nav-section"
              onClick={() => toggleDropdown("m-resources")}
            >
              Resources
              <svg className={`nav-chevron ${activeDropdown === "m-resources" ? "is-open" : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {activeDropdown === "m-resources" && (
              <div className="mobile-nav-sub">
                <Link href="/blog" onClick={closeAll}>Blog</Link>
                <Link href="/about" onClick={closeAll}>About</Link>
                <Link href="/manifesto" onClick={closeAll}>Manifesto</Link>
                <Link href="/research" onClick={closeAll}>Research</Link>
                <a href="https://app.glowsocial.com/kb" onClick={closeAll}>Help Center</a>
              </div>
            )}

            <div className="mobile-nav-ctas">
              <a href="https://app.glowsocial.com/login" className="btn btn--outline btn--block" onClick={closeAll}>
                Log In
              </a>
              <a href="https://app.glowsocial.com/signup" className="btn btn--primary btn--block" onClick={closeAll}>
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
