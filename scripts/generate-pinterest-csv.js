#!/usr/bin/env node
/**
 * Generate a Pinterest bulk-upload CSV from all content.
 *
 * Pinterest CSV columns:
 *   title, description, link, image_url, board
 *
 * Run: node scripts/generate-pinterest-csv.js
 * Output: scripts/pinterest-bulk-upload-1.csv, pinterest-bulk-upload-2.csv (if >200)
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.join(__dirname, "..", "content");
const BASE_URL = "https://glowsocial.com";
const BATCH_SIZE = 200; // Pinterest max per upload

// Board mapping based on content directory and tags
function assignBoard(post, category) {
  if (category === "comparisons") return "Social Media Tool Comparisons";
  if (category === "local") return "Local Business Marketing";

  const title = (post.title || "").toLowerCase();
  const tags = (post.tags || []).map((t) => t.toLowerCase());
  const slug = (post.slug || "").toLowerCase();

  // Product-specific
  if (
    title.includes("glow social") ||
    slug.includes("glow-social") ||
    tags.includes("glow social")
  )
    return "Glow Social Tips";

  // Industry verticals
  if (
    title.includes("restaurant") ||
    title.includes("salon") ||
    title.includes("realtor") ||
    title.includes("real estate") ||
    title.includes("dentist") ||
    title.includes("contractor") ||
    title.includes("fitness") ||
    title.includes("chiropractor")
  )
    return "Social Media by Industry";

  // Pricing / hiring
  if (
    title.includes("cost") ||
    title.includes("pricing") ||
    title.includes("hire") ||
    title.includes("manager")
  )
    return "Social Media Management Tips";

  // AI / automation
  if (
    title.includes("ai") ||
    title.includes("automat") ||
    title.includes("tool")
  )
    return "AI Marketing Tools";

  // Strategy / tips
  return "Social Media Tips for Small Business";
}

function getPostsFromDir(subdir) {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const slug = data.slug || filename.replace(/\.(md|mdx)$/, "");

      // Determine URL path based on category
      let urlPath;
      if (subdir === "blog") urlPath = `/blog/${slug}`;
      else if (subdir === "comparisons") urlPath = `/compare/${slug}`;
      else if (subdir === "local") urlPath = `/local/${slug}`;
      else urlPath = `/${slug}`;

      return {
        title: data.title || "",
        description: data.description || "",
        slug,
        tags: data.tags || [],
        url: `${BASE_URL}${urlPath}`,
        category: subdir,
      };
    })
    .filter((p) => p.title); // Skip posts without titles
}

// Escape CSV field
function csvEscape(str) {
  if (!str) return "";
  // If contains comma, newline, or quote, wrap in quotes and escape internal quotes
  if (str.includes(",") || str.includes("\n") || str.includes('"')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// Collect all posts
const allPosts = [
  ...getPostsFromDir("blog"),
  ...getPostsFromDir("comparisons"),
  ...getPostsFromDir("local"),
];

console.log(`Found ${allPosts.length} total content pages`);

// Generate CSV rows
const rows = allPosts.map((post) => {
  const imageUrl = `${BASE_URL}/pins/${post.slug}.png`;
  const board = assignBoard(post, post.category);

  // Pinterest description: max 500 chars, include key info
  let pinDescription = post.description;
  if (pinDescription.length > 490) {
    pinDescription = pinDescription.substring(0, 487) + "...";
  }

  return {
    title: post.title,
    description: pinDescription,
    link: post.url,
    image_url: imageUrl,
    board,
  };
});

// Split into batches of 200
const batches = [];
for (let i = 0; i < rows.length; i += BATCH_SIZE) {
  batches.push(rows.slice(i, i + BATCH_SIZE));
}

// Write CSV files
const header = "title,description,link,image_url,board";

batches.forEach((batch, idx) => {
  const csvRows = batch.map(
    (r) =>
      `${csvEscape(r.title)},${csvEscape(r.description)},${csvEscape(r.link)},${csvEscape(r.image_url)},${csvEscape(r.board)}`
  );

  const csv = [header, ...csvRows].join("\n");
  const filename = `pinterest-bulk-upload-${idx + 1}.csv`;
  const outPath = path.join(__dirname, filename);
  fs.writeFileSync(outPath, csv, "utf-8");
  console.log(`Wrote ${batch.length} pins to ${filename}`);
});

// Print board summary
const boardCounts = {};
rows.forEach((r) => {
  boardCounts[r.board] = (boardCounts[r.board] || 0) + 1;
});
console.log("\nBoard breakdown:");
Object.entries(boardCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([board, count]) => {
    console.log(`  ${board}: ${count} pins`);
  });
