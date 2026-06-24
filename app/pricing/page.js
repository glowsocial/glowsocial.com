import "../home.css";
import { getPricing } from "../pricing-config";
import { appMarketingUrl, checkoutUrl, previewUrl } from "../../lib/marketing-links";

const PAGE_URL = "https://glowsocial.com/pricing";

// Force dynamic rendering so pricing is evaluated at request time, not build time
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Glow Social Pricing: Social Media Management from $99/month",
  description:
    "Compare Glow Social pricing plans for social media and Google Business Profile posting. Preview posts from your website before choosing Core, Pro, or Unlimited.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Glow Social Pricing: Social Media Management from $99/month",
    description:
      "Compare Core, Pro, and Unlimited plans for review-ready social media posts created from your website. Free preview first, no contracts, cancel anytime.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png?v=pricing-2026-06",
        width: 1200,
        height: 630,
        alt: "Glow Social pricing plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Social Pricing: Social Media Management from $99/month",
    description:
      "Preview posts from your website, then choose the plan that fits your local business.",
    images: ["https://glowsocial.com/images/og-image.png?v=pricing-2026-06"],
  },
};

function PricingJsonLd({ pricing }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Glow Social pricing",
      url: PAGE_URL,
      description:
        "Pricing for Glow Social plans that prepare review-ready social media and Google Business Profile posts from a business website.",
      isPartOf: {
        "@type": "WebSite",
        name: "Glow Social",
        url: "https://glowsocial.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Glow Social social media management",
      url: PAGE_URL,
      serviceType: "Social media management for local businesses",
      provider: {
        "@type": "Organization",
        name: "Glow Social",
        url: "https://glowsocial.com",
      },
      areaServed: "US",
      offers: [pricing.core, pricing.pro, pricing.unlimited].map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: PAGE_URL,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: plan.price,
          priceCurrency: "USD",
          billingIncrement: 1,
          unitText: "MONTH",
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does Glow Social cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${pricing.summaryFull} ${pricing.billingPolicy}`,
          },
        },
        {
          "@type": "Question",
          name: "Can I see the posts before I pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The free preview uses your website to show the posts Glow Social would prepare before you create an account, connect profiles, or choose a paid plan.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to commit for a year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Glow Social plans are month-to-month, with no annual commitment and no cancellation fees.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://glowsocial.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pricing",
          item: PAGE_URL,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function quickStartUrl(content) {
  return appMarketingUrl("/quick-start", {
    utm_medium: "pricing_page",
    utm_campaign: "quick_start",
    utm_content: content,
  });
}

function planPreviewUrl(plan, content) {
  return appMarketingUrl("/preview", {
    plan,
    utm_medium: "pricing_page",
    utm_campaign: "free_preview",
    utm_content: content,
  });
}

export default function PricingPage() {
  const pricing = getPricing();
  return (
    <>
      <PricingJsonLd pricing={pricing} />

      {/* ============ HERO ============ */}
      <section className="pricing-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <h1>Start with steady posting. Add more only when you need it.</h1>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Preview the posts first if you want to see what Glow Social will make from your website.
            <br />
            {pricing.summaryFull} No contracts. Cancel anytime.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            <a
              href={previewUrl("pricing_page", "pricing_hero")}
              className="btn btn--primary btn--lg"
              data-analytics-category="pricing"
              data-analytics-event="pricing_preview_cta_click"
              data-analytics-label="Pricing hero preview CTA"
              data-analytics-location="pricing_hero"
            >
              See my posts
            </a>
            <a
              href="#plans"
              className="btn btn--outline btn--lg"
              data-analytics-category="pricing"
              data-analytics-event="pricing_compare_plans_click"
              data-analytics-label="Pricing hero compare plans CTA"
              data-analytics-location="pricing_hero"
            >
              Compare plans
            </a>
          </div>
        </div>
      </section>

      {/* ============ PRICING CARDS ============ */}
      <section className="pricing" id="plans" style={{ paddingTop: 40 }}>
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
                <li><strong>20 custom static posts</strong> ready to approve every month</li>
                <li><strong>Social + Google Business</strong> posting included</li>
                <li><strong>Website-informed captions</strong> and graphics</li>
                <li><strong>No content calendar</strong> or prompts to manage</li>
                <li><strong>Final approval</strong> before posts go live</li>
              </ul>
              <a
                href={planPreviewUrl("core", "pricing_card_core_preview")}
                className="btn btn--outline"
                id="pricing-core-preview-cta"
                data-analytics-category="pricing"
                data-analytics-event="pricing_preview_cta_click"
                data-analytics-label="Pricing page Core preview CTA"
                data-analytics-location="pricing_cards"
                data-analytics-plan="core"
              >
                Preview Core first
              </a>
              <a
                href={checkoutUrl("core", "pricing_page", "pricing_card_core_already_previewed")}
                className="pricing-direct-checkout"
                data-analytics-category="pricing"
                data-analytics-event="pricing_direct_checkout_click"
                data-analytics-label="Already previewed Core checkout"
                data-analytics-location="pricing_cards"
                data-analytics-plan="core"
              >
                Already previewed? Start Core
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
                <li><strong>28 total custom static posts</strong> every month</li>
                <li><strong>4 video posts</strong> for higher-visibility moments</li>
                <li><strong>4 carousel posts</strong> for richer stories</li>
                <li><strong>Google Review monitoring</strong> in your dashboard</li>
                <li><strong>Performance notes</strong> when you want signal</li>
              </ul>
              <a
                href={planPreviewUrl("pro", "pricing_card_pro_preview")}
                className="btn btn--primary"
                id="pricing-pro-preview-cta"
                data-analytics-category="pricing"
                data-analytics-event="pricing_preview_cta_click"
                data-analytics-label="Pricing page Pro preview CTA"
                data-analytics-location="pricing_cards"
                data-analytics-plan="pro"
              >
                Preview Pro first
              </a>
              <a
                href={checkoutUrl("pro", "pricing_page", "pricing_card_pro_already_previewed")}
                className="pricing-direct-checkout"
                data-analytics-category="pricing"
                data-analytics-event="pricing_direct_checkout_click"
                data-analytics-label="Already previewed Pro checkout"
                data-analytics-location="pricing_cards"
                data-analytics-plan="pro"
              >
                Already previewed? Start Pro
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
                <li><strong>Unlimited custom static posts</strong></li>
                <li><strong>Unlimited video posts</strong></li>
                <li><strong>Unlimited carousel posts</strong></li>
                <li><strong>No monthly content ceiling</strong> for launches, seasons, and surprises</li>
              </ul>
              <a
                href={planPreviewUrl("unlimited", "pricing_card_unlimited_preview")}
                className="btn btn--outline"
                id="pricing-unlimited-preview-cta"
                data-analytics-category="pricing"
                data-analytics-event="pricing_preview_cta_click"
                data-analytics-label="Pricing page Unlimited preview CTA"
                data-analytics-location="pricing_cards"
                data-analytics-plan="unlimited"
              >
                Preview Unlimited first
              </a>
              <a
                href={checkoutUrl("unlimited", "pricing_page", "pricing_card_unlimited_already_previewed")}
                className="pricing-direct-checkout"
                data-analytics-category="pricing"
                data-analytics-event="pricing_direct_checkout_click"
                data-analytics-label="Already previewed Unlimited checkout"
                data-analytics-location="pricing_cards"
                data-analytics-plan="unlimited"
              >
                Already previewed? Start Unlimited
              </a>
            </div>
          </div>
          <div className="pricing-objection-strip" aria-label="Pricing reassurance">
            <p><strong>Not sure where to start?</strong> Preview the posts first. Most local businesses can begin with Core and upgrade when richer formats matter.</p>
            <p><strong>Nothing publishes blind.</strong> You approve, edit, or skip posts before they go live.</p>
            <p><strong>No long commitment.</strong> Plans are month-to-month, and account connections happen after you know the posts fit.</p>
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
            <h2 style={{ fontSize: '1.4rem', marginBottom: 4 }}>Want us to handle setup too?</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              If the tech side is the part that keeps slowing you down, we can take that off your plate.
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
                  href={quickStartUrl("website_quick_start")}
                  className="btn btn--outline"
                  id="pricing-website-quickstart-cta"
                  data-analytics-category="pricing"
                  data-analytics-event="quick_start_cta_click"
                  data-analytics-label="Website Quick Start CTA"
                  data-analytics-location="pricing_quick_start"
                  data-analytics-plan="website_quick_start"
                  style={{ fontSize: '0.8rem', padding: '10px 24px' }}
                >
                  Get Website Help
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
                  href={quickStartUrl("profile_quick_start")}
                  className="btn btn--outline"
                  id="pricing-profile-quickstart-cta"
                  data-analytics-category="pricing"
                  data-analytics-event="quick_start_cta_click"
                  data-analytics-label="Profile Quick Start CTA"
                  data-analytics-location="pricing_quick_start"
                  data-analytics-plan="profile_quick_start"
                  style={{ fontSize: '0.8rem', padding: '10px 24px' }}
                >
                  Get Profile Help
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
          <p className="section-sub">Your website goes in. Posts come back ready to approve.</p>
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
          <p className="section-sub">Core covers 20 custom static posts. Pro includes 28 custom static posts, 4 videos, and 4 carousels. Unlimited removes the monthly content ceiling.</p>
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
                  <td>Custom static posts per month</td>
                  <td>20</td>
                  <td className="highlight-col"><strong>28</strong></td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Video posts per month</td>
                  <td>—</td>
                  <td className="highlight-col"><strong>4</strong></td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Carousel posts per month</td>
                  <td>—</td>
                  <td className="highlight-col"><strong>4</strong></td>
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
          <h2>The real comparison is how much you still have to manage.</h2>
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
                  <td className="highlight-col"><strong>20</strong></td>
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
                  <td>Before you see posts</td>
                  <td className="highlight-col"><strong>Free preview</strong></td>
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
                  <td>What you manage</td>
                  <td className="highlight-col"><strong>Approve what is ready</strong></td>
                  <td>2–3 hours</td>
                  <td>1–2 hours</td>
                  <td>10+ hours</td>
                </tr>
              </tbody>
            </table>
            <p className="comparison-footnote">
              *DIY is free in dollars, not in time. Ten hours/week at $50/hr =
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
                {pricing.summaryFull} {pricing.billingPolicy} You can preview posts from your website before
                choosing a plan, and you keep access through the end of your paid period if you cancel.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I see the posts before I pay?</summary>
              <p>
                Yes. The preview uses your website to show the posts Glow Social would prepare for
                your business before you create an account, connect profiles, or choose a paid plan.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I cancel anytime?</summary>
              <p>
                Yes. No contracts, no commitments. You can also pause when you need a breather,
                then come back without starting over.
              </p>
            </details>
            <details className="faq-item">
              <summary>What&apos;s the difference between Core and Pro?</summary>
              <p>
                Core gives you 20 custom static posts ready to approve each month, Google Business
                Profile visibility, brand-matched posts, and approval controls
                before posts go live. Pro includes 28 custom static posts,
                4 video posts, 4 carousel posts, Google
                Review monitoring, and performance analytics.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do I need to commit for a year?</summary>
              <p>
                No. All plans are month-to-month. Cancel whenever you want,
                keep access through the end of your billing period, and
                you&apos;re done. No cancellation fees, no games.
              </p>
            </details>
            <details className="faq-item">
              <summary>How does the Google Review integration work?</summary>
              <p>
                Google Review monitoring is included in Glo Pro and Glo
                Unlimited plans. Once connected, Glow Social monitors your
                reviews automatically and you can respond from your dashboard.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                How does Glow Social compare to hiring a social media manager?
              </summary>
              <p>
                A social media manager costs $300–500/month minimum and usually requires
                back-and-forth. Glow Social costs {pricing.startingAtFull} to start and is built
                for the smaller job many owners actually need: posts prepared, reviewed, and sent
                without another person or process to manage.
              </p>
            </details>
            <details className="faq-item">
              <summary>Which platforms does Glow Social support?</summary>
              <p>
                Glow Social supports the major platforms local businesses use,
                including Facebook, Instagram, LinkedIn, TikTok, Google
                Business Profile, Pinterest, and more. You only connect the
                platforms that matter for your business.
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
            See the posts
            <br />
            before you choose.
          </h2>
          <p>
            Enter your website and Glow Social will create posts for social and Google Business
            that are ready for you to approve.
            <br />
            No prompts, no content calendar, no strategy homework.
          </p>
          <a
            href={previewUrl("pricing_page", "pricing_final_cta")}
            className="btn btn--primary btn--lg btn--glow"
            id="pricing-final-cta"
            data-analytics-category="pricing"
            data-analytics-event="pricing_preview_cta_click"
            data-analytics-label="Pricing final preview CTA"
            data-analytics-location="pricing_final_cta"
          >
            See my posts
          </a>
        </div>
      </section>
    </>
  );
}
