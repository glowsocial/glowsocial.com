import "../home.css";
import { getPricing } from "../pricing-config";

// Force dynamic rendering so pricing is evaluated at request time, not build time
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Pricing — Glow Social | Done-For-You Social Media",
  description:
    "Simple, transparent pricing. No contracts, no hidden fees. Glow Social creates professional posts, publishes to 12 platforms including Google Business Profile, and monitors your reviews.",
  openGraph: {
    title: "Pricing — Glow Social",
    description:
      "Done-for-you social media — handled. 12 posts, 12 platforms, professional images. No contracts. Cancel anytime.",
  },
};

export default function PricingPage() {
  const pricing = getPricing();
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pricing-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Simple, Transparent Pricing</h1>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            No hidden fees. No contracts. No surprises.
            <br />
            Cancel anytime — we earn your business every month.
          </p>
        </div>
      </section>

      {/* ============ PRICING CARDS ============ */}
      <section className="pricing" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="pricing-grid">
            {/* Core */}
            <div className="price-card">
              <h3>Glo Core</h3>
              <div className="price">
                <span className="price-amount">{pricing.core.display}</span>
                <span className="price-period">/month</span>
              </div>
              <ul>
                <li><strong>12 posts</strong> per month</li>
                <li><strong>12 platforms</strong> including GBP</li>
                <li>Generated from your <strong>website data</strong></li>
                <li><strong>Automated</strong> scheduling</li>
                <li><strong>3-tap</strong> approval process</li>
              </ul>
              <a
                href="https://app.glowsocial.com/checkout?plan=core"
                className="btn btn--outline"
                id="pricing-core-cta"
              >
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="price-card price-card--featured">
              <span className="popular-badge">Most Popular</span>
              <h3>Glo Pro</h3>
              <div className="price">
                <span className="price-amount">{pricing.pro.display}</span>
                <span className="price-period">/month</span>
              </div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li><strong>20+ posts</strong> per month</li>
                <li><strong>4 carousel</strong> posts included</li>
                <li><strong>4 video</strong> posts included</li>
                <li><strong>8 custom</strong> posts per month</li>
                <li><strong>Google Review</strong> monitoring</li>
                <li><strong>Performance analytics</strong></li>
              </ul>
              <a
                href="https://app.glowsocial.com/checkout?plan=pro"
                className="btn btn--primary"
                id="pricing-pro-cta"
              >
                Get Started
              </a>
            </div>

            {/* Unlimited */}
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <div className="price">
                <span className="price-amount">{pricing.unlimited.display}</span>
                <span className="price-period">/month</span>
              </div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>Unlimited</strong> static posts</li>
                <li><strong>Unlimited</strong> video posts</li>
                <li><strong>Unlimited</strong> carousel posts</li>
                <li><strong>Unlimited</strong> custom posts</li>
              </ul>
              <a
                href="https://app.glowsocial.com/checkout?plan=unlimited"
                className="btn btn--outline"
                id="pricing-unlimited-cta"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUICK START SERVICES ============ */}
      <section className="comparison">
        <div className="container">
          <div style={{
            maxWidth: 720,
            margin: '0 auto',
            background: '#fff',
            borderRadius: 16,
            border: '1px solid #dde6ee',
            padding: '40px 48px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
          }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 4 }}>Need Help Getting Started?</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Not sure about the tech side? We&apos;ll set everything up for you.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              {/* Website Quick Start */}
              <div>
                <h3 style={{ fontSize: '1rem', letterSpacing: '0.08em', marginBottom: 8 }}>Website Quick Start</h3>
                <p style={{ fontSize: '1.6rem', fontWeight: 700, color: '#192734', marginBottom: 12 }}>
                  $999 <span style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.6 }}>one-time</span>
                </p>
                <ul style={{ fontSize: '0.9rem', marginBottom: 20 }}>
                  <li>Up to <strong>5-page</strong> professional website</li>
                  <li><strong>Mobile responsive</strong> design</li>
                  <li>Ready in <strong>48 hours</strong></li>
                  <li>Built to work with <strong>Glow Social</strong></li>
                </ul>
                <a
                  href="https://app.glowsocial.com/quick-start"
                  className="btn btn--outline"
                  id="pricing-website-quickstart-cta"
                  style={{ fontSize: '0.8rem', padding: '10px 24px' }}
                >
                  Get Started
                </a>
              </div>

              {/* Profile Quick Start */}
              <div>
                <h3 style={{ fontSize: '1rem', letterSpacing: '0.08em', marginBottom: 8 }}>Profile Quick Start</h3>
                <p style={{ fontSize: '1.6rem', fontWeight: 700, color: '#192734', marginBottom: 12 }}>
                  $299 <span style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.6 }}>one-time</span>
                </p>
                <ul style={{ fontSize: '0.9rem', marginBottom: 20 }}>
                  <li><strong>Facebook</strong> business profile setup</li>
                  <li>Professional <strong>bio &amp; about</strong> section</li>
                  <li>Cover &amp; profile <strong>images</strong> configured</li>
                  <li>Ready in <strong>72 hours</strong></li>
                </ul>
                <a
                  href="https://app.glowsocial.com/quick-start"
                  className="btn btn--outline"
                  id="pricing-profile-quickstart-cta"
                  style={{ fontSize: '0.8rem', padding: '10px 24px' }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SEE HOW IT WORKS ============ */}
      <section className="pricing-compare" style={{ paddingBottom: 0 }}>
        <div className="container">
          <h2>See How It Works</h2>
          <p className="section-sub">From signup to your first posts in under 5 minutes.</p>
          <div style={{
            maxWidth: 720,
            margin: '0 auto',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
          }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                src="https://www.youtube.com/embed/zwLom-42Y8E"
                title="Getting Started with Glow Social"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE COMPARISON TABLE ============ */}
      <section className="pricing-compare">
        <div className="container">
          <h2>Compare Plans</h2>
          <p className="section-sub">Everything you need at every level.</p>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Core</th>
                  <th className="highlight-col">Pro</th>
                  <th>Unlimited</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price</td>
                  <td>{pricing.core.display}</td>
                  <td className="highlight-col"><strong>{pricing.pro.display}</strong></td>
                  <td>{pricing.unlimited.display}</td>
                </tr>
                <tr>
                  <td>Posts per month</td>
                  <td>12</td>
                  <td className="highlight-col"><strong>20+</strong></td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Carousel posts</td>
                  <td>—</td>
                  <td className="highlight-col"><strong>4</strong></td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Video posts</td>
                  <td>—</td>
                  <td className="highlight-col"><strong>4</strong></td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Custom posts</td>
                  <td>—</td>
                  <td className="highlight-col"><strong>8</strong></td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Platforms</td>
                  <td>12</td>
                  <td className="highlight-col"><strong>12</strong></td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Google Business Profile</td>
                  <td>✓</td>
                  <td className="highlight-col"><strong>✓</strong></td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Professional images</td>
                  <td>✓</td>
                  <td className="highlight-col"><strong>✓</strong></td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Auto scheduling</td>
                  <td>✓</td>
                  <td className="highlight-col"><strong>✓</strong></td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Google Review monitoring</td>
                  <td>—</td>
                  <td className="highlight-col"><strong>✓</strong></td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Performance analytics</td>
                  <td>—</td>
                  <td className="highlight-col"><strong>✓</strong></td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ COST COMPARISON VS ALTERNATIVES ============ */}
      <section className="comparison">
        <div className="container">
          <h2>What You&apos;d Pay Anywhere Else</h2>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="highlight-col">Glow Social</th>
                  <th>Freelancer</th>
                  <th>Agency</th>
                  <th>DIY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly cost</td>
                  <td className="highlight-col"><strong>{pricing.core.display}</strong></td>
                  <td>$300–$750</td>
                  <td>$2,000+</td>
                  <td>Free*</td>
                </tr>
                <tr>
                  <td>Posts per month</td>
                  <td className="highlight-col"><strong>12+</strong></td>
                  <td>8–12</td>
                  <td>12–20</td>
                  <td>2–4</td>
                </tr>
                <tr>
                  <td>GBP posting</td>
                  <td className="highlight-col"><strong>Included</strong></td>
                  <td>Sometimes</td>
                  <td>Extra cost</td>
                  <td>Manual</td>
                </tr>
                <tr>
                  <td>Review monitoring</td>
                  <td className="highlight-col"><strong>Pro+</strong></td>
                  <td>No</td>
                  <td>Extra cost</td>
                  <td>Manual</td>
                </tr>
                <tr>
                  <td>Setup time</td>
                  <td className="highlight-col"><strong>5 minutes</strong></td>
                  <td>2–3 weeks</td>
                  <td>1–2 months</td>
                  <td>Ongoing</td>
                </tr>
                <tr>
                  <td>Graphics included</td>
                  <td className="highlight-col"><strong>Yes</strong></td>
                  <td>Sometimes</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td className="highlight-col"><strong>Yes</strong></td>
                  <td>Contract</td>
                  <td>Contract</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Hours per week</td>
                  <td className="highlight-col"><strong>&lt;1 hour</strong></td>
                  <td>2–3 hours</td>
                  <td>1–2 hours</td>
                  <td>10+ hours</td>
                </tr>
              </tbody>
            </table>
            <p className="comparison-footnote">
              *DIY is free in dollars, not in time. 10 hours/week at $50/hr =
              $2,000/month in your time.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PRICING FAQ ============ */}
      <section className="faq">
        <div className="container">
          <h2>Pricing Questions</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>How much does Glow Social cost?</summary>
              <p>
                Glow Social Core costs {pricing.startingAtFull} with no contracts or
                commitments. Compare that to $3,000+/month for a marketing
                agency or $300+/month for an overseas contractor. You can cancel
                anytime and keep access through the end of your paid period.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I cancel anytime?</summary>
              <p>
                Yes. No contracts, no commitments. Cancel anytime and keep
                access through the end of your paid period. We earn your
                business every month.
              </p>
            </details>
            <details className="faq-item">
              <summary>What&apos;s the difference between Core and Pro?</summary>
              <p>
                Core gives you 12 professionally written and designed posts per
                month across 12 platforms. Pro adds carousel posts, video
                posts, custom posts on any topic you choose, Google Review
                monitoring, and performance analytics — plus more posts per
                month (20+).
              </p>
            </details>
            <details className="faq-item">
              <summary>Do I need to commit for a year?</summary>
              <p>
                No. All plans are month-to-month. Cancel whenever you want,
                keep access through the end of your billing period, and
                you&apos;re done. No cancellation fees, no guilt trips.
              </p>
            </details>
            <details className="faq-item">
              <summary>How does the Google Review integration work?</summary>
              <p>
                Google Review monitoring is included in Glo Pro and Glo
                Unlimited plans. Once connected, Glow Social monitors your
                reviews automatically and you can respond right from your
                dashboard — no need to log into Google separately.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                How does Glow Social compare to hiring a social media manager?
              </summary>
              <p>
                A social media manager costs $300–500/month minimum, requires
                onboarding, and can quit on you. Glow Social costs {pricing.startingAtFull},
                never has an off day, never needs managing, and keeps
                delivering without you having to think about it.
              </p>
            </details>
            <details className="faq-item">
              <summary>Which platforms does Glow Social support?</summary>
              <p>
                Facebook, Instagram, LinkedIn, Twitter, Threads, YouTube,
                Bluesky, Mastodon, Google Business Profile, Pinterest,
                Discord, Slack, and TikTok.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I upgrade or downgrade later?</summary>
              <p>
                Yes. You can change your plan anytime from your dashboard.
                Upgrades take effect immediately, and downgrades take effect
                at the start of your next billing period.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>
            Stop Carrying It.
            <br />
            Let Us Handle It.
          </h2>
          <p>
            5-minute setup. Professional posts, Google Business Profile, and
            reviews — all done for you.
            <br />
            The guilt goes away. The posts show up. Your {pricing.startingAtFull} starts
            today.
          </p>
          <a
            href="https://app.glowsocial.com/signup"
            className="btn btn--primary btn--lg btn--glow"
            id="pricing-final-cta"
          >
            Get Started — {pricing.startingAtShort}
          </a>
        </div>
      </section>
    </>
  );
}
