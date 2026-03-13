import Link from "next/link";
import { getAllBlogPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Tips, strategies, and insights for local business owners who want to grow their online presence without spending hours on social media.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>The Glow Social Blog</h1>
          <p>
            Tips, strategies, and insights for local businesses that want to
            stay visible without the grind.
          </p>
        </div>
      </section>

      <div className="container">
        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <h2 style={{ textTransform: "none", letterSpacing: 0 }}>Posts coming soon</h2>
            <p style={{ color: "var(--text-muted)", marginTop: 12 }}>
              We&apos;re migrating hundreds of articles. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
              >
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    {post.date
                      ? new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : ""}
                    {post.readingTime && ` · ${post.readingTime}`}
                  </div>
                  <h3>{post.title}</h3>
                  {post.description && <p>{post.description}</p>}
                  <span className="read-more">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
