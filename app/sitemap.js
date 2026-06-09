import {
  getAllBlogPosts,
  getAllLocalPages,
  getAllComparisonPages,
  getAllQuestions,
  getAllResearchPages,
} from "@/lib/posts";

const BASE_URL = "https://glowsocial.com";

function lastModifiedFor(page) {
  const date = page.updated || page.date;
  return date ? new Date(date) : new Date();
}

export default function sitemap() {
  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: lastModifiedFor(post),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const localPages = getAllLocalPages().map((page) => ({
    url: `${BASE_URL}/local/${page.slug}`,
    lastModified: lastModifiedFor(page),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const comparisonPages = getAllComparisonPages().map((page) => ({
    url: `${BASE_URL}/compare/${page.slug}`,
    lastModified: lastModifiedFor(page),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const questionsPages = getAllQuestions().map((q) => ({
    url: `${BASE_URL}/resources/questions/${q.slug}`,
    lastModified: lastModifiedFor(q),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const researchPages = getAllResearchPages().map((page) => ({
    url: `${BASE_URL}/research/${page.slug}`,
    lastModified: lastModifiedFor(page),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/agency", priority: 0.8, changeFrequency: "monthly" },
    { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" },
    { path: "/affordable-social-media-management", priority: 0.9, changeFrequency: "weekly" },
    { path: "/social-media-agency-alternative", priority: 0.9, changeFrequency: "weekly" },
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
    { path: "/tools", priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/social-media-management-cost-calculator", priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/diy-vs-agency-cost-calculator", priority: 0.7, changeFrequency: "monthly" },
    { path: "/tools/posting-frequency-calculator", priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/social-media-roi-estimator", priority: 0.8, changeFrequency: "monthly" },
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
    ...researchPages,
  ];
}
