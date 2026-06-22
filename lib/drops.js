import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const DROPS_DIR = path.join(
  process.cwd(),
  "content-bank",
  "new-site-launch",
  "drafts"
);

const USE_CACHE = process.env.NODE_ENV !== "development";
let allDropsCache = null;
const dropBySlugCache = new Map();

function titleFromSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function displayCluster(cluster) {
  if (!cluster) return "Drops";
  return cluster
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return getMarkdownFiles(fullPath);
      if (/\.mdx?$/.test(entry.name)) return [fullPath];
      return [];
    });
}

function stripDuplicateH1(content) {
  return content.replace(/^#\s+.+\n+/, "");
}

function parseDropFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const fileSlug = path.basename(filePath).replace(/\.mdx?$/, "");
  const slug = data.slug || fileSlug;
  const cluster = data.cluster || path.basename(path.dirname(filePath));
  const body = stripDuplicateH1(content.trim());
  const stats = readingTime(body);

  return {
    slug,
    fileSlug,
    cluster,
    clusterLabel: displayCluster(cluster),
    title: data.title || titleFromSlug(slug),
    description: data.description || "A practical Boomp Drop for small business marketing.",
    date: data.date ? new Date(data.date).toISOString() : null,
    updated: data.updated ? new Date(data.updated).toISOString() : null,
    status: data.status || "published",
    primaryIntent: data.primary_intent || null,
    cta: data.cta || "See posts from your website first",
    emailAngle: data.email_angle || null,
    tags: data.tags || [],
    content: body,
    readingTime: stats.text,
  };
}

export function getAllDrops() {
  if (USE_CACHE && allDropsCache) return allDropsCache;

  const drops = getMarkdownFiles(DROPS_DIR)
    .map(parseDropFile)
    .sort((a, b) => {
      const clusterCompare = a.clusterLabel.localeCompare(b.clusterLabel);
      if (clusterCompare !== 0) return clusterCompare;
      return a.title.localeCompare(b.title);
    });

  if (USE_CACHE) allDropsCache = drops;
  return drops;
}

export function getDropBySlug(slug) {
  if (USE_CACHE && dropBySlugCache.has(slug)) return dropBySlugCache.get(slug);

  const drop = getAllDrops().find((item) => item.slug === slug || item.fileSlug === slug) || null;

  if (USE_CACHE) dropBySlugCache.set(slug, drop);
  return drop;
}

export function getAllDropSlugs() {
  return getAllDrops().map((drop) => drop.slug);
}

export function getDropsByCluster() {
  return getAllDrops().reduce((groups, drop) => {
    if (!groups[drop.clusterLabel]) groups[drop.clusterLabel] = [];
    groups[drop.clusterLabel].push(drop);
    return groups;
  }, {});
}
