"use client";

import { useState } from "react";
import Link from "next/link";
import "./setup.css";

const PLATFORMS = [
  { name: "Google Business Profile", icon: "📍", desc: "The #1 local search ranking factor — and the one most businesses set up wrong." },
  { name: "Facebook", icon: "📘", desc: "2.9B monthly users. Your customers are checking your page before they call." },
  { name: "Instagram", icon: "📸", desc: "Visual proof that your business is real, active, and worth hiring." },
  { name: "LinkedIn", icon: "💼", desc: "The trust signal for B2B, professional services, and high-ticket businesses." },
  { name: "Bluesky", icon: "🦋", desc: "The fastest-growing platform for thought leadership and early-mover advantage." },
  { name: "Twitter / X", icon: "𝕏", desc: "Real-time visibility and customer communication." },
  { name: "Pinterest", icon: "📌", desc: "The sleeper platform — 80% of users discover new brands here." },
  { name: "Threads", icon: "🧵", desc: "Meta's conversational play — built-in audience if you have Instagram." },
];

const STEPS = [
  { num: "1", title: "Enter your website", desc: "We scan your site and pull your business name, description, logo, services, phone number, and images." },
  { num: "2", title: "AI writes your bios", desc: "Platform-specific bios tailored to each network's character limits and conventions. Written to sound like you, not a robot." },
  { num: "3", title: "Copy, paste, done", desc: "Every field has a copy button. Click → paste into the signup form → you're live on that platform in minutes." },
];

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
      {/* Hero */}
      <section className="setup-hero">
        <div className="setup-hero-grid"></div>
        <div className="container">
          <div className="setup-hero-content">
            <div className="setup-badge">
              <span className="badge-dot"></span>
              Free Tool
            </div>
            <h1>
              Set up your business on <span className="accent">every social platform</span> in 15 minutes
            </h1>
            <p className="setup-hero-sub">
              Enter your website. We'll scan it, generate platform-perfect bios, pull your logo and images, 
              and give you a copy-paste kit to create profiles on Google, Facebook, Instagram, LinkedIn, and more.
            </p>
            <p className="setup-hero-desc">
              <strong>No login required.</strong> No credit card. Just your website URL and an email to send the results to.
            </p>
          </div>
        </div>
      </section>

      {/* Email Gate */}
      <section className="setup-gate" id="get-started">
        <div className="container">
          <div className="setup-gate-card">
            {!submitted ? (
              <>
                <h2>Get your free Social Profile Kit</h2>
                <p className="setup-gate-sub">
                  Enter your website and email. We'll generate platform-specific bios, pull your images, 
                  and send you a ready-to-use kit for setting up every social media account.
                </p>
                <form onSubmit={handleSubmit} className="setup-form">
                  <div className="setup-form-row">
                    <div className="setup-input-group">
                      <label htmlFor="setup-website">Your website</label>
                      <input
                        id="setup-website"
                        type="url"
                        placeholder="https://yourbusiness.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        required
                      />
                    </div>
                    <div className="setup-input-group">
                      <label htmlFor="setup-email">Your email</label>
                      <input
                        id="setup-email"
                        type="email"
                        placeholder="you@yourbusiness.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {error && <p className="setup-error">{error}</p>}
                  <button type="submit" className="btn btn--primary btn--lg setup-submit" disabled={loading}>
                    {loading ? "Generating..." : "Generate My Profile Kit →"}
                  </button>
                  <p className="setup-fine-print">
                    Free forever. We'll email you the results and a few tips — unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              <div className="setup-success">
                <div className="setup-success-icon">✓</div>
                <h2>Your Social Profile Kit is ready!</h2>
                <p>
                  We're generating your custom bios and pulling images from <strong>{website}</strong>. 
                  Click below to access your kit now.
                </p>
                <a
                  href={`https://setup.glowsocial.com?url=${encodeURIComponent(website)}`}
                  className="btn btn--primary btn--lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open My Profile Kit →
                </a>
                <p className="setup-fine-print" style={{ marginTop: 16 }}>
                  We also sent a copy to <strong>{email}</strong> so you can come back to it anytime.
                </p>
              </div>
            )}
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
                <span className="setup-platform-icon">{p.icon}</span>
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
            Get My Free Profile Kit →
          </a>
        </div>
      </section>
    </>
  );
}
