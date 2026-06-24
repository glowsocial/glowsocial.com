# Glow Social SEO/AEO Weekly Learning Review

Run this once per week after several daily SEO/AEO bets have shipped.

The purpose is not to summarize activity. The purpose is to decide whether the operating manual should change.

## Inputs

Use available evidence from:

- `docs/seo-aeo/bets.md`
- `docs/seo-aeo/learnings.md`
- recent git history for SEO/AEO changes
- Search Console exports or accessible query/page data
- analytics/conversion evidence if available
- IndexNow/indexing results if available
- live page checks for pages being evaluated

## Review rules

### Learn mostly from winners

Strong evidence includes:

- page/query impressions rising after indexing
- clicks or CTR improving for the intended search intent
- a page becoming a useful internal-link hub
- preview CTA clicks or assisted conversions tied to the page
- repeated success across a page type, intent, or CTA pattern

### Be cautious with losers

Do not create a new rule from a weak page unless the cause is clear. A page may underperform because of:

- indexing delay
- weak internal links
- wrong canonical
- low search demand
- competitive SERP
- execution quality
- not enough time since publishing
- title/meta mismatch
- unclear conversion path

When cause is unclear, log uncertainty in the weekly report but do not change `learnings.md`.

### Rewrite, do not append

If evidence changes the playbook, rewrite the relevant section of `learnings.md`. Remove generic or contradicted rules. Keep the manual shorter and sharper over time.

## Weekly output format

```md
# SEO/AEO Weekly Learning Review — YYYY-MM-DD

## Evidence checked

- Bets reviewed:
- Search Console / analytics source:
- Date range:

## Winners worth studying

- URL:
  - Signal:
  - Likely reason:
  - Learning candidate:

## Losers / unclear results

- URL:
  - Signal:
  - Why not overlearning:

## Changes made to learnings.md

- Kept:
- Rewritten:
- Removed:
- Added:

## Next week’s bet queue

1. URL / cluster:
   - Bet:
   - Why now:
2. URL / cluster:
   - Bet:
   - Why now:
3. URL / cluster:
   - Bet:
   - Why now:
```
