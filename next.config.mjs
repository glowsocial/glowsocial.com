/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  // Proxy the preview tool's generation flow to app.glowsocial.com.
  // /preview is now a real marketing page in this project — no rewrite needed there.
  // beforeFiles: fires before routing, so slug form submissions proxy even though
  //              a static page also exists at /preview/:slug.
  // afterFiles:  proxies the generation + image APIs.
  async rewrites() {
    return {
      beforeFiles: [
        // Root /preview with ?url= present = form was just submitted from the marketing page.
        // Proxy the entire rendering to the app so the user stays on glowsocial.com.
        {
          source: '/preview',
          has: [{ type: 'query', key: 'url' }],
          destination: 'https://app.glowsocial.com/preview',
        },
        // /preview/:slug?url= = vertical-specific slug routes (also submitted with a url param).
        {
          source: '/preview/:slug',
          has: [{ type: 'query', key: 'url' }],
          destination: 'https://app.glowsocial.com/preview/:slug',
        },
      ],
      afterFiles: [
        {
          source: '/api/preview/:path*',
          destination: 'https://app.glowsocial.com/api/preview/:path*',
        },
      ],
      fallback: [],
    }
  },

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

      // === "SM manager cost" cluster consolidation ===
      // Merging thin duplicate cost pages into /blog/freelance-social-media-manager-charge-cost
      {
        source: "/blog/social-media-manager-cost-hiring-budget",
        destination: "/blog/freelance-social-media-manager-charge-cost",
        permanent: true,
      },
      {
        source: "/blog/the-real-cost-of-social-media-management-comparing-your-options-in-2025",
        destination: "/blog/freelance-social-media-manager-charge-cost",
        permanent: true,
      },
      {
        source: "/social-media-manager-cost-hiring-budget",
        destination: "/blog/freelance-social-media-manager-charge-cost",
        permanent: true,
      },
      {
        source: "/the-real-cost-of-social-media-management-comparing-your-options-in-2025",
        destination: "/blog/freelance-social-media-manager-charge-cost",
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
        "best-social-media-service-for-lawyers",
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

      // === Old root-level deleted posts that had template content → direct to canonical ===
      { source: "/share-business-opinions-social-media", destination: "/blog/consistent-social-media-without-burnout", permanent: true },
      { source: "/social-media-post-types-local-businesses", destination: "/blog/content-ideas-local-business", permanent: true },

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

      // === Template-duplicate blog posts → canonical versions ===
      ...[
        { slug: "49-social-media-management-roofers", canonical: "/blog/automated-social-media-roofers-contractors" },
        { slug: "affordable-social-media-management", canonical: "/blog/affordable-social-media-management-guide" },
        { slug: "ai-replace-social-media-manager", canonical: "/blog/social-media-manager-vs-ai" },
        { slug: "ai-replacing-google-local-business-discovery", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "all-in-one-social-media-app-transform-social-media-management-today", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "always-open-digital-presence-client-perception", canonical: "/blog/why-customers-check-social-media-before-calling" },
        { slug: "answer-first-content-clusters-ai-training", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "auto-detailers-oba-premium-brand", canonical: "/blog/best-social-media-service-auto-repair-shops" },
        { slug: "automate-social-media-oba-framework-2", canonical: "/blog/automate-social-media-oba-framework" },
        { slug: "automated-manual-social-media-posting-better", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "automated-social-media-for-roofers", canonical: "/blog/automated-social-media-roofers-contractors" },
        { slug: "authentic-business-social-media", canonical: "/blog/consistent-social-media-without-burnout" },
        { slug: "automation-save-time-small-business", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "average-time-spent-social-media-marketing", canonical: "/blog/hours-per-week-social-media" },
        { slug: "balance-authenticity-automation-brand-storytelling", canonical: "/blog/consistent-social-media-without-burnout" },
        { slug: "batch-create-social-media-content", canonical: "/blog/create-month-content-one-hour" },
        { slug: "best-ai-tool-for-social-media", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-app-for-scheduling-posts-elevate-social-media-management-effortlessly", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-app-for-social-media-posts-boost-engagement-effortlessly", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-app-to-schedule-social-media-posts-for-effortless-management", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-apps-for-social-media-marketing-enhance-engagement-effortlessly", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-platforms-local-oba-content-strategy", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "best-posting-schedule-service-businesses", canonical: "/blog/posting-frequency-local-business" },
        { slug: "best-set-and-forget-social-media-small-business", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-small-business-social-media-practices-2025", canonical: "/blog/best-platforms-local-business" },
        { slug: "best-social-media-automation-tools-small-business", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-social-media-management-app-enhance-your-online-strategy-today", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-social-media-platforms-service-businesses", canonical: "/blog/best-platforms-local-business" },
        { slug: "best-social-media-posting-apps-to-streamline-your-marketing-efforts", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-social-media-tools-that-post-for-you", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "best-time-post-social-media-local-business", canonical: "/blog/posting-frequency-local-business" },
        { slug: "best-way-automate-social-media-posting", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "best-way-stay-visible-customers-online", canonical: "/blog/why-customers-check-social-media-before-calling" },
        { slug: "biggest-challenge-social-media-marketing", canonical: "/blog/social-media-mistakes-local-business" },
        { slug: "boost-your-social-media-management-with-an-app-to-schedule-posts", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "branded-oba-signals-llm-training", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "buffer-hootsuite-glow-social-oba-framework-comparison", canonical: "/blog/buffer-vs-glow-social" },
        { slug: "cancel-glow-social-anytime", canonical: "/blog/what-makes-glow-social-different" },
        { slug: "canva-templates-good-business", canonical: "/blog/social-media-management-images-boost-engagement-with-ai-powered-content" },
        { slug: "compete-bigger-businesses-social-media", canonical: "/blog/roi-social-media-local-business" },
        { slug: "competitors-get-more-clients-oba-solution", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "construction-social-media-for-contractors", canonical: "/blog/best-social-media-posting-service-contractors" },
        { slug: "create-social-media-content-faster", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "custom-social-media-posts-for-roofers", canonical: "/blog/automated-social-media-roofers-contractors" },
        { slug: "customers-care-professional-quality-consistency", canonical: "/blog/what-makes-customers-trust-business-online" },
        { slug: "dental-practices-build-trust-oba-frameworks", canonical: "/blog/social-media-marketing-dentists" },
        { slug: "dentist-social-media-service-49month", canonical: "/blog/social-media-marketing-dentists" },
        { slug: "diy-social-media-cost-calculator", canonical: "/blog/done-for-you-social-media-cost" },
        { slug: "effective-oba-offer-posts-local-events", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "emojis-unprofessional-certain-industries", canonical: "/blog/social-media-mistakes-local-business" },
        { slug: "empty-social-media-profiles-hurt-business", canonical: "/blog/real-cost-inconsistent-social-media-posting" },
        { slug: "engagement-replace-traditional-networking", canonical: "/blog/roi-social-media-local-business" },
        { slug: "follower-count-engagement-matter", canonical: "/blog/roi-social-media-local-business" },
        { slug: "good-enough-social-media-content", canonical: "/blog/consistent-social-media-without-burnout" },
        { slug: "grow-business-social-media", canonical: "/blog/roi-social-media-local-business" },
        { slug: "grow-without-paying-ads", canonical: "/blog/roi-social-media-local-business" },
        { slug: "hashtags-work-2025-strategies", canonical: "/blog/social-media-mistakes-local-business" },
        { slug: "healthcare-social-media-management-49-month", canonical: "/blog/social-media-healthcare-practices" },
        { slug: "hire-social-media-manager-or-do-it-yourself", canonical: "/blog/social-media-manager-vs-ai" },
        { slug: "hours-per-week-social-media-takes", canonical: "/blog/hours-per-week-social-media" },
        { slug: "how-long-manage-social-media", canonical: "/blog/hours-per-week-social-media" },
        { slug: "how-long-try-social-media-before-giving-up", canonical: "/blog/real-cost-inconsistent-social-media-posting" },
        { slug: "how-many-emojis-too-many-social-media", canonical: "/blog/social-media-mistakes-local-business" },
        { slug: "how-much-does-social-media-management-cost-in-2025", canonical: "/blog/done-for-you-social-media-cost" },
        { slug: "how-often-should-small-businesses-post-on-social-media", canonical: "/blog/posting-frequency-local-business" },
        { slug: "how-to-generate-social-media-content-with-ai", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "how-to-get-ai-to-sound-more-human", canonical: "/blog/consistent-social-media-without-burnout" },
        { slug: "how-to-get-more-customers-from-social-media", canonical: "/blog/roi-social-media-local-business" },
        { slug: "how-to-schedule-social-media-posts-automatically", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "human-like-social-media-automation", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "law-firms-build-local-authority-oba", canonical: "/blog/done-for-you-ai-social-media-law-firms" },
        { slug: "lawyers-build-authority-ethically", canonical: "/blog/done-for-you-ai-social-media-law-firms" },
        { slug: "linkedin-page-local-business", canonical: "/blog/best-platforms-local-business" },
        { slug: "local-business-post-go-viral", canonical: "/blog/content-ideas-local-business" },
        { slug: "local-businesses-overcome-algorithm-fatigue-community-focus", canonical: "/blog/posting-frequency-local-business" },
        { slug: "local-consultants-coaches-oba-framework-client-success", canonical: "/blog/best-social-media-service-coaches-consultants" },
        { slug: "local-restaurants-social-media-tips", canonical: "/blog/social-media-restaurants" },
        { slug: "maintain-authenticity-automated-social-media", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "master-social-media-scheduling-boost-engagement-with-ai-automation", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "maximize-engagement-with-an-app-to-post-to-all-social-media-efficiently", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "monitor-social-media-24-7", canonical: "/blog/how-social-media-affects-local-business-credibility" },
        { slug: "need-video-content-social-media", canonical: "/blog/content-ideas-local-business" },
        { slug: "oba-framework-content-strategy-glow-social", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "oba-framework-first-week-content-plan", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "oba-framework-social-media-strategy", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "overcome-writers-block-social-media-oba-framework", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "people-tell-content-ai-generated", canonical: "/blog/consistent-social-media-without-burnout" },
        { slug: "personal-story-business-social-media-balance", canonical: "/blog/consistent-social-media-without-burnout" },
        { slug: "physical-therapists-choose-glow-social", canonical: "/blog/social-media-healthcare-practices" },
        { slug: "post-per-day-social-media-frequency", canonical: "/blog/posting-frequency-local-business" },
        { slug: "pre-written-social-media-content-construction-companies", canonical: "/blog/best-social-media-posting-service-contractors" },
        { slug: "professional-photos-social-media-necessary", canonical: "/blog/social-media-management-images-boost-engagement-with-ai-powered-content" },
        { slug: "professional-services-social-media-management", canonical: "/blog/best-social-media-service-busy-business-owners" },
        { slug: "prove-social-media-brings-customers", canonical: "/blog/roi-social-media-local-business" },
        { slug: "quality-over-quantity-social-media-marketing", canonical: "/blog/posting-frequency-local-business" },
        { slug: "real-estate-social-media-management", canonical: "/blog/best-social-media-service-real-estate-agents" },
        { slug: "repurpose-blog-post-social-media", canonical: "/blog/content-ideas-local-business" },
        { slug: "respond-customer-questions-social-media", canonical: "/blog/how-social-media-affects-local-business-credibility" },
        { slug: "roi-of-social-media-local-business", canonical: "/blog/roi-social-media-local-business" },
        { slug: "salons-spas-oba-bookings-staff-client-care", canonical: "/blog/social-media-salons-spas" },
        { slug: "same-caption-instagram-facebook", canonical: "/blog/best-platforms-local-business" },
        { slug: "schedule-monitor-social-media-automation", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "schedule-social-media-posts-advance", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "scheduling-tools-hurt-reach", canonical: "/blog/buffer-vs-glow-social" },
        { slug: "screenshot-customer-reviews-post", canonical: "/blog/social-media-management-images-boost-engagement-with-ai-powered-content" },
        { slug: "share-business-opinions-social-media", canonical: "/blog/consistent-social-media-without-burnout" },
        { slug: "showcase-unique-business-method", canonical: "/blog/consistent-social-media-without-burnout" },
        { slug: "social-media-automation-financial-advisors-accountants", canonical: "/blog/best-social-media-service-for-accountants" },
        { slug: "social-media-automation-local-gyms", canonical: "/blog/social-media-fitness-studios" },
        { slug: "social-media-automation-medical-practices", canonical: "/blog/social-media-healthcare-practices" },
        { slug: "social-media-boutique-fitness", canonical: "/blog/social-media-fitness-studios" },
        { slug: "social-media-bring-customers-timeline", canonical: "/blog/roi-social-media-local-business" },
        { slug: "social-media-changing-businesses-automation-ai", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "social-media-consistency-tools-oba-framework", canonical: "/blog/oba-social-media-framework-local-business" },
        { slug: "social-media-content-generator-auto-repair-shops", canonical: "/blog/best-social-media-service-auto-repair-shops" },
        { slug: "social-media-content-relevant-lifespan", canonical: "/blog/posting-frequency-local-business" },
        { slug: "social-media-content-strategy-local-retail", canonical: "/blog/social-media-retail-boutiques" },
        { slug: "social-media-for-roofers-49-month", canonical: "/blog/automated-social-media-roofers-contractors" },
        { slug: "social-media-manager-cost-hiring-budget", canonical: "/blog/done-for-you-social-media-cost" },
        { slug: "social-media-marketing-examples-elevate-your-strategy-with-ai-solutions", canonical: "/blog/social-media-marketing-ideas-to-elevate-engagement-and-strategy" },
        { slug: "social-media-post-types-local-businesses", canonical: "/blog/content-ideas-local-business" },
        { slug: "social-media-replace-phone-support", canonical: "/blog/how-social-media-affects-local-business-credibility" },
        { slug: "social-media-strategy-med-spas-estheticians", canonical: "/blog/social-media-salons-spas" },
        { slug: "social-media-tips-plumbers-electricians", canonical: "/blog/best-social-media-posting-service-home-services" },
        { slug: "social-media-tools-boutique-hotels", canonical: "/blog/best-social-media-service-busy-business-owners" },
        { slug: "social-media-tools-cost-per-month", canonical: "/blog/done-for-you-social-media-cost" },
        { slug: "social-media-workflow-wedding-photographers", canonical: "/blog/best-social-media-service-wedding-vendors" },
        { slug: "stop-losing-jobs-better-instagram-glow-social", canonical: "/blog/automated-social-media-roofers-contractors" },
        { slug: "technical-experts-social-media-oba", canonical: "/blog/best-social-media-service-busy-business-owners" },
        { slug: "the-best-app-for-scheduling-social-media-posts-boost-your-strategy-effortlessly", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "the-real-cost-of-social-media-management-comparing-your-options-in-2025", canonical: "/blog/done-for-you-social-media-cost" },
        { slug: "tiktok-local-business-marketing-strategy", canonical: "/blog/best-platforms-local-business" },
        { slug: "top-social-media-apps-enhance-strategy-with-ai-powered-solutions", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "top-social-media-marketing-agencies-for-effective-digital-domination", canonical: "/blog/ai-tools-vs-agencies-cost" },
        { slug: "touchpoints-social-media-follower-buys", canonical: "/blog/roi-social-media-local-business" },
        { slug: "transform-your-social-media-marketing-chicago-with-ai-powered-solutions", canonical: "/blog/automated-social-media-local-business" },
        { slug: "unlock-efficiency-with-a-social-media-marketing-app-for-your-brand", canonical: "/blog/best-ai-social-media-content-generators" },
        { slug: "use-stock-photos-business-social-media", canonical: "/blog/social-media-management-images-boost-engagement-with-ai-powered-content" },
        { slug: "what-does-glow-social-include-complete-breakdown", canonical: "/blog/what-makes-glow-social-different" },
        { slug: "what-happens-if-you-dont-post-on-social-media-regularly", canonical: "/blog/real-cost-inconsistent-social-media-posting" },
        { slug: "what-to-look-for-in-a-social-media-posting-service", canonical: "/blog/what-makes-glow-social-different" },
        { slug: "why-businesses-post-more-automated-social-media", canonical: "/blog/how-ai-social-media-posting-works" },
        { slug: "why-glow-social-isnt-another-social-media-app-and-why-thats-exactly-the-point", canonical: "/blog/what-makes-glow-social-different" },
        { slug: "why-service-businesses-choose-glow-social", canonical: "/blog/what-makes-glow-social-different" },
        { slug: "why-social-media-managers-expensive", canonical: "/blog/social-media-manager-vs-ai" },
      ].map(({ slug, canonical }) => ({
        source: `/blog/${slug}`,
        destination: canonical,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
