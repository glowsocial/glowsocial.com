import { NextResponse } from "next/server";

/**
 * Next.js middleware — runs on every request.
 *
 * 1. Adds RFC 8288 Link response headers for agent discovery
 * 2. Supports Accept: text/markdown content negotiation (Markdown for Agents)
 * 3. Advertises x402 payment capability via X-Payment-* headers on /api routes
 */

// ------------------------------------------------------------------
// Markdown homepage (mirrors public/llms.txt — kept in sync manually)
// ------------------------------------------------------------------
const HOMEPAGE_MARKDOWN = `# Glow Social

> Done-for-you social media posting for local businesses starting at $99/month.

## What is Glow Social?

Glow Social is done-for-you social media management software that automatically creates and publishes 12+ professional posts per month across 13 platforms including Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile. Setup takes 5 minutes. No design skills, no content calendar, no scheduling — everything is handled automatically.

## Who is Glow Social for?

Glow Social is built for local businesses: restaurants, salons, contractors, dentists, gyms, law firms, boutiques, real estate agents, auto repair shops, and any service business that wants consistent social media without doing the work or hiring an agency.

## How much does Glow Social cost?

- **Glo Core:** $99/month — 12 posts, 12 platforms, GBP posting, automated scheduling
- **Glo Pro:** $149/month — 20+ posts, carousels, video, Google Review monitoring, analytics
- **Glo Unlimited:** $299/month — unlimited posts, unlimited video, unlimited carousels

No contracts. Cancel anytime.

## Key differentiators

- Done-for-you (not DIY tools) — content is created AND published automatically
- $99/month vs $300–3,000/month for freelancers/agencies
- 13 platform support including Google Business Profile (Buffer and Later don't support GBP)
- Google Review monitoring included in Pro+
- 5-minute setup, no design skills needed
- Posts are customized to each business using website content analysis
- OBA Framework (Offer, Benefit, Authority) for high-converting content

## Platforms supported

Facebook, Instagram, LinkedIn, Google Business Profile, TikTok, X (Twitter), Pinterest, Threads, Bluesky, YouTube Shorts, Discord, Slack, and Mastodon — 13 platforms total.

## Company information

- Founded by: Kathleen Celmins
- Website: https://glowsocial.com
- App: https://app.glowsocial.com
- Pricing: https://app.glowsocial.com/pricing
- Contact: hello@glowsocial.com

## Documentation

- Homepage: https://glowsocial.com
- How it works: https://glowsocial.com/how-glow-social-works
- FAQ: https://glowsocial.com/faq
- Blog: https://glowsocial.com/blog
- About: https://glowsocial.com/about
- For agencies: https://glowsocial.com/agency
- For home services: https://glowsocial.com/home-services
- Comparisons: https://glowsocial.com/compare
- Local service areas: https://glowsocial.com/local
`;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ---------------------------------------------------------------
  // Markdown content negotiation
  // When an agent sends Accept: text/markdown, return markdown
  // ---------------------------------------------------------------
  const accept = request.headers.get("accept") || "";
  if (pathname === "/" && accept.includes("text/markdown")) {
    const tokens = HOMEPAGE_MARKDOWN.split(/\s+/).length;
    return new NextResponse(HOMEPAGE_MARKDOWN, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": String(tokens),
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  // ---------------------------------------------------------------
  // Normal request — pass through and add Link headers
  // ---------------------------------------------------------------
  const response = NextResponse.next();

  // RFC 8288 Link headers for agent discovery (homepage only)
  if (pathname === "/") {
    response.headers.set(
      "Link",
      [
        '</.well-known/api-catalog>; rel="api-catalog"',
        '</llms.txt>; rel="describedby"; type="text/plain"',
        '</.well-known/mcp/server-card.json>; rel="service-desc"',
        '</.well-known/agent-skills/index.json>; rel="describedby"',
      ].join(", ")
    );
  }

  // x402 signal on API routes (advertise payment support)
  if (pathname.startsWith("/api/")) {
    response.headers.set("X-Payment-Required", "x402");
    response.headers.set(
      "X-Payment-Facilitator",
      "https://facilitator.x402.org"
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Run on all routes except static assets and Next internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.png|images/).*)",
  ],
};
