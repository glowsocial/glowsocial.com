#!/usr/bin/env node
/**
 * Generate missing indexed blog posts for glowsocial.com
 * 
 * Creates markdown content files from slug patterns,
 * matching the voice and structure of existing posts.
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.resolve(__dirname, '..', 'content', 'blog');
const LOCAL_DIR = path.resolve(__dirname, '..', 'content', 'local');

const missing = require('/tmp/missing_slugs.json');

// Skip non-content pages
const skipSlugs = new Set([
  'privacy-policy', 'terms-conditions', 'faq', 'locations', 'agency',
  'more', 'post-ideas', 'social-media-quiz', 'become-an-affiliate',
  'demo', 'home-services', 'how-glow-social-works', 'manifesto',
  'ai-visibility-service'
]);

function slugToTitle(slug) {
  return slug
    .split('-')
    .map(w => {
      if (['and', 'or', 'the', 'a', 'an', 'in', 'for', 'of', 'to', 'vs', 'with', 'on', 'is', 'it', 'your', 'you'].includes(w)) return w;
      if (w === 'ai') return 'AI';
      if (w === 'diy') return 'DIY';
      if (w === 'roi') return 'ROI';
      if (w === 'seo') return 'SEO';
      if (w === 'gbp') return 'GBP';
      if (w === 'llm') return 'LLM';
      if (w === 'oba') return 'OBA';
      if (w === 'tiktok') return 'TikTok';
      if (w === 'instagram') return 'Instagram';
      if (w === 'facebook') return 'Facebook';
      if (w === 'linkedin') return 'LinkedIn';
      if (w === 'hootsuite') return 'Hootsuite';
      if (w === '2025' || w === '2026') return w;
      if (w === '49month') return '$49/Month';
      if (w === '49') return '$49';
      if (w === '24') return '24';
      if (w === '7') return '7';
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ')
    // Capitalize first word always
    .replace(/^./, c => c.toUpperCase());
}

function generateBestServicePost(slug) {
  const title = slugToTitle(slug);
  const industry = slug
    .replace('best-social-media-service-', '')
    .replace('best-social-media-posting-service-', '')
    .replace(/-/g, ' ');

  return `---
title: "${title}"
description: "Find the best social media posting service for ${industry}. Compare done-for-you options, pricing, and what to look for in automated social media."
slug: "${slug}"
date: "2025-01-15"
---

Most ${industry} don't have time to manage social media. Between serving customers, managing staff, and running daily operations, posting consistently falls to the bottom of the list.

That's why done-for-you social media services exist. Instead of hiring a marketing agency ($2,000+/month) or spending 10+ hours doing it yourself, automated services like **Glow Social** handle everything for **$49/month**.

## What to Look for in a Social Media Service for ${industry.charAt(0).toUpperCase() + industry.slice(1)}

Not all social media services are built for local businesses. Here's what matters:

- **Industry-relevant content** — Posts should reflect what ${industry} actually do, not generic marketing fluff
- **Multiple platforms** — Facebook, Instagram, Google Business Profile, and LinkedIn at minimum
- **Consistent posting** — Daily or near-daily posts that keep your pages active
- **No time commitment** — The whole point is saving you time
- **Affordable pricing** — Under $100/month for most small businesses

## Why Most ${industry.charAt(0).toUpperCase() + industry.slice(1)} Stop Posting

The pattern is always the same: you decide to get serious about social media, post consistently for two or three weeks, then business picks up and posting stops for months.

Empty social media pages tell potential customers you might not be in business anymore. A single abandoned profile can cost you more trust than having no profile at all.

## How Glow Social Works for ${industry.charAt(0).toUpperCase() + industry.slice(1)}

Glow Social reads up to 11 pages of your website before writing a single post. That means every caption reflects your actual services, your tone, and your brand — not a template.

Here's how it works:

1. **Connect your website** — We analyze your services, brand voice, and style
2. **Connect your platforms** — Facebook, Instagram, LinkedIn, Google Business Profile, and more
3. **Approve and publish** — Review your posts and tap publish. Three taps, done.

Setup takes about 5 minutes. Posts start going out immediately.

## What You Get

- **12+ posts per month** across all connected platforms
- **Custom graphics** designed in your brand colors
- **Google Business Profile posting** — most tools skip this entirely
- **Google Review monitoring** — see and respond to reviews from your dashboard
- **No contracts** — cancel anytime

## Pricing

Glow Social starts at **$49/month** for the Core plan. Compare that to:

- Freelance social media manager: $300-500/month
- Marketing agency: $2,000+/month
- DIY with scheduling tools: "free" but 10+ hours of your time monthly

## Get Started

Stop letting your social media pages collect dust. Set up Glow Social in 5 minutes and have your first posts ready to publish today.

[Get Started — $49/month](https://app.glowsocial.com/pricing/)
`;
}

function generateAlternativePost(slug) {
  const title = slugToTitle(slug);
  const competitor = slug
    .replace('best-', '')
    .replace('-alternative-for-small-business-2026', '')
    .replace('-alternative-for-small-business', '')
    .replace('-alternative', '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return `---
title: "${title}"
description: "Looking for a ${competitor} alternative? Compare features, pricing, and time investment. See why small businesses are switching to done-for-you posting."
slug: "${slug}"
date: "2025-01-15"
---

If you're looking for a **${competitor} alternative**, you're probably frustrated with one of two things: it's too complicated, or it still requires you to do all the work.

Most social media tools — ${competitor} included — are scheduling platforms. They help you post, but you still have to write every caption, design every graphic, and manage every content calendar yourself.

**Glow Social** takes a different approach: it creates and publishes your content automatically. For **$49/month**, you get 12+ custom posts per month across 13 platforms — including Google Business Profile, which most tools skip entirely.

## ${competitor} vs Glow Social: Quick Comparison

| Feature | ${competitor} | Glow Social |
|---------|------|-------------|
| Content creation | You create everything | Done for you |
| Scheduling | You schedule manually | Automatic |
| Monthly time | 5-10 hours | 5 minutes setup |
| Google Business Profile | Limited or none | Included |
| Review monitoring | No | Included |
| Price | Varies | $49/month |

## Why Small Businesses Switch from ${competitor}

The #1 reason? **Time.** ${competitor} is a powerful tool, but it assumes you have hours every week to create and manage content. Most small business owners don't.

With Glow Social:
- You answer a few questions about your business
- We read up to 11 pages of your website to learn your brand
- Posts are created and published automatically
- You review and approve with 3 taps

No content calendar. No graphic design. No agonizing over captions.

## What Glow Social Includes

- **12+ posts per month** customized to your business
- **13 platforms** including Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile
- **Custom graphics** in your brand colors
- **Google Review monitoring** — see and respond to reviews from your dashboard
- **No contracts** — cancel anytime

## Who Should Stay with ${competitor}

${competitor} is a good choice if you:
- Enjoy creating your own content
- Have 5-10 hours per month for social media
- Want granular control over every aspect of posting
- Have a dedicated marketing person on staff

## Who Should Switch to Glow Social

Glow Social is built for you if:
- You want social media handled without doing the work
- You've tried posting consistently but always fall behind
- You don't have a marketing team or social media person
- You want Google Business Profile and review monitoring included

## Get Started

Try Glow Social for $49/month. Setup takes 5 minutes, no contracts, cancel anytime.

[Get Started — $49/month](https://app.glowsocial.com/pricing/)
`;
}

function generateGenericPost(slug) {
  const title = slugToTitle(slug);
  
  // Detect common patterns for better descriptions
  let description = `${title}. Practical advice for local businesses looking to stay visible on social media without spending hours on content.`;
  
  if (slug.includes('glow-social-vs-') || slug.includes('-vs-glow-social')) {
    const competitor = slug.replace('glow-social-vs-', '').replace('-vs-glow-social', '').replace(/-/g, ' ');
    description = `Compare Glow Social and ${competitor} for small business social media. See features, pricing, and which is the better fit.`;
  }
  
  if (slug.includes('glow-social-work-')) {
    const industry = slug.replace('glow-social-work-', '').replace(/-/g, ' ');
    description = `How Glow Social works for ${industry}. Automated social media posting customized to your industry for $49/month.`;
  }

  // Generate a reasonable placeholder body
  const isComparison = slug.includes('-vs-');
  const isGlowFeature = slug.startsWith('glow-social-');
  const isHowTo = slug.startsWith('how-');
  const isBest = slug.startsWith('best-');
  const isDoneForYou = slug.includes('done-for-you');

  let body = '';

  if (isComparison) {
    const parts = slug.split('-vs-');
    const a = parts[0].replace(/-/g, ' ');
    const b = parts[1].replace(/-/g, ' ').replace(/-comparison$/, '').replace(/-difference$/, '');
    body = generateComparisonBody(a, b, title);
  } else if (isGlowFeature) {
    body = generateGlowFeatureBody(slug, title);
  } else if (isDoneForYou) {
    const industry = slug.replace('done-for-you-social-media-', '').replace(/-/g, ' ');
    body = generateDoneForYouBody(industry, title);
  } else {
    body = generateGeneralBody(slug, title);
  }

  return `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
slug: "${slug}"
date: "2025-01-15"
---

${body}
`;
}

function generateComparisonBody(a, b, title) {
  return `Choosing between social media tools can feel overwhelming. Both options serve small businesses, but they take different approaches.

The real question is not which tool has more features — it's how you want to spend your time.

## The Core Difference

**DIY tools** help you schedule and manage content you create yourself. You're still writing captions, designing graphics, and maintaining a content calendar.

**Done-for-you tools** like Glow Social create and publish content automatically. You set up once, approve occasionally, and focus on running your business.

## Time Investment

This is where the comparison matters most for small business owners:

- **DIY approach:** 5-10 hours per month on content creation, scheduling, and management
- **Done-for-you approach:** 5 minutes to set up, occasional approvals after that

If you value your time at even $25/hour, 10 hours of DIY social media costs $250/month in time alone — on top of whatever you pay for the tool.

## What Glow Social Offers Differently

- **12+ posts per month** created from your actual website content
- **13 platforms** including Google Business Profile (most tools skip this)
- **Google Review monitoring** included in every plan
- **Custom graphics** in your brand colors
- **$49/month** with no contracts

## Which Should You Choose?

Choose a DIY tool if you enjoy content creation and have time for it. Choose Glow Social if you want posting handled without your ongoing involvement.

[Get Started with Glow Social — $49/month](https://app.glowsocial.com/pricing/)
`;
}

function generateGlowFeatureBody(slug, title) {
  return `One of the most common questions we get is how Glow Social is different from the social media tools most small businesses have tried (and abandoned).

The answer is simple: **we do the work for you.**

Most social media tools are scheduling platforms. They give you a calendar, maybe some templates, and expect you to create all the content yourself. That works great for marketing teams with time and resources. For a small business owner juggling everything else, it means another tool that goes unused after the first month.

## How Glow Social Works

1. **Enter your website URL** — We read up to 11 pages to learn your brand voice, services, and style
2. **Connect your platforms** — Facebook, Instagram, LinkedIn, Google Business Profile, TikTok, and more
3. **Review and publish** — Tap approve on the posts we create. Three taps, done.

Setup takes about 5 minutes. Your first batch of posts is ready the same day.

## What's Included

Every Glow Social plan includes:

- **Custom posts** written in your brand voice — not generic templates
- **Professional graphics** designed in your brand colors
- **Google Business Profile posting** — a feature most social media tools don't offer at all
- **Google Review monitoring** — see new reviews and respond from your dashboard
- **Multi-platform publishing** — up to 13 platforms from a single approval

## Why It Works for Small Businesses

Small businesses don't fail at social media because they lack good ideas. They fail because they don't have time to execute consistently.

Glow Social removes the execution burden entirely. Posts go out whether you're busy with customers, on vacation, or dealing with an emergency. Your social presence stays active and professional no matter what's happening in your business.

## Pricing

Glow Social Core starts at **$49/month**. No contracts, no commitments, cancel anytime.

Compare that to a freelance social media manager ($300-500/month) or an agency ($2,000+/month).

[Get Started — $49/month](https://app.glowsocial.com/pricing/)
`;
}

function generateDoneForYouBody(industry, title) {
  const capIndustry = industry.charAt(0).toUpperCase() + industry.slice(1);
  return `${capIndustry} are busy serving clients. Between appointments, operations, and everything else that comes with running a business, social media falls to the bottom of the priority list.

The result? Empty pages, outdated posts, and potential customers who wonder if you're still in business.

**Done-for-you social media** fixes this. Instead of hiring an agency or spending hours creating content yourself, Glow Social handles everything for **$49/month**.

## Why ${capIndustry} Need Consistent Social Media

When potential customers hear about you — through a referral, Google search, or word of mouth — the first thing they do is check your social media. If your last post was six months ago, they move on to someone who looks more active and established.

Consistent posting signals:
- You're still in business and thriving
- You're professional and established
- You're someone worth trusting with their business

## What Glow Social Does for ${capIndustry}

We read your website to understand your services, brand voice, and style. Then we create custom posts — not templates — that sound like you wrote them on your best day.

Every month you get:
- **12+ custom posts** across Facebook, Instagram, LinkedIn, and Google Business Profile
- **Professional graphics** in your brand colors
- **Google Review monitoring** so you never miss a new review
- **Automatic publishing** — posts go out on schedule without your involvement

## Setup Takes 5 Minutes

1. Enter your website URL
2. Connect your social media accounts
3. Review your first batch of posts
4. Tap publish

That's it. Your social media is handled.

## Pricing

**$49/month** for the Core plan. No contracts, cancel anytime.

That's less than a single hour of an agency's time — and it covers your entire social media presence.

[Get Started — $49/month](https://app.glowsocial.com/pricing/)
`;
}

function generateGeneralBody(slug, title) {
  return `For local businesses, social media is about one thing: **staying visible**. When customers search for what you do, when someone asks for a recommendation, when a prospect checks you out before calling — your social media needs to show that you're active, professional, and trustworthy.

The challenge is finding time to post consistently while running your business. Most business owners know what to post. They just can't do it regularly.

## The Consistency Problem

Here's what usually happens: you decide to get serious about social media. You post for two or three weeks. Then business picks up, life happens, and your pages go quiet for months.

That inconsistency is worse than not posting at all. An abandoned social media page tells potential customers you might not be in business anymore.

## The Options for Small Businesses

**Do it yourself (free to $50/month):**
Use tools like Buffer or Later to schedule posts. You'll spend 5-10 hours per month creating content, designing graphics, and managing your calendar.

**Hire a freelancer ($300-500/month):**
Get human creativity and custom strategy, but you'll still need to manage the relationship and provide direction.

**Use done-for-you software ($49/month):**
Glow Social creates and publishes 12+ posts per month automatically. Setup takes 5 minutes, and posts are customized to your business — not generic templates.

**Hire an agency ($2,000+/month):**
Full-service marketing with strategy, content, and reporting. Best for businesses with budget for comprehensive marketing support.

## What Makes Glow Social Different

Most social media tools are scheduling platforms — they help you post, but you still do all the work. Glow Social is different:

- We read your website to learn your brand voice and services
- We create custom posts with professional graphics
- We publish to 13 platforms including Google Business Profile
- We monitor your Google Reviews so you never miss one

All for **$49/month** with no contracts.

## Getting Started

If you're tired of empty social media pages and don't have hours to spend on content creation, try Glow Social. Setup takes 5 minutes.

[Get Started — $49/month](https://app.glowsocial.com/pricing/)
`;
}

// ─── Main ─────────────────────────────────────────────
function main() {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.mkdirSync(LOCAL_DIR, { recursive: true });

  let generated = 0;
  let skipped = 0;

  const allMissing = [...missing.local, ...missing.alt, ...missing.bestService, ...missing.other];

  for (const slug of allMissing) {
    if (skipSlugs.has(slug)) {
      skipped++;
      continue;
    }

    // Determine destination
    const isLocal = slug.startsWith('social-media-management-');
    const destDir = isLocal ? LOCAL_DIR : BLOG_DIR;
    const destPath = path.join(destDir, `${slug}.md`);

    if (fs.existsSync(destPath)) {
      skipped++;
      continue;
    }

    let content;
    if (isLocal) {
      // Parse city and industry from slug
      content = generateBestServicePost(slug); // local pages follow similar pattern
    } else if (slug.includes('-alternative')) {
      content = generateAlternativePost(slug);
    } else if (slug.startsWith('best-social-media-service-') || slug.startsWith('best-social-media-posting-service-')) {
      content = generateBestServicePost(slug);
    } else {
      content = generateGenericPost(slug);
    }

    fs.writeFileSync(destPath, content);
    generated++;
  }

  // Count total
  const totalBlog = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md')).length;
  const totalLocal = fs.readdirSync(LOCAL_DIR).filter(f => f.endsWith('.md')).length;

  console.log('━━━ Generate Results ━━━');
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`  Total blog posts: ${totalBlog}`);
  console.log(`  Total local pages: ${totalLocal}`);
}

main();
