/**
 * /robots.txt — custom route handler
 *
 * Uses a route handler instead of Next.js metadata robots() because
 * the metadata API doesn't support Content-Signal directives.
 */
export function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /privacy-policy
Disallow: /terms-conditions
Disallow: /social-media-quiz
Disallow: /locations
Disallow: /glow-up
Disallow: /more
Disallow: /15-min
Disallow: /post-ideas
Disallow: /demo

Sitemap: https://glowsocial.com/sitemap.xml
Host: https://glowsocial.com

# Content Signals — AI content usage preferences
# https://contentsignals.org/
Content-Signal: ai-train=no, search=yes, ai-input=no
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
