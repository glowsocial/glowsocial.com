/**
 * /.well-known/agent-card.json — A2A Agent Card
 *
 * Google A2A (Agent-to-Agent) protocol agent card.
 * This also satisfies the AP2 (Agentic Payments 2) check which
 * requires an A2A Agent Card to exist.
 */
export function GET() {
  const agentCard = {
    name: "Glow Social",
    description:
      "Done-for-you social media management agent for local businesses. Generates professional posts and publishes to 13 platforms.",
    url: "https://app.glowsocial.com",
    provider: {
      organization: "Glow Social",
      url: "https://glowsocial.com",
    },
    version: "1.0.0",
    capabilities: {
      streaming: false,
      pushNotifications: false,
    },
    authentication: {
      schemes: ["Bearer"],
      credentials: "https://glowsocial.com/.well-known/openid-configuration",
    },
    defaultInputModes: ["text/plain"],
    defaultOutputModes: ["text/plain", "application/json"],
    skills: [
      {
        id: "generate-posts",
        name: "Generate Social Media Posts",
        description:
          "Generate professional social media posts from a business website URL.",
        tags: ["social-media", "content-generation", "marketing"],
        examples: [
          "Generate social media posts for https://example.com",
          "Create 12 posts for a local dentist",
        ],
      },
      {
        id: "manage-reviews",
        name: "Monitor Google Reviews",
        description:
          "Monitor and respond to Google Business Profile reviews.",
        tags: ["reviews", "reputation-management", "google-business"],
      },
    ],
  };

  return new Response(JSON.stringify(agentCard, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
