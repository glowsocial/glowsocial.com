# SEO work run — posting frequency calculator refresh

- **Date:** 2026-06-29
- **Route:** `/tools/posting-frequency-calculator`
- **Canonical URL:** `https://glowsocial.com/tools/posting-frequency-calculator`
- **Work type:** buyer-intent tool page refresh
- **Glow commit:** `03ba7dd`
- **Boomp migration target:** Re-sync latest Glow version before final Glow → Boomp URL move

## Why this page

The buyer-intent tools cluster has been getting sequential page-level refreshes. The cost calculator, DIY-vs-agency calculator, ROI estimator, and tools hub already had stronger metadata, schema, direct-answer copy, and interpretation guidance. The posting frequency calculator was the remaining thin individual tool page: it had a working interactive calculator but only minimal metadata, a short intro, and bare `SoftwareApplication` schema.

This page maps to owner-burden and cadence searches: posting frequency calculator, how often should a local business post, how many social media posts per week, Google Business Profile posting cadence, and whether a business can maintain a content calendar without pushing weekly creation work back onto the owner.

## Bet

A thin posting-frequency calculator page should become more index-worthy and conversion-ready when it answers the local-business cadence question before the interactive tool, explains that owner time and content creation capacity constrain the schedule, adds matching FAQ/Breadcrumb schema, and routes high-burden users toward a preview-first next step.

## Changes made

- Strengthened metadata with page constants, sharper cadence-focused title/description, canonical, Open Graph, and Twitter fields.
- Expanded JSON-LD from a bare `SoftwareApplication` object into `SoftwareApplication`, `FAQPage`, and `BreadcrumbList` schema.
- Added a direct-answer block near the top for local-business posting frequency and sustainable cadence.
- Preserved the existing `PostingFrequencyCalculator` interactive component and behavior.
- Added interpretation guidance after the calculator for easy, high, and content-bottleneck outcomes.
- Added a preview-first next-step link to `/preview` when content creation is the constraint.
- Added visible FAQ copy matching the schema.

## Expected signal

At the next 7/14/28-day checks, look for:

- indexing stability for `/tools/posting-frequency-calculator`;
- impressions for posting frequency calculator, how often should a local business post, social media posting cadence, and Google Business Profile posting cadence queries;
- clicks or assisted movement into `/preview`, `/tools`, and the posting-frequency benchmark research pages;
- whether the tools cluster gains more long-tail visibility beyond cost and ROI calculators.

## Do not overlearn if weak

If this page underperforms, do not assume tools/calculators are weak. Possible causes include low exact calculator-query volume, Google preferring broader benchmark guides, insufficient internal-link equity, or needing page-specific query evidence from Search Console before another title change. Keep the working calculator intact unless engagement data shows the tool itself is the problem.

## Files changed

- `app/tools/posting-frequency-calculator/page.js`
- `seo-agent-runs/seo-work-2026-06-29T16-02-43Z-posting-frequency-calculator.md`
- `seo-work-log.json`
- `seo-tracking-2026-06-07.md`

## Verification results

- `npx eslint app/tools/posting-frequency-calculator/page.js` — passed.
- `npm run build` — passed. Route output included `○ /tools/posting-frequency-calculator`.
- Local HTML smoke check at `http://127.0.0.1:3010/tools/posting-frequency-calculator` — passed; response contained the page title, direct-answer heading, `FAQPage`, `BreadcrumbList`, preview-first copy, and canonical URL.
- `npm run indexnow -- https://glowsocial.com/tools/posting-frequency-calculator` — submitted 1 URL to IndexNow.

## Changed URLs for manual Google indexing

- `https://glowsocial.com/tools/posting-frequency-calculator`
