#!/usr/bin/env node
/**
 * One-page SEO fixer for Glow Social.
 *
 * This is intentionally more agentic than the planning report: given a page URL,
 * it finds the local source, applies the queue metadata, ensures an early answer
 * block exists, removes stale product promises, and adds a small number of
 * inbound internal links from relevant pages.
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const matter = require("gray-matter");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_QUEUE = "seo-republish-queue-2026-06-07.md";

const CONTENT_SECTIONS = [
  { section: "blog", routeBase: "/blog" },
  { section: "comparisons", routeBase: "/compare" },
  { section: "local", routeBase: "/local" },
  { section: "questions", routeBase: "/resources/questions" },
  { section: "research", routeBase: "/research" },
];

const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "best", "by", "can", "do",
  "does", "for", "from", "guide", "how", "in", "is", "it", "local", "of",
  "on", "or", "our", "small", "social", "the", "to", "vs", "what", "when",
  "which", "with", "you", "your", "2024", "2025", "2026", "2027",
]);

const STALE_REPLACEMENTS = [
  {
    label: "automatic publishing promise",
    pattern: /\bautomatic publishing\b/gi,
    replacement: "approval-first publishing",
  },
  {
    label: "automatic publishing promise",
    pattern: /\b(publishes|published|publish|publishing) automatically\b/gi,
    replacement: "publishes approved posts",
  },
  {
    label: "immediate publishing promise",
    pattern: /\bPosts start going out immediately\b/gi,
    replacement: "Your first batch is ready to review",
  },
  {
    label: "hands-off publishing promise",
    pattern: /\bposts go out on schedule without your involvement\b/gi,
    replacement: "approved posts go out on schedule",
  },
  {
    label: "overcompressed setup-time claim",
    pattern: /\bSetup takes about 5 minutes\b/gi,
    replacement: "Preview posts from your website first",
  },
  {
    label: "overcompressed setup-time claim",
    pattern: /\bSet up Glow Social in 5 minutes\b/gi,
    replacement: "Preview Glow Social posts from your website",
  },
  {
    label: "overcompressed setup-time claim",
    pattern: /\b5-minute setup\b/gi,
    replacement: "preview-first setup",
  },
  {
    label: "fully automated claim",
    pattern: /\bfully automated\b/gi,
    replacement: "approval-first",
  },
  {
    label: "fully automated claim",
    pattern: /\bautomate your entire social media\b/gi,
    replacement: "prepare your social posts for approval",
  },
  {
    label: "old product claim",
    pattern: /\bhandles content creation and publishing automatically\b/gi,
    replacement: "prepares content for review and approval",
  },
  {
    label: "autopilot claim",
    pattern: /\bruns on autopilot\b/gi,
    replacement: "stays organized around approved posts",
  },
  {
    label: "old calendar promise",
    pattern: /\bfull content calendar\b/gi,
    replacement: "posts ready to review",
  },
  {
    label: "old calendar promise",
    pattern: /\bentire month's calendar\b/gi,
    replacement: "month's posts ready to review",
  },
];

function printHelp() {
  console.log(`Glow Social one-page SEO fixer

Usage:
  npm run seo:fix -- --page /blog/freelance-social-media-manager-charge-cost
  npm run seo:fix -- --page /blog/freelance-social-media-manager-charge-cost --apply

Options:
  --page <route>          Required. Page route or full glowsocial.com URL.
  --queue <file>          Markdown queue with URL/signal/title/meta rows.
  --inbound-links <n>     Number of inbound links to add. Default: 3.
  --allow-missing-queue   Allow fixing a page that is not in the static GSC queue.
  --notes <text>          Notes to use when --allow-missing-queue is active.
  --dry-run               Show the patch plan without writing files. This is the default.
  --apply                 Write the proposed edits.
  --allow-dirty           Allow edits to files with uncommitted changes.
  --help                  Show this help.
`);
}

function parseArgs(argv) {
  const opts = {
    page: "",
    queue: DEFAULT_QUEUE,
    inboundLinks: 3,
    allowMissingQueue: false,
    notes: "",
    dryRun: true,
    allowDirty: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") opts.help = true;
    else if (arg === "--dry-run") opts.dryRun = true;
    else if (arg === "--apply") opts.dryRun = false;
    else if (arg === "--allow-dirty") opts.allowDirty = true;
    else if (arg === "--allow-missing-queue") opts.allowMissingQueue = true;
    else if (arg === "--page" && argv[i + 1]) opts.page = normalizeRoute(argv[++i]);
    else if (arg === "--queue" && argv[i + 1]) opts.queue = argv[++i];
    else if (arg === "--notes" && argv[i + 1]) opts.notes = argv[++i];
    else if (arg === "--inbound-links" && argv[i + 1]) opts.inboundLinks = Number(argv[++i]);
    else throw new Error(`Unknown option: ${arg}`);
  }

  if (!opts.help && !opts.page) throw new Error("--page is required");
  if (!Number.isInteger(opts.inboundLinks) || opts.inboundLinks < 0) {
    throw new Error("--inbound-links must be a non-negative integer");
  }

  return opts;
}

function abs(inputPath) {
  return path.isAbsolute(inputPath) ? inputPath : path.join(ROOT, inputPath);
}

function normalizeRoute(value) {
  let route = String(value || "").trim();
  route = route.replace(/`/g, "");
  route = route.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$2");
  route = route.replace(/^https?:\/\/(?:www\.)?glowsocial\.com/i, "");
  route = route.split("#")[0].split("?")[0].trim();
  if (!route.startsWith("/")) route = `/${route}`;
  if (route.length > 1) route = route.replace(/\/+$/, "");
  return route || "/";
}

function walkFiles(dir, predicate, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(fullPath, predicate, results);
    else if (predicate(fullPath)) results.push(fullPath);
  }
  return results;
}

function slugFromFilename(filePath) {
  return path.basename(filePath).replace(/\.(md|mdx)$/i, "");
}

function routeForContent(sectionConfig, filePath, data) {
  const slug = data.slug || slugFromFilename(filePath);
  return normalizeRoute(`${sectionConfig.routeBase}/${slug}`);
}

function stripMarkdown(text) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[#*_`>|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return stripMarkdown(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((word) => word.replace(/^-+|-+$/g, ""))
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

function unique(array) {
  return [...new Set(array)];
}

function inventoryContent() {
  const entries = [];

  for (const sectionConfig of CONTENT_SECTIONS) {
    const dir = path.join(ROOT, "content", sectionConfig.section);
    const files = walkFiles(dir, (filePath) => /\.(md|mdx)$/i.test(filePath));

    for (const filePath of files) {
      const raw = fs.readFileSync(filePath, "utf8");
      const parsed = matter(raw);
      const route = routeForContent(sectionConfig, filePath, parsed.data);
      const title = parsed.data.title || firstMarkdownHeading(parsed.content);
      const description = parsed.data.description || "";
      const searchable = [route, title, description, parsed.content.slice(0, 2500)].join(" ");

      entries.push({
        section: sectionConfig.section,
        route,
        filePath,
        relativePath: path.relative(ROOT, filePath),
        title,
        description,
        data: parsed.data,
        body: parsed.content,
        raw,
        tokens: unique(tokenize(searchable)),
      });
    }
  }

  return entries;
}

function firstMarkdownHeading(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function splitMarkdownRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function cleanMarkdownCell(value) {
  return String(value || "")
    .trim()
    .replace(/^`([^`]+)`$/, "$1")
    .replace(/^\*\*([^*]+)\*\*$/, "$1")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/\s+/g, " ");
}

function parseMetric(signal, regex) {
  const match = String(signal || "").match(regex);
  if (!match) return null;
  return Number(match[1].replace(/,/g, ""));
}

function parseSignal(signal) {
  return {
    impressions: parseMetric(signal, /([\d,]+)\s+(?:combined\s+)?impressions/i),
    clicks: parseMetric(signal, /([\d,]+)\s+clicks/i),
    ctr: parseMetric(signal, /([\d.]+)%\s*CTR/i),
    position: parseMetric(signal, /pos\s*([\d.]+)/i),
  };
}

function parseQueue(queuePath) {
  const filePath = abs(queuePath);
  if (!fs.existsSync(filePath)) throw new Error(`Queue file not found: ${queuePath}`);
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  const rows = [];
  let headers = null;

  for (const line of lines) {
    if (!line.trim().startsWith("|")) {
      headers = null;
      continue;
    }

    const cells = splitMarkdownRow(line);
    if (cells.every((cell) => /^:?-{2,}:?$/.test(cell))) continue;

    const lowerCells = cells.map((cell) => cell.toLowerCase());
    if (lowerCells.includes("url") && lowerCells.some((cell) => cell.includes("current signal"))) {
      headers = cells;
      continue;
    }

    if (!headers) continue;
    const row = {};
    headers.forEach((header, index) => {
      row[header.toLowerCase()] = cells[index] || "";
    });

    const route = normalizeRoute(cleanMarkdownCell(row.url || ""));
    if (!route.includes("/")) continue;

    const signalText = cleanMarkdownCell(row["current signal"] || "");
    rows.push({
      priority: cleanMarkdownCell(row.priority || String(rows.length + 1)),
      route,
      signal: parseSignal(signalText),
      signalText,
      title: cleanMarkdownCell(row["recommended seo title"] || row["new title"] || ""),
      description: cleanMarkdownCell(row["meta description"] || ""),
      notes: cleanMarkdownCell(row["republish notes"] || row.action || ""),
    });
  }

  return rows;
}

function yamlString(value) {
  return JSON.stringify(String(value).replace(/\r?\n/g, " "));
}

function upsertFrontmatter(raw, updates) {
  if (!raw.startsWith("---\n")) throw new Error("Cannot update file without YAML frontmatter");
  const endIndex = raw.indexOf("\n---", 4);
  if (endIndex === -1) throw new Error("Cannot find closing YAML frontmatter marker");

  const frontmatter = raw.slice(4, endIndex).split(/\r?\n/);
  const body = raw.slice(endIndex);
  const remaining = { ...updates };
  const nextFrontmatter = frontmatter.map((line) => {
    const key = Object.keys(remaining).find((candidate) =>
      new RegExp(`^${candidate}:\\s*`).test(line)
    );
    if (!key) return line;
    const value = remaining[key];
    delete remaining[key];
    return `${key}: ${yamlString(value)}`;
  });

  for (const [key, value] of Object.entries(remaining)) {
    nextFrontmatter.push(`${key}: ${yamlString(value)}`);
  }

  return `---\n${nextFrontmatter.join("\n")}${body}`;
}

function rawBody(raw) {
  const endIndex = raw.indexOf("\n---", 4);
  return endIndex === -1 ? raw : raw.slice(endIndex + 4).replace(/^\r?\n/, "");
}

function replaceRawBody(raw, nextBody) {
  const endIndex = raw.indexOf("\n---", 4);
  if (endIndex === -1) return nextBody;
  return `${raw.slice(0, endIndex + 4)}\n${nextBody.replace(/^\r?\n/, "")}`;
}

function hasEarlyAnswerBlock(body) {
  const firstChunk = body.slice(0, 2500);
  return /(^|\n)#{1,3}\s*(Direct Answer|Quick Answer|Short Answer)/i.test(firstChunk);
}

function deriveQuickAnswer(opportunity) {
  const description = opportunity.description || `This guide explains ${opportunity.title}.`;
  const normalizedDescription = description.endsWith(".") ? description : `${description}.`;
  const secondSentence = opportunity.route.includes("pricing") ||
    opportunity.route.includes("cost") ||
    opportunity.route.includes("rate")
    ? "Use it to compare the cash cost, time cost, and approval workload before choosing a tool, freelancer, or agency."
    : "Use it to get the practical answer first, then compare the details before choosing what to do next.";

  return `## Quick Answer\n\n${normalizedDescription} ${secondSentence}\n\n`;
}

function ensureQuickAnswer(raw, opportunity) {
  const body = rawBody(raw);
  if (hasEarlyAnswerBlock(body)) return { raw, changed: false };

  const quickAnswer = deriveQuickAnswer(opportunity);
  const trimmed = body.trimStart();
  const leadingWhitespace = body.slice(0, body.length - trimmed.length);

  if (/^#\s+.+$/m.test(trimmed)) {
    const headingMatch = trimmed.match(/^#\s+.+(?:\r?\n){1,2}/);
    if (headingMatch) {
      const insertAt = headingMatch[0].length;
      const nextBody = `${leadingWhitespace}${trimmed.slice(0, insertAt)}${quickAnswer}${trimmed.slice(insertAt)}`;
      return { raw: replaceRawBody(raw, nextBody), changed: true };
    }
  }

  return {
    raw: replaceRawBody(raw, `${leadingWhitespace}${quickAnswer}${trimmed}`),
    changed: true,
  };
}

function applyStalePromiseReplacements(raw) {
  let nextRaw = raw;
  const replacements = [];

  for (const rule of STALE_REPLACEMENTS) {
    let count = 0;
    nextRaw = nextRaw.replace(rule.pattern, () => {
      count += 1;
      return rule.replacement;
    });
    if (count) replacements.push({ label: rule.label, count, replacement: rule.replacement });
  }

  return {
    raw: nextRaw,
    replacements,
    changed: nextRaw !== raw,
  };
}

function overlapScore(aTokens, bTokens) {
  if (!aTokens.length || !bTokens.length) return 0;
  const bSet = new Set(bTokens);
  let matches = 0;
  for (const token of aTokens) {
    if (bSet.has(token)) matches += 1;
  }
  return matches / Math.sqrt(aTokens.length * bTokens.length);
}

function routeAlreadyLinked(entry, route) {
  return entry.body.includes(`](${route})`) ||
    entry.body.includes(`href="${route}"`) ||
    entry.body.includes(`href='${route}'`);
}

function anchorFromTitle(title) {
  return String(title || "related guide")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\b2026\b:?/g, "")
    .replace(/[&]/g, "and")
    .replace(/[`*_]/g, "")
    .replace(/\s{2,}/g, " ")
    .split(":")[0]
    .trim();
}

function chooseInboundSources(target, inventory, limit) {
  const targetTokens = unique(tokenize([target.route, target.title, target.description].join(" ")));
  return inventory
    .filter((entry) => entry.route !== target.route)
    .filter((entry) => !routeAlreadyLinked(entry, target.route))
    .map((entry) => ({ entry, score: overlapScore(targetTokens, entry.tokens) }))
    .filter((candidate) => candidate.score >= 0.08)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function addRelatedLink(raw, route, anchor) {
  const body = rawBody(raw);
  const link = `[${anchor}](${route})`;
  if (body.includes(link) || body.includes(`](${route})`)) return { raw, changed: false };

  const relatedPattern = /(\*\*Related guides?:\*\*.*)$/im;
  if (relatedPattern.test(body)) {
    const nextBody = body.replace(relatedPattern, (line) => `${line} · ${link}`);
    return { raw: replaceRawBody(raw, nextBody), changed: true };
  }

  const nextBody = `${body.trimEnd()}\n\n**Related guide:** ${link}\n`;
  return { raw: replaceRawBody(raw, nextBody), changed: true };
}

function diffSummary(before, after) {
  const beforeLines = before.split(/\r?\n/);
  const afterLines = after.split(/\r?\n/);
  return {
    beforeLines: beforeLines.length,
    afterLines: afterLines.length,
    deltaLines: afterLines.length - beforeLines.length,
    changed: before !== after,
  };
}

function formatSignal(signal) {
  if (!signal) return "No parsed signal";
  const parts = [];
  if (signal.impressions !== null) parts.push(`${signal.impressions.toLocaleString()} impressions`);
  if (signal.clicks !== null) parts.push(`${signal.clicks.toLocaleString()} clicks`);
  if (signal.ctr !== null) parts.push(`${signal.ctr}% CTR`);
  if (signal.position !== null) parts.push(`pos ${signal.position}`);
  return parts.join(", ") || "No parsed signal";
}

function buildFix(opts) {
  const queue = parseQueue(opts.queue);
  let opportunity = queue.find((row) => row.route === opts.page);
  if (!opportunity) {
    if (!opts.allowMissingQueue) {
      throw new Error(`No queue row found for ${opts.page}. Add it to ${opts.queue} first.`);
    }
    opportunity = {
      priority: "discovered",
      route: opts.page,
      signal: null,
      signalText: "",
      title: "",
      description: "",
      notes: opts.notes || "Discovered SEO/AEO opportunity.",
    };
  }

  const inventory = inventoryContent();
  const target = inventory.find((entry) => entry.route === opts.page);
  if (!target) throw new Error(`No local markdown source found for ${opts.page}`);

  const resolvedOpportunity = {
    ...opportunity,
    title: opportunity.title || target.title,
    description: opportunity.description || target.description,
  };

  const today = new Date().toISOString().slice(0, 10);
  let nextTargetRaw = target.raw;
  const targetActions = [];

  const frontmatterUpdates = { updated: today };
  if (opportunity.title) frontmatterUpdates.title = resolvedOpportunity.title;
  if (opportunity.description) frontmatterUpdates.description = resolvedOpportunity.description;
  const afterFrontmatter = upsertFrontmatter(nextTargetRaw, frontmatterUpdates);
  if (afterFrontmatter !== nextTargetRaw) {
    targetActions.push("updated frontmatter title/description/updated");
    nextTargetRaw = afterFrontmatter;
  }

  const quickAnswerResult = ensureQuickAnswer(nextTargetRaw, resolvedOpportunity);
  if (quickAnswerResult.changed) {
    targetActions.push("inserted early Quick Answer block");
    nextTargetRaw = quickAnswerResult.raw;
  }

  const staleResult = applyStalePromiseReplacements(nextTargetRaw);
  if (staleResult.changed) {
    targetActions.push(`replaced stale promise copy (${staleResult.replacements.map((item) => `${item.label}: ${item.count}`).join(", ")})`);
    nextTargetRaw = staleResult.raw;
  }

  const anchor = anchorFromTitle(resolvedOpportunity.title);
  const inboundCandidates = chooseInboundSources(
    { ...target, title: resolvedOpportunity.title, description: resolvedOpportunity.description },
    inventory,
    opts.inboundLinks
  );
  const inboundEdits = inboundCandidates.map(({ entry, score }) => {
    const result = addRelatedLink(entry.raw, target.route, anchor);
    return {
      entry,
      score,
      nextRaw: result.raw,
      changed: result.changed,
    };
  }).filter((edit) => edit.changed);

  return {
    opportunity: resolvedOpportunity,
    target,
    nextTargetRaw,
    targetActions,
    targetDiff: diffSummary(target.raw, nextTargetRaw),
    inboundEdits,
    anchor,
    today,
  };
}

function printPlan(fix, opts) {
  console.log(`SEO fix ${opts.dryRun ? "dry run" : "apply"}: ${fix.opportunity.route}`);
  console.log(`Source: ${fix.target.relativePath}`);
  console.log(`Signal: ${formatSignal(fix.opportunity.signal)}`);
  console.log(`Queue notes: ${fix.opportunity.notes || "none"}`);
  console.log("");
  console.log("Target page actions:");
  if (fix.targetActions.length) {
    for (const action of fix.targetActions) console.log(`- ${action}`);
  } else {
    console.log("- no target-page edits needed");
  }
  console.log(`- line delta: ${fix.targetDiff.deltaLines}`);
  console.log("");
  console.log("Inbound links:");
  if (fix.inboundEdits.length) {
    for (const edit of fix.inboundEdits) {
      console.log(`- ${edit.entry.relativePath} -> [${fix.anchor}](${fix.opportunity.route})`);
    }
  } else {
    console.log("- no inbound link edits selected");
  }
  console.log("");
  console.log("Post-apply checks:");
  console.log("- npm run build");
  console.log(`- npm run indexnow -- https://glowsocial.com${fix.opportunity.route}`);
}

function applyFix(fix) {
  if (fix.targetDiff.changed) fs.writeFileSync(fix.target.filePath, fix.nextTargetRaw);
  for (const edit of fix.inboundEdits) {
    fs.writeFileSync(edit.entry.filePath, edit.nextRaw);
  }
}

function filesToEdit(fix) {
  const files = [];
  if (fix.targetDiff.changed) files.push(fix.target.filePath);
  for (const edit of fix.inboundEdits) files.push(edit.entry.filePath);
  return unique(files);
}

function dirtyTrackedFiles(filePaths) {
  if (!filePaths.length) return [];
  const relPaths = filePaths.map((filePath) => path.relative(ROOT, filePath));
  const output = execFileSync("git", ["-C", ROOT, "status", "--porcelain", "--", ...relPaths], {
    encoding: "utf8",
  });

  return output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.slice(3));
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }

  const fix = buildFix(opts);
  printPlan(fix, opts);

  if (!opts.dryRun) {
    if (!opts.allowDirty) {
      const dirtyFiles = dirtyTrackedFiles(filesToEdit(fix));
      if (dirtyFiles.length) {
        throw new Error(
          `Refusing to edit files with uncommitted changes:\n${dirtyFiles.map((file) => `- ${file}`).join("\n")}\nRerun with --allow-dirty after reviewing the overlap.`
        );
      }
    }

    applyFix(fix);
    console.log("");
    console.log(`Applied SEO fix to ${fix.opportunity.route}.`);
  }
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
