import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import Link from "next/link";
import RelatedPosts from "@/app/components/RelatedPosts";
import AuthorBio, { PersonJsonLd } from "@/app/components/AuthorBio";
import { getPricing } from "@/app/pricing-config";

const SITE_URL = "https://glowsocial.com";

export async function generateStaticParams() {
  const slugs = getAllSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

function absoluteUrl(url) {
  if (!url) return undefined;
  if (/^https?:\/\//.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function youtubeEmbedUrl(video) {
  if (video?.youtubeId) return `https://www.youtube.com/embed/${video.youtubeId}`;
  if (video?.embedUrl) return video.embedUrl;
  return undefined;
}

function toIsoDuration(duration) {
  if (!duration) return undefined;
  if (typeof duration === "string" && duration.startsWith("PT")) return duration;

  const totalSeconds = Math.round(Number(duration));
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return undefined;

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `PT${hours ? `${hours}H` : ""}${minutes ? `${minutes}M` : ""}${seconds || (!hours && !minutes) ? `${seconds}S` : ""}`;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);
  if (!post) return { title: "Post Not Found" };

  const ogImageUrl = `https://glowsocial.com/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description || "")}`;
  const videoUrl = absoluteUrl(post.video?.contentUrl || youtubeEmbedUrl(post.video));
  const videoType = post.video?.contentUrl ? "video/mp4" : "text/html";

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
      url: `https://glowsocial.com/blog/${slug}`,
      siteName: "Glow Social",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: ["Kathleen Celmins"],
      images: [{ url: ogImageUrl, width: 1000, height: 1500 }],
      videos: videoUrl
        ? [{ url: videoUrl, width: 1920, height: 1080, type: videoType }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImageUrl],
    },
    other: {
      "pin:media": ogImageUrl,
      "pin:description": post.description || post.title,
      "pin:url": `https://glowsocial.com/blog/${slug}`,
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

function ArticleJsonLd({ title, description, date, updated, slug, video }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description || `${title} — Glow Social Blog`,
    datePublished: date,
    dateModified: updated || date,
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
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    ...(video ? { video: { "@id": `${SITE_URL}/blog/${slug}#video-object` } } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function VideoJsonLd({ video, date, slug }) {
  const contentUrl = absoluteUrl(video?.contentUrl);
  const embedUrl = absoluteUrl(youtubeEmbedUrl(video));
  if (!contentUrl && !embedUrl) return null;

  const thumbnailUrl = absoluteUrl(video.thumbnailUrl);
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${SITE_URL}/blog/${slug}#video-object`,
    name: video.name || video.title,
    description: video.description,
    thumbnailUrl: thumbnailUrl ? [thumbnailUrl] : undefined,
    uploadDate: video.uploadDate || date,
    duration: toIsoDuration(video.duration || video.durationSeconds),
    contentUrl,
    embedUrl,
    transcript: video.transcript,
    url: `${SITE_URL}/blog/${slug}#video`,
    publisher: {
      "@type": "Organization",
      name: "Glow Social",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
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
        name: "Blog",
        item: "https://glowsocial.com/blog",
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

function BlogVideoBlock({ video }) {
  const embedUrl = youtubeEmbedUrl(video);
  if (!embedUrl && !video?.contentUrl) return null;

  const videoTitle = video.name || video.title || "Watch the short video";

  return (
    <section id="video" className="blog-video-block" aria-labelledby="blog-video-title">
      <p className="blog-video-kicker">Short video</p>
      <h2 id="blog-video-title">{videoTitle}</h2>
      {video.description && <p>{video.description}</p>}
      {embedUrl ? (
        <iframe
          className="blog-video-player"
          src={embedUrl}
          title={videoTitle}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <video
          className="blog-video-player"
          controls
          preload="metadata"
          poster={video.thumbnailUrl}
        >
          <source src={video.contentUrl} type="video/mp4" />
          {video.captionsUrl && (
            <track
              kind="captions"
              src={video.captionsUrl}
              srcLang="en"
              label="English"
            />
          )}
        </video>
      )}
      {video.url && (
        <p className="blog-video-link">
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </p>
      )}
      {video.transcript && (
        <details className="blog-video-transcript">
          <summary>Video transcript</summary>
          <p>{video.transcript}</p>
        </details>
      )}
    </section>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug("blog", slug);
  if (!post) notFound();

  const pricing = getPricing();
  const contentHtml = markdownToHtml(post.content);
  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <article className="blog-post">
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        date={post.date}
        updated={post.updated}
        slug={slug}
        video={post.video}
      />
      <BreadcrumbJsonLd title={post.title} slug={slug} />
      <PersonJsonLd />
      {post.faqs && <FaqJsonLd faqs={post.faqs} />}
      {post.video && <VideoJsonLd video={post.video} date={post.date} slug={slug} />}
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
                timeZone: "UTC",
              })}
            </span>
          )}
          {post.readingTime && <span>{post.readingTime}</span>}
          {post.updated && post.updated !== post.date && (
            <span>
              Updated{" "}
              {new Date(post.updated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </span>
          )}
        </div>
      </header>

      <BlogVideoBlock video={post.video} />

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Post-content CTA */}
      <div className="post-cta-box">
        <h3>Want to see your posts before you choose a plan?</h3>
        <p>
          Glow Social turns your website into posts ready to approve, then
          publishes the ones you approve.
        </p>
        <a
          href="https://app.glowsocial.com/preview"
          className="btn btn--primary"
        >
          See posts from your website first — {pricing.startingAtShort}
        </a>
      </div>

      {/* Pinterest image — save-to-Pinterest friendly, 2:3 */}
      <div className="pinterest-image-block">
        <p className="pinterest-label">📌 Save this to Pinterest</p>
        <img
          src={`/pins/${post.slug}.png`}
          alt={post.title}
          width={500}
          height={750}
          loading="lazy"
          style={{ borderRadius: "12px", display: "block", margin: "0 auto" }}
        />
      </div>

      {/* Author Bio */}
      <AuthorBio />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </article>
  );
}
