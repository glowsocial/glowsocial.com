"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import HomeJsonLd from "./HomeJsonLd";
import { getPricing } from "../pricing-config";
import "../home.css";

function BrandName() {
  return <span className="brand-nowrap">Glow Social</span>;
}

export default function HomeClient() {
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

      {/* ============ HERO — Calm outcome first ============ */}
      <section className="hero">
        <div className="container hero-centered">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            Social media, handled
          </span>
          <h1>
            Your business is open.{" "}
            <span className="accent">Your online presence should make that obvious.</span>
          </h1>
          <p className="hero-sub">
            <BrandName /> keeps your profiles active with posts written in your voice, designed for your business, and published where customers check.
          </p>
          <p className="hero-desc">
            No planning sessions. No blank screen. No last-minute posting. <BrandName /> keeps the rhythm steady, and you can step in whenever you want.
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
                SEE WHAT WE&apos;D POST →
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
              <span>Custom posts included</span>
            </div>
            <div className="hero-proof-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Written in your voice</span>
            </div>
            <div className="hero-proof-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Published for you</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR — Specificity builds trust ============ */}
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <div><strong>Active</strong> every month</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            <div><strong>Your voice</strong> not templates</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
            <div><strong>Published</strong> where it matters</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <div><strong>{pricing.startingAtShort}</strong> no contracts</div>
          </div>
        </div>
      </section>


      {/* ============ THE PROBLEM ============ */}
      <section className="brain-problem" id="brain-problem" data-animate>
        <div className={`container ${visibleSections.has("brain-problem") ? "fade-in" : "fade-hidden"}`}>
          <h2>Your business is active.<br />The internet should show that.</h2>
          <p className="section-sub">
            Customers are not looking for a perfect content strategy. They are checking whether your business looks current, real, and worth contacting.
          </p>
          <div className="brain-grid">
            <div className="brain-card">
              <div className="brain-card-icon brain-card-icon--muted">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <h3>Without a system</h3>
              <p>The business is open, but quiet profiles can make it look like nothing is happening.</p>
              <div className="brain-card-verdict">They wonder: <strong>&ldquo;Are they still active?&rdquo;</strong></div>
            </div>
            <div className="brain-card brain-card--after">
              <div className="brain-card-icon brain-card-icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>With <BrandName /></h3>
              <p>Your profiles keep showing signs of life while you stay focused on the actual business.</p>
              <div className="brain-card-verdict brain-card-verdict--good">They see: <strong>&ldquo;This business is active and professional.&rdquo;</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTION — What Glow Social handles ============ */}
      <section className="features" id="features" data-animate>
        <div className={`container ${visibleSections.has("features") ? "fade-in" : "fade-hidden"}`}>
          <h2>What <BrandName /> gives you</h2>
          <p className="section-sub">A steady online presence that feels like your business, without adding social media to your week.</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
              <div><h3>A current presence</h3><p>Your pages keep showing signs of life, even during weeks when you are busy serving customers.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg></div>
              <div><h3>Your voice</h3><p><BrandName /> learns how your business sounds, so posts do not read like generic marketing filler.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></div>
              <div><h3>Finished posts</h3><p>Captions and graphics are prepared together, so you are not starting from a blank screen.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></div>
              <div><h3>Published for you</h3><p><BrandName /> sets the rhythm and publishes to the places customers check, including Google Business Profile.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS — Tabbed ============ */}
      <section className="how" id="how" data-animate>
        <div className={`container ${visibleSections.has("how") ? "fade-in" : "fade-hidden"}`}>
          <h2>A few details once.<br /><BrandName /> keeps showing up for you.</h2>
          <p className="section-sub">Setup is short. After that, <BrandName /> turns your business details into a steady, handled online presence.</p>

          <div className="how-tabs">
            <div className="how-tab-buttons">
              <button
                className={`how-tab-btn ${activeTab === "connect" ? "active" : ""}`}
                onClick={() => setActiveTab("connect")}
                id="tab-connect"
              >
                <span className="step-num">1</span>
                <span>SETUP</span>
              </button>
              <button
                className={`how-tab-btn ${activeTab === "pick" ? "active" : ""}`}
                onClick={() => setActiveTab("pick")}
                id="tab-pick"
              >
                <span className="step-num">2</span>
                <span>READY</span>
              </button>
              <button
                className={`how-tab-btn ${activeTab === "post" ? "active" : ""}`}
                onClick={() => setActiveTab("post")}
                id="tab-post"
              >
                <span className="step-num">3</span>
                <span>LIVE</span>
              </button>
            </div>

            <div className="how-tab-panels">
              <div className={`how-tab-panel ${activeTab === "connect" ? "active" : ""}`} data-panel="connect">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3><BrandName /> learns your business.</h3>
                    <p>Start with your website. <BrandName /> pulls in your services, local details, offers, and voice.</p>
                    <p>Connect the accounts you want kept active and choose the posting rhythm that fits your business.</p>
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
                          <span>Your social presence is ready to run</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`how-tab-panel ${activeTab === "pick" ? "active" : ""}`} data-panel="pick">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3>Posts are prepared for you.</h3>
                    <p>Captions and graphics are ready before anything goes live.</p>
                    <p>You can take a quick look when you want, but you are never starting from a blank page.</p>
                  </div>
                  <div className="how-panel-img">
                    <img src="/images/app-sparks.png" alt="Glow Social sparks picker — swipe through content ideas and choose the ones you love" />
                  </div>
                </div>
              </div>

              <div className={`how-tab-panel ${activeTab === "post" ? "active" : ""}`} data-panel="post">
                <div className="how-panel-content">
                  <div className="how-panel-text">
                    <h3>Your pages stay current.</h3>
                    <p><BrandName /> formats, schedules, and publishes to the accounts you connected.</p>
                    <p>Your business keeps showing up while you run it.</p>
                  </div>
                  <div className="how-panel-img">
                    <div className="mobile-approval-preview" aria-label="Mobile posting preview">
                      <div className="approval-phone">
                        <div className="approval-notch"></div>
                        <div className="approval-screen">
                          <div className="approval-notification"><BrandName />: Ready to publish</div>
                          <div className="approval-post-card">
                            <span className="approval-platform">Google Business</span>
                            <h4>Spring tune-up slots are open</h4>
                            <p>Quick reminder for neighbors: preventative care now saves emergency calls later.</p>
                          </div>
                          <div className="approval-actions">
                            <span>Hold</span>
                            <span>Looks good</span>
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
          <h2>Where local trust gets checked</h2>
          <p className="section-sub"><BrandName /> keeps the places customers already look from going quiet.</p>
          <div className="gbp-grid">
            <div className="gbp-pillar">
              <div className="gbp-pillar-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 11 12 14 22 4"/></svg>
                <h3>Google Business Profile posts</h3>
              </div>
              <p className="gbp-pillar-desc"><BrandName /> publishes directly to Google Business Profile, so your listing shows fresh activity where local customers search.</p>
              <ul className="gbp-pillar-list">
                <li>Posts created for your business</li>
                <li>Matches your brand voice and services</li>
                <li>Published alongside your regular social content</li>
              </ul>
            </div>
            <div className="gbp-pillar">
              <div className="gbp-pillar-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <h3>Google review monitoring</h3>
              </div>
              <p className="gbp-pillar-desc">When monitoring is connected, new reviews show up in your <BrandName /> dashboard so reputation does not become another blind spot.</p>
              <ul className="gbp-pillar-list">
                <li>Instant alerts when new reviews arrive</li>
                <li>Respond without hunting through accounts</li>
                <li>Included with Pro and Unlimited</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="pricing" id="pricing" data-animate>
        <div className={`container ${visibleSections.has("pricing") ? "fade-in" : "fade-hidden"}`}>
          <h2>Choose how handled you want it.</h2>
          <p className="section-sub">Start with the level of presence you want. Add review monitoring and more formats only when they are useful. {pricing.billingPolicy}</p>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Glo Core</h3>
              <div className="price"><span className="price-amount">{pricing.core.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>Steady posting</strong> for your core presence</li>
                <li><strong>Brand-matched voice</strong> from your website</li>
                <li><strong>Google Business</strong> visibility included</li>
                <li><strong>Simple control</strong> before posts go live</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=core" className="btn btn--outline" id="pricing-core-cta">START WITH CORE</a>
            </div>
            <div className="price-card price-card--featured">
              <span className="popular-badge">Most popular</span>
              <h3>Glo Pro</h3>
              <div className="price"><span className="price-amount">{pricing.pro.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li><strong>More posting coverage</strong> for stronger momentum</li>
                <li><strong>Carousel and video formats</strong></li>
                <li><strong>Campaign support</strong> for promos and events</li>
                <li><strong>Google review monitoring</strong></li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=pro" className="btn btn--primary" id="pricing-pro-cta">START WITH PRO</a>
            </div>
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <div className="price"><span className="price-amount">{pricing.unlimited.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>Always-on coverage</strong> for bigger seasons</li>
                <li><strong>No content ceiling</strong> when you have more to share</li>
                <li><strong>Full brand coverage</strong> across campaigns</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=unlimited" className="btn btn--outline" id="pricing-unlimited-cta">START WITH UNLIMITED</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA — Emotional close ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>Stay active online<br />without adding social media to your week.</h2>
          <p><BrandName /> keeps your business visible, current, and easy to trust where customers already check.<br />{pricing.summaryFull} {pricing.billingPolicy}</p>
          <a href="https://app.glowsocial.com/" className="btn btn--primary btn--lg btn--glow" id="final-cta">GET MY SOCIAL MEDIA HANDLED</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Questions from business owners who hate social media</h2>
          <div className="faq-list">
            <details className="faq-item"><summary><span className="faq-question">Will this get me more customers?</span></summary><p><BrandName /> is not a replacement for advertising. It helps your business look current when people already considering you check your profiles before they call, book, visit, or refer.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much does <BrandName /> cost?</span></summary><p>{pricing.summaryFull} {pricing.billingPolicy} You keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Can I cancel anytime?</span></summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much do I have to do?</span></summary><p>Setup takes a few minutes. After that, <BrandName /> prepares and publishes the posts. You can check in before things go live, but you are not keeping a posting system alive or starting from scratch.</p></details>
            <details className="faq-item"><summary><span className="faq-question">What if something does not sound right?</span></summary><p>You stay in control. Flag it, skip it, or adjust direction before posts go live. <BrandName /> learns from your website and business details, but you always have the final say.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Does <BrandName /> post to Google Business Profile?</span></summary><p>Yes. <BrandName /> publishes to Google Business Profile alongside your regular social content, so the place local customers search does not go quiet.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Who is <BrandName /> best for?</span></summary><p><BrandName /> is for business owners who know their online presence matters but do not want to become content creators, hire an agency, or keep remembering to post.</p></details>
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
        <a href="https://app.glowsocial.com/">SEE WHAT WE&apos;D POST</a>
      </div>
    </>
  );
}
