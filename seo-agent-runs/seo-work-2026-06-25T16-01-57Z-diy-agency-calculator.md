# SEO work run — DIY vs agency calculator refresh

- **Date:** 2026-06-25
- **Route:** `/tools/diy-vs-agency-cost-calculator`
- **Canonical URL:** `https://glowsocial.com/tools/diy-vs-agency-cost-calculator`
- **Work type:** buyer-intent tool page refresh
- **Glow commit:** pending local commit
- **Boomp migration target:** Re-sync latest Glow version before final Glow → Boomp URL move

## Why this page

The tools cluster is already discoverable in the sitemap and the `/tools` hub, but the individual DIY vs agency calculator page was thin compared with the stronger cost calculator. It reused the working calculator component but lacked the surrounding SEO/AEO support that helps a standalone tool page answer buyer-intent queries.

This page maps tightly to owner-burden searches: DIY vs agency cost, whether to hire a social media agency, whether DIY is actually cheaper, and what another tool still leaves on the owner’s plate.

## Bet

A thin but useful calculator page should become more index-worthy and conversion-ready when it answers the DIY-vs-agency decision before the interactive calculator, explains how to interpret the result after the calculator, adds FAQ/Breadcrumb schema that matches visible copy, and routes high-time-cost users toward a preview-first next step.

## Changes made

- Strengthened metadata with reusable page constants, sharper description, canonical, Open Graph, and Twitter fields.
- Expanded JSON-LD from a bare `SoftwareApplication` object into `SoftwareApplication`, `FAQPage`, and `BreadcrumbList` schema.
- Added a direct-answer block near the top: when DIY is cheaper, when an agency makes sense, and when a lighter approval-first option fits.
- Preserved the existing `CostComparisonCalculator` and its `focus="diy"` behavior.
- Added an interpretation guide after the calculator for DIY, agency, and preview-first alternatives.
- Added visible FAQ copy matching the schema.
- Added a natural preview-first internal link to `/preview`.

## Expected signal

At the next 7/14/28-day checks, look for:

- indexing stability for `/tools/diy-vs-agency-cost-calculator`;
- impressions for DIY vs agency social media cost, social media agency cost calculator, DIY social media cost, and social media agency alternative queries;
- clicks or assisted movement into `/preview`, `/tools/social-media-management-cost-calculator`, and cost/pricing pages;
- whether the tools cluster gains more long-tail visibility beyond the main cost calculator.

## Do not overlearn if weak

If this page underperforms, do not assume tools/calculators are weak. Possible causes include low search volume for this exact route, Google preferring the broader social media management cost calculator, insufficient internal-link equity, or the page needing query evidence from Search Console before another title change. Keep the working calculator intact unless engagement data shows the tool itself is the problem.

## Files changed

- `app/tools/diy-vs-agency-cost-calculator/page.js`
- `seo-agent-runs/seo-work-2026-06-25T16-01-57Z-diy-agency-calculator.md`
- `seo-work-log.json`
- `seo-tracking-2026-06-07.md`

## Verification results

- `npx eslint app/tools/diy-vs-agency-cost-calculator/page.js` — passed.
- `npm run build` — passed. Route output included `○ /tools/diy-vs-agency-cost-calculator`.
- Local HTML smoke check at `http://127.0.0.1:3010/tools/diy-vs-agency-cost-calculator` — passed; response contained the page title, direct-answer heading, `FAQPage`, `BreadcrumbList`, preview-first copy, and canonical markup.
- `npm run indexnow -- https://glowsocial.com/tools/diy-vs-agency-cost-calculator` — submitted 1 URL to IndexNow.

## Changed URLs for manual Google indexing

- `https://glowsocial.com/tools/diy-vs-agency-cost-calculator`
