import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import Link from "next/link";
import RelatedPosts from "@/app/components/RelatedPosts";
import AuthorBio, { PersonJsonLd } from "@/app/components/AuthorBio";

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

function FaqJsonLd({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ArticleJsonLd({ title, description, date, slug }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description || `${title} — Glow Social Blog`,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: "Kathleen Celmins",
      url: "https://glowsocial.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Glow Social",
      url: "https://glowsocial.com",
      logo: {
        "@type": "ImageObject",
        url: "https://glowsocial.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://glowsocial.com/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbJsonLd({ title, slug }) {
  const schema = {
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
        name: "Blog",
        item: "https://glowsocial.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://glowsocial.com/blog/${slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);
  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);
  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <article className="blog-post">
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        date={post.date}
        slug={slug}
      />
      <BreadcrumbJsonLd title={post.title} slug={slug} />
      <PersonJsonLd />
      {post.faqs && <FaqJsonLd faqs={post.faqs} />}
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

      {/* Author Bio */}
      <AuthorBio />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </article>
  );
}
