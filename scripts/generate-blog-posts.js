#!/usr/bin/env node
/**
 * AI Blog Post Generator — glowsocial.com
 *
 * Generates SEO + AEO-optimized markdown posts using Claude Haiku.
 *
 * ONE-TIME SETUP:
 *   Add ANTHROPIC_API_KEY as a GitHub Actions secret (repo Settings → Secrets → Actions)
 *   Key available at: https://console.anthropic.com/settings/keys
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/generate-blog-posts.js
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/generate-blog-posts.js --count 5
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/generate-blog-posts.js --keyword "social media for dentists"
 *
 * Posts land in content/blog/ ready to commit and deploy.
 */

const fs   = require('fs');
const path = require('path');

const BLOG_DIR        = path.resolve(__dirname, '..', 'content', 'blog');
const API_KEY         = process.env.ANTHROPIC_API_KEY;
const MODEL           = 'claude-haiku-4-5';
const DEFAULT_COUNT   = 10;
const DELAY_MS        = 1500;

if (!API_KEY) {
  console.error('❌  Set ANTHROPIC_API_KEY environment variable.');
  console.error('   Get your key at: https://console.anthropic.com/settings/keys');
  process.exit(1);
}

// ─── Target keyword bank ─────────────────────────────────────────────────────
// Add more here anytime. Script skips slugs that already exist.
// Sources: GSC query data (April 2026), competitor gap analysis
const KEYWORDS = [
  // ── GSC striking distance: high impressions, position 5–25 ──────────────────
  // These are queries GS already ranks for but isn't winning clicks on
  "how much time does social media marketing take per week",
  "how many hours per week does social media management take",
  "best affordable social media management for small business 2026",
  "affordable social media management for local business",
  "how much does a freelance social media manager charge",
  "real cost of social media management 2026",
  "ai social media tools vs hiring an agency cost comparison",
  "social media tools under 50 dollars per month",
  "later vs buffer 2026 which is better",
  "how long should social media captions be",
  // ── GSC query clusters: long-tail questions already driving impressions ──────
  "how many hours does social media marketing really take small business",
  "is hiring a social media manager worth it for small business",
  "how much should I budget for social media management",
  "what is the average cost of social media management per month",
  "social media management pricing guide for small business",
  "how to tell if social media is working for your business",
  "social media ROI calculator for small business",
  "why instagram carousel posts get higher engagement than single images",
  // ── Comparison / alternative intent (confirmed search volume) ────────────────
  "Metricool vs Hootsuite for small business",
  "SocialBee alternative for local business",
  "Later alternative for small business 2026",
  "Publer vs Buffer which is better",
  "Zoho Social alternative affordable",
  "Hootsuite alternative cheaper 2026",
  "Sprout Social alternative for small business",
  "Buffer alternative with content creation",
  // ── Local vertical targeting ─────────────────────────────────────────────────
  "social media automation for real estate agents",
  "social media posting service for restaurants",
  "social media management for chiropractors",
  "social media management for financial advisors",
  "social media for veterinary clinics",
  "social media management for physical therapists",
  "social media for mortgage brokers",
  "social media management for electricians",
  "social media for HVAC companies",
  "social media for roofing companies",
  "social media for car dealerships",
  "social media management for dentists",
  "social media for law firms small practice",
  "social media for gyms and fitness studios",
  "social media for med spas and aesthetic clinics",
  // ── AI social media content ──────────────────────────────────────────────────
  "how AI writes social media posts for local business",
  "can AI manage your social media accounts",
  "best AI social media tool for coaches and consultants",
  "does AI social media content actually get engagement",
  "AI content creation for small business social media",
  // ── Google Business Profile ──────────────────────────────────────────────────
  "how to use Google Business Profile to get more customers",
  "Google Business Profile tips for restaurants",
  "how often should you post on Google Business Profile",
  "Google Business Profile posts that drive phone calls",
  "what to post on Google Business Profile weekly",
  "Google Business Profile for service area businesses",
  // ── Content strategy ─────────────────────────────────────────────────────────
  "social media content ideas for local business 2026",
  "how many times should a local business post on social media",
  "best time to post on Facebook for local business",
  "Instagram vs Facebook for local business which is better",
  "should local businesses use TikTok in 2026",
  "why local businesses fail at social media",
  "social media mistakes small business owners make",
  "done for you social media for small business",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function keywordToSlug(keyword) {
  return keyword
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

function existingSlugs() {
  return new Set(
    fs.readdirSync(BLOG_DIR)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace('.md', ''))
  );
}

function today() {
  return new Date().toISOString().split('T')[0];
}

async function callClaude(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  const text = data.content?.[0]?.text;
  if (!text) throw new Error('Empty response from Claude');
  // Strip markdown code fences if Claude wraps output
  return text.replace(/^```(?:markdown)?\n?/, '').replace(/\n?```$/, '');
}

function buildPrompt(keyword) {
  return `You are writing a blog post for Glow Social (glowsocial.com), an AI-powered social media management platform for local businesses and solopreneurs. It costs $49/month, handles content creation and publishing automatically, and saves business owners hours every week.

Write a complete, publication-ready blog post targeting this keyword: "${keyword}"

The post MUST:
- Be genuinely helpful and specific (not generic fluff)
- Position Glow Social naturally as a solution where relevant (don't force it into every paragraph)
- Use a conversational but authoritative tone — like a smart friend who runs a marketing agency
- Be 800–1,200 words
- Include an H1, multiple H2 subheadings, and a strong closing CTA pointing to https://glowsocial.com

Return ONLY valid markdown in this exact format — no extra commentary, no code fences around the whole thing:

---
title: "[Compelling, specific title with keyword]"
description: "[150-character meta description with primary keyword near the start]"
slug: "${keywordToSlug(keyword)}"
date: "${today()}"
tags: ["[tag1]", "[tag2]", "[tag3]"]
faqs:
  - q: "[Long-tail question a real person would type into Google or ask an AI — minimum 10 words]"
    a: "[Thorough, specific answer — 3–5 sentences. Mention Glow Social where appropriate.]"
  - q: "[Second question — different angle, minimum 10 words]"
    a: "[Thorough answer — 3–5 sentences]"
  - q: "[Third question — minimum 10 words]"
    a: "[Thorough answer — 3–5 sentences]"
  - q: "[Fourth question — minimum 10 words]"
    a: "[Thorough answer — 3–5 sentences]"
  - q: "[Fifth question — minimum 10 words]"
    a: "[Thorough answer — 3–5 sentences]"
---

[Blog post body in markdown — H1 first, then the full post]`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { count: DEFAULT_COUNT, keyword: null };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--count' && args[i + 1]) opts.count = parseInt(args[i + 1]);
    if (args[i] === '--keyword' && args[i + 1]) opts.keyword = args[i + 1];
  }
  return opts;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const opts    = parseArgs();
  const existing = existingSlugs();

  let targets = opts.keyword
    ? [opts.keyword]
    : KEYWORDS.filter(kw => !existing.has(keywordToSlug(kw)));

  if (targets.length === 0) {
    console.log('✅  All keywords already have posts. Add more to the KEYWORDS array.');
    return;
  }

  targets = targets.slice(0, opts.count);
  console.log(`\n🚀  Generating ${targets.length} post(s) for glowsocial.com...\n`);

  const results = { created: [], failed: [] };

  for (const keyword of targets) {
    const slug = keywordToSlug(keyword);
    const file = path.join(BLOG_DIR, `${slug}.md`);

    if (fs.existsSync(file)) {
      console.log(`⏭   Skipping (exists): ${slug}`);
      continue;
    }

    process.stdout.write(`✍️   "${keyword}" ... `);

    try {
      const content = await callClaude(buildPrompt(keyword));

      // Sanity check: must start with ---
      if (!content.trim().startsWith('---')) {
        throw new Error('Response did not start with frontmatter');
      }

      fs.writeFileSync(file, content.trim() + '\n');
      console.log(`✅  ${slug}.md`);
      results.created.push(slug);
    } catch (err) {
      console.log(`❌  FAILED: ${err.message}`);
      results.failed.push({ keyword, error: err.message });
    }

    if (targets.indexOf(keyword) < targets.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  console.log(`\n─────────────────────────────────────`);
  console.log(`✅  Created: ${results.created.length}`);
  if (results.failed.length > 0) {
    console.log(`❌  Failed:  ${results.failed.length}`);
    results.failed.forEach(f => console.log(`     • ${f.keyword}: ${f.error}`));
  }
  console.log(`\nNext step: git add content/blog && git commit -m "content: add ${results.created.length} AI-generated posts" && git push`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
