import { getAllBlogPosts, getAllLocalPages, getAllComparisonPages } from "@/lib/posts";

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

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogPosts,
    ...localPages,
    ...comparisonPages,
  ];
}
