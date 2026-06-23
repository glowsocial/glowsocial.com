import { notFound } from "next/navigation";
import Link from "next/link";
import { getPricing } from "@/app/pricing-config";
import { markdownToHtml } from "@/lib/markdown";
import { getAllDropSlugs, getAllDrops, getDropBySlug } from "@/lib/drops";

const SITE_URL = "https://glowsocial.com";

export async function generateStaticParams() {
  return getAllDropSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const drop = getDropBySlug(slug);
  if (!drop) return { title: "Drop Not Found" };
  const imageUrl = `${SITE_URL}/pins/${drop.slug}.png`;

  return {
    title: `${drop.title} | Boomp Drops`,
    description: drop.description,
    alternates: {
      canonical: `/drops/${drop.slug}`,
    },
    openGraph: {
      title: drop.title,
      description: drop.description,
      type: "article",
      url: `${SITE_URL}/drops/${drop.slug}`,
      siteName: "Glow Social",
      publishedTime: drop.date,
      modifiedTime: drop.updated || drop.date,
      authors: ["Kathleen Celmins"],
      images: [{ url: imageUrl, width: 1000, height: 1500 }],
    },
    twitter: {
      card: "summary_large_image",
      title: drop.title,
      description: drop.description,
      images: [imageUrl],
    },
    other: {
      "pin:media": imageUrl,
      "pin:description": drop.description || drop.title,
      "pin:url": `${SITE_URL}/drops/${drop.slug}`,
    },
  };
}

function ArticleJsonLd({ drop }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: drop.title,
    description: drop.description,
    datePublished: drop.date,
    dateModified: drop.updated || drop.date,
    author: {
      "@type": "Person",
      name: "Kathleen Celmins",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Glow Social",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/drops/${drop.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbJsonLd({ drop }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Drops",
        item: `${SITE_URL}/drops`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: drop.title,
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

function relatedDrops(currentDrop) {
  return getAllDrops()
    .filter((drop) => drop.slug !== currentDrop.slug && drop.cluster === currentDrop.cluster)
    .slice(0, 3);
}

function DropPinterestImage({ drop }) {
  return (
    <figure className="pinterest-image-block">
      <p className="pinterest-label">Save this Drop</p>
      <img
        src={`/pins/${drop.slug}.png`}
        alt={`${drop.title} — Boomp Drop graphic`}
        width={500}
        height={750}
        loading="lazy"
      />
    </figure>
  );
}

export default async function DropPage({ params }) {
  const { slug } = await params;
  const drop = getDropBySlug(slug);
  if (!drop) notFound();

  const pricing = getPricing();
  const contentHtml = markdownToHtml(drop.content);
  const firstSectionIndex = contentHtml.indexOf("<h2");
  const introHtml = firstSectionIndex === -1 ? contentHtml : contentHtml.slice(0, firstSectionIndex);
  const restHtml = firstSectionIndex === -1 ? "" : contentHtml.slice(firstSectionIndex);
  const related = relatedDrops(drop);

  return (
    <article className="blog-post drops-post">
      <ArticleJsonLd drop={drop} />
      <BreadcrumbJsonLd drop={drop} />

      <header className="blog-post-header drops-post-header">
        <Link href="/drops" className="drops-back-link">
          ← Back to Drops
        </Link>
        <div className="blog-card-meta">{drop.clusterLabel}</div>
        <h1>{drop.title}</h1>
        <div className="blog-post-meta">
          {drop.date && (
            <span>
              {new Date(drop.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </span>
          )}
          {drop.readingTime && <span>{drop.readingTime}</span>}
        </div>
      </header>

      <div
        className="blog-post-content drops-post-content"
        dangerouslySetInnerHTML={{ __html: introHtml }}
      />

      <DropPinterestImage drop={drop} />

      {restHtml && (
        <div
          className="blog-post-content drops-post-content"
          dangerouslySetInnerHTML={{ __html: restHtml }}
        />
      )}

      <div className="post-cta-box">
        <h3>Want posts from your own website?</h3>
        <p>
          Glow Social turns your website into posts ready to approve, then
          publishes the ones you approve.
        </p>
        <a href="https://app.glowsocial.com/preview" className="btn btn--primary">
          See posts from your website first — {pricing.startingAtShort}
        </a>
      </div>

      {related.length > 0 && (
        <section className="drops-related">
          <h2>More Drops on {drop.clusterLabel}</h2>
          <div className="blog-grid drops-card-grid">
            {related.map((item) => (
              <article key={item.slug} className="blog-card drops-card">
                <div className="blog-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link className="read-more drops-card__status" href={`/drops/${item.slug}`}>
                    Read Drop →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
