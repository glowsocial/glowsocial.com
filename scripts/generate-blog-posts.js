#!/usr/bin/env node
/**
 * AI Blog Post Generator — glowsocial.com
 *
 * Generates SEO + AEO-optimized markdown posts using Gemini.
 *
 * ONE-TIME SETUP:
 *   1. Get your free Gemini key: https://aistudio.google.com/apikey
 *   2. Add to glowsocial.com/.env.local:  GEMINI_API_KEY=AIza...
 *
 * Usage:
 *   GEMINI_API_KEY=AIza... node scripts/generate-blog-posts.js
 *   GEMINI_API_KEY=AIza... node scripts/generate-blog-posts.js --count 5
 *   GEMINI_API_KEY=AIza... node scripts/generate-blog-posts.js --keyword "social media for dentists"
 *
 *   Or add to .env.local and run: node -r dotenv/config scripts/generate-blog-posts.js
 *
 * Posts land in content/blog/ ready to commit and deploy.
 */

const fs   = require('fs');
const path = require('path');

const BLOG_DIR        = path.resolve(__dirname, '..', 'content', 'blog');
const API_KEY         = process.env.GEMINI_API_KEY;
const MODEL           = 'gemini-2.0-flash';
const DEFAULT_COUNT   = 10;
const DELAY_MS        = 1500; // polite rate limiting between calls

if (!API_KEY) {
  console.error('❌  Set GEMINI_API_KEY environment variable.');
  console.error('   Get one free at: https://aistudio.google.com/apikey');
  console.error('   Then: GEMINI_API_KEY=AIza... node scripts/generate-blog-posts.js');
  process.exit(1);
}

// ─── Target keyword bank ─────────────────────────────────────────────────────
// Add more here anytime. Script skips slugs that already exist.
const KEYWORDS = [
  // Social media automation & scheduling
  "how to automate social media posting for small business",
  "best social media scheduler for local business 2026",
  "social media automation tools for real estate agents",
  "how much does social media management cost for small business",
  "social media posting service for restaurants",
  "social media management for chiropractors",
  "social media management for financial advisors",
  "social media for veterinary clinics",
  "social media management for physical therapists",
  "social media for mortgage brokers",
  "social media management for electricians",
  "social media for HVAC companies",
  "social media for roofing companies",
  "done for you social media for small business",
  "affordable social media management for local business",
  // AI social media
  "AI social media content creation for small business",
  "how AI writes social media posts",
  "can AI manage your social media",
  "AI tools for local business social media",
  "best AI social media tool for coaches",
  "does AI social media actually work",
  // Comparison / alternatives
  "Metricool vs Hootsuite for small business",
  "SocialBee alternative for local business",
  "Later alternative for small business 2026",
  "Publer alternative affordable",
  "Zoho Social alternative",
  // Local SEO + GBP
  "how to use Google Business Profile to get more customers",
  "Google Business Profile tips for restaurants",
  "Google Business Profile for service area businesses",
  "how often should you post on Google Business Profile",
  "Google Business Profile posts that get clicks",
  "what to post on Google Business Profile",
  // Content strategy
  "what to post on social media when you have nothing to say",
  "social media content ideas for local business 2026",
  "how many times should a local business post on social media",
  "best time to post on Facebook for local business",
  "Instagram vs Facebook for local business",
  "should local businesses use TikTok",
  // Lead generation / positioning
  "how social media generates leads for local business",
  "social media ROI for small business",
  "how to measure social media results for local business",
  "why local businesses fail at social media",
  "social media mistakes local businesses make",
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

async function callGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 4096, temperature: 0.7 },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Empty response from Gemini');
  // Strip markdown code fences if Gemini wraps in ```markdown
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
      const content = await callGemini(buildPrompt(keyword));

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
