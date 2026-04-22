import { getAllBlogPosts, getAllComparisonPages } from "@/lib/posts";

const BASE_URL = "https://glowsocial.com";
const FEED_TITLE = "Glow Social Blog";
const FEED_DESCRIPTION =
  "Social media tips, automation strategies, and marketing insights for local businesses and agencies. AI-powered social media management by Glow Social.";

/**
 * Escape XML special characters
 */
function escapeXml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Build a Pinterest-optimized static image URL for a post.
 * Uses pre-generated static PNGs in /pins/ — 1000×1500, 2:3 ratio.
 */
function buildImageUrl(post) {
  return `${BASE_URL}/pins/${post.slug}.png`;
}

/**
 * Generate RSS 2.0 XML feed.
 * Includes <enclosure> and <media:content> for Pinterest-friendly image handling.
 */
function generateRssFeed(posts) {
  const lastBuildDate = posts.length
    ? new Date(posts[0].date).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const postUrl = `${BASE_URL}/blog/${post.slug}`;
      const imageUrl = buildImageUrl(post);
      const pubDate = post.date
        ? new Date(post.date).toUTCString()
        : new Date().toUTCString();

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.description || "")}</description>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${escapeXml(imageUrl)}" type="image/png" length="0" />
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/png" width="1000" height="1500" />
      <media:thumbnail url="${escapeXml(imageUrl)}" width="1000" height="1500" />
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${BASE_URL}</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE_URL}/glow-social-og.png</url>
      <title>${escapeXml(FEED_TITLE)}</title>
      <link>${BASE_URL}</link>
    </image>
${items}
  </channel>
</rss>`;
}

export async function GET() {
  const blogPosts = getAllBlogPosts();

  // Include comparison pages too — they're high-value content
  const comparisonPosts = getAllComparisonPages()
    .filter((p) => p.date)
    .map((p) => ({
      ...p,
      // Rewrite slug to comparison URL path
      slug: `../compare/${p.slug}`,
    }));

  // Merge and sort by date (newest first), limit to 200 items
  const allPosts = [...blogPosts, ...comparisonPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 200);

  const feed = generateRssFeed(allPosts);

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
