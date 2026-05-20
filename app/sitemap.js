import { getAllBlogPosts, getAllLocalPages, getAllComparisonPages, getAllQuestions } from "@/lib/posts";

const BASE_URL = "https://glowsocial.com";

export default function sitemap() {
  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const localPages = getAllLocalPages().map((page) => ({
    url: `${BASE_URL}/local/${page.slug}`,
    lastModified: page.date ? new Date(page.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const comparisonPages = getAllComparisonPages().map((page) => ({
    url: `${BASE_URL}/compare/${page.slug}`,
    lastModified: page.date ? new Date(page.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const questionsPages = getAllQuestions().map((q) => ({
    url: `${BASE_URL}/resources/questions/${q.slug}`,
    lastModified: q.date ? new Date(q.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/agency", priority: 0.8, changeFrequency: "monthly" },
    { path: "/how-glow-social-works", priority: 0.9, changeFrequency: "monthly" },
    { path: "/affordable-social-media-management", priority: 0.9, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/compare", priority: 0.7, changeFrequency: "weekly" },
    { path: "/local", priority: 0.7, changeFrequency: "weekly" },
    { path: "/preview", priority: 0.9, changeFrequency: "monthly" },
    { path: "/setup", priority: 0.9, changeFrequency: "monthly" },
    { path: "/social-media-rescue-clinic", priority: 0.7, changeFrequency: "monthly" },
    { path: "/research", priority: 0.7, changeFrequency: "monthly" },
    { path: "/research/local-business-social-media-statistics", priority: 0.8, changeFrequency: "monthly" },
    { path: "/home-services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/ai-visibility-service", priority: 0.7, changeFrequency: "monthly" },
    { path: "/become-an-affiliate", priority: 0.5, changeFrequency: "monthly" },
    { path: "/manifesto", priority: 0.5, changeFrequency: "yearly" },
    { path: "/lets-meet", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources/questions", priority: 0.8, changeFrequency: "daily" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [
    ...staticPages,
    ...blogPosts,
    ...localPages,
    ...comparisonPages,
    ...questionsPages,
  ];
}
