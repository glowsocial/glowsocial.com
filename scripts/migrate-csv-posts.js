#!/usr/bin/env node
/**
 * Migrate blog posts from glow-social-posts.csv into content/blog/
 *
 * Only imports rows that:
 *   1. Have actual HTML content (non-empty content column)
 *   2. Don't already exist in content/blog/ (no overwrite)
 *
 * Converts HTML content to markdown-ish format suitable for the blog.
 */

const fs = require("fs");
const path = require("path");

const CSV_PATH = path.resolve(__dirname, "..", "..", "sparky", "clients", "glow-social", "glow-social-posts.csv");
const BLOG_DIR = path.resolve(__dirname, "..", "content", "blog");

// ─── Simple CSV parser that handles quoted fields with commas ────────
function parseCSVRow(row) {
  const fields = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    if (char === '"') {
      if (inQuotes && row[i + 1] === '"') {
        current += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  fields.push(current.trim());
  return fields;
}

// ─── Split CSV into rows, handling multiline quoted fields ───────────
function splitCSVRows(text) {
  const rows = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '""';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      current += char;
    } else if (char === "\n" && !inQuotes) {
      if (current.trim()) rows.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  if (current.trim()) rows.push(current);
  return rows;
}

// ─── Convert HTML to simple markdown ─────────────────────────────────
function htmlToMarkdown(html) {
  if (!html) return "";

  let md = html;

  // Headers
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n## $1\n");
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n### $1\n");
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, "\n#### $1\n");

  // Paragraphs
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, "\n$1\n");

  // Bold / italic
  md = md.replace(/<strong>(.*?)<\/strong>/gi, "**$1**");
  md = md.replace(/<em>(.*?)<\/em>/gi, "*$1*");
  md = md.replace(/<b>(.*?)<\/b>/gi, "**$1**");
  md = md.replace(/<i>(.*?)<\/i>/gi, "*$1*");

  // Links
  md = md.replace(/<a[^>]+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)");

  // Lists
  md = md.replace(/<ul[^>]*>/gi, "");
  md = md.replace(/<\/ul>/gi, "\n");
  md = md.replace(/<ol[^>]*>/gi, "");
  md = md.replace(/<\/ol>/gi, "\n");
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1");

  // Line breaks
  md = md.replace(/<br\s*\/?>/gi, "\n");

  // Remove remaining HTML tags (tables, figures, scripts, etc.)
  md = md.replace(/<script[\s\S]*?<\/script>/gi, "");
  md = md.replace(/<style[\s\S]*?<\/style>/gi, "");
  md = md.replace(/<[^>]+>/g, "");

  // Decode HTML entities
  md = md.replace(/&amp;/g, "&");
  md = md.replace(/&lt;/g, "<");
  md = md.replace(/&gt;/g, ">");
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#039;/g, "'");
  md = md.replace(/&apos;/g, "'");
  md = md.replace(/&mdash;/g, "—");
  md = md.replace(/&ndash;/g, "–");
  md = md.replace(/&hellip;/g, "...");
  md = md.replace(/&nbsp;/g, " ");
  md = md.replace(/&ldquo;/g, '"');
  md = md.replace(/&rdquo;/g, '"');
  md = md.replace(/&lsquo;/g, "'");
  md = md.replace(/&rsquo;/g, "'");

  // Clean up whitespace
  md = md.replace(/\n{3,}/g, "\n\n");
  return md.trim();
}

// ─── Main ────────────────────────────────────────────────────────────
function migrate() {
  if (!fs.existsSync(CSV_PATH)) {
    console.error(`CSV not found: ${CSV_PATH}`);
    process.exit(1);
  }

  fs.mkdirSync(BLOG_DIR, { recursive: true });

  const raw = fs.readFileSync(CSV_PATH, "utf-8");
  const rows = splitCSVRows(raw);
  const header = parseCSVRow(rows[0]);

  const titleIdx = header.indexOf("title");
  const slugIdx = header.indexOf("slug");
  const metaIdx = header.indexOf("meta_description");
  const contentIdx = header.indexOf("content");
  const statusIdx = header.indexOf("status");

  console.log(`CSV columns: ${header.join(", ")}`);
  console.log(`Total data rows: ${rows.length - 1}`);

  let migrated = 0;
  let skippedNoContent = 0;
  let skippedExists = 0;
  let skippedNoSlug = 0;

  for (let i = 1; i < rows.length; i++) {
    const fields = parseCSVRow(rows[i]);

    const title = fields[titleIdx] || "";
    const slug = fields[slugIdx] || "";
    const metaDescription = fields[metaIdx] || "";
    const content = fields[contentIdx] || "";

    if (!slug) {
      skippedNoSlug++;
      continue;
    }

    if (!content || content.length < 50) {
      skippedNoContent++;
      continue;
    }

    const destPath = path.join(BLOG_DIR, `${slug}.md`);
    if (fs.existsSync(destPath)) {
      skippedExists++;
      continue;
    }

    // Convert HTML content to markdown
    const markdownContent = htmlToMarkdown(content);

    // Build frontmatter
    const escapedTitle = title.replace(/"/g, '\\"');
    const escapedDesc = metaDescription.replace(/"/g, '\\"');

    const output = [
      "---",
      `title: "${escapedTitle}"`,
      `description: "${escapedDesc}"`,
      `slug: "${slug}"`,
      `date: "2025-01-15"`,
      "---",
      "",
      markdownContent,
      "",
    ].join("\n");

    fs.writeFileSync(destPath, output);
    migrated++;
  }

  console.log(`\n━━━ Results ━━━`);
  console.log(`  Migrated:           ${migrated}`);
  console.log(`  Skipped (exists):   ${skippedExists}`);
  console.log(`  Skipped (no content): ${skippedNoContent}`);
  console.log(`  Skipped (no slug):  ${skippedNoSlug}`);
  console.log(`  Total blog posts:   ${fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md')).length}`);
}

migrate();
