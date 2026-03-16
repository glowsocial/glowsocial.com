import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description || `${post.title} — Glow Social Blog`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);
  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <Link
          href="/blog"
          style={{
            fontSize: "0.85rem",
            color: "var(--accent-dark)",
            fontWeight: 600,
            display: "inline-block",
            marginBottom: 20,
          }}
        >
          ← Back to Blog
        </Link>
        <h1>{post.title}</h1>
        <div className="blog-post-meta">
          {post.date && (
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          {post.readingTime && <span>{post.readingTime}</span>}
        </div>
      </header>

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Post-content CTA */}
      <div className="post-cta-box">
        <h3>Ready to stop worrying about social media?</h3>
        <p>
          Glow Social creates and publishes professional content for your
          business — so you can focus on what you do best.
        </p>
        <a
          href="https://app.glowsocial.com/pricing/"
          className="btn btn--primary"
        >
          Get Started — $49/mo
        </a>
      </div>
    </article>
  );
}
