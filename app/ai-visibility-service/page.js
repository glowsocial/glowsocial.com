import Link from "next/link";
import { getPricing } from "../pricing-config";
import { previewUrl } from "../../lib/marketing-links";
import "../affordable-social-media-management/affordable.css";

export const dynamic = "force-dynamic";

const PAGE_URL = "https://glowsocial.com/ai-visibility-service";

const faqItems = [
  {
    question: "What is an AI visibility service?",
    answer:
      "An AI visibility service helps a business become easier for AI assistants and AI-powered search results to discover, understand, verify, and cite.",
  },
  {
    question: "Is AI visibility different from SEO?",
    answer:
      "It overlaps heavily with SEO. The difference is the emphasis on direct answers, entity clarity, structured data, fresh public activity, and citation-worthy proof.",
  },
  {
    question: "What should a local business do first for AI visibility?",
    answer:
      "Start by making your website and public profiles clear, consistent, crawlable, and specific about services, location, pricing, and proof.",
  },
  {
    question: "Does Glow Social include AI visibility work?",
    answer:
      "Yes. Glow Social supports AI visibility by keeping public-facing content active, answer-ready, and consistent across your website, social channels, and Google Business Profile workflow.",
  },
];

export const metadata = {
  title: "AI Visibility Service for Local Businesses",
  description:
    "An AI visibility service for local businesses that want to show up more clearly in ChatGPT, Gemini, Perplexity, and AI-powered search results.",
  alternates: {
    canonical: "/ai-visibility-service",
  },
  openGraph: {
    title: "AI Visibility Service for Local Businesses",
    description:
      "Glow Social helps local businesses become easier for AI assistants and AI search results to discover, understand, and reference.",
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
    title: "AI Visibility Service for Local Businesses",
    description:
      "Improve how clearly your business shows up in ChatGPT, Gemini, Perplexity, and other AI-powered answers.",
    images: ["https://glowsocial.com/images/og-image.png"],
  },
};

function JsonLd({ pricing }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Visibility Service",
      serviceType: "AI search visibility and answer-ready content support",
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
        "Glow Social helps local businesses become easier for AI assistants and AI-powered search results to discover, understand, verify, and cite.",
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
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
          name: "AI Visibility Service",
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

export default function AIVisibilityPage() {
  const pricing = getPricing();
  const heroPreviewUrl = previewUrl("ai_visibility_service_page", "ai_visibility_hero");
  const finalPreviewUrl = previewUrl("ai_visibility_service_page", "ai_visibility_final");

  return (
    <div className="affordable-page">
      <JsonLd pricing={pricing} />

      <section className="affordable-hero">
        <div className="container affordable-hero-grid">
          <div className="affordable-hero-copy">
            <p className="affordable-eyebrow">AI visibility for local businesses</p>
            <h1>An AI visibility service that makes your business easier to recommend.</h1>
            <p className="affordable-lede">
              People now ask ChatGPT, Gemini, Perplexity, and Google&apos;s AI results who to hire.
              Glow Social helps your business show up more clearly by turning your website and public
              profiles into active, answer-ready proof.
            </p>
            <div className="affordable-cta-row">
              <a href={heroPreviewUrl} className="btn btn--primary btn--lg">
                See posts from your website first
              </a>
              <Link href="#checklist" className="btn btn--white-outline btn--lg">
                See the checklist
              </Link>
            </div>
            <div className="affordable-proof-row" aria-label="AI visibility proof points">
              <span>Answer-ready content</span>
              <span>Google profile support</span>
              <span>Fresh public activity</span>
              <span>{pricing.startingAtFull}</span>
            </div>
          </div>

          <div className="agency-alternative-visual" aria-label="AI visibility workflow">
            <div className="affordable-card">
              <h3>1. Clarify the business</h3>
              <p>Make services, locations, pricing, proof, and positioning easier for machines to understand.</p>
            </div>
            <div className="affordable-card">
              <h3>2. Publish useful answers</h3>
              <p>Turn site content into posts and pages that answer real customer questions directly.</p>
            </div>
            <div className="affordable-card">
              <h3>3. Stay visible in public</h3>
              <p>Keep Google Business Profile and social channels active so the business looks current and credible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-answer">
        <div className="container affordable-answer-box">
          <h2>Direct Answer</h2>
          <p>
            An AI visibility service helps a business become easier for AI assistants to discover,
            understand, verify, and cite. For local businesses, that usually means clear service pages,
            direct answers to common questions, structured data, fresh public activity, and proof that
            the business is real and current. Glow Social supports that work starting at {pricing.startingAtFull}.
          </p>
        </div>
      </section>

      <section id="checklist" className="affordable-section">
        <div className="container">
          <p className="section-badge">AI Search Checklist</p>
          <h2>What local businesses need before AI can recommend them confidently.</h2>
          <p className="section-sub">
            AI search does not start with hacks. It starts with making the business easier to identify,
            trust, and explain.
          </p>

          <div className="affordable-card-grid">
            <div className="affordable-card">
              <h3>Make the entity clear</h3>
              <p>Name the services, service area, pricing, differentiators, and best-fit customers plainly.</p>
            </div>
            <div className="affordable-card">
              <h3>Publish answer-ready pages</h3>
              <p>Start with direct answers to questions like cost, fit, comparisons, and what to do first.</p>
            </div>
            <div className="affordable-card">
              <h3>Add structured data</h3>
              <p>Service, FAQ, article, and breadcrumb schema help machines interpret the page correctly.</p>
            </div>
            <div className="affordable-card">
              <h3>Build public proof</h3>
              <p>Reviews, examples, FAQs, pricing context, and useful tools make the business more cite-worthy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-compare">
        <div className="container">
          <p className="section-badge">AI Visibility vs Traditional SEO</p>
          <h2>Same foundation, different emphasis.</h2>
          <p className="section-sub">
            AI visibility overlaps heavily with SEO, but it puts more pressure on clear answers,
            entity consistency, and public proof that can be reused in generated answers.
          </p>

          <div className="affordable-table-wrap">
            <table className="affordable-table">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Traditional SEO focus</th>
                  <th>AI visibility focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Discovery</td>
                  <td>Rank pages for search queries</td>
                  <td>Be easy for assistants to retrieve and summarize</td>
                </tr>
                <tr>
                  <td>Content</td>
                  <td>Cover keywords comprehensively</td>
                  <td>Answer practical questions directly and clearly</td>
                </tr>
                <tr>
                  <td>Trust</td>
                  <td>Links, reviews, and technical health</td>
                  <td>Consistent business facts, proof, and fresh activity</td>
                </tr>
                <tr>
                  <td>Structure</td>
                  <td>Strong page targeting and crawlability</td>
                  <td>Schema, entity clarity, and citation-friendly formatting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">How Glow Social Helps</p>
          <h2>One workflow can support both social output and AI visibility.</h2>
          <p className="section-sub">
            Glow Social is not a separate AI-visibility-only dashboard. It improves the public signals that
            AI systems rely on when they decide what to mention.
          </p>

          <div className="affordable-card-grid">
            <div className="affordable-card">
              <h3>Website to posts</h3>
              <p>Fresh posts sourced from your website keep core services and offers active in public.</p>
            </div>
            <div className="affordable-card">
              <h3>Google profile support</h3>
              <p>
                <Link href="/google-business-profile-posting-service">
                  Google Business Profile posting
                </Link>{" "}
                helps local customers and AI systems see that the business is current.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Answer-first content</h3>
              <p>
                Pages like{" "}
                <Link href="/social-media-scheduler-that-creates-content">
                  service explainers and comparisons
                </Link>{" "}
                make Glow Social easier to understand and cite.
              </p>
            </div>
            <div className="affordable-card">
              <h3>Approval before publishing</h3>
              <p>You stay in control while the business keeps publishing useful, consistent updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-faq">
        <div className="container">
          <p className="section-badge">FAQ</p>
          <h2>Common AI visibility questions</h2>
          <div className="faq-list">
            {faqItems.map((item) => (
              <div className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="affordable-final-cta">
        <div className="container affordable-final-cta-box">
          <p className="section-badge">See the workflow</p>
          <h2>Start with a free preview from your website.</h2>
          <p>
            If your business already has a website, Glow Social can turn it into posts ready to approve,
            then help keep the public footprint that supports AI visibility active over time.
          </p>
          <div className="affordable-cta-row affordable-cta-row--center">
            <a href={finalPreviewUrl} className="btn btn--primary btn--lg btn--glow">
              Get your free preview
            </a>
            <Link href="/pricing" className="btn btn--white-outline btn--lg">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
