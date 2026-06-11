import Link from "next/link";
import { getPricing } from "../pricing-config";
import { previewUrl } from "../../lib/marketing-links";
import "../affordable-social-media-management/affordable.css";

export const dynamic = "force-dynamic";

const PAGE_URL = "https://glowsocial.com/social-media-scheduler-that-creates-content";

export const metadata = {
  title: "Social Media Scheduler That Creates Content for You",
  description:
    "Looking for a social media scheduler that creates content for you? Glow Social turns your website into posts ready to approve, then publishes approved posts.",
  alternates: {
    canonical: "/social-media-scheduler-that-creates-content",
  },
  openGraph: {
    title: "Social Media Scheduler That Creates Content for You",
    description:
      "Most schedulers publish posts you already made. Glow Social creates the posts first, then publishes approved posts.",
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
    title: "Social Media Scheduler That Creates Content for You",
    description:
      "Most schedulers publish posts you already made. Glow Social creates the posts first, then publishes approved posts.",
    images: ["https://glowsocial.com/images/og-image.png"],
  },
};

function JsonLd({ pricing }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Social Media Scheduler That Creates Content",
      serviceType: "Done-for-you social media content creation and publishing",
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
        "Glow Social turns a small business website into social media posts ready to approve, then publishes approved posts on schedule.",
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
          name: "Is there a social media scheduler that creates content for you?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Glow Social creates posts from your website, gives you approval control, and publishes approved posts. It is built for small businesses that need content creation and scheduling handled together.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from Buffer, Later, or Hootsuite?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buffer, Later, and Hootsuite are strongest when you want to manage your own social media workflow. Glow Social starts earlier by turning your website into posts ready to approve.",
          },
        },
        {
          "@type": "Question",
          name: "Do I approve the posts before they publish?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Glow Social is approval-first. You can review, edit, skip, or approve posts before they publish.",
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
          name: "Social Media Scheduler That Creates Content",
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

export default function SocialMediaSchedulerThatCreatesContentPage() {
  const pricing = getPricing();
  const heroPreviewUrl = previewUrl(
    "scheduler_creates_content_page",
    "scheduler_content_hero"
  );
  const finalPreviewUrl = previewUrl(
    "scheduler_creates_content_page",
    "scheduler_content_final"
  );

  return (
    <div className="affordable-page">
      <JsonLd pricing={pricing} />

      <section className="affordable-hero">
        <div className="container affordable-hero-grid">
          <div className="affordable-hero-copy">
            <p className="affordable-eyebrow">Scheduler plus content</p>
            <h1>A social media scheduler that creates content for you.</h1>
            <p className="affordable-lede">
              Most schedulers give you a calendar to fill. Glow Social starts
              with your website, creates posts ready to approve, and publishes
              the ones you say yes to.
            </p>
            <div className="affordable-cta-row">
              <a href={heroPreviewUrl} className="btn btn--primary btn--lg">
                See posts from your website first
              </a>
              <Link href="#comparison" className="btn btn--white-outline btn--lg">
                Compare options
              </Link>
            </div>
            <div className="affordable-proof-row" aria-label="Scheduler with content proof points">
              <span>Content created</span>
              <span>Approval first</span>
              <span>Publishing handled</span>
              <span>{pricing.startingAtFull}</span>
            </div>
          </div>

          <div className="agency-alternative-visual" aria-label="Scheduler and content creation comparison">
            <div className="affordable-card">
              <h3>Typical scheduler</h3>
              <p>Plan, upload, queue, and publish posts you already wrote.</p>
            </div>
            <div className="affordable-card">
              <h3>AI caption tool</h3>
              <p>Suggest captions after you prompt, copy, edit, and organize the work.</p>
            </div>
            <div className="affordable-card">
              <h3>Glow Social</h3>
              <p>Turn your website into posts ready to approve, then publish approved posts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-answer">
        <div className="container affordable-answer-box">
          <h2>Direct Answer</h2>
          <p>
            If you want a social media scheduler that creates content for you,
            look for a workflow that handles the work before scheduling: topic
            ideas, captions, visuals, approval, and publishing. Glow Social is
            built for that job. You enter your website, review posts based on
            your business, and approved posts go out on schedule starting at{" "}
            {pricing.startingAtFull}.
          </p>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">The Buying Test</p>
          <h2>Do you need a scheduler or do you need posts?</h2>
          <p className="section-sub">
            A scheduling tool is useful when the post already exists. It does
            not fully solve the blank-calendar problem for a busy local business
            that has no captions, post ideas, or visuals ready to upload.
          </p>

          <div className="affordable-card-grid">
            <div className="affordable-card">
              <h3>Use a scheduler if</h3>
              <p>
                You enjoy writing posts, have photos ready, and mainly need a
                cleaner way to plan the calendar.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Use an AI writer if</h3>
              <p>
                You want help drafting or improving captions but still want to
                choose topics, gather assets, and manage publishing yourself.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Use Glow Social if</h3>
              <p>
                You want posts created from your actual business context and
                published after you approve them.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Hire a person if</h3>
              <p>
                You need live community replies, campaigns, custom shoots, paid
                ads, or daily judgment from a marketer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="affordable-compare">
        <div className="container">
          <p className="section-badge">Comparison</p>
          <h2>The missing feature is usually content creation.</h2>
          <p className="section-sub">
            Schedulers help with distribution. Small business owners usually
            get stuck earlier: deciding what to say and creating something
            worth publishing.
          </p>

          <div className="affordable-table-wrap">
            <table className="affordable-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Creates post ideas?</th>
                  <th>Creates graphics?</th>
                  <th>Publishes?</th>
                  <th>Best fit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic scheduler</td>
                  <td>No</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Teams with posts already made</td>
                </tr>
                <tr>
                  <td>AI caption generator</td>
                  <td>Sometimes</td>
                  <td>No</td>
                  <td>No</td>
                  <td>People who still want to manage the workflow</td>
                </tr>
                <tr className="affordable-table-highlight">
                  <td>Glow Social</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes, after approval</td>
                  <td>Small businesses that want posting handled</td>
                </tr>
                <tr>
                  <td>Freelancer or agency</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Usually</td>
                  <td>Businesses that need human strategy and custom work</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="affordable-section affordable-two-col-section">
        <div className="container affordable-two-col">
          <div>
            <p className="section-badge affordable-left-badge">How It Works</p>
            <h2>Glow Social starts before the calendar.</h2>
            <p>
              The workflow begins with your website because your site already
              has the raw material: services, proof, FAQs, offers, customer
              objections, and the language you use to describe the business.
            </p>
          </div>
          <div className="affordable-checklist">
            <h3>What gets handled:</h3>
            <ul>
              <li>Topics pulled from your business context</li>
              <li>Captions written for local customers</li>
              <li>Visuals paired with posts</li>
              <li>Approval before anything publishes</li>
              <li>Recurring posting across connected profiles</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="affordable-limits">
        <div className="container affordable-limits-box">
          <div>
            <p className="section-badge affordable-left-badge">Limits</p>
            <h2>It is not a full social media department.</h2>
          </div>
          <div>
            <p>
              Glow Social is built to keep your pages active with posts ready
              to approve. It does not replace live comment replies, inbox
              management, paid ads, influencer outreach, or custom video shoots.
            </p>
            <p>
              That narrower scope is why it can start at {pricing.startingAtFull}
              instead of agency-retainer pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">Related Guides</p>
          <h2>Compare the other ways to solve the blank calendar.</h2>
          <div className="affordable-card-grid">
            <Link href="/affordable-social-media-management" className="affordable-card">
              <h3>Social media under $100</h3>
              <p>See the lower-cost path when you want posts handled without an agency.</p>
            </Link>
            <Link href="/social-media-agency-alternative" className="affordable-card">
              <h3>Agency alternative</h3>
              <p>Compare posting support against full-service agency scope.</p>
            </Link>
            <Link href="/blog/done-for-you-vs-diy-social-media" className="affordable-card">
              <h3>Free scheduler vs done-for-you</h3>
              <p>Use this when you are choosing between DIY tools and handled posting.</p>
            </Link>
            <Link href="/blog/buffer-vs-glow-social" className="affordable-card">
              <h3>Buffer vs Glow Social</h3>
              <p>Compare DIY scheduling against posts created from your website.</p>
            </Link>
            <Link href="/blog/buffer-alternative-with-content-creation-built-in" className="affordable-card">
              <h3>Buffer alternative with content creation</h3>
              <p>Use this if your real bottleneck is filling the queue.</p>
            </Link>
            <Link href="/blog/google-business-profile-posts-that-drive-phone-calls" className="affordable-card">
              <h3>GBP posts that support calls</h3>
              <p>See the local post angles that reduce hesitation before customers call.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="affordable-faq">
        <div className="container">
          <p className="section-badge">FAQ</p>
          <h2>Scheduler plus content questions.</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Is there a social media scheduler that creates content for me?</summary>
              <p>
                Yes. Glow Social creates posts from your website, lets you
                approve them, and publishes approved posts. It is designed for
                small businesses that want the content and scheduling handled
                together.
              </p>
            </details>
            <details className="faq-item">
              <summary>Is Glow Social just a scheduler?</summary>
              <p>
                No. A scheduler publishes prepared content. Glow Social starts
                with content creation, then handles publishing after approval.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can I edit the posts?</summary>
              <p>
                Yes. You can review, edit, skip, or approve posts before they
                go live.
              </p>
            </details>
            <details className="faq-item">
              <summary>What if I already use Buffer, Later, or Hootsuite?</summary>
              <p>
                Keep your scheduler if it is working. If the calendar is empty
                because nobody has time to create posts, Glow Social solves a
                different problem: making the posts first.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="affordable-final-cta">
        <div className="container">
          <h2>See posts before you choose another scheduling tool.</h2>
          <p>
            Enter your website and Glow Social will show posts ready to approve
            before you connect accounts or pick a plan.
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
