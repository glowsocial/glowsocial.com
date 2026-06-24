# SEO Work Run

Date: 2026-06-24T19:17:36Z
Route: /affordable-social-media-management

## Work Type

crawled-not-indexed canonical improvement

## Bet

Affordable social media management searches are not only price-comparison searches. The page is more index-worthy and conversion-ready when it explains that the cheapest option is only truly cheap if the content creation burden is handled.

## Why This Page

The Search Console crawled-but-not-indexed export included `https://glowsocial.com/affordable-social-media-management/`, and the filtered queue identified it as a real local page and a Priority 1 buyer-intent / migration-worthy canonical. It is also a likely Boomp 301 destination later.

## Expected Signal

Check whether the canonical page moves from crawled/not indexed to indexed, and later whether it gains impressions/clicks for affordable social media management, social media management under $100, low-cost social media management, and related small-business service queries.

## Do Not Overlearn If

If the page remains unindexed, do not assume the page topic is weak. Possible causes include duplicate/competing affordable-management routes, insufficient internal links, crawl timing, the existing blog guide competing with the service page, or Google treating this as too similar to related pricing/cost pages.

## Changes

- Updated metadata title/description to lead with "affordable social media management" and under-$100 intent.
- Added WebPage JSON-LD alongside the existing Service, FAQPage, and BreadcrumbList schema.
- Added a visible/structured FAQ answer for "What is the most affordable social media management option?"
- Strengthened the top direct-answer block to explain that cheap schedulers still require owner time for captions, ideas, graphics, and calendar upkeep.
- Added an inbound link from `/blog/best-social-media-manager-alternatives-small-business` to `/affordable-social-media-management`.

## Files Changed

- `app/affordable-social-media-management/page.js`
- `content/blog/best-social-media-manager-alternatives-small-business.md`
- `seo-crawled-not-indexed-queue-2026-06-24.md`
- `seo-work-log.json`
- `seo-agent-runs/seo-work-2026-06-24T19-17-36Z-affordable-canonical.md`

## Boomp Migration Note

Port this improvement to Boomp before switch. Likely Boomp destination: `https://boomp.net/affordable-social-media-management`. Preserve the buyer-intent framing around low price plus removed content burden, but adapt Glow-specific product language to Boomp.

## Verification

- Passed: `npm run lint -- app/affordable-social-media-management/page.js`
- Passed: `npm run build`
- Passed: `npm run indexnow -- https://glowsocial.com/affordable-social-media-management`

## Indexing

```bash
npm run indexnow -- https://glowsocial.com/affordable-social-media-management
```
