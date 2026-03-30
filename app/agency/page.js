"use client";

import { useState } from "react";
import Link from "next/link";
import "./agency.css";

const faqs = [
  {
    q: "What happens when I hit my client limit?",
    a: "You'll see a prompt to upgrade to the next tier. Your existing clients keep working — nothing breaks. You just can't add new sub-accounts until you upgrade.",
  },
  {
    q: "Can my clients log in to their own accounts?",
    a: "Not yet — right now it's a master login with sub-accounts you control. Client logins are on our roadmap if there's demand.",
  },
  {
    q: "What if I need to remove a client?",
    a: "You can archive or delete sub-accounts anytime. If you drop below a tier threshold, you can downgrade at your next billing cycle.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "No contracts. Cancel anytime. We'd rather earn your business every month than lock you in.",
  },
  {
    q: "Do you offer white-labeling?",
    a: "Not currently, but it's something we're considering for larger agencies. Reach out if it's important to you — your feedback shapes our roadmap.",
  },
];

export default function Agency() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      {/* HERO */}
      <section className="agency-hero">
        <div className="container">
          <div>
            <span className="agency-badge">Built for Agencies</span>
            <h1>
              Manage All Your Clients{" "}
              <span className="accent">From One Dashboard</span>
            </h1>
            <p className="agency-hero-sub">
              Master login. Sub-accounts. Pro features for every client. One
              invoice. Scale your social media services without hiring more
              people.
            </p>
            <div className="agency-ctas">
              <a href="https://app.glowsocial.com/agency/checkout" className="btn-primary">
                Get Started
              </a>
              <a href="#pricing" className="btn-outline">
                See Pricing
              </a>
            </div>
            <div className="agency-hero-proof">
              <strong>Pro features</strong> for every client · Starting at{" "}
              <strong>$33/client</strong>
            </div>
          </div>
          <div>
            <div className="agency-mockup">
              <div className="mockup-header">
                <span className="mockup-title">Your Clients</span>
                <span className="mockup-badge">5 Active</span>
              </div>
              <div>
                <div className="client-row">
                  <div className="client-avatar coffee">C</div>
                  <div className="client-info">
                    <h4>Main Street Coffee</h4>
                    <span>12 posts scheduled</span>
                  </div>
                  <div className="client-status">● Active</div>
                </div>
                <div className="client-row">
                  <div className="client-avatar salon">B</div>
                  <div className="client-info">
                    <h4>Bella's Hair Studio</h4>
                    <span>8 posts scheduled</span>
                  </div>
                  <div className="client-status">● Active</div>
                </div>
                <div className="client-row">
                  <div className="client-avatar gym">P</div>
                  <div className="client-info">
                    <h4>Peak Fitness Gym</h4>
                    <span>15 posts scheduled</span>
                  </div>
                  <div className="client-status">● Active</div>
                </div>
                <div className="client-row">
                  <div className="client-avatar restaurant">T</div>
                  <div className="client-info">
                    <h4>Taco Loco</h4>
                    <span>10 posts scheduled</span>
                  </div>
                  <div className="client-status">● Active</div>
                </div>
                <div className="client-row">
                  <div className="client-avatar bakery">S</div>
                  <div className="client-info">
                    <h4>Sweet Dreams Bakery</h4>
                    <span>6 posts scheduled</span>
                  </div>
                  <div className="client-status">● Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="agency-trust">
        <div className="agency-trust-inner">
          <div className="agency-trust-stat">
            <span><strong>Pro features</strong> for every client</span>
          </div>
          <div className="agency-trust-stat">
            <span><strong>Master login</strong> + sub-accounts</span>
          </div>
          <div className="agency-trust-stat">
            <span><strong>One invoice</strong> per month</span>
          </div>
          <div className="agency-trust-stat">
            <span><strong>Scales</strong> as you grow</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="agency-problem">
        <div className="container">
          <h2>You're Drowning in Client Deliverables</h2>
          <p>
            Every new social media client means more logins to manage, more
            content to create, more publishing to coordinate. Your margins
            shrink with every new account.
          </p>
          <p>
            You're selling social media services, but you're spending all your
            time on fulfillment instead of growing your agency.
          </p>
          <div className="agency-highlight">
            <p>
              <strong>
                What if you could add clients without adding hours?
              </strong>{" "}
              Glow Social handles the content creation and publishing. You
              handle the client relationship.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="agency-steps">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>How Agency Accounts Work</h2>
          <p className="subtitle">
            One dashboard. All your clients. Full Pro features.
          </p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <span className="step-num">1</span>
            <h3>Create Sub-Accounts</h3>
            <p>
              Add each client as a sub-account. Set up their business info and
              connect their social platforms.
            </p>
          </div>
          <div className="step-card">
            <span className="step-num">2</span>
            <h3>Switch Instantly</h3>
            <p>
              Jump between client accounts with one click. Review posts, approve
              content, manage everything from your master login.
            </p>
          </div>
          <div className="step-card">
            <span className="step-num">3</span>
            <h3>Scale Your Services</h3>
            <p>
              Add more clients without more work. Glow Social creates and
              publishes the content. You bill your clients.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="agency-features">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Everything Your Agency Needs</h2>
          <p className="subtitle">
            Full Pro features for every client. No per-feature upsells.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">D</div>
            <div>
              <h3>Master Dashboard</h3>
              <p>
                See all your clients at a glance. Switch between accounts
                instantly without logging out.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">P</div>
            <div>
              <h3>20 Posts Per Client</h3>
              <p>
                Every sub-account gets full Pro features: 20 posts/month,
                carousels, short-form video.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">12</div>
            <div>
              <h3>12 Platforms</h3>
              <p>
                Facebook, Instagram, LinkedIn, TikTok, and more. Unlimited
                platform connections per client.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">B</div>
            <div>
              <h3>Per-Client Branding</h3>
              <p>
                Each client gets their own brand voice, style, and content
                preferences. No cookie-cutter posts.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">V</div>
            <div>
              <h3>Video + Carousels</h3>
              <p>
                Short-form video and carousel posts included for every client.
                The content that performs best.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">$</div>
            <div>
              <h3>Consolidated Billing</h3>
              <p>
                One invoice per month for all your clients. No chasing multiple
                subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="agency-pricing" id="pricing">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Agency Pricing</h2>
          <p className="subtitle">
            Tiered pricing that scales with your agency. All Pro features
            included.
          </p>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Boutique</h3>
            <div>
              <span className="price-amount">$199</span>
              <span className="price-period">/month</span>
            </div>
            <div className="client-count">Up to 6 clients</div>
            <div className="per-client">~$33 per client</div>
            <ul>
              <li>Master dashboard</li>
              <li>6 sub-accounts</li>
              <li>Full Pro features each</li>
              <li>20 posts per client</li>
              <li>Unlimited platforms</li>
            </ul>
            <a
              href="https://app.glowsocial.com/agency/checkout?tier=boutique"
              className="card-btn"
            >
              Get Started
            </a>
          </div>
          <div className="price-card featured">
            <span className="popular-badge">Most Popular</span>
            <h3>Studio</h3>
            <div>
              <span className="price-amount">$499</span>
              <span className="price-period">/month</span>
            </div>
            <div className="client-count">Up to 15 clients</div>
            <div className="per-client">~$33 per client</div>
            <ul>
              <li>Everything in Boutique</li>
              <li>15 sub-accounts</li>
              <li>Priority support</li>
              <li>Bulk actions</li>
              <li>Analytics rollup</li>
            </ul>
            <a
              href="https://app.glowsocial.com/agency/checkout?tier=studio"
              className="card-btn"
            >
              Get Started
            </a>
          </div>
          <div className="price-card">
            <h3>Scale</h3>
            <div>
              <span className="price-amount">$899</span>
              <span className="price-period">/month</span>
            </div>
            <div className="client-count">Up to 30 clients</div>
            <div className="per-client">~$30 per client</div>
            <ul>
              <li>Everything in Studio</li>
              <li>30 sub-accounts</li>
              <li>Dedicated support</li>
              <li>Custom onboarding</li>
              <li>API access</li>
            </ul>
            <a
              href="https://app.glowsocial.com/agency/checkout?tier=scale"
              className="card-btn"
            >
              Get Started
            </a>
          </div>
        </div>
        <p className="custom-pricing">
          Need more than 30 clients?{" "}
          <a href="mailto:hello@glowsocial.com?subject=Enterprise%20Agency%20Plan">
            Let's talk about custom pricing.
          </a>
        </p>
      </section>

      {/* MARGIN CALCULATOR */}
      <section className="agency-margin">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Your Margin, Your Business</h2>
          <div className="margin-table">
            <div className="margin-row header">
              <div className="margin-cell">Scenario</div>
              <div className="margin-cell">Your Cost</div>
              <div className="margin-cell">You Charge</div>
              <div className="margin-cell">Your Profit</div>
            </div>
            <div className="margin-row">
              <div className="margin-cell">
                <strong>6 clients</strong>
                <span className="sub">Boutique plan</span>
              </div>
              <div className="margin-cell">
                $199/mo<span className="sub">$33/client</span>
              </div>
              <div className="margin-cell">
                $250/client<span className="sub">= $1,500/mo</span>
              </div>
              <div className="margin-cell">
                <span className="profit">$1,301/mo</span>
                <span className="sub">85% margin</span>
              </div>
            </div>
            <div className="margin-row">
              <div className="margin-cell">
                <strong>15 clients</strong>
                <span className="sub">Studio plan</span>
              </div>
              <div className="margin-cell">
                $499/mo<span className="sub">$33/client</span>
              </div>
              <div className="margin-cell">
                $250/client<span className="sub">= $3,750/mo</span>
              </div>
              <div className="margin-cell">
                <span className="profit">$3,251/mo</span>
                <span className="sub">87% margin</span>
              </div>
            </div>
            <div className="margin-row">
              <div className="margin-cell">
                <strong>30 clients</strong>
                <span className="sub">Scale plan</span>
              </div>
              <div className="margin-cell">
                $899/mo<span className="sub">$30/client</span>
              </div>
              <div className="margin-cell">
                $250/client<span className="sub">= $7,500/mo</span>
              </div>
              <div className="margin-cell">
                <span className="profit">$6,601/mo</span>
                <span className="sub">88% margin</span>
              </div>
            </div>
          </div>
          <p className="margin-footnote">
            Charge what makes sense for your market. These are just examples.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="agency-faq">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Questions?</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item${activeFaq === i ? " active" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className="chevron">▼</span>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="agency-final-cta">
        <div className="container">
          <h2>Ready to Scale Your Agency?</h2>
          <p className="subhead">
            Stop trading hours for dollars. Let Glow Social handle the
            fulfillment while you grow your client base.
          </p>
          <div className="cta-buttons">
            <a
              href="https://app.glowsocial.com/agency/checkout?tier=studio"
              className="cta-btn-primary"
            >
              Get Started
            </a>
            <a href="#pricing" className="cta-btn-outline">
              See Pricing
            </a>
          </div>
          <div className="guarantee-box">
            <p>
              <strong>No Contracts</strong>
              <br />
              Cancel anytime. No questions asked.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
