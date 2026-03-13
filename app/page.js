"use client";

import { useEffect } from "react";
import Link from "next/link";
import HomeJsonLd from "./components/HomeJsonLd";
import "./home.css";

export default function HomePage() {
  useEffect(() => {
    // Hero slideshow
    const slides = document.querySelectorAll(".hero-slide");
    let current = 0;
    if (slides.length > 1) {
      const interval = setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
      }, 3500);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    // Sticky mobile CTA
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
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="hero-badge">The App for Local Businesses</span>
            <h1>
              Glow Social reads 11 pages of your website{" "}
              <br />
              <span className="accent">before writing your first post.</span>
            </h1>
            <p className="hero-sub">
              So every caption sounds like you wrote it on your best day.
            </p>
            <p className="hero-desc">
              <strong>3 taps. 12 posts. 12 platforms.</strong> Every month, for
              $49.
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-slideshow" id="heroSlideshow">
              <img
                src="/images/sample-post-realtor.png"
                alt="Sample Glow Social post for a realtor"
                className="hero-slide active"
              />
              <img
                src="/images/sample-post-chiropractor.png"
                alt="Sample Glow Social post for a chiropractor"
                className="hero-slide"
                loading="lazy"
              />
              <img
                src="/images/sample-post-bakery.png"
                alt="Sample Glow Social post for a bakery"
                className="hero-slide"
                loading="lazy"
              />
              <img
                src="/images/sample-post-landscaper.png"
                alt="Sample Glow Social post for a landscaper"
                className="hero-slide"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="container hero-ctas">
          <a
            href="https://app.glowsocial.com/pricing/"
            className="btn btn--primary"
            id="hero-cta-primary"
          >
            Get Started
          </a>
          <a
            href="https://app.glowsocial.com/examples"
            className="btn btn--outline"
            id="hero-cta-secondary"
          >
            See What Yours Would Look Like
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <div><strong>Setup in 5 minutes</strong></div>
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

      {/* GBP + REVIEWS */}
      <section className="gbp-reviews">
        <div className="container">
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

      {/* PROBLEM AGITATION */}
      <section className="problem">
        <div className="container problem-inner">
          <h2>The Chain Restaurant Down the Street Posts Every Day</h2>
          <p>They show up in feeds constantly. Professional graphics, consistent schedule, always visible.</p>
          <p>You post when you can. <strong>Which is almost never.</strong></p>
          <p>Because you&apos;re busy actually running a business.</p>
          <div className="solution-bridge">
            <h3>Now you do too. Starting this week.</h3>
            <p>Customers find you. Prospects remember you. Your business looks open, active, and thriving — because it is.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="container">
          <h2>Built from your brand intelligence</h2>
          <span className="section-badge">Connect. Extract. Publish.</span>
          <p className="section-sub">We scrape your brand colors, tone, and services. You review and tap publish.</p>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-num">1</span>
              <h3>Connect</h3>
              <p>Enter your web address so we can learn your business inside and out.</p>
            </div>
            <div className="step-card">
              <span className="step-num">2</span>
              <h3>Extract</h3>
              <p>We scrape your brand colors, analyze your tone, and generate 192 topics.</p>
              <div className="platform-icons">
                <span title="Facebook">f</span>
                <span title="Google">G</span>
                <span title="Instagram">ig</span>
                <span title="LinkedIn">in</span>
                <span title="X">X</span>
                <span title="TikTok">Tk</span>
              </div>
            </div>
            <div className="step-card">
              <span className="step-num">3</span>
              <h3>Publish</h3>
              <p>Posts are scheduled to 12 platforms with a single approval.</p>
              <div className="we-handle">
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Captions
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Images
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Scheduling
                </span>
              </div>
            </div>
          </div>
          <div className="section-cta">
            <a href="https://app.glowsocial.com/pricing/" className="btn btn--primary" id="how-cta">Get Started</a>
          </div>
        </div>
      </section>

      {/* WHAT THIS DOES FOR YOUR BUSINESS */}
      <section className="features">
        <div className="container">
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

      {/* IS IT RIGHT FOR YOU */}
      <section className="fit-check">
        <div className="container">
          <h2>Is Glow Social Right for You?</h2>
          <div className="fit-grid">
            <div className="fit-card fit-card--yes">
              <h3>Great Fit</h3>
              <ul>
                <li>Local businesses that serve their community</li>
                <li>Owners too busy to post consistently</li>
                <li>Teams without a dedicated marketing person</li>
                <li>Businesses tired of abandoned social pages</li>
                <li>Anyone who&apos;s tried and failed to &ldquo;be consistent&rdquo;</li>
              </ul>
            </div>
            <div className="fit-card fit-card--no">
              <h3>Not the Best Fit</h3>
              <ul>
                <li>Enterprise companies with marketing teams</li>
                <li>Businesses needing real-time posting</li>
                <li>Franchises with strict brand guidelines</li>
                <li>Companies requiring complex approval workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITOR STRIP */}
      <section className="competitor-strip">
        <div className="container">
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

      {/* COST COMPARISON */}
      <section className="comparison">
        <div className="container">
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

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="container">
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

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Be the Business Everyone Recognizes</h2>
          <p>5-minute setup. Posts, Google Business Profile, and reviews — all handled. Your reputation starts building immediately.</p>
          <a href="https://app.glowsocial.com/" className="btn btn--primary btn--lg" id="final-cta">Get Started — $49/mo</a>
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
        <a href="https://app.glowsocial.com/pricing/">Get Started — $49/mo</a>
      </div>
    </>
  );
}
