/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // === "Time spent on social media" cluster consolidation ===
      // Merging 5 thin duplicate pages into /blog/average-time-social-media-marketing
      {
        source: "/blog/hours-per-week-social-media-takes",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      {
        source: "/blog/average-time-spent-social-media-marketing",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      {
        source: "/blog/time-small-business-social-media",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      {
        source: "/blog/hours-per-week-social-media",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      {
        source: "/blog/how-long-manage-social-media",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      // Root-level versions of the same (avoid double redirects)
      {
        source: "/hours-per-week-social-media-takes",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      {
        source: "/average-time-spent-social-media-marketing",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      {
        source: "/time-small-business-social-media",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      {
        source: "/hours-per-week-social-media",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },
      {
        source: "/how-long-manage-social-media",
        destination: "/blog/average-time-social-media-marketing",
        permanent: true,
      },

      // === Removed misfit local pages (broken auto-generated content) ===
      {
        source: "/local/social-media-management-roofers",
        destination: "/blog/best-social-media-posting-service-contractors",
        permanent: true,
      },
      {
        source: "/local/social-media-management-lawyers-12-posts-monthly",
        destination: "/blog/best-social-media-service-for-lawyers",
        permanent: true,
      },
      {
        source: "/local/social-media-management-oba-framework",
        destination: "/blog/done-for-you-social-media-guide",
        permanent: true,
      },
      {
        source: "/local/social-media-management-tools-worth",
        destination: "/blog/social-media-tools-local-business",
        permanent: true,
      },

      // === Removed duplicate/thin blog posts → canonical versions ===
      // Buffer comparison cluster → canonical deep comparison
      {
        source: "/blog/glow-social-vs-buffer-comparison",
        destination: "/blog/buffer-vs-glow-social",
        permanent: true,
      },
      {
        source: "/blog/glow-social-vs-buffer-difference-comparison",
        destination: "/blog/buffer-vs-glow-social",
        permanent: true,
      },
      {
        source: "/blog/buffer-vs-ai-content-tools",
        destination: "/blog/buffer-vs-glow-social",
        permanent: true,
      },
      // Hiring SM manager cluster → canonical deep comparison
      {
        source: "/blog/glow-social-vs-hiring-social-media-manager",
        destination: "/blog/social-media-manager-vs-ai",
        permanent: true,
      },
      {
        source: "/blog/glow-social-vs-hiring-social-media-manager-2",
        destination: "/blog/social-media-manager-vs-ai",
        permanent: true,
      },
      {
        source: "/blog/social-media-manager-vs-glow-social",
        destination: "/blog/social-media-manager-vs-ai",
        permanent: true,
      },
      {
        source: "/blog/social-media-manager-vs-automation",
        destination: "/blog/social-media-manager-vs-ai",
        permanent: true,
      },
      // Hootsuite cluster → canonical deep comparison
      {
        source: "/blog/glow-social-vs-hootsuite-done-for-you-vs-diy",
        destination: "/blog/hootsuite-vs-glow-social",
        permanent: true,
      },
      {
        source: "/blog/glow-social-different-hootsuite",
        destination: "/blog/hootsuite-vs-glow-social",
        permanent: true,
      },
      // Generic scheduling tools stub → best tools roundup
      {
        source: "/blog/glow-social-vs-generic-scheduling-tools-local-business",
        destination: "/blog/social-media-tools-local-business",
        permanent: true,
      },
      // Done-for-you duplicates → canonical guide
      {
        source: "/blog/done-for-you-social-media-guide-2",
        destination: "/blog/done-for-you-social-media-guide",
        permanent: true,
      },
      {
        source: "/blog/done-for-you-social-media-lawyers",
        destination: "/blog/done-for-you-ai-social-media-law-firms",
        permanent: true,
      },
      {
        source: "/blog/done-for-you-social-media-attorneys",
        destination: "/blog/done-for-you-ai-social-media-law-firms",
        permanent: true,
      },
      {
        source: "/blog/done-for-you-social-media-roofers-2",
        destination: "/blog/done-for-you-social-media-roofing",
        permanent: true,
      },
      // Agency vs DIY/software comparison stubs → canonical cost comparison
      {
        source: "/blog/social-media-agency-vs-software-vs-diy-costs",
        destination: "/blog/ai-tools-vs-agencies-cost",
        permanent: true,
      },
      {
        source: "/blog/social-media-agency-vs-diy-tool-service-providers",
        destination: "/blog/ai-tools-vs-agencies-cost",
        permanent: true,
      },
      {
        source: "/blog/social-media-agency-vs-automation-cost-results-comparison",
        destination: "/blog/ai-tools-vs-agencies-cost",
        permanent: true,
      },
      // Other thin comparison stubs → best related canonical
      {
        source: "/blog/social-media-tool-vs-platform-local-business",
        destination: "/blog/social-media-tools-local-business",
        permanent: true,
      },
      {
        source: "/blog/oba-framework-vs-viral-trends-local-growth",
        destination: "/blog/oba-social-media-framework-local-business",
        permanent: true,
      },
      {
        source: "/blog/canva-vs-all-in-one-social-media-tools",
        destination: "/blog/social-media-tools-under-50",
        permanent: true,
      },
      // Content strategy duplicate → keep the one with better body
      {
        source: "/blog/why-content-strategy-is-important-for-social-media-success",
        destination: "/blog/why-is-content-strategy-important-for-social-media-success",
        permanent: true,
      },
      // Thin done-for-you stubs → canonical guide
      {
        source: "/blog/is-done-for-you-social-media-worth-it-small-business",
        destination: "/blog/done-for-you-social-media-guide",
        permanent: true,
      },
      {
        source: "/blog/best-done-for-you-social-media-services-small-business",
        destination: "/blog/done-for-you-social-media-guide",
        permanent: true,
      },
      // Thin Glow Social industry stubs → industry pillar posts
      {
        source: "/blog/glow-social-work-gyms",
        destination: "/blog/social-media-fitness-studios",
        permanent: true,
      },
      {
        source: "/blog/glow-social-work-salons",
        destination: "/blog/social-media-salons-spas",
        permanent: true,
      },
      {
        source: "/blog/glow-social-work-restaurants",
        destination: "/blog/social-media-restaurants",
        permanent: true,
      },
      {
        source: "/blog/glow-social-work-retail-stores",
        destination: "/blog/social-media-retail-boutiques",
        permanent: true,
      },
      // Thin Glow Social feature stubs → How It Works page
      {
        source: "/blog/glow-social-ai-content",
        destination: "/how-glow-social-works",
        permanent: true,
      },
      {
        source: "/blog/glow-social-setup-time",
        destination: "/how-glow-social-works",
        permanent: true,
      },

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
        // Previously existing posts (still live)
        "share-business-opinions-social-media",
        "best-social-media-service-for-lawyers",
        "social-media-post-types-local-businesses",
        // Newly created posts (still live)
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

        "understanding-curating-content-meaning-a-comprehensive-overview",
        "social-media-planner-for-small-business-streamline-your-strategy-today",
        "social-media-and-ai-transform-your-digital-dominance-effortlessly",
        "boost-your-engagement-discover-the-benefits-of-social-media-schedulers",
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),

      // === Old root-level deleted posts → direct to canonical (avoid double redirect) ===
      ...[
        { slug: "social-media-agency-vs-software-vs-diy-costs", canonical: "/blog/ai-tools-vs-agencies-cost" },
        { slug: "social-media-manager-vs-glow-social", canonical: "/blog/social-media-manager-vs-ai" },
        { slug: "canva-vs-all-in-one-social-media-tools", canonical: "/blog/social-media-tools-under-50" },
        { slug: "social-media-agency-vs-diy-tool-service-providers", canonical: "/blog/ai-tools-vs-agencies-cost" },
        { slug: "glow-social-different-hootsuite", canonical: "/blog/hootsuite-vs-glow-social" },
        { slug: "glow-social-setup-time", canonical: "/how-glow-social-works" },
        { slug: "why-content-strategy-is-important-for-social-media-success", canonical: "/blog/why-is-content-strategy-important-for-social-media-success" },
      ].map(({ slug, canonical }) => ({
        source: `/${slug}`,
        destination: canonical,
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
