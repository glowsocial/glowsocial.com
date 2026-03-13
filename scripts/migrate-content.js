#!/usr/bin/env node
/**
 * Content Migration Script for Glow Social Marketing Site
 *
 * Migrates existing markdown content from sparky/clients/glow-social/
 * into the Next.js marketing site's content directories.
 *
 * Handles:
 *   - 52 blog posts from posts/
 *   - 100 geo-targeted local pages from posts-local/
 *   - 15 comparison pages from posts-comparisons/
 *
 * What it does:
 *   1. Reads each .md file
 *   2. Preserves existing frontmatter (title, slug)
 *   3. Maps metaDescription -> description (Next.js convention)
 *   4. Adds a date field (uses file modified time as fallback)
 *   5. Extracts FAQ schema JSON-LD and converts to frontmatter
 *   6. Cleans up WordPress HTML artifacts (wp-block-table, etc.)
 *   7. Strips numeric prefixes from filenames for clean slugs
 *   8. Writes to the appropriate content/ directory
 */

const fs = require("fs");
const path = require("path");

// ─── Config ───────────────────────────────────────────────────────────
const SPARKY_ROOT = path.resolve(__dirname, "..", ".."); // -> clients/glow-social/
const SITE_ROOT = path.resolve(__dirname, ".."); // -> marketing-site/

const MIGRATIONS = [
  {
    name: "Blog Posts",
    source: path.join(SPARKY_ROOT, "posts"),
    dest: path.join(SITE_ROOT, "content", "blog"),
  },
  {
    name: "Local Pages",
    source: path.join(SPARKY_ROOT, "posts-local"),
    dest: path.join(SITE_ROOT, "content", "local"),
  },
  {
    name: "Comparison Pages",
    source: path.join(SPARKY_ROOT, "posts-comparisons"),
    dest: path.join(SITE_ROOT, "content", "comparisons"),
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────

/**
 * Parse frontmatter from a markdown string.
 * Returns { data: {}, content: string }
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data = {};
  match[1].split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  });

  return { data, content: match[2] };
}

/**
 * Serialize frontmatter + content back to a markdown string.
 */
function serializeFrontmatter(data, content) {
  const lines = ["---"];
  for (const [key, val] of Object.entries(data)) {
    if (val === undefined || val === null) continue;
    // Quote strings that contain special yaml characters
    const needsQuotes = typeof val === "string" && (val.includes(":") || val.includes('"') || val.includes("'") || val.includes("#") || val.includes("[") || val.includes("{"));
    if (needsQuotes) {
      lines.push(`${key}: "${val.replace(/"/g, '\\"')}"`);
    } else if (typeof val === "string") {
      lines.push(`${key}: "${val}"`);
    } else {
      lines.push(`${key}: ${val}`);
    }
  }
  lines.push("---");
  lines.push("");
  lines.push(content.trim());
  lines.push("");
  return lines.join("\n");
}

/**
 * Extract FAQ JSON-LD from content and strip the script tag.
 * Returns { faqs: Array, cleanedContent: string }
 */
function extractFaqSchema(content) {
  const faqRegex = /<script\s+type="application\/ld\+json">\s*(\{[\s\S]*?"@type"\s*:\s*"FAQPage"[\s\S]*?\})\s*<\/script>/;
  const match = content.match(faqRegex);

  if (!match) return { faqs: [], cleanedContent: content };

  let cleanedContent = content.replace(match[0], "").trim();

  try {
    const schema = JSON.parse(match[1]);
    const faqs = (schema.mainEntity || []).map((q) => ({
      question: q.name,
      answer: q.acceptedAnswer?.text || "",
    }));
    return { faqs, cleanedContent };
  } catch {
    return { faqs: [], cleanedContent };
  }
}

/**
 * Clean up WordPress HTML artifacts in markdown content.
 */
function cleanContent(content) {
  let cleaned = content;

  // Remove WordPress block wrappers
  cleaned = cleaned.replace(/<figure\s+class="wp-block-table">\s*/g, "");
  cleaned = cleaned.replace(/<\/figure>/g, "");

  // Convert inline HTML FAQ headings to markdown
  cleaned = cleaned.replace(/<h2>(.*?)<\/h2>/g, "## $1");
  cleaned = cleaned.replace(/<h3>(.*?)<\/h3>/g, "### $1");
  cleaned = cleaned.replace(/<p>(.*?)<\/p>/g, "$1\n");

  // Clean up excessive blank lines
  cleaned = cleaned.replace(/\n{4,}/g, "\n\n\n");

  return cleaned.trim();
}

/**
 * Derive a clean slug from a filename.
 * Strips numeric prefixes like "01-", "19b-", etc.
 */
function filenameToSlug(filename) {
  const base = filename.replace(/\.md$/, "");
  // Strip leading numbers and optional letter suffix, e.g., "01-", "19b-"
  return base.replace(/^\d+[a-z]?-/, "");
}

/**
 * Get a reasonable date for a post. Uses file mtime.
 */
function getDate(filePath) {
  const stat = fs.statSync(filePath);
  return stat.mtime.toISOString().split("T")[0]; // YYYY-MM-DD
}

// ─── Main ─────────────────────────────────────────────────────────────

function migrate() {
  let totalMigrated = 0;
  let totalSkipped = 0;

  for (const { name, source, dest } of MIGRATIONS) {
    console.log(`\n━━━ ${name} ━━━`);
    console.log(`  Source: ${source}`);
    console.log(`  Dest:   ${dest}`);

    if (!fs.existsSync(source)) {
      console.log(`  ⚠ Source directory not found, skipping.`);
      continue;
    }

    // Ensure destination exists
    fs.mkdirSync(dest, { recursive: true });

    const files = fs.readdirSync(source).filter((f) => f.endsWith(".md"));
    console.log(`  Found ${files.length} markdown files`);

    let migrated = 0;
    let skipped = 0;

    for (const file of files) {
      const sourcePath = path.join(source, file);
      const raw = fs.readFileSync(sourcePath, "utf-8");

      // Parse existing frontmatter
      const { data, content } = parseFrontmatter(raw);

      // Extract FAQ schema from content body
      const { faqs, cleanedContent } = extractFaqSchema(content);

      // Clean up WordPress artifacts
      const finalContent = cleanContent(cleanedContent);

      // Build new frontmatter
      const slug = data.slug || filenameToSlug(file);
      const newData = {
        title: data.title || slug.replace(/-/g, " "),
        description: data.metaDescription || data.description || "",
        slug,
        date: data.date || getDate(sourcePath),
      };

      // Add tags based on directory
      if (name === "Local Pages") {
        // Extract city and industry from filename
        const parts = file.replace(".md", "").split("-");
        const city = parts[parts.length - 1];
        newData.city = city.charAt(0).toUpperCase() + city.slice(1);
        newData.type = "local";
      } else if (name === "Comparison Pages") {
        newData.type = "comparison";
      }

      // Write to destination using slug as filename
      const destFile = `${slug}.md`;
      const destPath = path.join(dest, destFile);

      const output = serializeFrontmatter(newData, finalContent);
      fs.writeFileSync(destPath, output);

      migrated++;
    }

    console.log(`  ✓ Migrated: ${migrated}`);
    if (skipped > 0) console.log(`  ⚠ Skipped: ${skipped}`);

    totalMigrated += migrated;
    totalSkipped += skipped;
  }

  console.log(`\n━━━ Done ━━━`);
  console.log(`  Total migrated: ${totalMigrated}`);
  if (totalSkipped > 0) console.log(`  Total skipped: ${totalSkipped}`);
  console.log(`\n  Next: run 'npm run build' to verify all pages generate correctly.`);
}

migrate();
