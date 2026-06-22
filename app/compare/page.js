import Link from "next/link";
import { getAllComparisonPages } from "@/lib/posts";

const PAGE_URL = "https://glowsocial.com/compare";

export const metadata = {
  title: "Glow Social vs. Competitors",
  description:
    "See how Glow Social compares to Buffer, Later, Hootsuite, Sprout Social, and other social media tools. Side-by-side comparisons for local businesses.",
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Glow Social vs. Competitors",
    description:
      "Compare Glow Social with schedulers, AI writers, and agency alternatives to see which option actually handles the content burden for local businesses.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png?v=compare-2026-06",
        width: 1200,
        height: 630,
        alt: "Glow Social comparison guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Social vs. Competitors",
    description:
      "See how Glow Social compares to schedulers, AI writers, and agency-style options for small business social media.",
    images: ["https://glowsocial.com/images/og-image.png?v=compare-2026-06"],
  },
};

function CompareIndexJsonLd({ pages }) {
  const topPages = pages.slice(0, 8);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Glow Social comparison guides",
      url: PAGE_URL,
      description:
        "Comparison guides for business owners choosing between Glow Social, schedulers, AI tools, and agency alternatives.",
      isPartOf: {
        "@type": "WebSite",
        name: "Glow Social",
        url: "https://glowsocial.com",
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: topPages.map((page, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: page.title,
          url: `https://glowsocial.com/compare/${page.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does Glow Social do differently from a social media scheduler?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Glow Social starts by creating posts from your website so the owner is not staring at an empty content calendar. A scheduler mainly helps publish posts you already made.",
          },
        },
        {
          "@type": "Question",
          name: "Who should use these Glow Social comparison guides?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "These guides are for local businesses and service businesses deciding whether they need a scheduler, an agency, an AI writer, or a done-for-you posting workflow that still lets them preview the work first.",
          },
        },
        {
          "@type": "Question",
          name: "When is Glow Social a better fit than a full agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Glow Social is usually a better fit when the main need is steady organic posting and approval control, not paid ads, campaign strategy, custom shoots, or ongoing community management.",
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
          name: "Compare Glow Social",
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

export default function CompareIndexPage() {
  const pages = getAllComparisonPages();

  return (
    <>
      <CompareIndexJsonLd pages={pages} />

      <section className="blog-hero">
        <div className="container">
          <h1>Compare Glow Social</h1>
          <p>
            Compare the tools that help you post with the one that starts by
            making posts from your website.
          </p>
          <div
            style={{
              marginTop: 24,
              maxWidth: 760,
              padding: "20px 24px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(14, 14, 14, 0.08)",
            }}
          >
            <h2 style={{ textAlign: "left", marginBottom: 12 }}>Direct answer</h2>
            <p style={{ marginBottom: 0 }}>
              Glow Social is the better fit than most social media schedulers when your real
              problem is not publishing. It is getting the posts made in the first place. Use
              these comparisons to see when you need a scheduler, when you need an agency, and
              when a preview-first posting service is enough.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: 80 }}>
        <section style={{ padding: "56px 0 28px" }}>
          <p className="section-badge">Buyer Decision Guides</p>
          <h2 style={{ textAlign: "left", maxWidth: 760 }}>
            Start with the problem you are actually trying to solve.
          </h2>
          <div className="blog-grid" style={{ marginTop: 28 }}>
            <Link
              href="/affordable-social-media-management"
              className="blog-card"
            >
              <div className="blog-card-body">
                <h3>Social media management under $100</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  Compare low-cost options when you need posts handled without
                  a full agency retainer.
                </p>
                <span className="read-more">Read guide →</span>
              </div>
            </Link>
            <Link
              href="/social-media-scheduler-that-creates-content"
              className="blog-card"
            >
              <div className="blog-card-body">
                <h3>Scheduler that creates content</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  See what to use when the calendar is not the problem. The
                  missing piece is creating the posts.
                </p>
                <span className="read-more">Read guide →</span>
              </div>
            </Link>
            <Link
              href="/google-business-profile-posting-service"
              className="blog-card"
            >
              <div className="blog-card-body">
                <h3>Google Business Profile posting</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  Keep your Google profile and social channels active from one
                  approval-first posting workflow.
                </p>
                <span className="read-more">Read guide →</span>
              </div>
            </Link>
          </div>
        </section>

        <section style={{ padding: "0 0 36px" }}>
          <div
            style={{
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <div className="blog-card">
              <div className="blog-card-body">
                <h3>Need the pricing angle?</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  See when under-$100 posting is realistic and what is still left on the owner.
                </p>
                <Link href="/affordable-social-media-management" className="read-more">
                  Review pricing guide →
                </Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-body">
                <h3>Need the workflow angle?</h3>
                <p style={{ fontSize: "0.9rem" }}>
                  See how Glow Social creates posts from your website before you ever pick a plan.
                </p>
                <Link href="/how-it-works" className="read-more">
                  See how it works →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {pages.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <h2 style={{ textTransform: "none", letterSpacing: 0 }}>
              Comparison pages coming soon
            </h2>
          </div>
        ) : (
          <div className="blog-grid">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/compare/${page.slug}`}
                className="blog-card"
              >
                <div className="blog-card-body">
                  <h3>{page.title}</h3>
                  {page.description && (
                    <p style={{ fontSize: "0.9rem" }}>{page.description}</p>
                  )}
                  <span className="read-more">Read comparison →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
