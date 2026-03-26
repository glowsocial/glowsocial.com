import Link from "next/link";

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <nav className="related-posts" aria-label="Related articles">
      <h2 className="related-posts-title">Keep Reading</h2>
      <div className="related-posts-grid">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="related-post-card"
          >
            <h3 className="related-post-heading">{post.title}</h3>
            {post.description && (
              <p className="related-post-desc">
                {post.description.length > 120
                  ? post.description.slice(0, 120) + "…"
                  : post.description}
              </p>
            )}
            <span className="related-post-meta">
              {post.readingTime && <span>{post.readingTime}</span>}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
