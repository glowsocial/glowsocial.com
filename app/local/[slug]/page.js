import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllSlugs("local");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPostBySlug("local", slug);
  if (!page) return { title: "Page Not Found" };

  return {
    title: page.title,
    description: page.description || `${page.title} — Glow Social`,
    alternates: {
      canonical: `/local/${slug}`,
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

function ServiceJsonLd({ title, city }) {
  if (!city) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Done-For-You Social Media Management",
    provider: {
      "@type": "Organization",
      name: "Glow Social",
      url: "https://glowsocial.com",
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    description: title,
    offers: {
      "@type": "Offer",
      price: "49",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "49",
        priceCurrency: "USD",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
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
        name: "Cities",
        item: "https://glowsocial.com/local",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://glowsocial.com/local/${slug}`,
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

export default async function LocalPage({ params }) {
  const { slug } = await params;
  const page = getPostBySlug("local", slug);
  if (!page) notFound();

  const contentHtml = markdownToHtml(page.content);

  return (
    <article className="blog-post">
      <BreadcrumbJsonLd title={page.title} slug={slug} />
      {page.faqs && <FaqJsonLd faqs={page.faqs} />}
      <ServiceJsonLd title={page.title} city={page.city} />
      <header className="blog-post-header">
        <Link
          href="/local"
          style={{
            fontSize: "0.85rem",
            color: "var(--accent-dark)",
            fontWeight: 600,
            display: "inline-block",
            marginBottom: 20,
          }}
        >
          ← All Cities
        </Link>
        <h1>{page.title}</h1>
      </header>

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <div className="post-cta-box">
        <h3>Ready to automate your social media?</h3>
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
