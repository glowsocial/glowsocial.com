import Link from "next/link";
import { getPricing } from "../pricing-config";
import { previewUrl } from "../../lib/marketing-links";
import "../affordable-social-media-management/affordable.css";

export const dynamic = "force-dynamic";

const PAGE_URL = "https://glowsocial.com/social-media-agency-alternative";

export const metadata = {
  title: "Social Media Agency Alternative from $99/month",
  description:
    "Compare Glow Social with a social media agency when you need posts created, reviewed, and ready to publish without a full retainer.",
  alternates: {
    canonical: "/social-media-agency-alternative",
  },
  openGraph: {
    title: "Social Media Agency Alternative from $99/month",
    description:
      "You may not need a full agency retainer yet. See review-ready posts from your website before you choose a plan.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glow Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Agency Alternative from $99/month",
    description:
      "See whether preview-first, approval-first posting is a better fit than an agency retainer.",
    images: ["https://glowsocial.com/images/og-image.png"],
  },
};

function JsonLd({ pricing }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Social media agency alternative from $99/month",
      url: PAGE_URL,
      description:
        "A comparison page for small businesses deciding whether they need a full social media agency retainer or a lighter posting service that prepares review-ready posts from their website.",
      isPartOf: {
        "@type": "WebSite",
        name: "Glow Social",
        url: "https://glowsocial.com",
      },
      about: {
        "@type": "Thing",
        name: "Social media agency alternatives",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Social Media Agency Alternative",
      serviceType: "Done-for-you social media posting",
      provider: {
        "@type": "Organization",
        name: "Glow Social",
        url: "https://glowsocial.com",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      description:
        "Glow Social is a lower-cost alternative to hiring a social media agency when a small business mainly needs consistent organic posts created, approved, and published.",
      offers: {
        "@type": "Offer",
        price: pricing.core.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: PAGE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best alternative to a social media agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best alternative depends on scope. If you need ads, strategy, shoots, and community management, hire an agency. If you mainly need consistent posts created and published, a done-for-you posting service like Glow Social is usually the lower-cost fit.",
          },
        },
        {
          "@type": "Question",
          name: "When do small businesses not need a social media agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small business usually does not need an agency when the core problem is inactive profiles, not campaign strategy. If the job is regular organic posting, a lighter service can be enough.",
          },
        },
        {
          "@type": "Question",
          name: "Is Glow Social cheaper than a social media agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. Glow Social starts at ${pricing.startingAtFull}. It costs less because the scope is narrower: posts created from your website, reviewed by you, and published after approval. It does not include paid ads, custom shoots, campaign strategy, or live community management.`,
          },
        },
        {
          "@type": "Question",
          name: "Is Glow Social a social media agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Glow Social is a done-for-you social media posting service. It creates posts from your website, lets you review them, and publishes approved posts. It does not replace full agency strategy, paid ads, influencer campaigns, or live community management.",
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
          name: "Social Media Agency Alternative",
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

export default function SocialMediaAgencyAlternativePage() {
  const pricing = getPricing();
  const heroPreviewUrl = previewUrl("agency_alternative_page", "agency_alternative_hero");
  const finalPreviewUrl = previewUrl("agency_alternative_page", "agency_alternative_final");

  return (
    <div className="affordable-page">
      <JsonLd pricing={pricing} />

      <section className="affordable-hero">
        <div className="container affordable-hero-grid">
          <div className="affordable-hero-copy">
            <p className="affordable-eyebrow">Social media agency alternative</p>
            <h1>You may not need a social media agency retainer yet.</h1>
            <p className="affordable-lede">
              If your main problem is inconsistent posting, compare the agency
              scope against the lighter job you actually need done. Glow Social
              turns your website into review-ready posts, lets you approve them
              first, and keeps approved posts moving starting at {pricing.startingAtFull}.
            </p>
            <div className="affordable-cta-row">
              <a href={heroPreviewUrl} className="btn btn--primary btn--lg">
                See posts from your website first
              </a>
              <Link href="#agency-fit" className="btn btn--white-outline btn--lg">
                When to hire an agency
              </Link>
            </div>
            <div className="affordable-proof-row" aria-label="Agency alternative proof points">
              <span>20 posts/month</span>
              <span>Preview first</span>
              <span>No contracts</span>
              <span>Not a scheduler</span>
            </div>
          </div>

          <div className="agency-alternative-visual" aria-label="How Glow Social compares to agency work">
            <div className="affordable-card">
              <h3>Agency</h3>
              <p>Strategy, campaigns, ads, reporting, calls, custom creative, and a higher retainer.</p>
            </div>
            <div className="affordable-card">
              <h3>Scheduler</h3>
              <p>A calendar to fill yourself. Useful when the content is already made.</p>
            </div>
            <div className="affordable-card">
              <h3>Glow Social</h3>
              <p>Posts created, reviewed, and published when the main job is staying visible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-answer">
        <div className="container affordable-answer-box">
          <p>
            <strong>Quick answer:</strong> The best alternative to a social media
            agency is a done-for-you posting service when the work is regular
            organic content, not campaigns, ads, or community management. Glow
            Social starts at {pricing.startingAtFull} because it focuses on the
            part most local businesses fall behind on: turning the website into
            posts, letting the owner approve them, and publishing the approved
            work on schedule.
          </p>
          <p>
            Hire an agency when you need strategy, shoots, paid ads, or replies.
            Use Glow Social when the simpler question is, “Can someone keep our
            profiles active without making me manage another content calendar?”
          </p>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">The Real Problem</p>
          <h2>Most small businesses are not looking for an agency. They are looking for relief.</h2>
          <p className="section-sub">
            The search says social media agency, but the pain underneath is
            usually simpler: the profiles look stale, referrals are checking,
            and the owner does not want to become the content team.
          </p>

          <div className="affordable-card-grid">
            <div className="affordable-card">
              <h3>Your pages look quiet</h3>
              <p>
                Customers check Facebook, Instagram, LinkedIn, and Google before
                they call. Stale profiles make a real business look less current.
              </p>
            </div>
            <div className="affordable-card">
              <h3>You do not want another tool</h3>
              <p>
                A scheduler still asks you to think of ideas, write captions,
                make graphics, and refill the queue.
              </p>
            </div>
            <div className="affordable-card">
              <h3>The DIY trap is still work</h3>
              <p>
                Cheaper tools look efficient until the owner is still the one
                feeding the machine every week.
              </p>
            </div>
            <div className="affordable-card">
              <h3>You do not need a campaign team</h3>
              <p>
                Many local businesses need steady trust-building posts, not a
                multi-channel campaign with meetings and monthly reports.
              </p>
            </div>
            <div className="affordable-card">
              <h3>You need the work handled</h3>
              <p>
                Glow Social turns your website into posts ready to review, then
                keeps approved posts moving with an easier approval-first
                workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-compare">
        <div className="container">
          <p className="section-badge">Cost Comparison</p>
          <h2>Agency pricing makes sense when you need agency scope.</h2>
          <p className="section-sub">
            Public 2026 pricing guides put social media management and agency
            packages well above lightweight posting tools. The difference is not
            just price. It is scope.
          </p>

          <div className="affordable-table-wrap">
            <table className="affordable-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Typical cost</th>
                  <th>What it solves</th>
                  <th>Best fit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scheduler</td>
                  <td>$0-99/month</td>
                  <td>Publishing posts you already made</td>
                  <td>Owners with content ready</td>
                </tr>
                <tr className="affordable-table-highlight">
                  <td>Glow Social</td>
                  <td>{pricing.startingAtFull}</td>
                  <td>Posts created, approved, and published</td>
                  <td>Owners who need posting handled</td>
                </tr>
                <tr>
                  <td>Freelancer</td>
                  <td>$500-3,000/month</td>
                  <td>Human content help and light management</td>
                  <td>Businesses that want a person involved</td>
                </tr>
                <tr>
                  <td>Agency</td>
                  <td>$2,000-10,000+/month</td>
                  <td>Strategy, campaigns, ads, reporting, and management</td>
                  <td>Businesses with larger marketing budgets</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="section-sub" style={{ marginTop: 20 }}>
            Sources checked:{" "}
            <a href="https://sproutsocial.com/insights/social-media-packages-small-business/" target="_blank" rel="noopener noreferrer">
              Sprout Social small business packages
            </a>
            ,{" "}
            <a href="https://sproutsocial.com/insights/social-media-management-cost/" target="_blank" rel="noopener noreferrer">
              Sprout Social cost guide
            </a>
            , and{" "}
            <a href="https://www.lyfemarketing.com/social-media-management-pricing/" target="_blank" rel="noopener noreferrer">
              LYFE Marketing pricing
            </a>
            .
          </p>
        </div>
      </section>

      <section id="agency-fit" className="affordable-section affordable-two-col-section">
        <div className="container affordable-two-col">
          <div>
            <p className="section-badge affordable-left-badge">When to Hire</p>
            <h2>Hire an agency when the job is bigger than posting.</h2>
            <p>
              A good agency earns its fee when social media is tied to a larger
              marketing system. That includes paid ads, creative direction,
              short-form video production, influencer work, community
              management, analytics, and campaign strategy.
            </p>
          </div>
          <div className="affordable-checklist">
            <h3>An agency is a better fit if you need:</h3>
            <ul>
              <li>Paid social advertising strategy and management</li>
              <li>Custom shoots, Reels, or campaign creative</li>
              <li>DM replies, comment replies, and community management</li>
              <li>Influencer outreach or partnership campaigns</li>
              <li>Monthly strategic reporting and executive meetings</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="affordable-limits">
        <div className="container affordable-limits-box">
          <div>
            <p className="section-badge affordable-left-badge">When to Use Glow Social</p>
            <h2>Use the lighter option when the main job is staying visible.</h2>
          </div>
          <div>
            <p>
              Glow Social does not pretend to be a full agency. It handles the
              baseline most small businesses fall behind on: post ideas,
              captions, graphics, approval, and publishing.
            </p>
            <p>
              That is why it costs less. You are not paying for a team of
              strategists and account managers. You are paying for an easier
              mechanism: your website becomes review-ready posts instead of one
              more weekly marketing task on your plate.
            </p>
          </div>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">Related Guides</p>
          <h2>Compare the agency alternative from a few angles.</h2>
          <div className="affordable-card-grid">
            <Link href="/blog/do-i-need-a-social-media-agency" className="affordable-card">
              <h3>Do I need a social media agency?</h3>
              <p>A quick decision test for small businesses comparing agency help, freelancers, and done-for-you posting.</p>
            </Link>
            <Link href="/blog/social-media-agency-vs-done-for-you-service" className="affordable-card">
              <h3>Agency vs. done-for-you service</h3>
              <p>See where agency scope ends and simpler posting support starts.</p>
            </Link>
            <Link href="/blog/cheaper-alternative-to-social-media-agency" className="affordable-card">
              <h3>Cheaper alternative to an agency</h3>
              <p>The budget-focused guide for owners who searched for an agency but do not need full-service scope.</p>
            </Link>
            <Link href="/affordable-social-media-management" className="affordable-card">
              <h3>Social media under $100</h3>
              <p>Compare low-cost options when you need posting handled without a full retainer.</p>
            </Link>
            <Link href="/tools/diy-vs-agency-cost-calculator" className="affordable-card">
              <h3>DIY vs. agency cost calculator</h3>
              <p>Estimate whether the cheaper-looking route still leaves too much content work on the owner.</p>
            </Link>
            <Link href="/social-media-scheduler-that-creates-content" className="affordable-card">
              <h3>Scheduler that creates content</h3>
              <p>Use this if you are comparing tools but the real bottleneck is making posts.</p>
            </Link>
            <Link href="/google-business-profile-posting-service" className="affordable-card">
              <h3>Google Business Profile posting</h3>
              <p>Keep your Google profile and social channels active from one approval-first workflow.</p>
            </Link>
            <Link href="/local/social-media-management-phoenix" className="affordable-card">
              <h3>Phoenix agency alternative</h3>
              <p>A local version for Phoenix small businesses looking for lower-cost social media help.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="affordable-faq">
        <div className="container">
          <p className="section-badge">FAQ</p>
          <h2>Social media agency alternative questions.</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the best alternative to a social media agency?</summary>
              <p>
                If you need full strategy, an agency is still the right answer.
                If you mainly need consistent organic posts, a done-for-you
                posting service is usually the better alternative because it
                solves the daily visibility problem without the agency retainer.
              </p>
            </details>
            <details className="faq-item">
              <summary>Is Glow Social cheaper than a social media agency?</summary>
              <p>
                Yes. Glow Social starts at {pricing.startingAtFull}. It costs
                less because the scope is narrower: posts created, reviewed, and
                published. It does not include paid ads, campaign strategy,
                custom shoots, or live community management.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can Glow Social replace my agency?</summary>
              <p>
                It can replace the organic posting part of an agency relationship
                when that is the only piece you need. It should not replace an
                agency that is running paid ads, planning campaigns, managing
                comments, or producing custom creative.
              </p>
            </details>
            <details className="faq-item">
              <summary>What if I searched for a social media agency near me?</summary>
              <p>
                If you want in-person strategy, local networking, or custom
                campaign work, choose a local agency. If you just need your
                social pages to stop looking inactive, a remote done-for-you
                service can be enough.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="affordable-final-cta">
        <div className="container">
          <h2>See whether you need the agency or just the posting handled.</h2>
          <p>
            Start with a preview. Glow Social turns your website into posts you
            can review before you choose a plan.
          </p>
          <div className="affordable-cta-row affordable-cta-center">
            <a href={finalPreviewUrl} className="btn btn--primary btn--lg">
              See posts from your website first
            </a>
            <Link href="/pricing" className="btn btn--white-outline btn--lg">
              Compare plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
