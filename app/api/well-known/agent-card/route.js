/**
 * /.well-known/agent-card.json — A2A Agent Card
 *
 * Google A2A (Agent-to-Agent) protocol agent card with AP2 payment extension.
 * Spec: https://google.github.io/A2A/specification/
 * AP2: https://ap2-protocol.org/ap2/specification/
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
    supportedInterfaces: [
      {
        protocol: "https",
        url: "https://app.glowsocial.com/api/a2a",
      },
    ],
    capabilities: {
      streaming: false,
      pushNotifications: false,
      stateTransitionHistory: false,
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
    // AP2 (Agent Payments Protocol) extension
    extensions: {
      ap2: {
        version: "0.2",
        paymentMethods: ["card", "stripe"],
        capabilities: ["checkout", "subscription"],
        checkoutUrl: "https://app.glowsocial.com/checkout",
        currency: "USD",
        merchantInfo: {
          name: "Glow Social",
          url: "https://glowsocial.com",
          category: "software",
        },
      },
    },
  };

  return new Response(JSON.stringify(agentCard, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
