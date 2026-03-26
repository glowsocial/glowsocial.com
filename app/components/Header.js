"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-logo">
          <img src="/images/glow-social-logo.png" alt="Glow Social" />
        </Link>

        <nav className="site-nav">
          <Link href="/#how">How It Works</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>

        <div className="header-ctas">
          <a
            href="https://app.glowsocial.com/"
            className="btn btn--outline"
          >
            Log In
          </a>
          <a
            href="https://app.glowsocial.com/"
            className="btn btn--primary"
          >
            Get Started
          </a>
        </div>

        <button className="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
