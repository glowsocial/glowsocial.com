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

  const ogImageUrl = `https://glowsocial.com/api/og?title=${encodeURIComponent(page.title)}&description=${encodeURIComponent(page.description || "")}`;

  return {
    title: page.title,
    description: page.description || `${page.title} — Glow Social`,
    alternates: {
      canonical: `/compare/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: `https://glowsocial.com/compare/${slug}`,
      siteName: "Glow Social",
      authors: ["Kathleen Celmins"],
      images: [{ url: ogImageUrl, width: 1000, height: 1500 }],
    },
    other: {
      "pin:media": ogImageUrl,
      "pin:description": page.description || page.title,
      "pin:url": `https://glowsocial.com/compare/${slug}`,
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
        name: "Comparisons",
        item: "https://glowsocial.com/compare",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://glowsocial.com/compare/${slug}`,
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

export default async function ComparePage({ params }) {
  const { slug } = await params;
  const page = getPostBySlug("comparisons", slug);
  if (!page) notFound();

  const contentHtml = markdownToHtml(page.content);

  return (
    <article className="blog-post">
      <BreadcrumbJsonLd title={page.title} slug={slug} />
      {page.faqs && <FaqJsonLd faqs={page.faqs} />}
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
          href="https://app.glowsocial.com/"
          className="btn btn--primary"
        >
          Get Started — $49/mo
        </a>
      </div>
    </article>
  );
}
