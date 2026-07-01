# SEO/AEO work run — Glow Social cost page refresh

- **Date:** 2026-06-30
- **Route:** `/blog/how-much-does-glow-social-cost`
- **Canonical URL:** `https://glowsocial.com/blog/how-much-does-glow-social-cost`
- **Work type:** Buyer-intent product-pricing page refresh
- **Glow commit:** pending local commit
- **Boomp migration target:** Re-sync latest Glow version before final Glow→Boomp URL move; preserve the $99/month inclusions and approval-first language if product pricing remains the same.

## Why this page

The existing page was a high-intent product-pricing answer but was only a short 3-section article with minimal metadata and no FAQ schema. It clearly maps to a bottom-funnel query: people evaluating Glow specifically, comparing the $99 plan against schedulers, freelancers, and agencies.

This fits the current SEO/AEO priority pattern: buyer intent over broad traffic, owner-burden framing, and preview-first conversion opportunities.

## Bet

A branded pricing page can be more useful for searchers and answer engines when it answers the exact price immediately, then explains what the $99/month plan includes, what it does not replace, and how to compare it against cheap schedulers or freelancers. Strengthening metadata, FAQ schema, internal links, and approval-first copy should improve eligibility for Glow Social cost/pricing queries and help cost-cluster visitors make a clearer conversion decision.

## Files changed

- `content/blog/how-much-does-glow-social-cost.md`
- `content/blog/social-media-management-cost-pricing-guide.md`
- `seo-tracking-2026-06-07.md`
- `seo-work-log.json`
- `seo-agent-runs/seo-work-2026-06-30T16-02-01Z-glow-social-cost.md`

## What changed

- Rebuilt the thin product-cost page with complete frontmatter: title, description, slug, updated date, tags, and FAQ entries.
- Added a direct answer: Glow Social costs $99/month for 20 posts ready to approve.
- Added a comparison table for free/cheap schedulers, Glow Social, freelancers, and agencies.
- Clarified what is included in the $99/month plan and what owner work remains.
- Added "when worth it" and "when not the right spend" sections to prevent overclaiming.
- Strengthened internal links to the social media management pricing guide, cost calculator, tools-under-$50 guide, DIY-vs-done-for-you guide, freelancer cost guide, and hiring-worth-it page.
- Added an inbound related link from the main pricing guide to the Glow Social cost page.
- Preserved preview-first language and the existing app preview CTA.

## Expected signal

At 7/14/28-day checks, look for:

- indexing/crawl status for `/blog/how-much-does-glow-social-cost`;
- impressions and clicks for Glow Social cost, Glow Social pricing, how much does Glow Social cost, and Glow Social $99 terms;
- CTR from branded/product-pricing queries;
- assisted movement from cost/pricing pages into the preview flow;
- no ranking or UX regression on the main pricing guide from the added related link.

## Do not overlearn if weak

If the page underperforms, do not conclude that branded pricing pages are not useful. Possible causes include low branded search demand, Google satisfying exact-price queries directly, the Glow→Boomp migration changing brand-query behavior, or the page needing stronger navigation/internal links rather than more copy.

## Verification results

- `npm run lint` failed because of pre-existing unrelated `react/no-unescaped-entities` errors in `app/become-an-affiliate/page.js`, `app/manifesto/page.js`, `app/not-found.js`, `app/research/local-business-social-media-statistics/page.js`, `app/setup/page.js`, and `app/terms/page.js`; none are in the edited files.
- `npm run build` passed. Next.js compiled successfully and generated 794 static pages.
- Local HTML smoke passed on `http://127.0.0.1:3017/blog/how-much-does-glow-social-cost`: page returned HTML, title/direct answer/FAQ schema marker/FAQ text/preview CTA were present.
- Local HTML smoke passed on `http://127.0.0.1:3017/blog/social-media-management-cost-pricing-guide`: the inbound link to `/blog/how-much-does-glow-social-cost` was present.

## Changed URLs for manual Google indexing

- `https://glowsocial.com/blog/how-much-does-glow-social-cost`
- `https://glowsocial.com/blog/social-media-management-cost-pricing-guide`
