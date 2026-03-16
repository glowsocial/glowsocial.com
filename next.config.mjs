/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // === Existing site-structure redirects ===
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/social-media-quiz",
        destination: "/how-glow-social-works",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/local",
        permanent: true,
      },
      {
        source: "/glow-up",
        destination: "https://app.glowsocial.com/pricing/",
        permanent: true,
      },
      {
        source: "/more",
        destination: "/how-glow-social-works",
        permanent: true,
      },
      {
        source: "/15-min",
        destination: "/lets-meet",
        permanent: true,
      },
      {
        source: "/post-ideas",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "https://app.glowsocial.com/examples",
        permanent: true,
      },

      // === Old root-level blog posts → /blog/slug ===
      ...[
        // Previously existing posts
        "share-business-opinions-social-media",
        "glow-social-setup-time",
        "best-social-media-service-for-lawyers",
        "social-media-agency-vs-software-vs-diy-costs",
        "social-media-manager-vs-glow-social",
        "canva-vs-all-in-one-social-media-tools",
        "social-media-agency-vs-diy-tool-service-providers",
        "social-media-post-types-local-businesses",
        "glow-social-different-hootsuite",
        // Newly created posts
        "how-to-get-more-and-more-likes-on-facebook-effective-strategies",
        "glow-social-roofing-social-media-service-2",
        "transform-your-strategy-with-a-social-media-ai-post-generator",
        "guide-to-adding-followers-on-instagram-proven-methods",
        "social-media-stories-boost-engagement-with-ai-powered-content-creation",
        "the-best-time-to-post-tik-toks-on-saturday-for-maximum-engagement",
        "glow-social-contractors-more-calls-social-media",
        "automated-social-media-local-business",
        "automate-social-media-oba-framework",
        "done-for-you-social-media-roofing",
        "50-creative-business-social-media-post-ideas-to-engage-your-audience",
        "social-media-management-images-boost-engagement-with-ai-powered-content",
        "social-media-marketing-ideas-to-elevate-engagement-and-strategy",
        "unlock-social-media-planning-notion-for-streamlined-digital-domination",
        "master-social-media-management-degree-for-career-success-and-digital-growth",
        "unlock-your-career-potential-top-jobs-in-social-media-management-await-you",
        "why-is-content-strategy-important-for-social-media-success",
        "social-media-management-on-instagram-boost-engagement-with-ai-tools",
        "empower-your-strategy-with-inspiring-social-media-management-quotes",
        "social-media-marketing-cost-optimize-your-budget-with-ai-solutions",
        "what-is-media-scheduling-boost-your-social-media-strategy-effortlessly",
        "social-media-management-meaning-elevate-your-strategy-with-ai-tools",
        "why-content-strategy-is-important-for-social-media-success",
        "understanding-curating-content-meaning-a-comprehensive-overview",
        "social-media-planner-for-small-business-streamline-your-strategy-today",
        "social-media-and-ai-transform-your-digital-dominance-effortlessly",
        "boost-your-engagement-discover-the-benefits-of-social-media-schedulers",
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),

      // === Old root-level comparison pages → /compare/slug ===
      ...[
        "agorapulse-alternative",
        "loomly-alternative",
        "chatgpt-alternative",
        "meetedgar-alternative",
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/compare/${slug}`,
        permanent: true,
      })),

      // === Old local hub pages (generic city-only URLs) → /local ===
      ...[
        "social-media-management-local-business-atlanta",
        "social-media-management-local-business-dallas",
        "social-media-management-local-business-austin",
        "social-media-management-local-business-seattle",
        "social-media-management-local-business-phoenix",
        "social-media-management-local-business-miami",
        "social-media-management-local-business-boston",
      ].map((slug) => ({
        source: `/${slug}`,
        destination: "/local",
        permanent: true,
      })),

      // === Old WordPress category/author pagination → /blog ===
      {
        source: "/category/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
