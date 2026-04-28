/**
 * /.well-known/ucp — Universal Commerce Protocol
 * Enables agent-native content payments.
 */
export function GET() {
  const ucp = {
    protocol_version: "1.0",
    services: [
      {
        name: "social-media-management",
        description:
          "Done-for-you social media posting for local businesses — 12+ posts/month across 13 platforms.",
        pricing: {
          currency: "USD",
          plans: [
            { name: "Glo Core", amount: 9900, interval: "month" },
            { name: "Glo Pro", amount: 14900, interval: "month" },
            { name: "Glo Unlimited", amount: 29900, interval: "month" },
          ],
        },
      },
    ],
    capabilities: ["subscriptions", "content-generation", "multi-platform-publishing"],
    endpoints: {
      checkout: "https://app.glowsocial.com/checkout",
      pricing: "https://app.glowsocial.com/pricing",
      api: "https://app.glowsocial.com/api",
    },
  };

  return new Response(JSON.stringify(ucp, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
