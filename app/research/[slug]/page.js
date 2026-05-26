import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";

export async function generateStaticParams() {
  const slugs = getAllSlugs("research");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const report = getPostBySlug("research", slug);
  if (!report) return { title: "Report Not Found" };

  return {
    title: report.title,
    description: report.description || `${report.title} - Glow Social Research`,
    alternates: {
      canonical: `/research/${slug}`,
    },
    openGraph: {
      title: report.title,
      description: report.description,
      type: "article",
      url: `https://glowsocial.com/research/${slug}`,
      siteName: "Glow Social",
      publishedTime: report.date,
    },
  };
}

function ReportJsonLd({ report, slug }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Report",
    "@id": `https://glowsocial.com/research/${slug}#report`,
    name: report.title,
    headline: report.title,
    description: report.description,
    url: `https://glowsocial.com/research/${slug}`,
    datePublished: report.date,
    dateModified: report.updated || report.date,
    author: {
      "@type": "Organization",
      name: "Glow Social",
      url: "https://glowsocial.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Glow Social",
      url: "https://glowsocial.com",
      logo: {
        "@type": "ImageObject",
        url: "https://glowsocial.com/images/glow-social-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://glowsocial.com/research/${slug}`,
    },
  };

  if (report.datasetName) {
    schema.isBasedOn = {
      "@type": "Dataset",
      name: report.datasetName,
      description: report.datasetDescription || report.description,
    };
  }

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
        name: "Research",
        item: "https://glowsocial.com/research",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title || slug,
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

export default async function ResearchReportPage({ params }) {
  const { slug } = await params;
  const report = getPostBySlug("research", slug);
  if (!report) notFound();

  const contentHtml = markdownToHtml(report.content);

  return (
    <article className="blog-post">
      <ReportJsonLd report={report} slug={slug} />
      <BreadcrumbJsonLd title={report.title} slug={slug} />
      <header className="blog-post-header">
        <Link
          href="/research"
          style={{
            fontSize: "0.85rem",
            color: "var(--accent-dark)",
            fontWeight: 600,
            display: "inline-block",
            marginBottom: 20,
          }}
        >
          Back to Research
        </Link>
        <h1>{report.title}</h1>
        <div className="blog-post-meta">
          <span>Glow Social Research</span>
          {report.date && (
            <span>
              {new Date(report.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </span>
          )}
          {report.readingTime && <span>{report.readingTime}</span>}
        </div>
      </header>

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
