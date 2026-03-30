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
            What if social media
            <br />
            <span className="accent">just wasn&apos;t your problem anymore?</span>
          </h1>
          <p className="hero-sub">
            The guilt. The dread. The &ldquo;I really should post something&rdquo; loop.
            <br />
            Gone. Your business stays active and professional. You didn&apos;t do a thing.
          </p>
          <p className="hero-desc">
            Glow Social creates <strong>professional posts every month</strong>,
            publishes them across <strong>13 platforms</strong> including Google Business Profile,
            and handles your reviews — all for <strong>$49/month</strong>.
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
            <div><strong>Google Reviews</strong> on Pro+</div>
          </div>
        </div>
      </section>

      {/* ============ THE PAIN — Emotional first ============ */}
      <section className="brain-problem" id="brain-problem" data-animate>
        <div className={`container ${visibleSections.has("brain-problem") ? "fade-in" : "fade-hidden"}`}>
          <h2>You Know You Should Be Posting.<br />That&apos;s the Problem.</h2>
          <p className="section-sub">
            Every Monday you think &ldquo;this is the week I get consistent.&rdquo; Every time you see a competitor&apos;s feed, there&apos;s a pang.
            Every networking event ends with &ldquo;I know, I need to be better about social media.&rdquo;
            That debt never gets paid. It just grows.
          </p>
          <div className="brain-grid">
            <div className="brain-card">
              <div className="brain-card-icon brain-card-icon--red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <h3>Before Glow Social</h3>
              <p>Social media is a weight you carry everywhere. You avoid opening Instagram because it reminds you of falling behind. You&apos;re great at your job. You feel like a fraud about marketing.</p>
              <div className="brain-card-verdict">You think: <strong>&ldquo;I should really post something this week.&rdquo;</strong></div>
            </div>
            <div className="brain-card brain-card--after">
              <div className="brain-card-icon brain-card-icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>After Glow Social</h3>
              <p>The voice goes quiet. Fresh, professional posts are live. Your business looks active even on your worst week. You can look someone up and not feel like a fraud — because your presence is handled.</p>
              <div className="brain-card-verdict brain-card-verdict--good">You think: <strong>&ldquo;Oh right. That&apos;s just... taken care of.&rdquo;</strong></div>
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
          <h2>From &ldquo;I Need to Get Around to That&rdquo;<br />to &ldquo;It&apos;s Already Done&rdquo;</h2>
          <p className="section-sub">Three steps. Five minutes. Then you never have to think about social media again.</p>

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

      {/* ============ TENSION STRIP — The real cost of avoidance ============ */}
      <section className="psych-proof" id="psych-proof" data-animate>
        <div className={`container ${visibleSections.has("psych-proof") ? "fade-in" : "fade-hidden"}`}>
          <h2>The Real Cost of &ldquo;I&apos;ll Get to It Eventually&rdquo;</h2>
          <p className="section-sub">
            Not posting isn&apos;t neutral. Every week of silence is a signal your customers are reading.
          </p>
          <div className="psych-grid">
            <div className="psych-card">
              <div className="psych-number">01</div>
              <h3>Silence Reads as Uncertainty</h3>
              <p>When someone finds you through a referral or Google, the first thing they do is check your social media. A quiet feed whispers: <strong>&ldquo;Are they still around?&rdquo;</strong></p>
              <div className="psych-example">
                <div className="psych-bad">❌ Last post: 4 months ago</div>
                <div className="psych-good">✓ Active presence across 13 platforms</div>
              </div>
            </div>
            <div className="psych-card">
              <div className="psych-number">02</div>
              <h3>Your Competitor Is Showing Up</h3>
              <p>You don&apos;t have to love social media. But someone in your market does — and they&apos;re posting every day. Consistency beats talent every time.</p>
              <div className="psych-example">
                <div className="psych-bad">❌ You: still meaning to post</div>
                <div className="psych-good">✓ Glow: already posted for you</div>
              </div>
            </div>
            <div className="psych-card">
              <div className="psych-number">03</div>
              <h3>The Guilt Has a Price</h3>
              <p>The mental load of &ldquo;I should be doing this&rdquo; is real. It takes up space. It creates avoidance. Getting it off your plate isn&apos;t just about marketing — it&apos;s about <strong>mental bandwidth.</strong></p>
              <div className="psych-example">
                <div className="psych-bad">❌ Every Monday: fresh guilt</div>
                <div className="psych-good">✓ Every Monday: already handled</div>
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
              <div><h3>The Guilt Loop Stops</h3><p>You don&apos;t start every Monday with &ldquo;I really need to post something this week.&rdquo; It&apos;s already there. Already live. Already done.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></div>
              <div><h3>You Look Like You Have a Team</h3><p>Professional graphics, consistent voice, fresh posts — every platform, every week. You look established even on your worst, busiest week.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></div>
              <div><h3>Referrals Actually Convert</h3><p>Someone recommends you. They look you up. Instead of a dead feed, they see an active, professional business. That&apos;s what turns a mention into a call.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
              <div><h3>You Stop Avoiding Your Own Pages</h3><p>You used to avoid Instagram because opening it felt like a reminder of failing. Now it just looks good. You can send people there with confidence.</p></div>
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
          <h2>Other Tools Weren&apos;t Built for Local</h2>
          <p className="section-sub">Most social media tools are made for marketing teams. Here&apos;s what you&apos;d be missing.</p>
          <div className="competitor-grid">
            <div className="competitor-card"><h3>Buffer</h3><div className="verdict">No Google Business Profile</div><div className="detail">No GBP posting. No review management. Not built for local.</div></div>
            <div className="competitor-card"><h3>Later</h3><div className="verdict">No Google Business Profile</div><div className="detail">Instagram-focused. No GBP support at all. No reviews.</div></div>
            <div className="competitor-card"><h3>Sprout Social</h3><div className="verdict">$399+/mo for Reviews</div><div className="detail">Review management locked behind their most expensive plan.</div></div>
            <div className="competitor-card competitor-card--glow"><h3>Glow Social</h3><div className="verdict">GBP + Reviews Included</div><div className="detail">Posting, GBP, and review monitoring — all starting at $98/mo.</div></div>
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
              <div className="price"><span className="price-amount">$49</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>12 posts</strong> per month</li>
                <li><strong>13 platforms</strong> including GBP</li>
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
                <li><strong>Google Review</strong> monitoring</li>
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
          <h2>Stop Carrying It.<br />Let Us Handle It.</h2>
          <p>5-minute setup. Professional posts, Google Business Profile, and reviews — all done for you.<br />The guilt goes away. The posts show up. Your $49/month starts today.</p>
          <a href="https://app.glowsocial.com/" className="btn btn--primary btn--lg btn--glow" id="final-cta">Get Started — $49/mo</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Questions From People Who Really Don&apos;t Want to Think About Social Media</h2>
          <div className="faq-list">
            <details className="faq-item"><summary>Will this get me more customers?</summary><p>It won&apos;t replace advertising. What it does is more important: it converts the customers you&apos;re already almost getting. When someone hears about you through word of mouth, Google, or a referral, the first thing they do is check your social media. If your last post was six months ago, they second-guess themselves and move on. Fresh, professional content turns that curiosity into a call. Glow Social makes sure you never lose a warm lead because your presence looked abandoned.</p></details>
            <details className="faq-item"><summary>How much does Glow Social cost?</summary><p>Glow Social Core costs $49 per month with no contracts or commitments. Compare that to $3,000+/month for a marketing agency or $300+/month for an overseas contractor. You can cancel anytime and keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary>Can I cancel anytime?</summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary>What if I don&apos;t like the content?</summary><p>You have full editorial control. Edit any post before it goes live, regenerate content with different parameters, or write your own. Every piece of content is customized to your brand voice and can be adjusted to your preferences.</p></details>
            <details className="faq-item"><summary>How long does setup take?</summary><p>About 5 minutes. Answer a few questions about your business, connect your social media accounts, and you&apos;re done. No job posting, no interviews, no training required.</p></details>
            <details className="faq-item"><summary>I&apos;ve tried social media tools before. How is this different?</summary><p>Most tools give you a better way to do the work. Glow Social takes the work away entirely. You don&apos;t schedule, write, or design anything. We read your website, generate content tailored to your business, and publish it to 13 platforms including Google Business Profile. You just approve and move on — or let auto-scheduling handle even that.</p></details>
            <details className="faq-item"><summary>Does Glow Social post to Google Business Profile?</summary><p>Yes — and this is one of the biggest things that sets us apart. Most social media tools skip GBP entirely (Buffer and Later don&apos;t support it at all). We publish directly to your Google Business Profile alongside your other platforms.</p></details>
            <details className="faq-item"><summary>How does the Google Review integration work?</summary><p>Google Review monitoring is included in Glo Pro and Glo Unlimited plans. Once connected, Glow Social monitors your reviews automatically and you can respond right from your dashboard — no need to log into Google separately.</p></details>
            <details className="faq-item"><summary>Which platforms does Glow Social support?</summary><p>Facebook, Instagram, LinkedIn, Twitter, Threads, YouTube, Reddit, Bluesky, Mastodon, Google Business Profile, Pinterest, Discord, Slack, and TikTok.</p></details>
            <details className="faq-item"><summary>Who is Glow Social best for?</summary><p>Business owners who are great at what they do and hate that social media is part of running a business. If you&apos;ve ever said &ldquo;I know I should be posting more&rdquo; at a networking event, you&apos;re exactly who this is for. Our customers include roofers, dentists, coaches, photographers, wedding vendors, and local service providers who want to look professional online without it consuming their time.</p></details>
            <details className="faq-item"><summary>What is Glow Social?</summary><p>Glow Social is a done-for-you social media service for small businesses. For $49/month, you get professionally written, designed, and published posts every month — across 13 platforms. You never have to think about what to post, when to post it, or how it looks. We handle all of it.</p></details>
            <details className="faq-item"><summary>How does Glow Social compare to hiring a social media manager?</summary><p>A social media manager costs $300–500/month minimum, requires onboarding, and can quit on you. Glow Social costs $49/month, never has an off day, never needs managing, and keeps delivering without you having to think about it.</p></details>
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
