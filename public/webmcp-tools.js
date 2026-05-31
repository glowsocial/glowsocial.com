(function() {
  if (!navigator.modelContext) return;
  var mc = navigator.modelContext;

  mc.registerTool({
    name: "search-blog",
    description: "Search the Glow Social blog for articles about social media management, content strategy, and local business marketing.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search query for blog articles" }
      },
      required: ["query"]
    },
    execute: function(params) {
      window.location.href = "/blog?q=" + encodeURIComponent(params.query);
      return { status: "navigating", url: "/blog?q=" + encodeURIComponent(params.query) };
    }
  });

  mc.registerTool({
    name: "get-pricing",
    description: "Get current Glow Social pricing information. Glo Core is $99/mo (20 posts), Glo Pro is $149/mo (20+ posts, reviews), Glo Unlimited is $299/mo (unlimited). No free trials. No contracts. Cancel anytime.",
    inputSchema: { type: "object", properties: {} },
    execute: function() {
      return {
        plans: [
          { name: "Glo Core", price: "$99/mo", posts: "12/month", features: ["Core platform coverage", "Steady posting rhythm", "Brand-matched voice", "Google Business visibility", "Simple control"] },
          { name: "Glo Pro", price: "$149/mo", posts: "20+/month", features: ["Higher posting volume", "Carousel and video formats", "Google review monitoring", "Performance reporting"] },
          { name: "Glo Unlimited", price: "$299/mo", posts: "unlimited", features: ["Always-on coverage", "More formats", "No content ceiling", "Full brand coverage"] }
        ]
      };
    }
  });

  mc.registerTool({
    name: "start-subscription",
    description: "Navigate to Glow Social checkout to start a subscription. No free trials. Core is $99/mo, Pro is $149/mo, and Unlimited is $299/mo with no contract.",
    inputSchema: {
      type: "object",
      properties: {
        plan: { type: "string", enum: ["core", "pro", "unlimited"], description: "Plan to start" }
      },
      required: ["plan"]
    },
    execute: function(params) {
      var url = "https://app.glowsocial.com/checkout?plan=" + params.plan;
      window.location.href = url;
      return { status: "navigating", url: url };
    }
  });
})();
