export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/privacy-policy",
          "/terms-conditions",
          "/social-media-quiz",
          "/locations",
          "/glow-up",
          "/more",
          "/15-min",
          "/post-ideas",
          "/demo",
        ],
      },
    ],
    sitemap: "https://glowsocial.com/sitemap.xml",
    host: "https://glowsocial.com",
  };
}
