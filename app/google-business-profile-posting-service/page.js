import Link from "next/link";
import { getPricing } from "../pricing-config";
import { previewUrl } from "../../lib/marketing-links";
import "../affordable-social-media-management/affordable.css";

export const dynamic = "force-dynamic";

const PAGE_URL = "https://glowsocial.com/google-business-profile-posting-service";

export const metadata = {
  title: "Google Business Profile Posting Service for Small Business",
  description:
    "A Google Business Profile posting service for small businesses that need regular local posts without writing, designing, or scheduling them manually.",
  alternates: {
    canonical: "/google-business-profile-posting-service",
  },
  openGraph: {
    title: "Google Business Profile Posting Service for Small Business",
    description:
      "Glow Social creates local posts from your website and publishes approved posts to Google Business Profile and social channels.",
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
    title: "Google Business Profile Posting Service for Small Business",
    description:
      "Glow Social creates local posts from your website and publishes approved posts to Google Business Profile and social channels.",
    images: ["https://glowsocial.com/images/og-image.png"],
  },
};

function JsonLd({ pricing }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Google Business Profile Posting Service",
      serviceType: "Google Business Profile post creation and publishing",
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
        "Glow Social creates posts from a small business website and publishes approved posts to Google Business Profile and connected social channels.",
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
          name: "What is a Google Business Profile posting service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Google Business Profile posting service creates and publishes regular posts to a business's Google profile so the listing looks current when local customers search.",
          },
        },
        {
          "@type": "Question",
          name: "Does Glow Social post to Google Business Profile?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Glow Social supports Google Business Profile posting as part of its done-for-you posting workflow for local businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Do Google Business Profile posts replace social media?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Google Business Profile posts support local search trust, while social platforms support broader visibility. Local businesses usually benefit from keeping both active.",
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
          name: "Google Business Profile Posting Service",
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

export default function GoogleBusinessProfilePostingServicePage() {
  const pricing = getPricing();
  const heroPreviewUrl = previewUrl("gbp_posting_service_page", "gbp_posting_hero");
  const finalPreviewUrl = previewUrl("gbp_posting_service_page", "gbp_posting_final");

  return (
    <div className="affordable-page">
      <JsonLd pricing={pricing} />

      <section className="affordable-hero">
        <div className="container affordable-hero-grid">
          <div className="affordable-hero-copy">
            <p className="affordable-eyebrow">Google Business Profile posting</p>
            <h1>Google Business Profile posting service for small businesses.</h1>
            <p className="affordable-lede">
              Keep your Google profile looking active without writing posts
              yourself. Glow Social turns your website into local posts ready
              to approve, then publishes approved posts to Google Business
              Profile and your connected social channels.
            </p>
            <div className="affordable-cta-row">
              <a href={heroPreviewUrl} className="btn btn--primary btn--lg">
                See posts from your website first
              </a>
              <Link href="#what-to-post" className="btn btn--white-outline btn--lg">
                What should GBP posts say?
              </Link>
            </div>
            <div className="affordable-proof-row" aria-label="Google Business Profile posting proof points">
              <span>Local posts</span>
              <span>Approval first</span>
              <span>GBP plus social</span>
              <span>{pricing.startingAtFull}</span>
            </div>
          </div>

          <div className="agency-alternative-visual" aria-label="Google Business Profile posting workflow">
            <div className="affordable-card">
              <h3>1. Website in</h3>
              <p>Your services, locations, FAQs, proof, and offers become source material.</p>
            </div>
            <div className="affordable-card">
              <h3>2. Posts ready</h3>
              <p>Glow Social creates local posts you can review, edit, skip, or approve.</p>
            </div>
            <div className="affordable-card">
              <h3>3. Profile active</h3>
              <p>Approved posts publish to Google Business Profile and connected channels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-answer">
        <div className="container affordable-answer-box">
          <h2>Direct Answer</h2>
          <p>
            A Google Business Profile posting service keeps regular updates on
            your Google listing so local customers see a current, active
            business when they search. Glow Social creates posts from your
            website, lets you approve them, and publishes approved posts to
            Google Business Profile starting at {pricing.startingAtFull}.
          </p>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">Why GBP Posts Matter</p>
          <h2>Your Google profile is often the first social proof customers see.</h2>
          <p className="section-sub">
            A local customer may never visit your Instagram before calling.
            They will often see your Google listing, reviews, hours, photos,
            and posts first.
          </p>

          <div className="affordable-card-grid">
            <div className="affordable-card">
              <h3>Show you are open</h3>
              <p>
                Recent updates make the business feel current, responsive, and
                actively serving customers.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Answer local questions</h3>
              <p>
                Posts can highlight seasonal needs, services, appointment
                reminders, and common customer concerns.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Support referrals</h3>
              <p>
                When someone hears your name and checks Google, your profile
                should confirm that you are active and credible.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Reuse the same engine</h3>
              <p>
                Glow Social can keep Google Business Profile and social channels
                moving from the same approved post workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="what-to-post" className="affordable-compare">
        <div className="container">
          <p className="section-badge">Post Ideas</p>
          <h2>What should a small business post on Google Business Profile?</h2>
          <p className="section-sub">
            The best GBP posts are short, local, and useful. They do not need to
            be clever. They need to make the business look alive and relevant.
          </p>

          <div className="affordable-table-wrap">
            <table className="affordable-table">
              <thead>
                <tr>
                  <th>Post type</th>
                  <th>Example angle</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Service reminder</td>
                  <td>Seasonal maintenance, checkups, tuneups, or booking windows</td>
                  <td>Home services, healthcare, salons, auto repair</td>
                </tr>
                <tr>
                  <td>Proof post</td>
                  <td>Recent project, review highlight, team milestone, or before-and-after</td>
                  <td>Contractors, dentists, med spas, real estate</td>
                </tr>
                <tr>
                  <td>FAQ answer</td>
                  <td>Short answer to a question customers ask before calling</td>
                  <td>Professional services and local service businesses</td>
                </tr>
                <tr className="affordable-table-highlight">
                  <td>Glow Social post</td>
                  <td>Generated from your website and reviewed before publishing</td>
                  <td>Owners who want GBP and social posting handled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="affordable-section affordable-two-col-section">
        <div className="container affordable-two-col">
          <div>
            <p className="section-badge affordable-left-badge">Who It Fits</p>
            <h2>Built for local businesses that do not want another weekly task.</h2>
            <p>
              Google Business Profile posts are useful, but they are easy to
              neglect. Glow Social is for owners who know Google matters but do
              not want to write another post every week.
            </p>
          </div>
          <div className="affordable-checklist">
            <h3>Glow Social is a fit if you want:</h3>
            <ul>
              <li>Regular Google Business Profile posts</li>
              <li>Posts created from your own website</li>
              <li>Approval before anything goes live</li>
              <li>Social channels kept active from the same workflow</li>
              <li>A lower-cost alternative to agency retainers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="affordable-limits">
        <div className="container affordable-limits-box">
          <div>
            <p className="section-badge affordable-left-badge">Limits</p>
            <h2>GBP posts are not a replacement for your whole local SEO plan.</h2>
          </div>
          <div>
            <p>
              Google Business Profile posts can help your listing look current,
              but they do not replace reviews, accurate business information,
              photos, citations, local pages, or a strong website.
            </p>
            <p>
              Glow Social handles the recurring posting layer. It is not a
              full local SEO agency, ad manager, or review-generation service.
            </p>
          </div>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">Related Guides</p>
          <h2>Use Google and social together.</h2>
          <div className="affordable-card-grid">
            <Link href="/blog/google-business-profile-vs-social-media" className="affordable-card">
              <h3>GBP vs social media</h3>
              <p>See how Google visibility and social proof work together for local businesses.</p>
            </Link>
            <Link href="/blog/google-business-profile-posts-local-business-reach" className="affordable-card">
              <h3>GBP posts for local reach</h3>
              <p>Learn when Google posts help and what local customers need to see.</p>
            </Link>
            <Link href="/social-media-scheduler-that-creates-content" className="affordable-card">
              <h3>Scheduler that creates content</h3>
              <p>Compare scheduling tools with posts created from your website.</p>
            </Link>
            <Link href="/affordable-social-media-management" className="affordable-card">
              <h3>Affordable social media</h3>
              <p>Compare low-cost options when you need posting handled.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="affordable-faq">
        <div className="container">
          <p className="section-badge">FAQ</p>
          <h2>Google Business Profile posting questions.</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is a Google Business Profile posting service?</summary>
              <p>
                It is a service that creates and publishes regular posts to
                your Google Business Profile so customers see fresh updates on
                your listing.
              </p>
            </details>
            <details className="faq-item">
              <summary>Does Glow Social post to Google Business Profile?</summary>
              <p>
                Yes. Glow Social supports Google Business Profile posting as
                part of its done-for-you posting workflow for local businesses.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do I need Google Business Profile posts and social media posts?</summary>
              <p>
                Usually, yes. Google Business Profile helps when customers
                search locally. Social media helps when customers check your
                broader online presence. Glow Social can keep both moving.
              </p>
            </details>
            <details className="faq-item">
              <summary>Will GBP posts improve my rankings?</summary>
              <p>
                GBP posts alone should not be treated as a ranking fix. They
                are one visibility and trust signal alongside reviews, accurate
                profile information, photos, local relevance, and your website.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="affordable-final-cta">
        <div className="container">
          <h2>Keep Google Business Profile from going quiet.</h2>
          <p>
            See the posts Glow Social can create from your website before you
            connect accounts or choose a plan.
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
