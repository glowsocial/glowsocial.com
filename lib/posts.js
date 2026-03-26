import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Get all posts from a specific content subdirectory.
 * Supports .md and .mdx files.
 * Expects frontmatter: title, date, description, (optional) slug, tags, image
 */
function getPostsFromDir(subdir) {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => /\.(md|mdx)$/.test(f));

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const slug = data.slug || filename.replace(/\.(md|mdx)$/, "");
    const stats = readingTime(content);

    return {
      slug,
      category: subdir,
      content,
      readingTime: stats.text,
      ...data,
      // Ensure date is serializable
      date: data.date ? new Date(data.date).toISOString() : null,
    };
  });
}

/**
 * Get all blog posts (from content/blog/)
 */
export function getAllBlogPosts() {
  return getPostsFromDir("blog")
    .filter((p) => p.date)
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
 * Get a single post by slug from a specific category directory
 */
export function getPostBySlug(category, slug) {
  const dir = path.join(CONTENT_DIR, category);

  // Try both .md and .mdx
  for (const ext of [".md", ".mdx"]) {
    const filePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug,
        category,
        content,
        readingTime: stats.text,
        ...data,
        date: data.date ? new Date(data.date).toISOString() : null,
      };
    }
  }

  return null;
}

/**
 * Get all slugs for a category (for static generation)
 */
export function getAllSlugs(category) {
  const dir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((f) => f.replace(/\.(md|mdx)$/, ""));
}

/**
 * Get related posts for a given blog post.
 * Matches by keyword overlap in title + description + slug.
 * Returns up to `count` related posts (default 3).
 */
export function getRelatedPosts(currentSlug, count = 3) {
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

  const allPosts = getAllBlogPosts();
  const current = allPosts.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const currentKeywords = new Set([
    ...extractKeywords(current.title),
    ...extractKeywords(current.description),
    ...extractKeywords(current.slug.replace(/-/g, " ")),
  ]);

  const scored = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((post) => {
      const postKeywords = [
        ...extractKeywords(post.title),
        ...extractKeywords(post.description),
        ...extractKeywords(post.slug.replace(/-/g, " ")),
      ];

      // Count how many of the post's keywords match the current post
      const matches = postKeywords.filter((kw) =>
        currentKeywords.has(kw)
      ).length;

      // Normalize by total keywords to avoid favoring long titles
      const score =
        postKeywords.length > 0 ? matches / Math.sqrt(postKeywords.length) : 0;

      return { ...post, score };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count);

  // Return lightweight objects (no content)
  return scored.map(({ slug, title, description, date, readingTime }) => ({
    slug,
    title,
    description,
    date,
    readingTime,
  }));
}
