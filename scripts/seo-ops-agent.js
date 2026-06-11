#!/usr/bin/env node
/**
 * Glow Social SEO ops agent.
 *
 * Produces a reviewable Search Console-driven SEO patch plan. By default this
 * reads the existing republish queue and content inventory, then writes a run
 * report under seo-agent-runs/. It only edits content when --apply-frontmatter
 * is passed explicitly.
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_QUEUE = "seo-republish-queue-2026-06-07.md";
const DEFAULT_TOPIC_MAP = "ranked-topical-authority-map-2026-06-11.md";
const DEFAULT_OUTPUT_DIR = "seo-agent-runs";

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

const STALE_PROMISE_PATTERNS = [
  {
    id: "automatic-publishing",
    label: "Old automatic publishing promise",
    pattern:
      /\b(automatic publishing|publishes automatically|published automatically|publish(?:ed|es)? automatically|posts start going out immediately|posts go out on schedule without your involvement)\b/i,
    safer: "approval-first publishing",
  },
  {
    id: "five-minute-setup",
    label: "Overcompressed setup-time claim",
    pattern:
      /\b(5-minute setup|5 minutes setup|5 minutes to set up|Setup takes about 5 minutes|Set up Glow Social in 5 minutes)\b/i,
    safer: "preview posts from your website first",
  },
  {
    id: "fully-automated",
    label: "Fully automated claim",
    pattern:
      /\b(fully automated|automate your entire social media|handles content creation and publishing automatically|runs on autopilot)\b/i,
    safer: "posts prepared for review and approval",
  },
  {
    id: "full-content-calendar",
    label: "Old full-calendar positioning",
    pattern: /\b(full content calendar|entire month's calendar)\b/i,
    safer: "posts ready to review",
  },
];

function printHelp() {
  console.log(`Glow Social SEO ops agent

Usage:
  npm run seo:agent
  npm run seo:agent -- --limit 6
  npm run seo:agent -- --dry-run
  npm run seo:agent -- --apply-frontmatter --limit 3

Options:
  --queue <file>          Markdown queue with URL/signal/title/meta rows
  --topic-map <file>      Optional topical map with Refresh/Create actions
  --output-dir <dir>      Directory for markdown/json run reports
  --limit <n>             Limit opportunities processed
  --dry-run               Print report summary without writing output files
  --apply-frontmatter     Update title/description/updated for exact content matches
  --scan-all-content      Scan every content file for stale promise language
  --help                  Show this help
`);
}

function parseArgs(argv) {
  const opts = {
    queue: DEFAULT_QUEUE,
    topicMap: DEFAULT_TOPIC_MAP,
    outputDir: DEFAULT_OUTPUT_DIR,
    limit: null,
    dryRun: false,
    applyFrontmatter: false,
    scanAllContent: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") opts.help = true;
    else if (arg === "--dry-run") opts.dryRun = true;
    else if (arg === "--apply-frontmatter") opts.applyFrontmatter = true;
    else if (arg === "--scan-all-content") opts.scanAllContent = true;
    else if (arg === "--queue" && argv[i + 1]) opts.queue = argv[++i];
    else if (arg === "--topic-map" && argv[i + 1]) opts.topicMap = argv[++i];
    else if (arg === "--output-dir" && argv[i + 1]) opts.outputDir = argv[++i];
    else if (arg === "--limit" && argv[i + 1]) opts.limit = Number(argv[++i]);
    else throw new Error(`Unknown option: ${arg}`);
  }

  if (opts.limit !== null && (!Number.isInteger(opts.limit) || opts.limit < 1)) {
    throw new Error("--limit must be a positive integer");
  }

  return opts;
}

function abs(inputPath) {
  return path.isAbsolute(inputPath) ? inputPath : path.join(ROOT, inputPath);
}

function readIfExists(inputPath) {
  const filePath = abs(inputPath);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

function walkFiles(dir, predicate, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, predicate, results);
    } else if (predicate(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

function normalizeRoute(value) {
  if (!value) return "";
  let route = String(value).trim();
  route = route.replace(/`/g, "");
  route = route.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$2");
  route = route.replace(/^https?:\/\/(?:www\.)?glowsocial\.com/i, "");
  route = route.replace(/^https?:\/\/app\.glowsocial\.com/i, "");
  route = route.split("#")[0].split("?")[0].trim();
  if (!route.startsWith("/")) route = `/${route}`;
  route = route.replace(/\/index$/, "");
  if (route.length > 1) route = route.replace(/\/+$/, "");
  return route || "/";
}

function slugFromFilename(filePath) {
  return path.basename(filePath).replace(/\.(md|mdx)$/i, "");
}

function routeForContent(sectionConfig, filePath, data) {
  const slug = data.slug || slugFromFilename(filePath);
  return normalizeRoute(`${sectionConfig.routeBase}/${slug}`);
}

function routeForAppPage(filePath) {
  const appDir = path.join(ROOT, "app");
  const rel = path.relative(appDir, filePath);
  const parts = rel.split(path.sep);
  if (parts[parts.length - 1] !== "page.js") return null;

  const routeParts = parts
    .slice(0, -1)
    .filter((part) => part && !part.startsWith("(") && !part.includes("["));

  return normalizeRoute(`/${routeParts.join("/")}`);
}

function firstMarkdownHeading(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
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
      const searchable = [
        route,
        title,
        description,
        parsed.content.slice(0, 2500),
      ].join(" ");

      entries.push({
        type: "content",
        section: sectionConfig.section,
        route,
        filePath,
        relativePath: path.relative(ROOT, filePath),
        slug: parsed.data.slug || slugFromFilename(filePath),
        title,
        description,
        date: parsed.data.date || "",
        updated: parsed.data.updated || "",
        data: parsed.data,
        body: parsed.content,
        raw,
        tokens: unique(tokenize(searchable)),
      });
    }
  }

  const appFiles = walkFiles(path.join(ROOT, "app"), (filePath) =>
    filePath.endsWith(`${path.sep}page.js`)
  );

  for (const filePath of appFiles) {
    const route = routeForAppPage(filePath);
    if (!route) continue;
    const raw = fs.readFileSync(filePath, "utf8");
    const titleMatch = raw.match(/title:\s*["'`]([^"'`]+)["'`]/);
    const descriptionMatch = raw.match(/description:\s*["'`]([^"'`]+)["'`]/);
    entries.push({
      type: "app",
      section: "app",
      route,
      filePath,
      relativePath: path.relative(ROOT, filePath),
      slug: route.split("/").filter(Boolean).pop() || "home",
      title: titleMatch ? titleMatch[1] : "",
      description: descriptionMatch ? descriptionMatch[1] : "",
      date: "",
      updated: "",
      data: {},
      body: raw,
      raw,
      tokens: unique(tokenize([route, titleMatch?.[1], descriptionMatch?.[1], raw.slice(0, 2500)].join(" "))),
    });
  }

  return entries;
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

function parseOpportunityTables(markdown) {
  const lines = markdown.split(/\r?\n/);
  const rows = [];
  let headers = null;

  for (const line of lines) {
    if (!line.trim().startsWith("|")) {
      headers = null;
      continue;
    }

    const cells = splitMarkdownRow(line);
    const separator = cells.every((cell) => /^:?-{2,}:?$/.test(cell));
    if (separator) continue;

    const lowerCells = cells.map((cell) => cell.toLowerCase());
    if (lowerCells.includes("url") && lowerCells.some((cell) => cell.includes("current signal") || cell.includes("action"))) {
      headers = cells;
      continue;
    }

    if (!headers) continue;

    const row = {};
    headers.forEach((header, index) => {
      row[header.toLowerCase()] = cells[index] || "";
    });

    const url = cleanMarkdownCell(row.url || "");
    if (!url.includes("/")) continue;

    const signalText = cleanMarkdownCell(row["current signal"] || row.action || "");
    const recommendedTitle =
      cleanMarkdownCell(row["recommended seo title"] || row["new title"] || row.title || "");
    const metaDescription = cleanMarkdownCell(row["meta description"] || row.description || "");

    rows.push({
      priority: cleanMarkdownCell(row.priority || String(rows.length + 1)),
      route: normalizeRoute(url),
      rawUrl: url,
      signalText,
      signal: parseSignal(signalText),
      recommendedTitle,
      metaDescription,
      notes: cleanMarkdownCell(row["republish notes"] || row.action || ""),
    });
  }

  return rows;
}

function parseTopicalActions(markdown) {
  const actions = new Map();
  const regex = /\b(Refresh|Create|Consolidate)\s+`([^`]+)`([^.\n]*)/gi;
  let match;
  while ((match = regex.exec(markdown))) {
    actions.set(normalizeRoute(match[2]), {
      action: match[1],
      note: match[3].trim(),
    });
  }
  return actions;
}

function classifyTier(signal) {
  const impressions = signal.impressions || 0;
  const ctr = signal.ctr;
  const position = signal.position;

  if (position !== null && position >= 3 && position <= 10 && impressions >= 500 && (ctr === null || ctr < 3)) {
    return "Tier 1: CTR problem";
  }
  if (position !== null && position >= 8 && position <= 20 && impressions >= 500) {
    return "Tier 2: almost there";
  }
  if (position !== null && position > 20 && impressions >= 500) {
    return "Tier 3: sleeper";
  }
  return "Review";
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

function findSemanticCandidates(opportunity, inventory, limit = 3) {
  const targetTokens = unique(tokenize([
    opportunity.route,
    opportunity.recommendedTitle,
    opportunity.metaDescription,
    opportunity.notes,
  ].join(" ")));

  return inventory
    .map((entry) => ({
      entry,
      score: overlapScore(targetTokens, entry.tokens),
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function hasDirectAnswer(body) {
  if (!body) return false;
  const firstChunk = body.split(/\s+/).slice(0, 180).join(" ");
  return /(^|\n)#{1,3}\s*(Direct Answer|Quick Answer|Short Answer)/i.test(body) ||
    /\b(short answer|direct answer|quick answer)\b/i.test(firstChunk);
}

function lineNumberFor(raw, needle) {
  const index = raw.indexOf(needle);
  if (index === -1) return null;
  return raw.slice(0, index).split(/\r?\n/).length;
}

function scanStalePromises(files) {
  const warnings = [];

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const raw = fs.readFileSync(file, "utf8");
    const lines = raw.split(/\r?\n/);

    lines.forEach((line, index) => {
      for (const rule of STALE_PROMISE_PATTERNS) {
        const match = line.match(rule.pattern);
        if (match) {
          warnings.push({
            filePath: file,
            relativePath: path.relative(ROOT, file),
            line: index + 1,
            id: rule.id,
            label: rule.label,
            phrase: match[1],
            safer: rule.safer,
          });
        }
      }
    });
  }

  return warnings;
}

function routeAlreadyLinked(source, route) {
  const normalized = normalizeRoute(route);
  return source.body.includes(`](${normalized})`) ||
    source.body.includes(`href="${normalized}"`) ||
    source.body.includes(`href='${normalized}'`);
}

function anchorFromOpportunity(opportunity, source) {
  const base = opportunity.recommendedTitle || source?.title || opportunity.route.split("/").pop();
  return base
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\b2026\b:?/g, "")
    .replace(/[`*_]/g, "")
    .replace(/[&]/g, "and")
    .replace(/\s{2,}/g, " ")
    .split(":")[0]
    .trim();
}

function buildInternalLinkPlan(opportunities, inventory, perTarget = 4) {
  const plans = [];

  for (const opportunity of opportunities) {
    if (!opportunity.source) continue;
    const targetTokens = unique(tokenize([
      opportunity.route,
      opportunity.recommendedTitle,
      opportunity.metaDescription,
      opportunity.notes,
    ].join(" ")));

    const candidates = inventory
      .filter((entry) => entry.route !== opportunity.route)
      .filter((entry) => entry.type === "content")
      .filter((entry) => !routeAlreadyLinked(entry, opportunity.route))
      .map((entry) => ({
        entry,
        score: overlapScore(targetTokens, entry.tokens),
      }))
      .filter((candidate) => candidate.score >= 0.08)
      .sort((a, b) => b.score - a.score)
      .slice(0, perTarget);

    for (const candidate of candidates) {
      const shared = targetTokens.filter((token) => candidate.entry.tokens.includes(token));
      plans.push({
        target: opportunity.route,
        source: candidate.entry.route,
        sourceFile: candidate.entry.relativePath,
        anchor: anchorFromOpportunity(opportunity, opportunity.source),
        placement: shared.length
          ? `Add near the paragraph mentioning ${shared.slice(0, 3).join(", ")}.`
          : "Add where the page discusses the same buyer problem.",
        score: candidate.score,
      });
    }
  }

  return plans;
}

function detectDuplicateSlugs(inventory) {
  const bySlug = new Map();
  for (const entry of inventory) {
    if (entry.type !== "content") continue;
    const list = bySlug.get(entry.slug) || [];
    list.push(entry);
    bySlug.set(entry.slug, list);
  }

  return [...bySlug.entries()]
    .filter(([, entries]) => entries.length > 1)
    .map(([slug, entries]) => ({
      slug,
      routes: entries.map((entry) => entry.route),
      files: entries.map((entry) => entry.relativePath),
    }));
}

function diagnoseOpportunity(opportunity, inventoryByRoute, topicalActions, inventory) {
  const source = inventoryByRoute.get(opportunity.route) || null;
  const semanticCandidates = source ? [] : findSemanticCandidates(opportunity, inventory);
  const topicalAction = topicalActions.get(opportunity.route);
  let action = topicalAction?.action || "Refresh";
  let actionNote = topicalAction?.note || "";

  if (!source && semanticCandidates[0]?.score >= 0.22) {
    action = "Consolidate";
    actionNote = `No exact file found; strongest semantic match is ${semanticCandidates[0].entry.route}.`;
  } else if (!source) {
    action = "Create";
    actionNote = "No exact file found and no strong semantic match.";
  }

  const issues = [];
  if (source?.type === "content") {
    if (!source.updated) issues.push("missing updated date");
    if (!hasDirectAnswer(source.body)) issues.push("missing early direct-answer block");
  }
  if (opportunity.recommendedTitle && opportunity.recommendedTitle.length > 65) {
    issues.push("proposed title may be long");
  }
  if (opportunity.metaDescription && opportunity.metaDescription.length > 165) {
    issues.push("proposed meta description may be long");
  }

  return {
    ...opportunity,
    source,
    semanticCandidates,
    action,
    actionNote,
    tier: classifyTier(opportunity.signal),
    issues,
  };
}

function yamlString(value) {
  return JSON.stringify(String(value).replace(/\r?\n/g, " "));
}

function upsertFrontmatter(raw, updates) {
  if (!raw.startsWith("---\n")) {
    throw new Error("Cannot update file without YAML frontmatter");
  }

  const endIndex = raw.indexOf("\n---", 4);
  if (endIndex === -1) {
    throw new Error("Cannot find closing YAML frontmatter marker");
  }

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

function applyFrontmatterUpdates(opportunities) {
  const today = new Date().toISOString().slice(0, 10);
  const applied = [];

  for (const opportunity of opportunities) {
    if (!opportunity.source || opportunity.source.type !== "content") continue;
    if (!opportunity.recommendedTitle && !opportunity.metaDescription) continue;

    const updates = { updated: today };
    if (opportunity.recommendedTitle) updates.title = opportunity.recommendedTitle;
    if (opportunity.metaDescription) updates.description = opportunity.metaDescription;

    const nextRaw = upsertFrontmatter(opportunity.source.raw, updates);
    if (nextRaw !== opportunity.source.raw) {
      fs.writeFileSync(opportunity.source.filePath, nextRaw);
      applied.push(opportunity.source.relativePath);
    }
  }

  return applied;
}

function formatSignal(signal) {
  const parts = [];
  if (signal.impressions !== null) parts.push(`${signal.impressions.toLocaleString()} impressions`);
  if (signal.clicks !== null) parts.push(`${signal.clicks.toLocaleString()} clicks`);
  if (signal.ctr !== null) parts.push(`${signal.ctr}% CTR`);
  if (signal.position !== null) parts.push(`pos ${signal.position}`);
  return parts.join(", ") || "No parsed signal";
}

function escapeCell(value) {
  return String(value || "")
    .replace(/\r?\n/g, " ")
    .replace(/\|/g, "\\|")
    .trim();
}

function mdLinkForRoute(route) {
  return route === "/" ? "https://glowsocial.com/" : `https://glowsocial.com${route}`;
}

function makeMarkdownReport(data) {
  const {
    date,
    queuePath,
    topicMapPath,
    inventoryCount,
    opportunities,
    linkPlan,
    staleWarnings,
    scanScope,
    duplicateSlugs,
    appliedFiles,
  } = data;

  const exactMatches = opportunities.filter((item) => item.source).length;
  const creates = opportunities.filter((item) => item.action === "Create").length;
  const consolidates = opportunities.filter((item) => item.action === "Consolidate").length;
  const indexUrls = opportunities
    .filter((item) => item.source && item.action !== "Create")
    .slice(0, 10)
    .map((item) => mdLinkForRoute(item.route));

  const followup7 = addDays(date, 7);
  const followup14 = addDays(date, 14);
  const followup28 = addDays(date, 28);

  const lines = [];
  lines.push("# Glow Social SEO Ops Agent Run");
  lines.push("");
  lines.push(`Date: ${date}`);
  lines.push(`Queue: \`${queuePath}\``);
  lines.push(`Topical map: \`${topicMapPath || "not found"}\``);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Inventory scanned: ${inventoryCount} routes.`);
  lines.push(`- Opportunities processed: ${opportunities.length}.`);
  lines.push(`- Exact local matches: ${exactMatches}.`);
  lines.push(`- Create recommendations: ${creates}.`);
  lines.push(`- Consolidation recommendations: ${consolidates}.`);
  lines.push(`- Internal link suggestions: ${linkPlan.length}.`);
  lines.push(`- Stale-promise warnings: ${staleWarnings.length} (${scanScope}).`);
  lines.push(`- Duplicate slug groups: ${duplicateSlugs.length}.`);
  if (appliedFiles.length) {
    lines.push(`- Frontmatter files updated: ${appliedFiles.length}.`);
  }
  lines.push("");

  lines.push("## Priority Actions");
  lines.push("");
  lines.push("| Priority | Route | Tier | Action | Local source | Signal | Notes |");
  lines.push("|---:|---|---|---|---|---|---|");
  for (const item of opportunities) {
    lines.push([
      item.priority,
      item.route,
      item.tier,
      item.action,
      item.source?.relativePath || item.semanticCandidates[0]?.entry.relativePath || "Needs mapping",
      formatSignal(item.signal),
      [...item.issues, item.actionNote].filter(Boolean).join("; ") || item.notes,
    ].map(escapeCell).join(" | ").replace(/^/, "| ").replace(/$/, " |"));
  }
  lines.push("");

  lines.push("## Frontmatter Patch Candidates");
  lines.push("");
  lines.push("| Route | Current title | Proposed title | Current description | Proposed description |");
  lines.push("|---|---|---|---|---|");
  for (const item of opportunities.filter((entry) => entry.source)) {
    lines.push([
      item.route,
      item.source.title || "(none)",
      item.recommendedTitle || "(none)",
      item.source.description || "(none)",
      item.metaDescription || "(none)",
    ].map(escapeCell).join(" | ").replace(/^/, "| ").replace(/$/, " |"));
  }
  lines.push("");

  lines.push("## Internal Link Plan");
  lines.push("");
  if (linkPlan.length) {
    lines.push("| Target | Source | Anchor | Placement note |");
    lines.push("|---|---|---|---|");
    for (const link of linkPlan) {
      lines.push([
        link.target,
        `${link.source} (${link.sourceFile})`,
        link.anchor,
        link.placement,
      ].map(escapeCell).join(" | ").replace(/^/, "| ").replace(/$/, " |"));
    }
  } else {
    lines.push("No internal link candidates found.");
  }
  lines.push("");

  lines.push("## Guardrail Warnings");
  lines.push("");
  if (staleWarnings.length) {
    lines.push("| File | Line | Issue | Phrase | Safer direction |");
    lines.push("|---|---:|---|---|---|");
    for (const warning of staleWarnings.slice(0, 40)) {
      lines.push([
        warning.relativePath,
        warning.line,
        warning.label,
        warning.phrase,
        warning.safer,
      ].map(escapeCell).join(" | ").replace(/^/, "| ").replace(/$/, " |"));
    }
    if (staleWarnings.length > 40) {
      lines.push("");
      lines.push(`Showing first 40 of ${staleWarnings.length} warnings. Use the JSON output for the full list.`);
    }
  } else {
    lines.push("No stale-promise warnings found.");
  }
  lines.push("");

  lines.push("## Duplicate Slugs");
  lines.push("");
  if (duplicateSlugs.length) {
    lines.push("| Slug | Routes | Files |");
    lines.push("|---|---|---|");
    for (const duplicate of duplicateSlugs.slice(0, 20)) {
      lines.push([
        duplicate.slug,
        duplicate.routes.join(", "),
        duplicate.files.join(", "),
      ].map(escapeCell).join(" | ").replace(/^/, "| ").replace(/$/, " |"));
    }
  } else {
    lines.push("No duplicate content slugs found across content collections.");
  }
  lines.push("");

  lines.push("## Indexing And Follow-up");
  lines.push("");
  lines.push(`- 7-day recrawl check: ${followup7}.`);
  lines.push(`- 14-day early CTR check: ${followup14}.`);
  lines.push(`- 28-day directional signal check: ${followup28}.`);
  if (indexUrls.length) {
    lines.push("");
    lines.push("IndexNow command for changed exact-match pages:");
    lines.push("");
    lines.push("```bash");
    lines.push(`npm run indexnow -- ${indexUrls.join(" ")}`);
    lines.push("```");
  }
  lines.push("");

  lines.push("## Next Commands");
  lines.push("");
  lines.push("```bash");
  lines.push("npm run seo:agent -- --limit 6");
  lines.push("npm run seo:agent -- --apply-frontmatter --limit 3");
  lines.push("npm run build");
  lines.push("```");
  lines.push("");

  return `${lines.join("\n")}\n`;
}

function addDays(isoDate, days) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function buildReport(opts) {
  const queueMarkdown = readIfExists(opts.queue);
  if (!queueMarkdown) throw new Error(`Queue file not found: ${opts.queue}`);

  const topicMapMarkdown = readIfExists(opts.topicMap);
  const topicalActions = parseTopicalActions(topicMapMarkdown);
  const inventory = inventoryContent();
  const inventoryByRoute = new Map(inventory.map((entry) => [entry.route, entry]));

  let rawOpportunities = parseOpportunityTables(queueMarkdown);
  if (opts.limit) rawOpportunities = rawOpportunities.slice(0, opts.limit);
  if (!rawOpportunities.length) {
    throw new Error(`No opportunity rows found in ${opts.queue}`);
  }

  const opportunities = rawOpportunities.map((opportunity) =>
    diagnoseOpportunity(opportunity, inventoryByRoute, topicalActions, inventory)
  );

  const targetFiles = opportunities
    .map((opportunity) => opportunity.source?.filePath)
    .filter(Boolean);
  const allContentFiles = opts.scanAllContent
    ? inventory
      .filter((entry) => entry.type === "content")
      .map((entry) => entry.filePath)
    : [];
  const scriptFiles = [
    path.join(ROOT, "scripts", "generate-blog-posts.js"),
    path.join(ROOT, "scripts", "generate-missing-posts.js"),
  ];
  const staleWarnings = scanStalePromises(unique([...targetFiles, ...allContentFiles, ...scriptFiles]));
  const duplicateSlugs = detectDuplicateSlugs(inventory);
  const linkPlan = buildInternalLinkPlan(opportunities, inventory);
  const appliedFiles = opts.applyFrontmatter
    ? applyFrontmatterUpdates(opportunities)
    : [];

  const today = new Date().toISOString().slice(0, 10);
  return {
    date: today,
    queuePath: opts.queue,
    topicMapPath: topicMapMarkdown ? opts.topicMap : "",
    inventoryCount: inventory.length,
    opportunities,
    linkPlan,
    staleWarnings,
    scanScope: opts.scanAllContent ? "all content plus generator scripts" : "priority pages plus generator scripts",
    duplicateSlugs,
    appliedFiles,
  };
}

function writeReport(opts, report) {
  const outputDir = abs(opts.outputDir);
  fs.mkdirSync(outputDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const markdownPath = path.join(outputDir, `seo-agent-plan-${stamp}.md`);
  const jsonPath = path.join(outputDir, `seo-agent-plan-${stamp}.json`);
  const markdown = makeMarkdownReport(report);

  fs.writeFileSync(markdownPath, markdown);
  fs.writeFileSync(jsonPath, JSON.stringify(report, jsonReplacer, 2) + "\n");

  return {
    markdownPath,
    jsonPath,
  };
}

function jsonReplacer(key, value) {
  if (key === "raw" || key === "body" || key === "tokens") return undefined;
  if (key === "source" && value) {
    return {
      type: value.type,
      route: value.route,
      relativePath: value.relativePath,
      title: value.title,
      description: value.description,
      date: value.date,
      updated: value.updated,
    };
  }
  if (key === "entry" && value) {
    return {
      type: value.type,
      route: value.route,
      relativePath: value.relativePath,
      title: value.title,
      description: value.description,
    };
  }
  return value;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }

  const report = buildReport(opts);
  const markdown = makeMarkdownReport(report);

  if (opts.dryRun) {
    console.log(markdown);
    return;
  }

  const written = writeReport(opts, report);
  console.log(`SEO agent report written: ${path.relative(ROOT, written.markdownPath)}`);
  console.log(`SEO agent JSON written: ${path.relative(ROOT, written.jsonPath)}`);
  if (report.appliedFiles.length) {
    console.log(`Frontmatter updated in ${report.appliedFiles.length} file(s):`);
    for (const file of report.appliedFiles) console.log(`- ${file}`);
  }
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
