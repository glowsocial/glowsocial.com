"use client";

import { useState } from "react";
import Link from "next/link";
import "./setup.css";

const PLATFORMS = [
  { name: "Google Business Profile", desc: "The #1 local search ranking factor — and the one most businesses set up wrong." },
  { name: "Facebook", desc: "2.9B monthly users. Your customers are checking your page before they call." },
  { name: "Instagram", desc: "Visual proof that your business is real, active, and worth hiring." },
  { name: "LinkedIn", desc: "The trust signal for B2B, professional services, and high-ticket businesses." },
  { name: "Bluesky", desc: "The fastest-growing platform for thought leadership and early-mover advantage." },
  { name: "Twitter / X", desc: "Real-time visibility and customer communication." },
  { name: "Pinterest", desc: "The sleeper platform — 80% of users discover new brands here." },
  { name: "Threads", desc: "Meta's conversational play — built-in audience if you have Instagram." },
];

const STEPS = [
  { num: "1", title: "Enter your website", desc: "We scan your site and pull your business name, description, logo, services, phone number, and images." },
  { num: "2", title: "AI writes your bios", desc: "Platform-specific bios tailored to each network's character limits and conventions. Written to sound like you, not a robot." },
  { num: "3", title: "Copy, paste, done", desc: "Every field has a copy button. Click, paste into the signup form, and you're live on that platform in minutes." },
];

/* Simple SVG platform icons — no emojis */
function PlatformIcon({ name }) {
  const size = 28;
  switch (name) {
    case "Google Business Profile":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
        </svg>
      );
    case "Facebook":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case "Instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
      );
    case "LinkedIn":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case "Bluesky":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.476 6.158 3.226-4.41.593-7.163 2.577-4.224 8.527 3.32 5.17 6.588-.758 9.442-5.676.353-.607.525-.89.525-.66 0-.23.172.054.525.66 2.854 4.918 6.122 10.846 9.442 5.676 2.939-5.95.186-7.934-4.224-8.527 2.558.25 5.373-.599 6.158-3.226.246-.828.624-5.788.624-6.479 0-.689-.139-1.861-.902-2.203-.659-.299-1.664-.621-4.3 1.24C17.046 4.748 14.087 8.687 13 10.8h-1z"/>
        </svg>
      );
    case "Twitter / X":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case "Pinterest":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/>
        </svg>
      );
    case "Threads":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.343-.783-.98-1.404-1.882-1.845a9.025 9.025 0 01-.481 2.603c-.645 1.587-1.788 2.465-3.314 2.542-1.071.054-2.083-.32-2.77-1.025-.646-.662-.989-1.556-.966-2.516.042-1.725 1.352-3.05 3.554-3.594.85-.21 1.726-.303 2.605-.285.28-.76.396-1.578.338-2.394-.1-1.33-.686-2.023-1.742-2.062-1.524-.056-2.506 1.1-2.601 1.218l-1.462-1.32c.076-.084 1.66-1.878 4.07-1.79 1.994.074 3.418 1.358 3.618 3.588a7.765 7.765 0 01-.38 3.059c1.874.68 3.086 1.943 3.53 3.677.705 2.748-.296 5.742-2.956 7.2-1.924 1.055-4.252 1.573-6.904 1.555zm2.368-7.174c-.149-.012-.3-.018-.455-.018-.863 0-1.7.134-2.408.381-1.316.413-2.002 1.14-2.024 2.039-.014.621.222 1.158.665 1.612.475.487 1.112.733 1.843.697.998-.05 1.718-.575 2.14-1.617.365-.901.439-1.964.239-3.094z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function SetupPage() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/setup-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero with form inline — everything above the fold */}
      <section className="setup-hero" id="get-started">
        <div className="setup-hero-grid"></div>
        <div className="container">
          <div className="setup-hero-layout">
            {/* Left: copy + form */}
            <div className="setup-hero-left">
              <div className="setup-badge">
                <span className="badge-dot"></span>
                Free Tool
              </div>
              <h1>
                Set up your business on <span className="accent">every social platform</span> in 15 minutes
              </h1>
              <p className="setup-hero-sub">
                Enter your website. We'll generate platform-perfect bios, pull your logo and images, 
                and give you a copy-paste kit for Google, Facebook, Instagram, LinkedIn, and more.
              </p>

              {/* Inline form */}
              <div className="setup-hero-form-wrap">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="setup-form">
                    <div className="setup-form-row">
                      <div className="setup-input-group">
                        <input
                          id="setup-website"
                          type="url"
                          placeholder="https://yourbusiness.com"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          required
                          aria-label="Your website"
                        />
                      </div>
                      <div className="setup-input-group">
                        <input
                          id="setup-email"
                          type="email"
                          placeholder="you@yourbusiness.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          aria-label="Your email"
                        />
                      </div>
                    </div>
                    {error && <p className="setup-error">{error}</p>}
                    <button type="submit" className="btn btn--primary btn--lg setup-submit" disabled={loading}>
                      {loading ? "Generating..." : "Generate My Profile Kit"}
                    </button>
                    <p className="setup-fine-print">
                      Free forever. No credit card. We'll email you the results.
                    </p>
                  </form>
                ) : (
                  <div className="setup-success">
                    <div className="setup-success-icon">&#10003;</div>
                    <h2>Your Social Profile Kit is ready!</h2>
                    <p>
                      We're generating your custom bios and pulling images from <strong>{website}</strong>.
                    </p>
                    <a
                      href={`https://setup.glowsocial.com?url=${encodeURIComponent(website)}`}
                      className="btn btn--primary btn--lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open My Profile Kit
                    </a>
                    <p className="setup-fine-print" style={{ marginTop: 12 }}>
                      We also sent a copy to <strong>{email}</strong>.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: auto-rotating slideshow */}
            <div className="setup-hero-right">
              <div className="setup-slideshow">
                {/* 
                  Drop your screenshots into /public/images/setup/ and update paths below.
                  The slideshow auto-cycles every 3s with a smooth crossfade.
                  Recommended: 4 screenshots at ~800px wide, showing different steps of the wizard.
                */}
                <img
                  src="/images/setup/slide-1.png"
                  alt="Welcome screen — Set up every social media platform in 15 minutes"
                  className="setup-slide"
                />
                <img
                  src="/images/setup/slide-2.png"
                  alt="Enter your website URL to scan your business"
                  className="setup-slide"
                />
                <img
                  src="/images/setup/slide-3.png"
                  alt="Scan results showing 3 of 8 platforms found with score bar"
                  className="setup-slide"
                />
                <img
                  src="/images/setup/slide-4.png"
                  alt="Step-by-step Google Business Profile setup guide with numbered instructions"
                  className="setup-slide"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="setup-how">
        <div className="container">
          <span className="section-badge">How It Works</span>
          <h2>Three steps. Zero guesswork.</h2>
          <div className="setup-steps">
            {STEPS.map((step) => (
              <div key={step.num} className="setup-step">
                <div className="setup-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="setup-platforms">
        <div className="container">
          <span className="section-badge">Platforms We Cover</span>
          <h2>Every platform your customers check</h2>
          <p className="section-sub">
            When someone hears about your business, they search for you. Here's where they look — and where you need to be.
          </p>
          <div className="setup-platform-grid">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="setup-platform-card">
                <span className="setup-platform-icon">
                  <PlatformIcon name={p.name} />
                </span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain / Solution */}
      <section className="setup-pain">
        <div className="container">
          <div className="setup-pain-grid">
            <div className="setup-pain-card setup-pain-card--before">
              <div className="setup-pain-label">Without the Profile Kit</div>
              <ul>
                <li>Spend 2+ hours researching each platform's requirements</li>
                <li>Write bios from scratch (and guess at character limits)</li>
                <li>Resize your logo for every platform's different dimensions</li>
                <li>Forget which platforms you still need to set up</li>
                <li>Give up after Facebook and Instagram and skip the rest</li>
              </ul>
            </div>
            <div className="setup-pain-card setup-pain-card--after">
              <div className="setup-pain-label setup-pain-label--good">With the Profile Kit</div>
              <ul>
                <li>Every bio pre-written to the exact character limit</li>
                <li>One-click copy buttons — just paste into each signup form</li>
                <li>Your logo and images ready to download as PNGs</li>
                <li>Direct "Create Account" links for every platform</li>
                <li>All 8 platforms set up in under 15 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="setup-faq">
        <div className="container">
          <h2>Common questions</h2>
          <div className="setup-faq-grid">
            <div className="setup-faq-item">
              <h3>Is this really free?</h3>
              <p>Yes. The Social Profile Kit is 100% free. We built it because we kept setting up social accounts for our customers manually — this tool saves everyone time.</p>
            </div>
            <div className="setup-faq-item">
              <h3>What do you do with my email?</h3>
              <p>We send you a copy of your Profile Kit and a few follow-up tips on getting the most out of your new social accounts. You can unsubscribe anytime. We never share or sell your email.</p>
            </div>
            <div className="setup-faq-item">
              <h3>Does this actually create my accounts?</h3>
              <p>No — it generates all the content and links you need to create them yourself. Each platform requires you to sign up directly. The kit makes the process painless by giving you everything pre-written and ready to paste.</p>
            </div>
            <div className="setup-faq-item">
              <h3>What if I already have some accounts?</h3>
              <p>The tool detects your existing social accounts and shows which ones you already have. For platforms you're already on, the bios make great profile updates.</p>
            </div>
            <div className="setup-faq-item">
              <h3>What happens after I set up my profiles?</h3>
              <p>Setting up profiles is the first step. Keeping them active is what drives results. <Link href="/pricing">Glow Social</Link> publishes professional content to all your platforms automatically — starting at $99/month.</p>
            </div>
            <div className="setup-faq-item">
              <h3>I don't have a website. Can I still use this?</h3>
              <p>Not yet — the tool needs a website to scan for your business info. But if you have a Google Business Profile, Facebook page, or even a Yelp listing, <Link href="/contact">reach out</Link> and we'll help you get started.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="setup-bottom-cta">
        <div className="container">
          <h2>Stop putting off your social media setup</h2>
          <p>
            Every day without social profiles is a day customers are finding your competitors instead. 
            Get your free Profile Kit in 60 seconds.
          </p>
          <a href="#get-started" className="btn btn--primary btn--lg btn--glow">
            Get My Free Profile Kit
          </a>
        </div>
      </section>
    </>
  );
}
