# SEO work run — local page crawled/not-indexed cluster

- **Date:** 2026-06-24
- **Work type:** Crawled-not-indexed local-page cluster improvement
- **Routes:**
  - `/local/social-media-management-auto-repair-shops-miami`
  - `/local/social-media-management-dentists-austin`
  - `/local/social-media-management-roofers-dallas`
  - `/local/social-media-management-dentists-phoenix`
  - `/local/social-media-management-accountants-denver`
- **Canonical URLs:**
  - `https://glowsocial.com/local/social-media-management-auto-repair-shops-miami`
  - `https://glowsocial.com/local/social-media-management-dentists-austin`
  - `https://glowsocial.com/local/social-media-management-roofers-dallas`
  - `https://glowsocial.com/local/social-media-management-dentists-phoenix`
  - `https://glowsocial.com/local/social-media-management-accountants-denver`
- **Glow commit:** `1a57666`
- **Boomp migration target:** Local-page strategy pending review before port

## Why this cluster

These were the earliest remaining real local pages in the filtered crawled-not-indexed queue. They are lower priority than buyer-intent comparison pages, but they are real canonicals and can still support local search breadth if they are less thin and less overclaimed.

## Bet

Thin local pages are more index-worthy when they answer the local/industry question immediately, use safer review-ready product language, and route visitors to a concrete preview rather than a generic pricing CTA.

## Changes made

Across the five pages:

- Added `updated: 2026-06-24`.
- Rewrote meta descriptions away from "automates your posting" and toward review-ready local content.
- Added a short `Quick answer` section near the top of each page.
- Changed opening copy from fully automatic / zero-effort framing to review-ready posts prepared from business context.
- Replaced generic pricing CTAs with industry-specific preview CTAs:
  - auto repair → `/preview/auto-repair`
  - dentists → `/preview/dentist`
  - roofers → `/preview/roofing`
  - accountants → `/preview/accountant`
- Replaced "Zero Effort Required" bullets with a safer review-ready workflow claim.
- Cleaned the Phoenix dentist title to remove "Zero Effort".
- Marked the corresponding queue rows as worked.

## Expected signal

Check whether these five pages move from crawled/not indexed to indexed, and later whether impressions improve for industry + city social media management and affordable social media management local queries.

## Do not overlearn if weak

If these pages remain unindexed, do not assume all local pages are weak. Possible causes include local-page duplication, thin city/industry differentiation, crawl timing, weak internal links from hubs, or Google deciding only a smaller set of local pages should be indexed.

## Boomp port notes

Do not blindly port every local page to Boomp until the Boomp local-page strategy is reviewed. If Boomp keeps local pages, port this pattern first: short local quick answer, review-ready product language, safer CTA, and industry-specific preview path.
