import Link from "next/link";
import Image from "next/image";
import { getPricing } from "../pricing-config";
import "./affordable.css";

export const dynamic = "force-dynamic";

const PAGE_URL = "https://glowsocial.com/affordable-social-media-management";

export const metadata = {
  title: "Affordable Social Media Marketing for Small Businesses",
  description:
    "Affordable social media marketing and management for small businesses. Glow Social creates, designs, and publishes 20 posts starting at $99/month.",
  alternates: {
    canonical: "/affordable-social-media-management",
  },
  openGraph: {
    title: "Affordable Social Media Marketing for Small Businesses",
    description:
      "Done-for-you social media management starting at $99/month. Posts, graphics, publishing, and Google Business Profile support handled for you.",
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
    title: "Affordable Social Media Marketing for Small Businesses",
    description:
      "Done-for-you social media management starting at $99/month. Posts, graphics, publishing, and Google Business Profile support handled for you.",
    images: ["https://glowsocial.com/images/og-image.png"],
  },
};

function JsonLd({ pricing }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Affordable Social Media Management",
      serviceType: "Done-for-you social media marketing",
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
        "Glow Social creates, designs, and publishes social media posts for small businesses starting at $99/month.",
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
          name: "What is the most affordable social media marketing option for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most affordable option depends on whether you count your time. Free schedulers are cheapest in subscription cost, but done-for-you software like Glow Social is often cheaper in total cost because it creates and publishes posts for you starting at $99/month.",
          },
        },
        {
          "@type": "Question",
          name: "Is $99/month enough for social media management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if you need consistent baseline posting rather than a full agency. Glow Social creates 20 posts per month, designs graphics, and publishes to connected platforms starting at $99/month.",
          },
        },
        {
          "@type": "Question",
          name: "What does affordable social media management not include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Affordable done-for-you software usually does not include live comment replies, inbox management, paid ad management, influencer outreach, or custom strategy calls.",
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
          name: "Affordable Social Media Management",
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

export default function AffordableSocialMediaManagementPage() {
  const pricing = getPricing();

  return (
    <div className="affordable-page">
      <JsonLd pricing={pricing} />

      <section className="affordable-hero">
        <div className="container affordable-hero-grid">
          <div className="affordable-hero-copy">
            <p className="affordable-eyebrow">Affordable social media marketing</p>
            <h1>Affordable social media marketing for small businesses, starting at {pricing.startingAtFull}.</h1>
            <p className="affordable-lede">
              Glow Social creates, designs, and publishes professional posts for your business so
              you can stay visible without hiring an agency or managing another tool.
            </p>
            <div className="affordable-cta-row">
              <a href="https://app.glowsocial.com/signup" className="btn btn--primary btn--lg">
                Start for {pricing.startingAtShort}
              </a>
              <Link href="/preview" className="btn btn--white-outline btn--lg">
                See examples
              </Link>
            </div>
            <div className="affordable-proof-row" aria-label="Glow Social proof points">
              <span>20 posts/month</span>
              <span>5-minute setup</span>
              <span>No contracts</span>
              <span>Google Business Profile</span>
            </div>
          </div>

          <div className="affordable-visual" aria-label="Examples of Glow Social posts">
            <Image
              src="/images/sample-post-bakery.png"
              alt="Sample social media post created by Glow Social for a bakery"
              width="260"
              height="260"
              sizes="(max-width: 960px) 50vw, 260px"
            />
            <Image
              src="/images/sample-post-landscaper.png"
              alt="Sample social media post created by Glow Social for a landscaping business"
              width="260"
              height="260"
              sizes="(max-width: 960px) 50vw, 260px"
            />
            <Image
              src="/images/sample-post-chiropractor.png"
              alt="Sample social media post created by Glow Social for a chiropractor"
              width="260"
              height="260"
              sizes="(max-width: 960px) 50vw, 260px"
            />
          </div>
        </div>
      </section>

      <section className="affordable-answer">
        <div className="container affordable-answer-box">
          <h2>Direct Answer</h2>
          <p>
            Affordable social media marketing means getting consistent, professional posts live
            without paying freelancer or agency retainers. For most small businesses, the cheapest
            real value is the option that removes the hours spent
            writing captions, making graphics, and loading posts. Glow Social handles that baseline
            starting at {pricing.startingAtFull}.
          </p>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">What You Get</p>
          <h2>Done-for-you posting without agency pricing.</h2>
          <p className="section-sub">
            The goal is not to make you a full-time content creator. The goal is to keep your
            business looking current, credible, and easy to trust.
          </p>

          <div className="affordable-card-grid">
            <div className="affordable-card">
              <h3>Posts written for your business</h3>
              <p>
                Glow Social reads your website and business details so captions reflect your
                services, voice, and customers.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Graphics created for you</h3>
              <p>
                You are not paying for a blank calendar. Posts include ready-to-publish visuals
                that look professional without Canva work.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Publishing handled</h3>
              <p>
                Connect your platforms once. Glow Social keeps the publishing rhythm moving across
                the channels your business uses.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Google Business Profile support</h3>
              <p>
                Google Business Profile posting is included because local customers often check
                Google before they ever reach Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-compare">
        <div className="container">
          <p className="section-badge">Cost Comparison</p>
          <h2>Cheap tools still cost time.</h2>
          <p className="section-sub">
            The true cost of social media is the subscription plus the hours required to make it
            work every month.
          </p>

          <div className="affordable-table-wrap">
            <table className="affordable-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Monthly cost</th>
                  <th>Creates content?</th>
                  <th>Your time</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Free scheduler</td>
                  <td>$0</td>
                  <td>No</td>
                  <td>3-10 hours</td>
                  <td>DIY owners with time</td>
                </tr>
                <tr>
                  <td>Paid scheduling tool</td>
                  <td>$15-99</td>
                  <td>No</td>
                  <td>3-10 hours</td>
                  <td>People who like creating posts</td>
                </tr>
                <tr className="affordable-table-highlight">
                  <td>Glow Social</td>
                  <td>{pricing.startingAtFull}</td>
                  <td>Yes</td>
                  <td>5-minute setup</td>
                  <td>Small businesses that want it handled</td>
                </tr>
                <tr>
                  <td>Freelancer</td>
                  <td>$300-800</td>
                  <td>Yes</td>
                  <td>1-3 hours</td>
                  <td>Businesses that want a human manager</td>
                </tr>
                <tr>
                  <td>Agency</td>
                  <td>$1,000-3,000+</td>
                  <td>Yes</td>
                  <td>2-5 hours</td>
                  <td>Companies with larger marketing budgets</td>
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
            <h2>Built for the business owner who keeps meaning to post.</h2>
            <p>
              If social media already works for you and you enjoy creating content, keep doing it.
              Glow Social is for the business owner who knows an active presence matters but does
              not have the time, budget, or interest to run social media manually.
            </p>
          </div>
          <div className="affordable-checklist">
            <h3>Glow Social is a fit if you want:</h3>
            <ul>
              <li>Affordable social media management under agency pricing</li>
              <li>Consistent posts without writing every caption yourself</li>
              <li>Professional-looking pages when referrals check you out</li>
              <li>A simple monthly cost instead of a large retainer</li>
              <li>No long-term contracts or complicated onboarding</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="affordable-limits">
        <div className="container affordable-limits-box">
          <div>
            <p className="section-badge affordable-left-badge">Straight Talk</p>
            <h2>What affordable social media management does not include.</h2>
          </div>
          <div>
            <p>
              Glow Social is designed to keep your content engine running. It is not a full agency,
              ad team, or community manager. It does not replace live comment replies, inbox
              management, influencer outreach, paid ads, crisis communication, or high-touch
              campaign strategy.
            </p>
            <p>
              That is the point. Most small businesses do not need a $3,000/month social media
              department. They need consistent posts that make the business look alive and
              trustworthy.
            </p>
          </div>
        </div>
      </section>

      <section className="affordable-faq">
        <div className="container">
          <p className="section-badge">FAQ</p>
          <h2>Affordable social media marketing questions.</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What is the most affordable social media marketing option?</summary>
              <p>
                Free tools are cheapest if you only count software cost. If you count your time,
                done-for-you software is usually more affordable because it replaces writing,
                design, and scheduling work.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I get social media management for under $100/month?</summary>
              <p>
                Yes. Glow Social starts at {pricing.startingAtFull} and includes 20 posts per
                month. Traditional freelancers and agencies usually cost more because a person is
                manually creating and managing the content.
              </p>
            </details>
            <details className="faq-item">
              <summary>Is this social media marketing or social media management?</summary>
              <p>
                It is both for the baseline posting work most small businesses need. Glow Social
                creates content, designs graphics, and publishes posts. It does not manage paid
                ads, DMs, or live comment conversations.
              </p>
            </details>
            <details className="faq-item">
              <summary>How is this different from Buffer, Later, or Hootsuite?</summary>
              <p>
                Buffer, Later, and Hootsuite are scheduling tools. They help you publish content
                you already made. Glow Social creates the posts and publishes them, which is why it
                works better for business owners who do not have time to create content.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="affordable-final-cta">
        <div className="container">
          <h2>Stop choosing between cheap tools and expensive agencies.</h2>
          <p>
            Get consistent, professional social media handled for your business starting at{" "}
            {pricing.startingAtFull}.
          </p>
          <div className="affordable-cta-row affordable-cta-center">
            <a href="https://app.glowsocial.com/signup" className="btn btn--primary btn--lg">
              Get started
            </a>
            <Link href="/blog/best-affordable-social-media-management-small-business" className="btn btn--white-outline btn--lg">
              Read the full guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
