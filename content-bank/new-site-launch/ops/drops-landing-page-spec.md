# `/drops` Landing Page Spec

## Core decision
`/drops` should be the **content archive/library itself**.

It is **not** just an opt-in page.

The opt-in should be a strong recurring CTA inside `/drops`, but the primary purpose of the route is to:
- house the actual content
- explain what Drops are
- help visitors browse by topic
- connect the web archive and the email series

## What `/drops` is
`/drops` is the public library for the Boomp Drops system.

Each Drop should exist as:
- a canonical indexed page at `/drops/[slug]`
- an email adaptation of that page
- an optional source for social cuts

So the system is:
- `/drops` = archive / category landing / browse page
- `/drops/[slug]` = the actual canonical content page
- email = distribution layer pointing back to the canonical page

## What `/drops` is not
Do not treat `/drops` as:
- a standalone squeeze page with little or no content
- a generic blog index
- a latest-news feed
- a chronological dump with no topic structure

## IA recommendation
### Primary route
- `/drops`

### Canonical pages
- `/drops/[slug]`

### Optional future filtering patterns
- `/drops?topic=owner-burden`
- `/drops?topic=trust-signals`
- `/drops?topic=buyers-guides`

If cleaner topic routing is wanted later, that can become:
- `/drops/topic/[topic-slug]`

But the default should stay simple at launch.

## Primary jobs of the page
`/drops` should do four jobs:
1. explain what a Drop is
2. let visitors browse useful content
3. convert interested readers into email subscribers
4. reinforce that the site is publishing useful ongoing work, not filler blog posts

## Page structure

### 1. Header / intro
Goal: explain the section quickly.

Recommended content:
- H1: `Drops`
- short descriptor/subhead
- one brief paragraph explaining what readers get here

Suggested positioning direction:
- practical weekly drops
- content, visibility, trust, and easier marketing
- useful enough to read on-site, easy enough to get by email

### 2. Primary email CTA near the top
Goal: make subscription obvious without turning the page into opt-in-only mode.

Recommended treatment:
- button or email capture block near the top of the page
- copy like `Get the next Drop by email`
- supporting line clarifying that every Drop also lives on the site

Important rule:
The subscription CTA should be **prominent but not monopolizing**.
The archive must still be visible as real content.

## Exact content-vs-opt-in answer
If choosing between:
- “This page is mostly an opt-in”
- “This page is mostly the content archive”

Choose:
## **mostly the content archive**
with a strong email CTA integrated into it.

That means the visitor should be able to:
- subscribe if ready
- or just browse and read immediately

## 3. Topic filters
Goal: make the archive feel like a library, not a pile.

Use the core clusters as topic chips/filters:
- Owner Burden
- Trust Signals
- Content Sources
- Buyer Guides
- Local Visibility
- Website Engine
- Objections
- Proof & Reviews
- Seasonal Operations
- AI Search Readiness

These should be:
- visually lightweight
- easy to scan
- usable as filters, not overwhelming taxonomy blocks

## 4. Featured/latest Drop block
Goal: create an obvious current entry point.

Recommended contents:
- latest or featured title
- short summary
- category/topic label
- CTA to read full Drop

Optional enhancement:
- small phone mockup thumbnail if the visual system is ready

## 5. Archive grid/list
Goal: house the actual content.

Each card should include:
- title
- short description
- topic label
- optional phone-thumbnail later
- read CTA

The archive should feel:
- evergreen first
- chronological second

Meaning:
- browsing by usefulness matters more than date-heavy blog behavior

## 6. Secondary subscribe CTA lower on page
Goal: catch readers after they browse.

This can be:
- a simple inline opt-in block
- a softer subscription prompt after the archive begins or near the bottom

## Tone and UX rules
The page should feel:
- editorial
- useful
- alive
- intentional
- not like a generic resources center

It should not feel like:
- corporate blog index
- newsletter bro funnel page
- thin archive with only dates and titles

## Recommended content model
### `/drops`
Should include:
- section intro
- subscribe CTA
- topic browsing
- featured Drop
- archive entries

### `/drops/[slug]`
Should include:
- H1
- short direct-answer intro
- inline phone mockup in upper-middle/top-third
- article body
- CTA
- optional next/related Drops

## Relationship to email
The email should be an adaptation of each Drop, not the source of truth.

So:
- web page lives permanently at `/drops/[slug]`
- email links back to it
- `/drops` helps readers both browse and subscribe

This is why `/drops` must hold real content.
If it were only an opt-in, the system would lose the archive/library half of its value.

## Why this structure is right
This structure gives you:
- a searchable, indexable content hub
- an email series with a real home
- a library that can survive the brand/domain migration
- a cleaner identity than a generic blog

## Bottom line
`/drops` should be:
- **where the content lives**
- **where visitors can subscribe**
- **where the system is explained**

But if one purpose has to dominate, the dominant purpose should be:
## **content archive/library first, opt-in second**
