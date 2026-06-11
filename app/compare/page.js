import Link from "next/link";
import { getAllComparisonPages } from "@/lib/posts";

export const metadata = {
  title: "Glow Social vs. Competitors",
  description:
    "See how Glow Social compares to Buffer, Later, Hootsuite, Sprout Social, and other social media tools. Side-by-side comparisons for local businesses.",
};

export default function CompareIndexPage() {
  const pages = getAllComparisonPages();

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Compare Glow Social</h1>
          <p>
            Compare the tools that help you post with the one that starts by
            making posts from your website.
          </p>
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
