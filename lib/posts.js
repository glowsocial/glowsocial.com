import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");
const USE_CONTENT_CACHE = process.env.NODE_ENV !== "development";

const markdownFilesCache = new Map();
const postsByDirCache = new Map();
const postBySlugCache = new Map();
const allQuestionsCache = new Map();
const questionBySlugCache = new Map();
const relatedPostsBySlugCache = new Map();
let relatedPostsBySlugLimit = 0;
let blogKeywordIndexCache = null;

// Files kept for history should not appear in blog lists, RSS, or the sitemap
// when Next redirects already consolidate them to stronger canonical pages.
const REDIRECTED_BLOG_SLUGS = new Set([
  "affordable-social-media-management",
  "affordable-social-media-management-guide",
  "affordable-social-media-no-marketing-agency",
  "affordable-social-media-vs-hootsuite",
  "average-time-spent-social-media-marketing",
  "best-posting-schedule-service-businesses",
  "best-time-post-social-media-local-business",
  "cheapest-way-to-do-social-media-for-business",
  "hours-per-week-social-media",
  "hours-per-week-social-media-takes",
  "how-long-manage-social-media",
  "how-much-does-a-social-media-manager-cost",
  "how-much-does-a-social-media-manager-cost-2026",
  "how-often-should-small-businesses-post",
  "how-often-should-small-businesses-post-on-social-media",
  "how-to-generate-social-media-content-with-ai",
  "how-to-schedule-social-media-posts-automatically",
  "local-businesses-overcome-algorithm-fatigue-community-focus",
  "post-per-day-social-media-frequency",
  "posting-frequency-local-business",
  "quality-over-quantity-social-media-marketing",
  "should-i-hire-social-media-manager-or-diy",
  "social-media-automation-financial-advisors-accountants",
  "social-media-automation-local-gyms",
  "social-media-boutique-fitness",
  "social-media-content-generator-auto-repair-shops",
  "social-media-content-relevant-lifespan",
  "social-media-content-strategy-local-retail",
  "social-media-strategy-med-spas-estheticians",
  "social-media-tools-boutique-hotels",
  "social-media-workflow-wedding-photographers",
  "time-small-business-social-media",
  "why-social-media-managers-expensive",
]);

/**
 * Extract title from the first H1 heading in markdown content.
 * Falls back to a slug-based title if no H1 is found.
 */
function extractTitleFromContent(content, slug) {
  const match = content.match(/^#\s+(.+)$/m);
  if (match) return match[1].trim();
  // Last resort: humanize the slug
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function stripMarkdown(value = "") {
  return value
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractAnswerText(content = "", fallback = "") {
  const legacyMatch = content.match(
    /^## Direct answer[^\r\n]*\r?\n([\s\S]*?)(?=\r?\n##|$)/im
  );

  const withoutTitle = content.trim().replace(/^#\s+.+\r?\n+/, "").trim();
  const openingMatch = withoutTitle.match(/^([\s\S]*?)(?=\r?\n##\s+|$)/);
  const openingBlock = openingMatch?.[1]?.trim();
  const source = legacyMatch?.[1]?.trim() || openingBlock || fallback;

  return stripMarkdown(source);
}

function getMarkdownFiles(subdir) {
  const cached = markdownFilesCache.get(subdir);
  if (USE_CONTENT_CACHE && cached) return cached;

  const dir = path.join(CONTENT_DIR, subdir);
  const files = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => /\.(md|mdx)$/.test(f))
    : [];

  if (USE_CONTENT_CACHE) markdownFilesCache.set(subdir, files);
  return files;
}

function parsePostFile(subdir, filename) {
  const slug = filename.replace(/\.(md|mdx)$/, "");
  const filePath = path.join(CONTENT_DIR, subdir, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const resolvedSlug = data.slug || slug;
  const stats = readingTime(content);
  const title = data.title || extractTitleFromContent(content, resolvedSlug);

  return {
    slug: resolvedSlug,
    fileSlug: slug,
    category: subdir,
    content,
    readingTime: stats.text,
    ...data,
    title,
    date: data.date ? new Date(data.date).toISOString() : null,
    updated: data.updated ? new Date(data.updated).toISOString() : null,
  };
}

/**
 * Get all posts from a specific content subdirectory.
 * Supports .md and .mdx files.
 * Expects frontmatter: title, date, description, (optional) slug, tags, image
 */
function getPostsFromDir(subdir) {
  const cached = postsByDirCache.get(subdir);
  if (USE_CONTENT_CACHE && cached) return cached;

  const posts = getMarkdownFiles(subdir).map((filename) =>
    parsePostFile(subdir, filename)
  );

  if (USE_CONTENT_CACHE) postsByDirCache.set(subdir, posts);
  return posts;
}

/**
 * Get all blog posts (from content/blog/)
 */
export function getAllBlogPosts() {
  return getPostsFromDir("blog")
    .filter((p) => p.date && !REDIRECTED_BLOG_SLUGS.has(p.slug))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get all local/geo pages (from content/local/)
 */
export function getAllLocalPages() {
  return getPostsFromDir("local")
    .filter((p) => p.title)
    .sort((a, b) => (a.title || "").localeCompare(b.title || ""));
}

/**
 * Get all comparison pages (from content/comparisons/)
 */
export function getAllComparisonPages() {
  return getPostsFromDir("comparisons")
    .filter((p) => p.title)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

/**
 * Get all research reports (from content/research/)
 */
export function getAllResearchPages() {
  return getPostsFromDir("research")
    .filter((p) => p.title)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

/**
 * Get a single post by slug from a specific category directory
 */
export function getPostBySlug(category, slug) {
  const cacheKey = `${category}:${slug}`;
  const cached = postBySlugCache.get(cacheKey);
  if (USE_CONTENT_CACHE && postBySlugCache.has(cacheKey)) return cached;

  const post =
    getPostsFromDir(category).find(
      (item) => item.slug === slug || item.fileSlug === slug
    ) || null;

  if (USE_CONTENT_CACHE) postBySlugCache.set(cacheKey, post);
  return post;
}

/**
 * Get all slugs for a category (for static generation)
 */
export function getAllSlugs(category) {
  const slugs = getMarkdownFiles(category).map((f) => f.replace(/\.(md|mdx)$/, ""));

  if (category === "blog") {
    return slugs.filter((slug) => !REDIRECTED_BLOG_SLUGS.has(slug));
  }

  return slugs;
}

const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "it", "that", "this", "are", "was",
  "be", "has", "have", "had", "do", "does", "did", "will", "would",
  "could", "should", "may", "might", "can", "your", "you", "how", "what",
  "why", "when", "where", "who", "which", "their", "its", "our", "my",
  "not", "no", "so", "if", "about", "more", "most", "than", "all",
  "just", "also", "into", "up", "out", "over", "too", "very",
  "2025", "2026", "2027",
]);

function extractKeywords(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

function getBlogKeywordIndex() {
  if (USE_CONTENT_CACHE && blogKeywordIndexCache) return blogKeywordIndexCache;

  const index = getAllBlogPosts().map((post) => {
    const keywords = [
      ...extractKeywords(post.title),
      ...extractKeywords(post.description),
      ...extractKeywords(post.slug.replace(/-/g, " ")),
    ];

    return {
      post,
      keywords,
      keywordSet: new Set(keywords),
      scoreBase: keywords.length > 0 ? Math.sqrt(keywords.length) : 0,
    };
  });

  if (USE_CONTENT_CACHE) blogKeywordIndexCache = index;
  return index;
}

function getLightweightPost(post) {
  const { slug, title, description, date, updated, readingTime } = post;
  return { slug, title, description, date, updated, readingTime };
}

function countKeywordMatches(candidateKeywords, currentKeywordSet) {
  let matches = 0;
  for (const keyword of candidateKeywords) {
    if (currentKeywordSet.has(keyword)) matches += 1;
  }
  return matches;
}

function insertScoredPost(topPosts, scoredPost, limit) {
  let insertAt = topPosts.findIndex((item) => scoredPost.score > item.score);

  if (insertAt === -1) {
    if (topPosts.length >= limit) return;
    insertAt = topPosts.length;
  }

  topPosts.splice(insertAt, 0, scoredPost);
  if (topPosts.length > limit) topPosts.pop();
}

function findTopRelatedPosts(current, index, limit) {
  const topPosts = [];

  for (const candidate of index) {
    if (candidate.post.slug === current.post.slug || candidate.scoreBase === 0) {
      continue;
    }

    const matches = countKeywordMatches(candidate.keywords, current.keywordSet);
    if (matches === 0) continue;

    insertScoredPost(
      topPosts,
      {
        score: matches / candidate.scoreBase,
        post: getLightweightPost(candidate.post),
      },
      limit
    );
  }

  return topPosts.map(({ post }) => post);
}

function buildRelatedPostsBySlug(limit) {
  if (USE_CONTENT_CACHE && relatedPostsBySlugLimit >= limit) return;

  const index = getBlogKeywordIndex();
  const relatedPostsBySlug = new Map();

  for (const current of index) {
    const relatedPosts = findTopRelatedPosts(current, index, limit);
    relatedPostsBySlug.set(current.post.slug, relatedPosts);

    if (current.post.fileSlug && current.post.fileSlug !== current.post.slug) {
      relatedPostsBySlug.set(current.post.fileSlug, relatedPosts);
    }
  }

  relatedPostsBySlugCache.clear();
  for (const [slug, relatedPosts] of relatedPostsBySlug.entries()) {
    relatedPostsBySlugCache.set(slug, relatedPosts);
  }
  relatedPostsBySlugLimit = limit;
}

/**
 * Get related posts for a given blog post.
 * Matches by keyword overlap in title + description + slug.
 * Returns up to `count` related posts (default 3).
 */
export function getRelatedPosts(currentSlug, count = 3) {
  const index = getBlogKeywordIndex();
  const current = index.find(
    ({ post }) => post.slug === currentSlug || post.fileSlug === currentSlug
  );
  if (!current) return [];

  if (!USE_CONTENT_CACHE) {
    return findTopRelatedPosts(current, index, count);
  }

  buildRelatedPostsBySlug(count);
  return (relatedPostsBySlugCache.get(currentSlug) || []).slice(0, count);
}

/**
 * Get all questions (from content/questions/)
 */
export function getAllQuestions() {
  const cached = allQuestionsCache.get("questions");
  if (USE_CONTENT_CACHE && cached) return cached;

  const questions = getMarkdownFiles("questions").map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/, "");
    return getQuestionBySlug(slug);
  }).filter(Boolean);

  if (USE_CONTENT_CACHE) allQuestionsCache.set("questions", questions);
  return questions;
}

/**
 * Get a single question by slug from content/questions/
 */
export function getQuestionBySlug(slug) {
  const cached = questionBySlugCache.get(slug);
  if (USE_CONTENT_CACHE && questionBySlugCache.has(slug)) return cached;

  const dir = path.join(CONTENT_DIR, "questions");

  for (const ext of [".md", ".mdx"]) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);
      const title = data.title || extractTitleFromContent(content, slug);
      
      // Use the opening answer block as the generated description.
      let description = data.description;
      if (!description) {
        description = extractAnswerText(content);
        if (description.length > 160) {
          description = description.substring(0, 157) + "...";
        }
      }

      const question = {
        slug,
        category: "questions",
        content,
        readingTime: stats.text,
        ...data,
        title,
        description,
        date: data.date ? new Date(data.date).toISOString() : "2026-05-20T12:00:00.000Z",
        updated: data.updated ? new Date(data.updated).toISOString() : null,
      };

      if (USE_CONTENT_CACHE) questionBySlugCache.set(slug, question);
      return question;
    }
  }

  if (USE_CONTENT_CACHE) questionBySlugCache.set(slug, null);
  return null;
}
