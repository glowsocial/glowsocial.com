import Link from "next/link";

export default function LatestInsights({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="latest-insights" style={{ padding: "80px 0", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="section-badge" style={{ display: "inline-block", background: "var(--accent-light)", color: "var(--accent-dark)", padding: "4px 12px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 600 }}>Insights</p>
          <h2 style={{ fontSize: "2.2rem", marginTop: "12px", textTransform: "none", letterSpacing: 0 }}>Latest from our blog</h2>
          <p className="section-sub" style={{ margin: "16px auto 0", maxWidth: "600px", color: "var(--text-muted)" }}>
            Practical advice, strategies, and resources for local business owners looking to stay visible online.
          </p>
        </div>

        <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {posts.map((post) => {
            const formattedDate = post.date
              ? new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })
              : null;

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
                style={{
                  background: "#fff",
                  border: "1px solid #dde6ee",
                  borderRadius: "12px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  color: "inherit",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
              >
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "12px" }}>
                  {formattedDate} {post.readingTime && `· ${post.readingTime}`}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px", color: "var(--accent-dark)", lineHeight: 1.4, textTransform: "none", letterSpacing: 0 }}>
                  {post.title}
                </h3>
                {post.description && (
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1, marginBottom: "20px" }}>
                    {post.description.length > 120
                      ? post.description.slice(0, 120) + "…"
                      : post.description}
                  </p>
                )}
                <span className="read-more" style={{ fontWeight: 600, color: "var(--accent-dark)", fontSize: "0.9rem" }}>
                  Read article →
                </span>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/blog" className="btn btn--outline btn--lg">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
