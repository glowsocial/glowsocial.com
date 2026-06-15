#!/usr/bin/env node
/**
 * SEO autopilot for Glow Social.
 *
 * Picks the next unfinished Search Console opportunity, runs the one-page fixer,
 * verifies with a production build, and records the run locally.
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_QUEUE = "seo-republish-queue-2026-06-07.md";
const RUN_DIR = path.join(ROOT, "seo-agent-runs");
const LOG_FILE = path.join(ROOT, "seo-work-log.json");
const OPPORTUNITY_FILE = path.join(ROOT, "seo-opportunities.json");

function printHelp() {
  console.log(`Glow Social SEO autopilot

Usage:
  npm run seo:work
  npm run seo:work -- --dry-run

Options:
  --queue <file>      Markdown queue with URL/signal/title/meta rows.
  --allow-dirty       Allow fixer edits to files with uncommitted changes.
  --no-build          Skip production build verification after applying.
  --dry-run           Pick the next page and show the proposed fix without writing.
  --help              Show this help.
`);
}

function parseArgs(argv) {
  const opts = {
    queue: DEFAULT_QUEUE,
    allowDirty: false,
    noBuild: false,
    dryRun: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") opts.help = true;
    else if (arg === "--allow-dirty") opts.allowDirty = true;
    else if (arg === "--no-build") opts.noBuild = true;
    else if (arg === "--dry-run") opts.dryRun = true;
    else if (arg === "--queue" && argv[i + 1]) opts.queue = argv[++i];
    else throw new Error(`Unknown option: ${arg}`);
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

function parseQueue(queuePath) {
  const filePath = abs(queuePath);
  if (!fs.existsSync(filePath)) throw new Error(`Queue file not found: ${queuePath}`);

  const rows = [];
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
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

    rows.push({
      priority: cleanMarkdownCell(row.priority || String(rows.length + 1)),
      route,
      signal: cleanMarkdownCell(row["current signal"] || ""),
      notes: cleanMarkdownCell(row["republish notes"] || row.action || ""),
    });
  }

  return rows;
}

function loadLog() {
  if (!fs.existsSync(LOG_FILE)) return { runs: [] };
  return JSON.parse(fs.readFileSync(LOG_FILE, "utf8"));
}

function loadOpportunities() {
  if (!fs.existsSync(OPPORTUNITY_FILE)) return { opportunities: [] };
  return JSON.parse(fs.readFileSync(OPPORTUNITY_FILE, "utf8"));
}

function saveOpportunities(data) {
  fs.writeFileSync(OPPORTUNITY_FILE, JSON.stringify(data, null, 2) + "\n");
}

function saveLog(log) {
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2) + "\n");
}

function completedRoutes(log) {
  return new Set(log.runs.filter((run) => run.status === "complete").map((run) => run.route));
}

function timestamp() {
  return new Date().toISOString();
}

function runCommand(command, args) {
  return execFileSync(command, args, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function writeRunReport(route, sections) {
  fs.mkdirSync(RUN_DIR, { recursive: true });
  const stamp = timestamp().replace(/[:.]/g, "-");
  const reportPath = path.join(RUN_DIR, `seo-work-${stamp}.md`);
  const body = [
    `# SEO Work Run`,
    ``,
    `Date: ${timestamp()}`,
    `Route: ${route}`,
    ``,
    ...sections,
  ].join("\n");
  fs.writeFileSync(reportPath, `${body}\n`);
  return reportPath;
}

function chooseNext(queue, log) {
  const done = completedRoutes(log);
  return queue.find((row) => !done.has(row.route)) || null;
}

function chooseDiscoveredOpportunity() {
  const data = loadOpportunities();
  const opportunity = data.opportunities.find((item) =>
    item.status === "new" &&
    Array.isArray(item.candidate_routes) &&
    item.candidate_routes.length > 0
  );

  if (!opportunity) return null;
  return {
    data,
    opportunity,
    row: {
      priority: opportunity.id || "discovered",
      route: opportunity.candidate_routes[0],
      signal: `discovered idea: ${opportunity.title}`,
      notes: `${opportunity.action || "Discovered opportunity"} from ${opportunity.source || "seo:intel"}`,
      discoveredId: opportunity.id,
    },
  };
}

function dryRun(row, discovered = false) {
  console.log(`Next SEO work item: ${row.route}`);
  console.log(`Priority: ${row.priority}`);
  console.log(`Signal: ${row.signal || "not parsed"}`);
  if (row.notes) console.log(`Notes: ${row.notes}`);
  console.log("");

  if (discovered) {
    const discoveredOutput = runCommand("node", [
      "scripts/seo-page-fixer.js",
      "--page",
      row.route,
      "--allow-missing-queue",
      "--notes",
      row.notes || "Discovered SEO/AEO opportunity.",
    ]);
    process.stdout.write(discoveredOutput);
    return;
  }

  const output = runCommand("node", [
    "scripts/seo-page-fixer.js",
    "--page",
    row.route,
  ]);
  process.stdout.write(output);
}

function applyWork(row, opts, log, discoveredContext = null) {
  const fixArgs = [
    "scripts/seo-page-fixer.js",
    "--page",
    row.route,
    "--apply",
  ];
  if (discoveredContext) {
    fixArgs.push("--allow-missing-queue", "--notes", row.notes || "Discovered SEO/AEO opportunity.");
  }
  if (opts.allowDirty) fixArgs.push("--allow-dirty");

  let fixOutput;
  try {
    fixOutput = runCommand("node", fixArgs);
  } catch (error) {
    const output = `${error.stdout || ""}${error.stderr || ""}`;
    log.runs.push({
      at: timestamp(),
      route: row.route,
      status: "blocked",
      reason: output.trim() || error.message,
    });
    saveLog(log);
    throw new Error(`SEO fixer blocked on ${row.route}:\n${output || error.message}`);
  }

  let buildOutput = "";
  if (!opts.noBuild) {
    try {
      buildOutput = runCommand("npm", ["run", "build"]);
    } catch (error) {
      const output = `${error.stdout || ""}${error.stderr || ""}`;
      const reportPath = writeRunReport(row.route, [
        `## Fix Output`,
        ``,
        "```text",
        fixOutput.trim(),
        "```",
        ``,
        `## Build Failure`,
        ``,
        "```text",
        output.trim() || error.message,
        "```",
      ]);
      log.runs.push({
        at: timestamp(),
        route: row.route,
        status: "failed-build",
        report: path.relative(ROOT, reportPath),
      });
      saveLog(log);
      throw new Error(`SEO work changed ${row.route}, but build failed. Report: ${path.relative(ROOT, reportPath)}`);
    }
  }

  const reportPath = writeRunReport(row.route, [
    `## Fix Output`,
    ``,
    "```text",
    fixOutput.trim(),
    "```",
    ``,
    `## Build Output`,
    ``,
    "```text",
    opts.noBuild ? "Skipped with --no-build." : buildOutput.trim(),
    "```",
    ``,
    `## Indexing`,
    ``,
    "```bash",
    `npm run indexnow -- https://glowsocial.com${row.route}`,
    "```",
  ]);

  log.runs.push({
    at: timestamp(),
    route: row.route,
    status: "complete",
    report: path.relative(ROOT, reportPath),
  });
  saveLog(log);

  if (discoveredContext) {
    const item = discoveredContext.data.opportunities.find((candidate) => candidate.id === discoveredContext.opportunity.id);
    if (item) {
      item.status = "complete";
      item.completed_at = timestamp();
      item.completed_route = row.route;
      item.work_report = path.relative(ROOT, reportPath);
      saveOpportunities(discoveredContext.data);
    }
  }

  console.log(`Completed SEO work for ${row.route}`);
  console.log(`Report: ${path.relative(ROOT, reportPath)}`);
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }

  const queue = parseQueue(opts.queue);
  if (!queue.length) throw new Error(`No queue rows found in ${opts.queue}`);

  const log = loadLog();
  const discoveredContext = chooseDiscoveredOpportunity();
  const row = discoveredContext?.row || chooseNext(queue, log);
  if (!row) {
    console.log("No unfinished SEO queue items found.");
    return;
  }

  if (opts.dryRun) dryRun(row, Boolean(discoveredContext));
  else applyWork(row, opts, log, discoveredContext);
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
