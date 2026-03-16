import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllSlugs("comparisons");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPostBySlug("comparisons", slug);
  if (!page) return { title: "Page Not Found" };

  return {
    title: page.title,
    description: page.description || `${page.title} — Glow Social`,
    alternates: {
      canonical: `/compare/${slug}`,
    },
  };
}

export default async function ComparePage({ params }) {
  const { slug } = await params;
  const page = getPostBySlug("comparisons", slug);
  if (!page) notFound();

  const contentHtml = markdownToHtml(page.content);

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <Link
          href="/compare"
          style={{
            fontSize: "0.85rem",
            color: "var(--accent-dark)",
            fontWeight: 600,
            display: "inline-block",
            marginBottom: 20,
          }}
        >
          ← All Comparisons
        </Link>
        <h1>{page.title}</h1>
      </header>

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <div className="post-cta-box">
        <h3>Ready to switch?</h3>
        <p>
          Glow Social creates and publishes professional content for your
          business — posts, Google Business Profile, and reviews, all
          handled.
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
