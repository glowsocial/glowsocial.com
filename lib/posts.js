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
