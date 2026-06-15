#!/usr/bin/env node
/**
 * SEO/AEO intel agent for Glow Social.
 *
 * This automates the "I found an interesting prompt in the wild" loop:
 * collect prompts/articles, score them against Glow's content map, pick the
 * best experiment, and write a concrete brief plus an opportunities file.
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_INBOX = "seo-intel/inbox.md";
const DEFAULT_SOURCES = "seo-intel/sources.json";
const DEFAULT_OUTPUT_DIR = "seo-intel/experiments";
const OPPORTUNITY_FILE = "seo-opportunities.json";

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

const SIGNAL_RULES = [
  { id: "aeo", label: "AEO / AI search", weight: 5, pattern: /\b(AEO|answer engine|AI search|LLM|ChatGPT|Perplexity|zero-click|citation|answer block|structured answer|llms\.txt)\b/i },
  { id: "seo", label: "SEO ranking", weight: 3, pattern: /\b(SEO|search intent|rank|ranking|SERP|query|impressions|CTR|canonical|sitemap|schema|internal link|crawl)\b/i },
  { id: "content", label: "Content strategy", weight: 3, pattern: /\b(content strategy|topical authority|pillar|cluster|refresh|republish|comparison|pricing page|FAQ|examples|original research)\b/i },
  { id: "local", label: "Local business fit", weight: 3, pattern: /\b(local business|Google Business Profile|GBP|reviews|near me|service area|contractor|dentist|salon|plumber|roofer|restaurant)\b/i },
  { id: "conversion", label: "Conversion relevance", weight: 2, pattern: /\b(CTA|pricing|proof|case study|trust|demo|trial|preview|lead|buyer intent)\b/i },
  { id: "bad-scaled-content", label: "Scaled-content risk", weight: -8, pattern: /\b(1000 pages|programmatic SEO at scale|AI spam|mass publish|spun content|parasite SEO|link farm|PBN)\b/i },
];

function printHelp() {
  console.log(`Glow Social SEO/AEO intel agent

Usage:
  npm run seo:intel
  npm run seo:intel -- --dry-run
  npm run seo:intel -- --prompt "Paste a wild SEO/AEO/content prompt here"
  npm run seo:intel -- --fetch-sources

Options:
  --inbox <file>       Markdown inbox of copied wild prompts. Default: ${DEFAULT_INBOX}
  --sources <file>     JSON source list for RSS/static fetches. Default: ${DEFAULT_SOURCES}
  --output-dir <dir>   Experiment brief directory. Default: ${DEFAULT_OUTPUT_DIR}
  --prompt <text>      Add one inline wild prompt for this run.
  --url <url>          Fetch one URL as an idea source.
  --fetch-sources      Fetch URLs/RSS feeds from sources.json.
  --limit <n>          Number of ideas to consider. Default: 20.
  --dry-run            Print the selected experiment without writing files.
  --help               Show this help.
`);
}

function parseArgs(argv) {
  const opts = {
    inbox: DEFAULT_INBOX,
    sources: DEFAULT_SOURCES,
    outputDir: DEFAULT_OUTPUT_DIR,
    prompt: "",
    urls: [],
    fetchSources: false,
    limit: 20,
    dryRun: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") opts.help = true;
    else if (arg === "--dry-run") opts.dryRun = true;
    else if (arg === "--fetch-sources") opts.fetchSources = true;
    else if (arg === "--inbox" && argv[i + 1]) opts.inbox = argv[++i];
    else if (arg === "--sources" && argv[i + 1]) opts.sources = argv[++i];
    else if (arg === "--output-dir" && argv[i + 1]) opts.outputDir = argv[++i];
    else if (arg === "--prompt" && argv[i + 1]) opts.prompt = argv[++i];
    else if (arg === "--url" && argv[i + 1]) opts.urls.push(argv[++i]);
    else if (arg === "--limit" && argv[i + 1]) opts.limit = Number(argv[++i]);
    else throw new Error(`Unknown option: ${arg}`);
  }

  if (!Number.isInteger(opts.limit) || opts.limit < 1) {
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

function normalizeRoute(value) {
  let route = String(value || "").trim();
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

function firstMarkdownHeading(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function stripMarkdown(text) {
  return String(text || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 $2")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
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
        route,
        file: path.relative(ROOT, filePath),
        title,
        description,
        section: sectionConfig.section,
        tokens: unique(tokenize(searchable)),
      });
    }
  }

  return entries;
}

function parseInbox(markdown) {
  if (!markdown.trim()) return [];

  return markdown
    .split(/\n---+\n/g)
    .map((block, index) => block.trim())
    .filter((block) => block && !/^#\s*SEO Intel Inbox/i.test(block))
    .filter((block) => !/^##\s*(Paste the next wild idea|Example Entry)/i.test(block))
    .map((block, index) => {
      const titleMatch = block.match(/^#{2,3}\s+(.+)$/m);
      const urlMatch = block.match(/https?:\/\/[^\s)]+/);
      return {
        id: `inbox-${index + 1}`,
        source: "inbox",
        title: titleMatch ? titleMatch[1].trim() : `Inbox idea ${index + 1}`,
        url: urlMatch ? urlMatch[0] : "",
        text: block,
      };
    });
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "GlowSocialSEOIntel/1.0 (+https://glowsocial.com)",
      accept: "text/html,application/rss+xml,application/xml,text/plain;q=0.9,*/*;q=0.8",
    },
  });
  if (!response.ok) throw new Error(`Fetch failed ${response.status} for ${url}`);
  return response.text();
}

function parseRssItems(xml, sourceName) {
  const itemMatches = [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)];
  return itemMatches.slice(0, 10).map((match, index) => {
    const item = match[0];
    const title = decodeXml(firstMatch(item, /<title[^>]*>([\s\S]*?)<\/title>/i) || `${sourceName} item ${index + 1}`);
    const link = decodeXml(firstMatch(item, /<link[^>]*>([\s\S]*?)<\/link>/i) || "");
    const description = decodeXml(firstMatch(item, /<description[^>]*>([\s\S]*?)<\/description>/i) || "");
    return {
      id: `rss-${sourceName}-${index + 1}`.replace(/[^a-z0-9-]+/gi, "-").toLowerCase(),
      source: sourceName,
      title: stripMarkdown(title),
      url: stripMarkdown(link),
      text: stripMarkdown(`${title}\n\n${description}`).slice(0, 3500),
    };
  });
}

function firstMatch(text, regex) {
  const match = text.match(regex);
  return match ? match[1] : "";
}

function decodeXml(text) {
  return String(text || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function parseHtmlIdea(html, url, sourceName) {
  const title = stripMarkdown(firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i) || sourceName || url);
  const metaDescription = firstMatch(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) ||
    firstMatch(html, /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
  const headings = [...html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)]
    .slice(0, 8)
    .map((match) => stripMarkdown(match[1]))
    .join("\n");

  return {
    id: `url-${url}`.replace(/[^a-z0-9-]+/gi, "-").toLowerCase().slice(0, 80),
    source: sourceName || "url",
    title,
    url,
    text: stripMarkdown(`${title}\n\n${metaDescription}\n\n${headings}`).slice(0, 3500),
  };
}

async function loadSourceIdeas(opts) {
  const ideas = [];

  for (const url of opts.urls) {
    try {
      const text = await fetchText(url);
      ideas.push(parseHtmlIdea(text, url, "cli-url"));
    } catch (error) {
      ideas.push({
        id: `failed-url-${ideas.length + 1}`,
        source: "fetch-error",
        title: `Could not fetch ${url}`,
        url,
        text: error.message,
      });
    }
  }

  if (!opts.fetchSources) return ideas;

  const sourcesPath = abs(opts.sources);
  if (!fs.existsSync(sourcesPath)) return ideas;
  const sources = JSON.parse(fs.readFileSync(sourcesPath, "utf8"));

  for (const source of sources) {
    try {
      const text = await fetchText(source.url);
      const looksLikeRss = /<rss|<feed|<item\b/i.test(text);
      if (source.type === "rss" || looksLikeRss) {
        ideas.push(...parseRssItems(text, source.name || source.url));
      } else {
        ideas.push(parseHtmlIdea(text, source.url, source.name || source.url));
      }
    } catch (error) {
      ideas.push({
        id: `failed-source-${source.name || source.url}`.replace(/[^a-z0-9-]+/gi, "-").toLowerCase(),
        source: "fetch-error",
        title: `Could not fetch ${source.name || source.url}`,
        url: source.url,
        text: error.message,
      });
    }
  }

  return ideas;
}

function signalScore(idea) {
  const text = `${idea.title}\n${idea.text}`;
  const matches = [];
  let score = 0;

  for (const rule of SIGNAL_RULES) {
    if (rule.pattern.test(text)) {
      score += rule.weight;
      matches.push(rule.label);
    }
  }

  const lengthScore = Math.min(3, Math.floor(stripMarkdown(text).length / 450));
  return { score: score + lengthScore, matches };
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

function findRouteCandidates(idea, inventory) {
  const tokens = unique(tokenize(`${idea.title}\n${idea.text}`));
  const ideaText = `${idea.title}\n${idea.text}`;
  return inventory
    .map((entry) => {
      let score = overlapScore(tokens, entry.tokens);
      const routeText = `${entry.route} ${entry.title} ${entry.description}`;

      if (/\b(comparison|compare|versus|vs\.?|alternative|buyer question)\b/i.test(ideaText) &&
          /\b(compare|comparison|vs|alternative|pricing|cost|buffer|later|hootsuite|sprout|metricool)\b/i.test(routeText)) {
        score += 0.05;
      }

      if (/\b(pricing|cost|rates?|budget|affordable|under \$?\d+)\b/i.test(ideaText) &&
          /\b(pricing|cost|rates?|budget|affordable|freelance|agency)\b/i.test(routeText)) {
        score += 0.05;
      }

      if (/\b(AEO|answer engine|AI search|ChatGPT|Perplexity|citation)\b/i.test(ideaText) &&
          /\b(AEO|answer-engine|chatgpt|perplexity|ai-search|visibility)\b/i.test(routeText)) {
        score += 0.08;
      }

      return { ...entry, score };
    })
    .filter((entry) => entry.score >= 0.08)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function actionForIdea(idea, candidates) {
  if (candidates[0]?.score >= 0.22) return "Refresh";
  if (candidates.length >= 3 && candidates[0]?.score >= 0.14) return "Internal link / consolidate";
  if (/\b(system|workflow|process|checklist|prompt|template|schema|structured data|llms\.txt)\b/i.test(idea.text)) {
    return "System experiment";
  }
  return "Create or research";
}

function slugify(text) {
  return String(text || "seo-intel-experiment")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80) || "seo-intel-experiment";
}

function summarizeIdea(idea) {
  const text = stripMarkdown(`${idea.title}. ${idea.text}`);
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  return sentences.slice(0, 3).join(" ").slice(0, 700);
}

function scoreIdeas(ideas, inventory) {
  return ideas.map((idea) => {
    const signal = signalScore(idea);
    const candidates = findRouteCandidates(idea, inventory);
    const routeFit = candidates[0]?.score ? Math.round(candidates[0].score * 10) : 0;
    const totalScore = signal.score + routeFit;
    return {
      ...idea,
      signalScore: signal.score,
      totalScore,
      matches: signal.matches,
      candidates,
      action: actionForIdea(idea, candidates),
      summary: summarizeIdea(idea),
    };
  }).sort((a, b) => b.totalScore - a.totalScore);
}

function buildExperiment(idea) {
  const routeList = idea.candidates.map((candidate) => `- ${candidate.route} (${candidate.file}, score ${candidate.score.toFixed(2)})`).join("\n") || "- No strong existing route match.";
  const topRoute = idea.candidates[0]?.route || "";
  const suggestedCommand = topRoute && idea.action === "Refresh"
    ? `npm run seo:fix -- --page ${topRoute}`
    : "Draft a new brief/page only after confirming no existing canonical page covers this intent.";

  return `# SEO Intel Experiment: ${idea.title}

Date: ${new Date().toISOString().slice(0, 10)}
Source: ${idea.source}
URL: ${idea.url || "n/a"}
Score: ${idea.totalScore}
Signals: ${idea.matches.length ? idea.matches.join(", ") : "none"}
Recommended action: ${idea.action}

## Wild Idea

${idea.summary}

## Glow Social Translation

Use this idea only if it helps local businesses understand social media visibility, answer-engine visibility, pricing, trust, reviews, Google Business Profile activity, or the difference between scheduling tools and posts prepared for approval.

## Candidate Routes

${routeList}

## Experiment Plan

- Identify the exact buyer/search question this idea answers.
- Prefer refreshing an existing canonical page over creating a duplicate.
- Add or improve a direct answer near the top.
- Add concrete local-business examples or comparison tables.
- Add internal links from related question, comparison, pricing, or research pages.
- Remove stale claims about fully automatic publishing or five-minute setup.

## Suggested Next Command

\`\`\`bash
${suggestedCommand}
\`\`\`

## Acceptance Criteria

- The page has a clear answer block in the first 150-250 words.
- The change improves searcher usefulness, not just keyword density.
- No duplicate page is created when an existing route can be refreshed.
- \`npm run build\` passes.
- If shipped, indexing is requested for changed URLs.
`;
}

function loadExistingOpportunities() {
  const filePath = abs(OPPORTUNITY_FILE);
  if (!fs.existsSync(filePath)) return { opportunities: [] };
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function findExistingOpportunity(idea) {
  const current = loadExistingOpportunities();
  return current.opportunities.find((item) =>
    (idea.url && item.url === idea.url) ||
    item.title === idea.title
  );
}

function saveOpportunity(idea, experimentPath) {
  const current = loadExistingOpportunities();
  const id = `${new Date().toISOString().slice(0, 10)}-${slugify(idea.title)}`;
  const nextOpportunity = {
    id,
    created_at: new Date().toISOString(),
    status: "new",
    source: idea.source,
    url: idea.url,
    title: idea.title,
    score: idea.totalScore,
    action: idea.action,
    candidate_routes: idea.candidates.map((candidate) => candidate.route),
    experiment: path.relative(ROOT, experimentPath),
  };

  const existingIndex = current.opportunities.findIndex((item) => item.id === id);
  if (existingIndex >= 0) current.opportunities[existingIndex] = nextOpportunity;
  else current.opportunities.unshift(nextOpportunity);

  fs.writeFileSync(abs(OPPORTUNITY_FILE), JSON.stringify(current, null, 2) + "\n");
}

function writeExperiment(idea, markdown, outputDir) {
  const existing = findExistingOpportunity(idea);
  if (existing) {
    return {
      filePath: abs(existing.experiment),
      reused: true,
    };
  }

  const dir = abs(outputDir);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `${new Date().toISOString().slice(0, 10)}-${slugify(idea.title)}.md`);
  fs.writeFileSync(filePath, `${markdown.trim()}\n`);
  saveOpportunity(idea, filePath);
  return {
    filePath,
    reused: false,
  };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }

  const inboxIdeas = parseInbox(readIfExists(opts.inbox));
  const inlineIdeas = opts.prompt
    ? [{ id: "inline-prompt", source: "inline-prompt", title: opts.prompt.slice(0, 90), url: "", text: opts.prompt }]
    : [];
  const fetchedIdeas = await loadSourceIdeas(opts);
  const ideas = [...inlineIdeas, ...inboxIdeas, ...fetchedIdeas]
    .filter((idea) => stripMarkdown(idea.text).length > 20)
    .slice(0, opts.limit);

  if (!ideas.length) {
    console.log(`No SEO intel ideas found. Add prompts to ${opts.inbox}, pass --prompt, --url, or run with --fetch-sources.`);
    return;
  }

  const inventory = inventoryContent();
  const scored = scoreIdeas(ideas, inventory);
  const selected = scored[0];
  const markdown = buildExperiment(selected);

  console.log(`Selected SEO intel idea: ${selected.title}`);
  console.log(`Score: ${selected.totalScore}`);
  console.log(`Action: ${selected.action}`);
  console.log(`Top route: ${selected.candidates[0]?.route || "none"}`);
  console.log("");

  if (opts.dryRun) {
    console.log(markdown);
    return;
  }

  const result = writeExperiment(selected, markdown, opts.outputDir);
  if (result.reused) {
    console.log(`Already captured: ${path.relative(ROOT, result.filePath)}`);
    return;
  }
  console.log(`Experiment written: ${path.relative(ROOT, result.filePath)}`);
  console.log(`Opportunity updated: ${OPPORTUNITY_FILE}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
