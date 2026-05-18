"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import HomeJsonLd from "./components/HomeJsonLd";
import { getPricing, isPriceIncreaseActive } from "./pricing-config";
import "./home.css";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("connect");
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeStat, setActiveStat] = useState(0);
  const pricing = useMemo(() => getPricing(), []);

  // Animate stats counter
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sticky mobile CTA
  useEffect(() => {
    const stickyCta = document.getElementById("stickyCta");
    const hero = document.querySelector(".hero");
    if (hero && stickyCta) {
      const observer = new IntersectionObserver(
        (entries) => {
          stickyCta.classList.toggle("visible", !entries[0].isIntersecting);
        },
        { threshold: 0 }
      );
      observer.observe(hero);
      return () => observer.disconnect();
    }
  }, []);

  const stats = [
    { number: "2,847", label: "posts published this month", prefix: "" },
    { number: "12", label: "platforms per account", prefix: "" },
    { number: "4.7", label: "minutes average setup time", prefix: "" },
  ];

  return (
    <>
      <HomeJsonLd />

      {/* ============ ANNOUNCEMENT BAR — Price increase urgency (hidden after May 1) ============ */}
      {!isPriceIncreaseActive() && (
        <div className="announce-bar">
          <div className="container announce-bar-inner">
            <span>
              <strong>Current pricing ends April 30.</strong>{" "}
              <a href="#pricing">Lock in {pricing.startingAtShort} before prices increase →</a>
            </span>
          </div>
        </div>
      )}

      {/* ============ HERO — Emotional trigger first ============ */}
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-icons" aria-hidden="true">
          {/* Facebook */}
          <div className="hero-icon" style={{ animation: 'iconDrift1 12s ease-in-out infinite', width: 40, height: 40 }}>
            <svg viewBox="0 0 24 24" fill="rgba(215,226,120,0.35)" width="32" height="32"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </div>
          {/* Instagram */}
          <div className="hero-icon" style={{ animation: 'iconDrift2 14s ease-in-out infinite', width: 38, height: 38 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,120,0.3)" strokeWidth="1.5" width="30" height="30"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
          </div>
          {/* LinkedIn */}
          <div className="hero-icon" style={{ animation: 'iconDrift3 16s ease-in-out infinite', width: 36, height: 36 }}>
            <svg viewBox="0 0 24 24" fill="rgba(215,226,120,0.3)" width="28" height="28"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          {/* TikTok / Music note */}
          <div className="hero-icon" style={{ animation: 'iconDrift4 13s ease-in-out infinite', width: 34, height: 34 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,120,0.25)" strokeWidth="1.5" width="26" height="26"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          </div>
          {/* Google / Search */}
          <div className="hero-icon" style={{ animation: 'iconDrift5 15s ease-in-out infinite', width: 32, height: 32 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,120,0.3)" strokeWidth="1.5" width="24" height="24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          {/* X / Twitter */}
          <div className="hero-icon" style={{ animation: 'iconDrift6 11s ease-in-out infinite', width: 34, height: 34 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,120,0.25)" strokeWidth="1.5" width="26" height="26"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>
          </div>
          {/* Pinterest */}
          <div className="hero-icon" style={{ animation: 'iconDrift1 17s ease-in-out infinite 2s', width: 30, height: 30 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,120,0.2)" strokeWidth="1.5" width="22" height="22"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.12 2.5 7.65 6.08 9.17-.08-.72-.16-1.83.03-2.62l1.1-4.67s-.28-.56-.28-1.39c0-1.3.75-2.27 1.69-2.27.8 0 1.18.6 1.18 1.31 0 .8-.51 2-.77 3.1-.22.92.46 1.67 1.37 1.67 1.64 0 2.9-1.73 2.9-4.23 0-2.21-1.59-3.76-3.86-3.76-2.63 0-4.17 1.97-4.17 4.01 0 .79.31 1.64.69 2.1.08.09.09.17.07.26l-.26 1.04c-.04.17-.14.2-.32.12-1.2-.56-1.95-2.3-1.95-3.71 0-3.02 2.2-5.8 6.33-5.8 3.33 0 5.91 2.37 5.91 5.54 0 3.3-2.08 5.96-4.97 5.96-.97 0-1.88-.5-2.19-1.1l-.6 2.27c-.22.83-.81 1.87-1.2 2.5.9.28 1.86.43 2.85.43 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
          </div>
          {/* YouTube */}
          <div className="hero-icon" style={{ animation: 'iconDrift2 18s ease-in-out infinite 1s', width: 36, height: 36 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,120,0.25)" strokeWidth="1.5" width="28" height="28"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.35 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </div>
        </div>

        <div className="container hero-centered">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Done-For-You Social Media &mdash; {pricing.startingAtShort}
          </span>
          <h1>
            Your social media, handled.
            <br />
            <span className="accent">While you run your business.</span>
          </h1>
          <p className="hero-sub">
            Professional posts, Google reviews, 13 platforms &mdash; all running without you.
          </p>
          <p className="hero-desc">
            Glow Social reads your website, learns your voice, and publishes content
            that sounds like you wrote it. Every day. Every platform. <strong>No login required.</strong>
          </p>
          <form
            className="hero-url-form"
            onSubmit={(e) => {
              e.preventDefault();
              const url = e.target.elements.website.value.trim();
              if (url) {
                const encoded = encodeURIComponent(url);
                window.location.href = `https://app.glowsocial.com/preview?url=${encoded}`;
              }
            }}
            id="hero-url-form"
          >
            <div className="hero-url-input-wrap">
              <svg className="hero-url-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <input
                type="text"
                name="website"
                placeholder="yourwebsite.com"
                className="hero-url-input"
                autoComplete="off"
                id="hero-url-input"
              />
              <button type="submit" className="hero-url-btn" id="hero-url-submit">
                See My Posts Free →
              </button>
            </div>
          </form>
          <p className="hero-url-hint">
            We&apos;ll read your website and show you 12 custom posts in under 60 seconds. No signup required.
          </p>
          <div className="hero-ctas-centered" style={{ marginTop: 16 }}>
            <a
              href="https://app.glowsocial.com/"
              className="btn btn--outline"
              id="hero-cta-secondary"
              style={{ fontSize: '0.85rem', padding: '10px 24px' }}
            >
              Already convinced? Get Started — {pricing.startingAtShort}
            </a>
          </div>
          <div className="hero-proof">
            <div className="hero-proof-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>No contracts</span>
            </div>
            <div className="hero-proof-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Setup in 5 minutes</span>
            </div>
            <div className="hero-proof-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR — Specificity builds trust ============ */}
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <div><strong>4.7 min</strong> avg. setup</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            <div><strong>Daily posting</strong> available</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
            <div><strong>Total</strong> omnipresence</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <div><strong>Google Reviews</strong> on Pro+</div>
          </div>
        </div>
      </section>


      {/* ============ THE PAIN — Emotional first ============ */}
      <section className="brain-problem" id="brain-problem" data-animate>
        <div className={`container ${visibleSections.has("brain-problem") ? "fade-in" : "fade-hidden"}`}>
          <h2>Your Business Is Already Legit.<br />Your Feed Should Match.</h2>
          <p className="section-sub">
            Social media is supposed to be a storefront, not another chore. Glow Social fills the strategic void between the business you&apos;ve built offline and the trust signals customers expect to see online.
          </p>
          <div className="brain-grid">
            <div className="brain-card">
              <div className="brain-card-icon brain-card-icon--red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <h3>Before Glow Social</h3>
              <p>Your feed does not reflect the real business customers see when they walk in, call you, or get referred by a friend. The gap is not a moral failure. It is an empty shelf.</p>
              <div className="brain-card-verdict">They see: <strong>&ldquo;Last post: 2023.&rdquo;</strong></div>
            </div>
            <div className="brain-card brain-card--after">
              <div className="brain-card-icon brain-card-icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>After Glow Social</h3>
              <p>Fresh, professional posts are live. Your business looks active even on your busiest week. Referrals land on pages that feel current, polished, and worthy of the work you already do.</p>
              <div className="brain-card-verdict brain-card-verdict--good">They see: <strong>&ldquo;This business is active and professional.&rdquo;</strong></div>
            </div>
          </div>
          <div className="brain-bridge">
            <div className="brain-bridge-stat">
              <span className="big-stat">78%</span>
              <span className="stat-label">of customers check social media<br />before making a purchase decision</span>
            </div>
            <div className="brain-bridge-arrow">→</div>
            <div className="brain-bridge-stat">
              <span className="big-stat">3 sec</span>
              <span className="stat-label">is all it takes for their brain<br />to decide if they trust you</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS — Tabbed ============ */}
      <section className="how" id="how" data-animate>
        <div className={`container ${visibleSections.has("how") ? "fade-in" : "fade-hidden"}`}>
          <h2>From Quick Setup<br />to Steady Presence</h2>
          <p className="section-sub">Three steps. Five minutes. Then approvals come to the notification flow you already use.</p>

          <div className="how-tabs">
            <div className="how-tab-buttons">
              <button
                className={`how-tab-btn ${activeTab === "connect" ? "active" : ""}`}
                onClick={() => setActiveTab("connect")}
                id="tab-connect"
              >
                <span className="step-num">1</span>
                <span>Connect</span>
              </button>
              <button
                className={`how-tab-btn ${activeTab === "pick" ? "active" : ""}`}
                onClick={() => setActiveTab("pick")}
                id="tab-pick"
              >
                <span className="step-num">2</span>
                <span>Pick</span>
              </button>
              <button
                className={`how-tab-btn ${activeTab === "post" ? "active" : ""}`}
                onClick={() => setActiveTab("post")}
                id="tab-post"
              >
                <span className="step-num">3</span>
                <span>Post</span>
              </button>
            </div>

            <div className="how-tab-panels">
              <div className={`how-tab-panel ${activeTab === "connect" ? "active" : ""}`} data-panel="connect">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3>Drop in your website. We do the rest.</h3>
                    <p>Glow Social reads 11 pages of your website to learn your business, your brand voice, and your services. Then we generate 133+ content ideas tailored specifically to you.</p>
                    <p><strong>Voice Mirror:</strong> Our AI doesn&apos;t just write; it mirrors. It identifies your Tone Pillars — Professional, Witty, Local — before it ever drafts a single word.</p>
                    <p>Your dashboard shows everything at a glance — connected platforms, posting schedule, and content pipeline. Setup takes about 5 minutes.</p>
                  </div>
                  <div className="how-panel-img">
                    <div className="voice-profile-card">
                      <div className="voice-profile-eyebrow">Voice Profile</div>
                      <h4>Acme Home Services</h4>
                      <div className="tone-pillars">
                        <span>Professional</span>
                        <span>Witty</span>
                        <span>Local</span>
                      </div>
                      <p>&ldquo;Clear, neighborly expertise with a little bite. Confident without sounding corporate.&rdquo;</p>
                    </div>
                    <img src="/images/app-dashboard.png" alt="Glow Social dashboard showing connected platforms, posting schedule, and content ideas" />
                  </div>
                </div>
              </div>

              <div className={`how-tab-panel ${activeTab === "pick" ? "active" : ""}`} data-panel="pick">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3>Swipe through ideas. Keep the ones you love.</h3>
                    <p>Browse through content ideas written for your business. Swipe right to keep, left to skip. It&apos;s like Tinder for your social media content.</p>
                    <p>Choose between static posts, videos, and carousels. Every idea is a starting point — we turn the ones you pick into polished, ready-to-publish content.</p>
                  </div>
                  <div className="how-panel-img">
                    <img src="/images/app-sparks.png" alt="Glow Social sparks picker — swipe through content ideas and choose the ones you love" />
                  </div>
                </div>
              </div>

              <div className={`how-tab-panel ${activeTab === "post" ? "active" : ""}`} data-panel="post">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3>Zero-Login Approvals.</h3>
                    <p>Get a weekly SMS or email. Swipe right to approve, left to skip. Done in 60 seconds while you&apos;re in line for coffee.</p>
                    <p>One post, total omnipresence. We handle the formatting for TikTok, LinkedIn, Google, and 9 more — all from one approval flow. No separate logins. No copy-pasting.</p>
                  </div>
                  <div className="how-panel-img">
                    <div className="mobile-approval-preview" aria-label="Mobile approval preview">
                      <div className="approval-phone">
                        <div className="approval-notch"></div>
                        <div className="approval-screen">
                          <div className="approval-notification">Glow Social: 12 posts ready</div>
                          <div className="approval-post-card">
                            <span className="approval-platform">Google Business</span>
                            <h4>Spring tune-up slots are open</h4>
                            <p>Quick reminder for neighbors: preventative care now saves emergency calls later.</p>
                          </div>
                          <div className="approval-actions">
                            <span>Skip</span>
                            <span>Approve</span>
                          </div>
                        </div>
                      </div>
                      <svg className="approval-hand" viewBox="0 0 80 80" aria-hidden="true">
                        <path d="M31 62c-5-6-9-13-13-20-2-4 4-8 7-4l5 7V16c0-4 7-4 7 0v24l3-4c3-3 8 0 7 4l3-2c4-2 8 2 6 6l2-1c4-1 7 3 5 7l-5 11c-2 5-7 9-13 9h-4c-4 0-7-2-10-5z" fill="#fff" stroke="#192734" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <a href="https://app.glowsocial.com/" className="btn btn--primary" id="how-cta">See What We&apos;d Create for You</a>
          </div>
        </div>
      </section>

      {/* ============ FIRST WEEK TIMELINE ============ */}
      <section className="first-week" id="first-week" data-animate>
        <div className={`container ${visibleSections.has("first-week") ? "fade-in" : "fade-hidden"}`}>
          <h2>What Your First Week Looks Like</h2>
          <p className="section-sub">Most agencies take a month to onboard. You&apos;ll have posts live before lunch.</p>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-dot tl-dot--fast">1 min</div>
              <h3>Enter your website</h3>
              <p>We scan up to 11 pages to learn your business, services, and brand voice.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--fast">2 min</div>
              <h3>Your Tone Pillars are identified</h3>
              <p>Our Voice Mirror finds your style &mdash; professional, witty, neighborly, direct &mdash; before drafting a single word.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--fast">3 min</div>
              <h3>12 custom posts appear</h3>
              <p>Written for your business, formatted for every platform. Quote graphics, text posts, and carousels &mdash; ready to review.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--fast">5 min</div>
              <h3>Connect your platforms, set your schedule</h3>
              <p>Link your accounts. Pick your posting days. That&apos;s it &mdash; you&apos;re done setting up.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--day">Day 2</div>
              <h3>Your first posts publish automatically</h3>
              <p>Content goes live across all 13 platforms. No login, no copy-pasting, no formatting headaches.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--day">Day 7</div>
              <h3>Your weekly report arrives</h3>
              <p>See what posted, how it performed, and what&apos;s queued next.</p>
              <div className="tl-highlight">
                <p>You&apos;re already more active on social media than 90% of local businesses in your area.</p>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <a href="https://app.glowsocial.com/" className="btn btn--primary" id="first-week-cta">See What We&apos;d Create for You</a>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL TICKER ============ */}
      <section className="testimonial-ticker" id="testimonials" aria-label="Customer testimonials">
        <div className="ticker-track">
          <div className="ticker-slide">
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I love the carousels.&rdquo;</span>
              <span className="ticker-author">— Life Coach</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I forgot I even had social media. That&apos;s the point.&rdquo;</span>
              <span className="ticker-author">— Tax Preparer</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My clients think I hired a marketing team.&rdquo;</span>
              <span className="ticker-author">— Wellness Spa Owner</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I&apos;m getting traction on profiles I didn&apos;t even have before I signed up.&rdquo;</span>
              <span className="ticker-author">— Home Care Provider</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My Mondays are lighter now. It just shows up handled.&rdquo;</span>
              <span className="ticker-author">— Mortgage Broker</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;It just quietly works. That&apos;s all I wanted.&rdquo;</span>
              <span className="ticker-author">— Real Estate Agent</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="ticker-slide" aria-hidden="true">
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I love the carousels.&rdquo;</span>
              <span className="ticker-author">— Life Coach</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I forgot I even had social media. That&apos;s the point.&rdquo;</span>
              <span className="ticker-author">— Tax Preparer</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My clients think I hired a marketing team.&rdquo;</span>
              <span className="ticker-author">— Wellness Spa Owner</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I&apos;m getting traction on profiles I didn&apos;t even have before I signed up.&rdquo;</span>
              <span className="ticker-author">— Home Care Provider</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My Mondays are lighter now. It just shows up handled.&rdquo;</span>
              <span className="ticker-author">— Mortgage Broker</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;It just quietly works. That&apos;s all I wanted.&rdquo;</span>
              <span className="ticker-author">— Real Estate Agent</span>
            </div>
            <div className="ticker-dot">✦</div>
          </div>
        </div>
      </section>

      {/* ============ TENSION STRIP — The real cost of avoidance ============ */}
      <section className="psych-proof" id="psych-proof" data-animate>
        <div className={`container ${visibleSections.has("psych-proof") ? "fade-in" : "fade-hidden"}`}>
          <h2>The Storefront Customers Check Before They Call</h2>
          <p className="section-sub">
            You&apos;ve built a great business; your social media should finally look like it. Glow Social turns the quiet space into proof that you are open, active, and ready to help.
          </p>
          <div className="psych-grid">
            <div className="psych-card">
              <div className="psych-number">01</div>
              <h3>A Quiet Feed Is an Empty Shelf</h3>
              <p>When someone finds you through a referral or Google, the first thing they do is check your social media. We fill that space with current, professional proof.</p>
              <div className="psych-example">
                <div className="psych-bad">Last post: 2023</div>
                <div className="psych-good">Active presence where customers check</div>
              </div>
            </div>
            <div className="psych-card">
              <div className="psych-number">02</div>
              <h3>One Post, Total Omnipresence</h3>
              <p>You do not need to care about every channel. You need to show up on the few that matter and have the rest handled without extra work.</p>
              <div className="psych-example">
                <div className="psych-bad">Manual posting everywhere</div>
                <div className="psych-good">One approval, formatted reach</div>
              </div>
            </div>
            <div className="psych-card">
              <div className="psych-number">03</div>
              <h3>Approvals Fit Your Habits</h3>
              <p>No new dashboard habit to build. Your posts come to the notification patterns you already use, then you swipe through the decisions in under a minute.</p>
              <div className="psych-example">
                <div className="psych-bad">Another tool to remember</div>
                <div className="psych-good">Text, swipe, done</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT HANDLED ACTUALLY FEELS LIKE ============ */}
      <section className="features" id="features" data-animate>
        <div className={`container ${visibleSections.has("features") ? "fade-in" : "fade-hidden"}`}>
          <h2>What &ldquo;Handled&rdquo; Actually Feels Like</h2>
          <p className="section-sub">This isn&apos;t just about posts. It&apos;s about what disappears when you hand it off.</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
              <div><h3>Zero-Login Approvals</h3><p>Get a weekly SMS or email. Swipe right to approve, left to skip. Done in 60 seconds while you&apos;re in line for coffee.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></div>
              <div><h3>One Post, Total Omnipresence</h3><p>Professional graphics, consistent voice, fresh posts — formatted for TikTok, LinkedIn, Google, and 9 more.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></div>
              <div><h3>Referrals Actually Convert</h3><p>Someone recommends you. They look you up. Instead of a dead feed, they see an active, professional business. That&apos;s what turns a mention into a call.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
              <div><h3>Your Voice Gets Mirrored First</h3><p>Glow Social identifies your Tone Pillars before it drafts anything, so the content sounds like your business instead of a generic template.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
              <div><h3>The Mental Load Goes Away</h3><p>&ldquo;I should be posting&rdquo; is a thought that takes up space. When it&apos;s just taken care of, you get that space back — to focus on the work you actually love.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
              <div><h3>You Network Without the Wince</h3><p>No more &ldquo;I know, I really need to get better at social media.&rdquo; Your presence is polished. Hand someone your card knowing you&apos;ll impress them when they look you up.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GBP + REVIEWS ============ */}
      <section className="gbp-reviews" id="gbp" data-animate>
        <div className={`container ${visibleSections.has("gbp") ? "fade-in" : "fade-hidden"}`}>
          <h2>The Two Things That Actually Get Local Businesses Found</h2>
          <p className="section-sub">Google is how most customers find you. Your Business Profile and your reviews are the first things they see. Glow Social keeps both active — automatically.</p>
          <div className="gbp-grid">
            <div className="gbp-pillar">
              <div className="gbp-pillar-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 11 12 14 22 4"/></svg>
                <h3>Google Business Profile Posts</h3>
              </div>
              <p className="gbp-pillar-desc">Most social tools skip GBP entirely. Glow Social publishes directly to it — keeping your listing active and boosting your local search ranking.</p>
              <ul className="gbp-pillar-list">
                <li>Daily posts created and published for you</li>
                <li>Matches your brand voice and services</li>
                <li>Managed alongside all your other platforms</li>
              </ul>
            </div>
            <div className="gbp-pillar">
              <div className="gbp-pillar-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <h3>Google Review Monitoring</h3>
              </div>
              <p className="gbp-pillar-desc">See every new review the moment it comes in. Respond right from your dashboard — no extra app, no extra cost.</p>
              <ul className="gbp-pillar-list">
                <li>Instant alerts when new reviews arrive</li>
                <li>Reply to reviews without leaving Glow Social</li>
                <li>Included in every plan — competitors charge $399+/mo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COMPETITOR STRIP ============ */}
      <section className="competitor-strip" id="competitors" data-animate>
        <div className={`container ${visibleSections.has("competitors") ? "fade-in" : "fade-hidden"}`}>
          <h2>Other Tools Give You More Work. We Give You Less.</h2>
          <p className="section-sub">Most social media tools are made for marketing teams to manage feeds. We built Glow Social for business owners to run businesses.</p>
          <div className="competitor-grid">
            <div className="competitor-card"><h3>Buffer</h3><div className="verdict">No Google Business Profile</div><div className="detail">No GBP posting. No review management. Not built for local.</div></div>
            <div className="competitor-card"><h3>Later</h3><div className="verdict">No Google Business Profile</div><div className="detail">Instagram-focused. No GBP support at all. No reviews.</div></div>
            <div className="competitor-card"><h3>Sprout Social</h3><div className="verdict">$399+/mo for Reviews</div><div className="detail">Review management locked behind their most expensive plan.</div></div>
            <div className="competitor-card competitor-card--glow"><h3>Glow Social</h3><div className="verdict">GBP + Reviews Included</div><div className="detail">Posting, GBP, and review monitoring — all starting at {pricing.startingAtShort}.</div></div>
          </div>
        </div>
      </section>

      {/* ============ COST COMPARISON ============ */}
      <section className="comparison" id="comparison" data-animate>
        <div className={`container ${visibleSections.has("comparison") ? "fade-in" : "fade-hidden"}`}>
          <h2>What You&apos;d Pay Anywhere Else</h2>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr><th></th><th className="highlight-col">Glow Social</th><th>Freelancer</th><th>Agency</th><th>DIY</th></tr>
              </thead>
              <tbody>
                <tr><td>Monthly cost</td><td className="highlight-col"><strong>{pricing.core.display}</strong></td><td>$300–$750</td><td>$2,000+</td><td>Free*</td></tr>
                <tr><td>Posts per month</td><td className="highlight-col"><strong>12+</strong></td><td>8–12</td><td>12–20</td><td>2–4</td></tr>
                <tr><td>GBP posting</td><td className="highlight-col"><strong>Included</strong></td><td>Sometimes</td><td>Extra cost</td><td>Manual</td></tr>
                <tr><td>Review monitoring</td><td className="highlight-col"><strong>Pro+</strong></td><td>No</td><td>Extra cost</td><td>Manual</td></tr>
                <tr><td>Setup time</td><td className="highlight-col"><strong>5 minutes</strong></td><td>2–3 weeks</td><td>1–2 months</td><td>Ongoing</td></tr>
                <tr><td>Graphics included</td><td className="highlight-col"><strong>Yes</strong></td><td>Sometimes</td><td>Yes</td><td>No</td></tr>
                <tr><td>Cancel anytime</td><td className="highlight-col"><strong>Yes</strong></td><td>Contract</td><td>Contract</td><td>Yes</td></tr>
                <tr><td>Hours per week</td><td className="highlight-col"><strong>&lt;1 hour</strong></td><td>2–3 hours</td><td>1–2 hours</td><td>10+ hours</td></tr>
              </tbody>
            </table>
            <p className="comparison-footnote">*DIY is free in dollars, not in time. 10 hours/week at $50/hr = $2,000/month in your time.</p>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="pricing" id="pricing" data-animate>
        <div className={`container ${visibleSections.has("pricing") ? "fade-in" : "fade-hidden"}`}>
          <h2>Simple, Transparent Pricing</h2>
          <p className="section-sub">No hidden fees. No contracts. Cancel anytime.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Glo Core</h3>
              <div className="price"><span className="price-amount">{pricing.core.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>Total Coverage</strong> for your core social storefront</li>
                <li><strong>Zero Maintenance</strong> posting rhythm</li>
                <li><strong>Brand Protection</strong> from website-informed voice</li>
                <li><strong>Google Business</strong> visibility included</li>
                <li><strong>Zero-Login</strong> weekly approvals</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=core" className="btn btn--outline" id="pricing-core-cta">Start With Core</a>
            </div>
            <div className="price-card price-card--featured">
              <span className="popular-badge">Most Popular</span>
              <h3>Glo Pro</h3>
              <div className="price"><span className="price-amount">{pricing.pro.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li><strong>More Momentum</strong> with higher posting volume</li>
                <li><strong>Scroll-Stopping Formats</strong> for carousels and video</li>
                <li><strong>On-Demand Campaigns</strong> for promos and events</li>
                <li><strong>Reputation Awareness</strong> with Google Review monitoring</li>
                <li><strong>Performance Clarity</strong> on what is working</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=pro" className="btn btn--primary" id="pricing-pro-cta">Start With Pro</a>
            </div>
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <div className="price"><span className="price-amount">{pricing.unlimited.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>Always-On Coverage</strong> for every content need</li>
                <li><strong>Unlimited Reach Assets</strong> across formats</li>
                <li><strong>No Content Ceiling</strong> when your calendar gets busy</li>
                <li><strong>Full Brand Protection</strong> across every campaign</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=unlimited" className="btn btn--outline" id="pricing-unlimited-cta">Start With Unlimited</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA — Emotional close ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>Make Your Social Media<br />Match Your Business.</h2>
          <p>5-minute setup. Professional posts, Google Business Profile, and reviews — all done for you.<br />Your storefront looks alive. Your {pricing.startingAtFull} starts today.</p>
          <a href="https://app.glowsocial.com/" className="btn btn--primary btn--lg btn--glow" id="final-cta">Get Your First Month of Posts</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Questions From People Who Really Don&apos;t Want to Think About Social Media</h2>
          <div className="faq-list">
            <details className="faq-item"><summary>Will this get me more customers?</summary><p>It won&apos;t replace advertising. What it does is more important: it converts the customers you&apos;re already almost getting. When someone hears about you through word of mouth, Google, or a referral, the first thing they do is check your social media. If your last post was six months ago, they second-guess themselves and move on. Fresh, professional content turns that curiosity into a call. Glow Social makes sure you never lose a warm lead because your presence looked abandoned.</p></details>
            <details className="faq-item"><summary>How much does Glow Social cost?</summary><p>Glow Social Core costs {pricing.startingAtFull} with no contracts or commitments. Compare that to $3,000+/month for a marketing agency or $300+/month for an overseas contractor. You can cancel anytime and keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary>Can I cancel anytime?</summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary>What if I don&apos;t like the content?</summary><p>You have full editorial control. Edit any post before it goes live, regenerate content with different parameters, or write your own. Every piece of content is customized to your brand voice and can be adjusted to your preferences.</p></details>
            <details className="faq-item"><summary>How long does setup take?</summary><p>About 5 minutes. Answer a few questions about your business, connect your social media accounts, and you&apos;re done. No job posting, no interviews, no training required.</p></details>
            <details className="faq-item"><summary>I&apos;ve tried social media tools before. How is this different?</summary><p>Most tools give you a better way to do the work. Glow Social takes the work away entirely. You don&apos;t schedule, write, or design anything. We read your website, generate content tailored to your business, and publish it where customers check, including Google Business Profile. You just approve and move on — or let auto-scheduling handle even that.</p></details>
            <details className="faq-item"><summary>Does Glow Social post to Google Business Profile?</summary><p>Yes — and this is one of the biggest things that sets us apart. Most social media tools skip GBP entirely (Buffer and Later don&apos;t support it at all). We publish directly to your Google Business Profile alongside your other platforms.</p></details>
            <details className="faq-item"><summary>Does Glow Social post to Pinterest?</summary><p>Yes — and it&apos;s one of our best-performing platforms. Pinterest posts generated through Glow Social average a 7.7% engagement rate, higher than Facebook, Instagram, or LinkedIn. We create tall-format pins automatically optimized for Pinterest&apos;s feed, so your business shows up where people are actively searching for inspiration and services. Buffer and Later don&apos;t support Pinterest at all.</p></details>
            <details className="faq-item"><summary>How does the Google Review integration work?</summary><p>Google Review monitoring is included in Glo Pro and Glo Unlimited plans. Once connected, Glow Social monitors your reviews automatically and you can respond right from your dashboard — no need to log into Google separately.</p></details>
            <details className="faq-item"><summary>Which platforms does Glow Social support?</summary><p>Facebook, Instagram, LinkedIn, Twitter, Threads, YouTube, Bluesky, Mastodon, Google Business Profile, Pinterest, Discord, Slack, and TikTok.</p></details>
            <details className="faq-item"><summary>Who is Glow Social best for?</summary><p>Business owners who are great at what they do and hate that social media is part of running a business. If you&apos;ve ever said &ldquo;I know I should be posting more&rdquo; at a networking event, you&apos;re exactly who this is for. Our customers include roofers, dentists, coaches, photographers, wedding vendors, and local service providers who want to look professional online without it consuming their time.</p></details>
            <details className="faq-item"><summary>What is Glow Social?</summary><p>Glow Social is a done-for-you social media service for small businesses. For {pricing.startingAtFull}, you get professionally written, designed, and published posts every month — with brand-matched voice, Google Business Profile visibility, and zero-login approvals. We handle the operating rhythm for you.</p></details>
            <details className="faq-item"><summary>How does Glow Social compare to hiring a social media manager?</summary><p>A social media manager costs $300–500/month minimum, requires onboarding, and can quit on you. Glow Social costs {pricing.startingAtFull}, never has an off day, never needs managing, and keeps delivering without you having to think about it.</p></details>
          </div>
        </div>
      </section>

      {/* ============ BACKED BY ============ */}
      <div className="backed-by">
        <a href="https://elevenlabs.io/startup-grants" target="_blank" rel="noopener noreferrer">
          <img
            src="https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp"
            alt="ElevenLabs Startup Grant Recipient"
            width={250}
            height={50}
            style={{ display: 'block' }}
          />
        </a>
      </div>

      {/* STICKY MOBILE CTA */}
      <div className="sticky-mobile-cta" id="stickyCta">
        <a href="https://app.glowsocial.com/">See My Posts Free</a>
      </div>
    </>
  );
}
