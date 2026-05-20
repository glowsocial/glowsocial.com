"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import HomeJsonLd from "./HomeJsonLd";
import LatestInsights from "./LatestInsights";
import { getPricing, isPriceIncreaseActive } from "../pricing-config";
import "../home.css";

export default function HomeClient({ posts }) {
  const [activeTab, setActiveTab] = useState("connect");
  const [visibleSections, setVisibleSections] = useState(new Set());
  const pricing = useMemo(() => getPricing(), []);

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
            Built for owners who hate posting
          </span>
          <h1>
            Social media for business owners{" "}
            <span className="accent">who hate social media.</span>
          </h1>
          <p className="hero-sub">
            You know customers check it. You know an inactive page can make your business look abandoned.
          </p>
          <p className="hero-desc">
            Glow Social gives you 12 custom posts a month, written in your voice and scheduled for you, so your business looks active without turning you into a content creator.
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
                SEE MY POSTS FREE →
              </button>
            </div>
          </form>
          <p className="hero-url-hint">
            Start with your website. We&apos;ll ask for your email before showing the preview. No payment required.
          </p>
          <div className="hero-ctas-centered" style={{ marginTop: 16 }}>
            <a
              href="https://app.glowsocial.com/"
              className="btn btn--outline"
              id="hero-cta-secondary"
              style={{ fontSize: '0.85rem', padding: '10px 24px' }}
            >
              GET IT HANDLED - {pricing.startingAtShort}
            </a>
          </div>
          <div className="hero-proof">
            <div className="hero-proof-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>12 custom posts/month</span>
            </div>
            <div className="hero-proof-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Written in your voice</span>
            </div>
            <div className="hero-proof-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Scheduled for you</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR — Specificity builds trust ============ */}
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <div><strong>12 posts</strong> every month</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            <div><strong>Your voice</strong> not templates</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
            <div><strong>Scheduled</strong> across platforms</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <div><strong>{pricing.startingAtShort}</strong> no contracts</div>
          </div>
        </div>
      </section>


      {/* ============ THE PAIN — Emotional first ============ */}
      <section className="brain-problem" id="brain-problem" data-animate>
        <div className={`container ${visibleSections.has("brain-problem") ? "fade-in" : "fade-hidden"}`}>
          <h2>Your business is active.<br />Your social media should look like it.</h2>
          <p className="section-sub">
            You are not lazy. You are not bad at marketing. You are busy running the actual business. But customers only see the page they check before they decide.
          </p>
          <div className="brain-grid">
            <div className="brain-card">
              <div className="brain-card-icon brain-card-icon--red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <h3>Before Glow Social</h3>
              <p>The business is open. Customers are happy. Work is happening. But a quiet feed hides that from the person deciding whether to call, book, visit, or refer you.</p>
              <div className="brain-card-verdict">They wonder: <strong>&ldquo;Are they still active?&rdquo;</strong></div>
            </div>
            <div className="brain-card brain-card--after">
              <div className="brain-card-icon brain-card-icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>After Glow Social</h3>
              <p>Twelve fresh posts go out every month. Your business looks current even when you are buried in the work that actually keeps the doors open.</p>
              <div className="brain-card-verdict brain-card-verdict--good">They see: <strong>&ldquo;This business is active and professional.&rdquo;</strong></div>
            </div>
          </div>
          <div className="brain-bridge">
            <div className="brain-bridge-stat">
              <span className="big-stat">1 question</span>
              <span className="stat-label">customers are trying to answer<br />when they check your page</span>
            </div>
            <div className="brain-bridge-arrow">→</div>
            <div className="brain-bridge-stat">
              <span className="big-stat">12 posts</span>
              <span className="stat-label">written, designed, and scheduled<br />so the answer is obvious</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AGITATION — The unpaid second job ============ */}
      <section className="psych-proof" id="psych-proof" data-animate>
        <div className={`container ${visibleSections.has("psych-proof") ? "fade-in" : "fade-hidden"}`}>
          <h2>Social media became a second job.</h2>
          <p className="section-sub">
            You are already running payroll, serving customers, managing staff, answering emails, fixing problems, and keeping the business moving. Then social media asks you to become a strategist, writer, designer, scheduler, and content creator.
          </p>
          <div className="psych-grid">
            <div className="psych-card">
              <div className="psych-number">01</div>
              <h3>The blank screen is not the work</h3>
              <p>You did not start your business to spend Sunday night trying to think of captions. Glow Social removes the blank-screen part entirely.</p>
              <div className="psych-example">
                <div className="psych-bad">What should I post?</div>
                <div className="psych-good">12 posts ready to review</div>
              </div>
            </div>
            <div className="psych-card">
              <div className="psych-number">02</div>
              <h3>Consistency should not require guilt</h3>
              <p>Once you miss a week, the gap gets louder and the comeback post feels harder. We make consistency the default.</p>
              <div className="psych-example">
                <div className="psych-bad">I really need to post</div>
                <div className="psych-good">Already scheduled</div>
              </div>
            </div>
            <div className="psych-card">
              <div className="psych-number">03</div>
              <h3>You can hate this and still look professional</h3>
              <p>Glow Social is not for people trying to become influencers. It is for owners who need the business to look trustworthy when customers check.</p>
              <div className="psych-example">
                <div className="psych-bad">Become a content creator</div>
                <div className="psych-good">Look alive online</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTION — What Glow Social handles ============ */}
      <section className="features" id="features" data-animate>
        <div className={`container ${visibleSections.has("features") ? "fade-in" : "fade-hidden"}`}>
          <h2>Glow Social handles the part you hate.</h2>
          <p className="section-sub">Twelve custom posts a month, written in your voice, designed for your business, reviewed by you, and scheduled for the places customers check.</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
              <div><h3>12 custom posts a month</h3><p>A steady rhythm of useful, professional content so your business looks alive when customers check.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg></div>
              <div><h3>Captions in your voice</h3><p>Glow Social learns how your business sounds before it writes, so the posts do not read like generic marketing filler.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></div>
              <div><h3>Graphics designed for you</h3><p>Posts are turned into polished visuals for your business without making you open Canva after hours.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></div>
              <div><h3>Scheduling across platforms</h3><p>Approved posts go where they need to go, including Google Business Profile, without copy-pasting or calendar babysitting.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
              <div><h3>Simple review</h3><p>You approve, skip, or edit before posts go live. Nothing publishes without your say-so.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
              <div><h3>Consistency without the mental load</h3><p>No more explaining the silence or feeling behind. Your page keeps showing signs of life while you run the business.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS — Tabbed ============ */}
      <section className="how" id="how" data-animate>
        <div className={`container ${visibleSections.has("how") ? "fade-in" : "fade-hidden"}`}>
          <h2>Tell us once.<br />Stay visible all month.</h2>
          <p className="section-sub">No content calendar to build. No blank screen. No Sunday-night caption panic.</p>

          <div className="how-tabs">
            <div className="how-tab-buttons">
              <button
                className={`how-tab-btn ${activeTab === "connect" ? "active" : ""}`}
                onClick={() => setActiveTab("connect")}
                id="tab-connect"
              >
                <span className="step-num">1</span>
                <span>TELL</span>
              </button>
              <button
                className={`how-tab-btn ${activeTab === "pick" ? "active" : ""}`}
                onClick={() => setActiveTab("pick")}
                id="tab-pick"
              >
                <span className="step-num">2</span>
                <span>REVIEW</span>
              </button>
              <button
                className={`how-tab-btn ${activeTab === "post" ? "active" : ""}`}
                onClick={() => setActiveTab("post")}
                id="tab-post"
              >
                <span className="step-num">3</span>
                <span>STAY ACTIVE</span>
              </button>
            </div>

            <div className="how-tab-panels">
              <div className={`how-tab-panel ${activeTab === "connect" ? "active" : ""}`} data-panel="connect">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3>Tell us about your business.</h3>
                    <p>Start with your website, then share what you do, who you serve, and how your business should sound online.</p>
                    <p><strong>Voice profile:</strong> Glow Social learns your tone before it drafts anything, so the posts sound like your business instead of a generic template.</p>
                    <p>Connect only the accounts you want active and choose the posting rhythm that makes sense for your business.</p>
                  </div>
                  <div className="how-panel-img how-panel-img--connect">
                    <div className="connect-flow-preview" aria-label="Glow Social setup preview">
                      <div className="connect-flow-header">
                        <span>Setup</span>
                        <strong>5 min</strong>
                      </div>
                      <div className="connect-flow-step">
                        <span className="connect-step-num">1</span>
                        <div>
                          <strong>Website scanned</strong>
                          <span>Services, voice, offers, and local details</span>
                        </div>
                      </div>
                      <div className="connect-flow-step">
                        <span className="connect-step-num">2</span>
                        <div>
                          <strong>Accounts connected</strong>
                          <span>Only the places customers check</span>
                        </div>
                      </div>
                      <div className="connect-flow-step">
                        <span className="connect-step-num">3</span>
                        <div>
                          <strong>Posting rhythm set</strong>
                          <span>Your monthly posts are ready to review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`how-tab-panel ${activeTab === "pick" ? "active" : ""}`} data-panel="pick">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3>Review posts instead of inventing them.</h3>
                    <p>Glow Social creates a balanced set of posts for your business, then you approve, skip, or edit what goes live.</p>
                    <p>No starting from scratch. No guessing what to say. You get useful, professional content without becoming the person who spends their week thinking about content.</p>
                  </div>
                  <div className="how-panel-img">
                    <img src="/images/app-sparks.png" alt="Glow Social sparks picker — swipe through content ideas and choose the ones you love" />
                  </div>
                </div>
              </div>

              <div className={`how-tab-panel ${activeTab === "post" ? "active" : ""}`} data-panel="post">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3>Your pages stay alive.</h3>
                    <p>Approved posts are formatted, scheduled, and published for the accounts you connected.</p>
                    <p>Your business keeps showing up even when you are busy doing the work that pays the bills.</p>
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
            <a href="https://app.glowsocial.com/" className="btn btn--primary" id="how-cta">GET MY SOCIAL MEDIA HANDLED</a>
          </div>
        </div>
      </section>

      {/* ============ FIRST WEEK TIMELINE ============ */}
      <section className="first-week" id="first-week" data-animate>
        <div className={`container ${visibleSections.has("first-week") ? "fade-in" : "fade-hidden"}`}>
          <h2>What getting it handled looks like</h2>
          <p className="section-sub">The monthly social media spiral turns into a short review. That is the whole point.</p>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-dot tl-dot--fast">1 min</div>
              <h3>Enter your website</h3>
              <p>Glow Social scans your pages to learn your services, local details, offers, and brand voice.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--fast">2 min</div>
              <h3>Your voice is identified</h3>
              <p>Professional, warm, direct, neighborly, polished, practical - we map how your business should sound before writing.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--fast">3 min</div>
              <h3>Your monthly posts appear</h3>
              <p>Captions and graphics are created for your business, not pulled from a generic industry template.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--fast">5 min</div>
              <h3>Connect what customers check</h3>
              <p>Link the social profiles that matter. Pick your posting days. The empty calendar is no longer yours to fill.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--day">Day 2</div>
              <h3>Your first posts go live</h3>
              <p>Content publishes where you connected it. No copy-pasting, no formatting, no remembering to post.</p>
            </div>
            <div className="tl-item">
              <div className="tl-dot tl-dot--day">Day 7</div>
              <h3>Your page looks alive again</h3>
              <p>Customers who check your page see a current, active, professional business.</p>
              <div className="tl-highlight">
                <p>You do not need to become a content creator. You need your business to look active when customers check.</p>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <a href="https://app.glowsocial.com/" className="btn btn--primary" id="first-week-cta">HAND OFF THE POSTING</a>
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

      {/* ============ GBP + REVIEWS ============ */}
      <section className="gbp-reviews" id="gbp" data-animate>
        <div className={`container ${visibleSections.has("gbp") ? "fade-in" : "fade-hidden"}`}>
          <h2>The trust signals customers check first</h2>
          <p className="section-sub">Customers are not grading your content strategy. They are checking whether your business looks active, legitimate, and worth trusting.</p>
          <div className="gbp-grid">
            <div className="gbp-pillar">
              <div className="gbp-pillar-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 11 12 14 22 4"/></svg>
                <h3>Google Business Profile posts</h3>
              </div>
              <p className="gbp-pillar-desc">Most social tools skip GBP entirely. Glow Social publishes directly to it, keeping your listing active where local customers search.</p>
              <ul className="gbp-pillar-list">
                <li>Posts created and published for you</li>
                <li>Matches your brand voice and services</li>
                <li>Managed alongside your regular posting</li>
              </ul>
            </div>
            <div className="gbp-pillar">
              <div className="gbp-pillar-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <h3>Google review monitoring</h3>
              </div>
              <p className="gbp-pillar-desc">See every new review the moment it comes in. Review and respond from your Glow Social dashboard when monitoring is connected.</p>
              <ul className="gbp-pillar-list">
                <li>Instant alerts when new reviews arrive</li>
                <li>Reply from your Glow Social dashboard</li>
                <li>Available on Pro+ — competitors charge $399+/mo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COMPETITOR STRIP ============ */}
      <section className="competitor-strip" id="competitors" data-animate>
        <div className={`container ${visibleSections.has("competitors") ? "fade-in" : "fade-hidden"}`}>
          <h2>Other tools hand you an empty calendar.</h2>
          <p className="section-sub">Most social media tools are made for people who want to manage social media. Glow Social is for business owners who want the posting handled.</p>
          <div className="competitor-grid">
            <div className="competitor-card"><h3>Buffer</h3><div className="verdict">No Google Business Profile</div><div className="detail">No GBP posting. No review management. Not built for local.</div></div>
            <div className="competitor-card"><h3>Later</h3><div className="verdict">No Google Business Profile</div><div className="detail">Instagram-focused. No GBP support at all. No reviews.</div></div>
            <div className="competitor-card"><h3>Sprout Social</h3><div className="verdict">$399+/mo for reviews</div><div className="detail">Review management locked behind their most expensive plan.</div></div>
            <div className="competitor-card competitor-card--glow"><h3>Glow Social</h3><div className="verdict">GBP + reviews included</div><div className="detail">Posting, GBP, and review monitoring — all starting at {pricing.startingAtShort}.</div></div>
          </div>
        </div>
      </section>

      {/* ============ COST COMPARISON ============ */}
      <section className="comparison" id="comparison" data-animate>
        <div className={`container ${visibleSections.has("comparison") ? "fade-in" : "fade-hidden"}`}>
          <h2>What the second job costs anywhere else</h2>
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
          <h2>A social media system for {pricing.startingAtFull}.</h2>
          <p className="section-sub">Consistent, professional content at a price built for small businesses. No contracts. Cancel anytime.</p>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Glo Core</h3>
              <div className="price"><span className="price-amount">{pricing.core.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>Core posting coverage</strong> for your social storefront</li>
                <li><strong>Steady posting rhythm</strong> without ongoing maintenance</li>
                <li><strong>Brand-matched voice</strong> from your website</li>
                <li><strong>Google Business</strong> visibility included</li>
                <li><strong>Weekly approvals</strong> before posts go live</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=core" className="btn btn--outline" id="pricing-core-cta">START WITH CORE</a>
            </div>
            <div className="price-card price-card--featured">
              <span className="popular-badge">Most popular</span>
              <h3>Glo Pro</h3>
              <div className="price"><span className="price-amount">{pricing.pro.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li><strong>Higher posting volume</strong> for more consistent momentum</li>
                <li><strong>Carousel and video formats</strong> for richer posts</li>
                <li><strong>On-demand campaigns</strong> for promos and events</li>
                <li><strong>Google review monitoring</strong> for reputation awareness</li>
                <li><strong>Performance reporting</strong> on what is working</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=pro" className="btn btn--primary" id="pricing-pro-cta">START WITH PRO</a>
            </div>
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <div className="price"><span className="price-amount">{pricing.unlimited.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>Always-on coverage</strong> for every content need</li>
                <li><strong>More formats</strong> across your calendar</li>
                <li><strong>No content ceiling</strong> when your calendar gets busy</li>
                <li><strong>Full brand coverage</strong> across every campaign</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=unlimited" className="btn btn--outline" id="pricing-unlimited-cta">START WITH UNLIMITED</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LATEST INSIGHTS (SEO link path discovery widget) ============ */}
      <LatestInsights posts={posts} />

      {/* ============ FINAL CTA — Emotional close ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>Hate social media?<br />Good. We built this for you.</h2>
          <p>You do not need to become a content creator. You need your business to look active, trustworthy, and open for business.<br />Plans start at {pricing.startingAtFull}.</p>
          <a href="https://app.glowsocial.com/" className="btn btn--primary btn--lg btn--glow" id="final-cta">GET MY SOCIAL MEDIA HANDLED</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Questions from business owners who hate social media</h2>
          <div className="faq-list">
            <details className="faq-item"><summary>Will this get me more customers?</summary><p>It will not replace advertising. What it does is help convert the customers you are already almost getting. When someone hears about you through word of mouth, Google, or a referral, they often check your social media before taking the next step. If your last post was six months ago, they may hesitate. Fresh, professional content helps your business look active when that trust check happens.</p></details>
            <details className="faq-item"><summary>How much does Glow Social cost?</summary><p>Glow Social Core costs {pricing.startingAtFull} with no contracts or commitments. Compare that to $3,000+/month for a marketing agency or $300+/month for an overseas contractor. You can cancel anytime and keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary>Can I cancel anytime?</summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary>What if I don&apos;t like the content?</summary><p>You have full editorial control. Edit any post before it goes live, regenerate content with different direction, or write your own. Every post is customized to your brand voice and can be adjusted before it publishes.</p></details>
            <details className="faq-item"><summary>How long does setup take?</summary><p>About 5 minutes. Answer a few questions about your business, connect your social media accounts, and you&apos;re done. No job posting, no interviews, no training required.</p></details>
            <details className="faq-item"><summary>I&apos;ve tried social media tools before. How is this different?</summary><p>Most tools give you a better way to do the work. Glow Social takes the repeatable work off your plate. You do not have to schedule, write, or design from scratch. We read your website, generate content tailored to your business, and publish it where customers check, including Google Business Profile. You approve and move on.</p></details>
            <details className="faq-item"><summary>Does Glow Social post to Google Business Profile?</summary><p>Yes — and this is one of the biggest things that sets us apart. Most social media tools skip GBP entirely (Buffer and Later don&apos;t support it at all). We publish directly to your Google Business Profile alongside your regular social posts.</p></details>
            <details className="faq-item"><summary>Does Glow Social post to Pinterest?</summary><p>Yes — and it&apos;s one of our best-performing platforms. Pinterest posts generated through Glow Social average a 7.7% engagement rate, higher than Facebook, Instagram, or LinkedIn. We create tall-format pins automatically optimized for Pinterest&apos;s feed, so your business shows up where people are actively searching for inspiration and services. Buffer and Later don&apos;t support Pinterest at all.</p></details>
            <details className="faq-item"><summary>How does the Google Review integration work?</summary><p>Google Review monitoring is included in Glo Pro and Glo Unlimited plans. Once connected, Glow Social monitors your reviews automatically and you can respond from your dashboard.</p></details>
            <details className="faq-item"><summary>Which platforms does Glow Social support?</summary><p>Glow Social supports the major platforms local businesses use, including Facebook, Instagram, LinkedIn, TikTok, Google Business Profile, Pinterest, and more. You only connect the platforms that matter for your business.</p></details>
            <details className="faq-item"><summary>Who is Glow Social best for?</summary><p>Business owners who know social media matters and hate having to personally manage it. If you have ever said &ldquo;I know I should be posting more&rdquo; while also having no desire to become a content creator, this is built for you.</p></details>
            <details className="faq-item"><summary>What is Glow Social?</summary><p>Glow Social is a done-for-you social media service for small businesses. For {pricing.startingAtFull}, you get 12 custom posts a month, written in your voice, designed for your business, and scheduled for you, with Google Business Profile visibility and approval controls before content goes live.</p></details>
            <details className="faq-item"><summary>How does Glow Social compare to hiring a social media manager?</summary><p>A social media manager can cost $300-$500/month or more, requires onboarding, and still needs management. Glow Social starts at {pricing.startingAtFull} and handles the repeatable production work: writing, design, scheduling, and publishing rhythm.</p></details>
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
        <a href="https://app.glowsocial.com/">SEE MY POSTS FREE</a>
      </div>
    </>
  );
}
