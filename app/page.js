"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import HomeJsonLd from "./components/HomeJsonLd";
import "./home.css";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("connect");
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeStat, setActiveStat] = useState(0);

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
    { number: "13", label: "platforms per account", prefix: "" },
    { number: "4.7", label: "minutes average setup time", prefix: "" },
  ];

  return (
    <>
      <HomeJsonLd />

      {/* ============ HERO — Emotional trigger first ============ */}
      <section className="hero">
        <div className="container hero-centered">
          <span className="hero-badge">
            <span className="badge-dot"></span>
            The $49/mo Marketing Agency
          </span>
          <h1>
            Stop posting into the void.
            <br />
            <span className="accent">Start getting noticed.</span>
          </h1>
          <p className="hero-sub">
            Your customers check your social media before they call.
            <br />
            If your last post was 3 months ago, they call someone else.
          </p>
          <p className="hero-desc">
            Glow Social creates <strong>12+ professional posts</strong> every month,
            publishes them across <strong>13 platforms</strong> including Google Business Profile,
            and monitors your reviews — all for <strong>$49/month</strong>.
          </p>
          <div className="hero-ctas-centered">
            <a
              href="https://app.glowsocial.com/"
              className="btn btn--primary btn--lg btn--glow"
              id="hero-cta-primary"
            >
              Get Started — $49/mo
            </a>
            <a
              href="https://app.glowsocial.com/examples"
              className="btn btn--outline"
              id="hero-cta-secondary"
            >
              Preview Your Posts Free
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
            <div><strong>13 platforms</strong> supported</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <div><strong>Google Reviews</strong> included</div>
          </div>
        </div>
      </section>

      {/* ============ THE BRAIN PROBLEM — Emotional first ============ */}
      <section className="brain-problem" id="brain-problem" data-animate>
        <div className={`container ${visibleSections.has("brain-problem") ? "fade-in" : "fade-hidden"}`}>
          <h2>Your Website Is Losing Customers<br />Before They Even Call</h2>
          <p className="section-sub">
            It&apos;s not your service. It&apos;s not your pricing. It&apos;s what happens
            when someone checks your social media and sees silence.
          </p>
          <div className="brain-grid">
            <div className="brain-card">
              <div className="brain-card-icon brain-card-icon--red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <h3>What they see now</h3>
              <p>Your last post was 3 months ago. No reviews responded to. The chain down the street posts every day with professional graphics.</p>
              <div className="brain-card-verdict">Their brain says: <strong>&ldquo;Are they still open?&rdquo;</strong></div>
            </div>
            <div className="brain-card brain-card--after">
              <div className="brain-card-icon brain-card-icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>What they see with Glow</h3>
              <p>Fresh posts every day. Professional graphics. Review responses within hours. A business that looks alive and thriving.</p>
              <div className="brain-card-verdict brain-card-verdict--good">Their brain says: <strong>&ldquo;These people are the real deal.&rdquo;</strong></div>
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
          <h2>Here&apos;s How Your $49/Month Agency Works</h2>
          <p className="section-sub">We read 11 pages of your website before writing a single word. Then you pick your favorites and tap publish.</p>

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
                    <p>Your dashboard shows everything at a glance — connected platforms, posting schedule, and content pipeline. Setup takes about 5 minutes.</p>
                  </div>
                  <div className="how-panel-img">
                    <img src="/images/app-dashboard.png" alt="Glow Social dashboard showing 6 connected platforms, posting schedule, and 133 content ideas" />
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
                    <h3>Review, tap, done. We handle the rest.</h3>
                    <p>Each post comes with a professional image, caption, and platform selection. Review it, make edits if you want, then tap Post Now or save it for later.</p>
                    <p>We publish to Facebook, Instagram, Threads, LinkedIn, Google Business Profile, and more — all from one screen. No separate logins. No copy-pasting.</p>
                  </div>
                  <div className="how-panel-img">
                    <img src="/images/app-post.png" alt="Glow Social post review with professional image, caption, platform badges, and one-tap publishing" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <a href="https://app.glowsocial.com/" className="btn btn--primary" id="how-cta">Get Started</a>
          </div>
        </div>
      </section>

      {/* ============ PSYCHOLOGY PROOF STRIP ============ */}
      <section className="psych-proof" id="psych-proof" data-animate>
        <div className={`container ${visibleSections.has("psych-proof") ? "fade-in" : "fade-hidden"}`}>
          <h2>The Science Behind Why This Works</h2>
          <p className="section-sub">
            Behavioral psychology research shows: people make decisions with their emotions first, then justify with logic.
            Your social media is the first emotional impression.
          </p>
          <div className="psych-grid">
            <div className="psych-card">
              <div className="psych-number">01</div>
              <h3>Specificity Builds Trust</h3>
              <p>&ldquo;127 customers&rdquo; converts <strong>3x better</strong> than &ldquo;100+ customers.&rdquo; Round numbers trigger suspicion. Specific numbers signal honesty.</p>
              <div className="psych-example">
                <div className="psych-bad">❌ &ldquo;100+ posts published&rdquo;</div>
                <div className="psych-good">✓ &ldquo;2,847 posts published this month&rdquo;</div>
              </div>
            </div>
            <div className="psych-card">
              <div className="psych-number">02</div>
              <h3>Emotion Before Logic</h3>
              <p>People decide emotionally, then justify logically. Your features don&apos;t matter until they <strong>feel</strong> like they can trust you.</p>
              <div className="psych-example">
                <div className="psych-bad">❌ &ldquo;13 platform integrations&rdquo;</div>
                <div className="psych-good">✓ &ldquo;Show up everywhere your customers look&rdquo;</div>
              </div>
            </div>
            <div className="psych-card">
              <div className="psych-number">03</div>
              <h3>Social Proof Closes Deals</h3>
              <p>An active social presence is the #1 trust signal for local businesses. Fresh posts say &ldquo;thriving.&rdquo; Silence says &ldquo;are they still open?&rdquo;</p>
              <div className="psych-example">
                <div className="psych-bad">❌ Last post: 3 months ago</div>
                <div className="psych-good">✓ Fresh content posted today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT THIS DOES FOR YOUR BUSINESS ============ */}
      <section className="features" id="features" data-animate>
        <div className={`container ${visibleSections.has("features") ? "fade-in" : "fade-hidden"}`}>
          <h2>What This Does for Your Business</h2>
          <p className="section-sub">It&apos;s not about the posts. It&apos;s about what the posts do for you.</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
              <div><h3>Build Your Personal Brand</h3><p>People recognize you before they walk through the door. You&apos;re not just listed — you&apos;re known.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></div>
              <div><h3>Get Found by More Prospects</h3><p>Show up in every feed, on every platform, every day. When someone needs what you do, they see you first.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></div>
              <div><h3>Look as Polished as the Big Brands</h3><p>Professional graphics, consistent voice, daily presence. Your social pages look like you have a marketing team — because you do.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
              <div><h3>Look Open, Active, and Thriving</h3><p>An abandoned social page says &ldquo;are they still in business?&rdquo; A daily one says &ldquo;these people are the real deal.&rdquo;</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
              <div><h3>Become the Go-To in Your Area</h3><p>When someone asks &ldquo;who should I call for [what you do]?&rdquo; — your name comes up because they see you everywhere.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div>
              <div><h3>Get 10+ Hours Back Every Week</h3><p>Stop agonizing over what to post. Stop opening Canva. Stop feeling guilty about your quiet pages. That time is yours again.</p></div>
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
          <h2>Other Tools Weren&apos;t Built for Local</h2>
          <p className="section-sub">Most social media tools are made for marketing teams. Here&apos;s what you&apos;d be missing.</p>
          <div className="competitor-grid">
            <div className="competitor-card"><h3>Buffer</h3><div className="verdict">No Google Business Profile</div><div className="detail">No GBP posting. No review management. Not built for local.</div></div>
            <div className="competitor-card"><h3>Later</h3><div className="verdict">No Google Business Profile</div><div className="detail">Instagram-focused. No GBP support at all. No reviews.</div></div>
            <div className="competitor-card"><h3>Sprout Social</h3><div className="verdict">$399+/mo for Reviews</div><div className="detail">Review management locked behind their most expensive plan.</div></div>
            <div className="competitor-card competitor-card--glow"><h3>Glow Social</h3><div className="verdict">GBP + Reviews Included</div><div className="detail">Posting, GBP, and review monitoring — all starting at $49/mo.</div></div>
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
                <tr><td>Monthly cost</td><td className="highlight-col"><strong>$49</strong></td><td>$300–$750</td><td>$2,000+</td><td>Free*</td></tr>
                <tr><td>Posts per month</td><td className="highlight-col"><strong>12+</strong></td><td>8–12</td><td>12–20</td><td>2–4</td></tr>
                <tr><td>GBP posting</td><td className="highlight-col"><strong>Included</strong></td><td>Sometimes</td><td>Extra cost</td><td>Manual</td></tr>
                <tr><td>Review monitoring</td><td className="highlight-col"><strong>Included</strong></td><td>No</td><td>Extra cost</td><td>Manual</td></tr>
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
              <div className="price"><span className="price-amount">$49</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>12 posts</strong> per month</li>
                <li><strong>13 platforms</strong> including GBP</li>
                <li><strong>Google Review</strong> monitoring</li>
                <li>Generated from your <strong>website data</strong></li>
                <li><strong>Automated</strong> scheduling</li>
                <li><strong>3-tap</strong> approval process</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=core" className="btn btn--outline" id="pricing-core-cta">Get Started</a>
            </div>
            <div className="price-card price-card--featured">
              <span className="popular-badge">Most Popular</span>
              <h3>Glo Pro</h3>
              <div className="price"><span className="price-amount">$99</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li><strong>20+ posts</strong> per month</li>
                <li><strong>4 carousel</strong> posts included</li>
                <li><strong>4 video</strong> posts included</li>
                <li><strong>8 custom</strong> posts per month</li>
                <li><strong>Performance analytics</strong></li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=pro" className="btn btn--primary" id="pricing-pro-cta">Get Started</a>
            </div>
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <div className="price"><span className="price-amount">$199</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>Unlimited</strong> static posts</li>
                <li><strong>Unlimited</strong> video posts</li>
                <li><strong>Unlimited</strong> carousel posts</li>
                <li><strong>Unlimited</strong> custom posts</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=unlimited" className="btn btn--outline" id="pricing-unlimited-cta">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA — Emotional close ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>Your Competitors Post Every Day.<br />Now You Will Too.</h2>
          <p>5-minute setup. Professional posts, Google Business Profile, and reviews — all handled.<br />Your $49/month agency starts today.</p>
          <a href="https://app.glowsocial.com/" className="btn btn--primary btn--lg btn--glow" id="final-cta">Get Started — $49/mo</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <details className="faq-item"><summary>Will this get me more customers?</summary><p>Social media isn&apos;t an ad — nobody clicks links in captions. What it does is more powerful. When someone hears about you through word of mouth, Google, or a referral, the first thing they do is check your social media. If your last post was six months ago, they move on. If they see fresh, professional content, they trust you enough to take the next step. Glow Social keeps you looking active and credible so every other way people find you actually converts.</p></details>
            <details className="faq-item"><summary>How much does Glow Social cost?</summary><p>Glow Social Core costs $49 per month with no contracts or commitments. Compare that to $3,000+/month for a marketing agency or $300+/month for an overseas contractor. You can cancel anytime and keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary>Can I cancel anytime?</summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary>What if I don&apos;t like the content?</summary><p>You have full editorial control. Edit any post before it goes live, regenerate content with different parameters, or write your own. Every piece of content is customized to your brand voice and can be adjusted to your preferences.</p></details>
            <details className="faq-item"><summary>How long does setup take?</summary><p>About 5 minutes. Answer a few questions about your business, connect your social media accounts, and you&apos;re done. No job posting, no interviews, no training required.</p></details>
            <details className="faq-item"><summary>How is Glow Social different from other social media tools?</summary><p>You&apos;re not buying a tool — you&apos;re hiring a marketing department. Unlike Buffer, Hootsuite, or other tools that require you to write and create content yourself, Glow Social creates the posts, designs the graphics, publishes to 13 platforms including Google Business Profile, and monitors your Google reviews — so you can focus on running your business.</p></details>
            <details className="faq-item"><summary>Does Glow Social post to Google Business Profile?</summary><p>Yes — and this is one of the biggest things that sets us apart. Most social media tools skip GBP entirely (Buffer and Later don&apos;t support it at all). We publish directly to your Google Business Profile alongside your other platforms.</p></details>
            <details className="faq-item"><summary>How does the Google Review integration work?</summary><p>Once you connect your Google Business Profile, Glow Social monitors your reviews automatically. You&apos;ll see new reviews as they come in and can respond right from your dashboard — no need to log into Google separately. It&apos;s all part of your plan, no extra charge.</p></details>
            <details className="faq-item"><summary>Which platforms does Glow Social support?</summary><p>Facebook, Instagram, LinkedIn, Twitter, Threads, YouTube, Reddit, Bluesky, Mastodon, Google Business Profile, Pinterest, Discord, Slack, and TikTok.</p></details>
            <details className="faq-item"><summary>Who is Glow Social best for?</summary><p>Solopreneurs, service-based businesses, and local businesses who need a professional social media presence but don&apos;t have time to create content. Our typical customers include roofers, dentists, coaches, photographers, wedding vendors, and local service providers.</p></details>
            <details className="faq-item"><summary>What is Glow Social?</summary><p>Glow Social is a done-for-you social media service for small businesses. For $49/month, you get 12+ professionally written and designed posts delivered monthly across all major platforms — without hiring an agency or spending hours creating content yourself.</p></details>
            <details className="faq-item"><summary>How does Glow Social compare to hiring a social media manager?</summary><p>A social media manager costs $300–500/month minimum, requires training, and can quit unexpectedly. Glow Social costs $49/month, never calls in sick, never quits, and delivers consistent content 24/7.</p></details>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="sticky-mobile-cta" id="stickyCta">
        <a href="https://app.glowsocial.com/">Get Started — $49/mo</a>
      </div>
    </>
  );
}
