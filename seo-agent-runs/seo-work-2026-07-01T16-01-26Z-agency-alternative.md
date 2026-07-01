# SEO/AEO work run — social media agency alternative refresh

- **Date:** 2026-07-01
- **Route:** `/social-media-agency-alternative`
- **Canonical URL:** `https://glowsocial.com/social-media-agency-alternative`
- **Work type:** Buyer-intent service/comparison page refresh
- **Glow commit:** not committed by this cron run
- **Boomp migration target:** Re-sync latest Glow version before final Glow→Boomp URL move; preserve the agency-vs-posting-service scope distinction and preview-first CTA if the route is ported.

## Why this page

The route is a high-intent buyer page for small businesses evaluating whether they need an agency retainer. It already had useful comparison content, but the title and top answer did not expose the price/scope distinction as clearly as adjacent cost and agency-alternative pages.

This fits the current SEO/AEO priority pattern: buyer intent over broad traffic, owner-burden framing, cost/alternatives language, and preview-first conversion opportunities.

## Bet

Agency-alternative searchers are often trying to avoid a full retainer, not learn what agencies do. A stronger title, immediate price/scope answer, WebPage schema, FAQ schema that matches visible cost copy, and a link into the DIY-vs-agency calculator should make the page more index-worthy and conversion-ready for social media agency alternative / cheaper agency alternative / small business social media agency cost queries.

## Files changed

- `app/social-media-agency-alternative/page.js`
- `seo-tracking-2026-06-07.md`
- `seo-work-log.json`
- `seo-agent-runs/seo-work-2026-07-01T16-01-26Z-agency-alternative.md`

## What changed

- Retitled the page metadata, Open Graph title, and Twitter title around “Social Media Agency Alternative from $99/month.”
- Rewrote the hero to compare agency scope against the lighter posting job the owner actually needs handled.
- Expanded the near-top direct answer with explicit agency-vs-posting-service guidance and current starting price.
- Added WebPage JSON-LD and expanded FAQPage JSON-LD with a visible price/scope question.
- Added a natural related link to `/tools/diy-vs-agency-cost-calculator` so agency-intent visitors can quantify the owner-time tradeoff.

## Expected signal

At 7/14/28-day checks, look for:

- indexing/crawl status for `/social-media-agency-alternative`;
- impressions and clicks for social media agency alternative, cheaper alternative to social media agency, small business social media agency alternative, social media agency cost alternative, and done-for-you social media posting terms;
- CTR improvement from the price/scope title and snippet;
- assisted movement from this page into `/preview`, `/pricing`, and `/tools/diy-vs-agency-cost-calculator`.

## Do not overlearn if weak

If the page underperforms, do not conclude that agency-alternative intent is weak. Possible causes include Google preferring article-style agency-cost guides over service pages, overlap with `/blog/cheaper-alternative-to-social-media-agency` and agency comparison posts, low exact-match search volume, title rewriting, or needing more internal links from cost/comparison hubs.

## Verification results

- `npx eslint app/social-media-agency-alternative/page.js` passed.
- `npm run build` passed. Next.js compiled successfully and generated 794 static pages.
- Local HTML smoke passed on `http://127.0.0.1:3018/social-media-agency-alternative`: page returned HTML, title/H1/direct-answer phrase, FAQPage + WebPage schema markers, preview CTA, canonical route, and the `/tools/diy-vs-agency-cost-calculator` link were present.
- `npm run indexnow -- https://glowsocial.com/social-media-agency-alternative` submitted 1 URL to IndexNow.

## Changed URLs for manual Google indexing

- `https://glowsocial.com/social-media-agency-alternative`
