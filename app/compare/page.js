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
            See how we stack up against the tools you&apos;ve probably already
            tried. Spoiler: we actually do the work for you.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: 80 }}>
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
