# SEO/AEO work run — themeable decision diagrams for striking-distance pages

- **Date:** 2026-06-26
- **Routes:**
  - `/blog/top-5-automated-social-media-tools-small-business-2026`
  - `/blog/social-media-tools-under-50`
  - `/compare/plann-alternative`
- **Work type:** Portable inline SVG decision-diagram test
- **Glow commit:** `40c13eb`
- **Boomp migration target:** Re-sync latest Glow version before final URL move; diagrams use CSS variables and should restyle with future brand tokens

## Why this batch

Kathleen asked whether images are useful now or should wait for the Boomp rebrand. The practical answer was to avoid polished brand-heavy graphics and instead add lightweight, themeable SVG decision diagrams that explain the buyer decision. These pages were recently refreshed and already have Search Console visibility, so adding diagrams now can improve clarity without creating hardcoded Glow artwork.

## Bet

Portable decision diagrams should make high-intent guide/comparison pages easier to scan, more useful to humans, and clearer for AEO extraction. The important concepts are visual and repeat across pages: scheduling tools require posts to already exist, while review-ready workflows prepare posts before scheduling. Using CSS variables instead of hardcoded colors should let the same diagrams migrate cleanly to Boomp later.

## Changes made

- Added global `.decision-diagram` styles in `app/globals.css`.
- Styled diagrams with existing CSS variables only: `--paper`, `--card-border`, `--green-soft`, `--accent`, `--accent-dark`, `--text`, and `--text-muted`.
- Added accessible inline SVG diagrams with `<title>` and `<desc>` text.
- Added the automation diagram to `/blog/top-5-automated-social-media-tools-small-business-2026`:
  - scheduler tools: `You write → Tool schedules`
  - review-ready posting: `Website → Approve → Approved posts publish`
- Added the true-cost diagram to `/blog/social-media-tools-under-50`:
  - under-$50 tools: low software bill + owner time
  - review-ready posting: service fee + lower content burden
- Added the visual-planner diagram to `/compare/plann-alternative`:
  - visual planner helps after content exists
  - posts-ready workflow starts from website and approval
- Fixed an older Plann page formatting issue where bullet points rendered inline instead of as a list.

## Visual QA

Checked local pages in the browser:

- `/blog/top-5-automated-social-media-tools-small-business-2026`
- `/blog/social-media-tools-under-50`
- `/compare/plann-alternative`

The diagrams rendered as clean inline cards, used current site variables, and did not show obvious clipping. The browser accessibility tree exposed the SVG title/description and inner labels.

## Expected signal

At 7/14/28-day checks, compare page-level engagement and Search Console movement for:

- stable or improved indexing/crawl behavior on the three updated pages;
- CTR improvements on already visible pages;
- better user engagement if analytics are available;
- whether pages with diagrams are more likely to remain indexed or receive clicks than similar text-only comparison pages.

## Do not overlearn if weak

If results are neutral, do not assume images are useless. Possible reasons include small sample size, Search Console lag, diagrams being too low in the page for snippet influence, or needing image-specific metadata/social-image assets rather than inline explanatory SVG. This batch tests portable explanatory diagrams, not polished branded graphics.

## Boomp port notes

Do not create a separate Boomp tracker row. The diagrams are intentionally token-based and logo-free. During the final Glow → Boomp re-sync, preserve the decision-diagram structure and restyle via theme variables instead of rebuilding the diagrams as static brand artwork.
