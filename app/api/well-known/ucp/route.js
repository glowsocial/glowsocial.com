/**
 * /.well-known/ucp — Universal Commerce Protocol
 * Enables agent-native content payments.
 *
 * The scanner requires a top-level "ucp" field wrapping the profile.
 */
export function GET() {
  const ucp = {
    ucp: {
      version: "1.0",
      profile: {
        name: "Glow Social",
        description:
          "Affordable done-for-you social media posting for local businesses - 20 posts/month across the major platforms local businesses use, starting at $99/mo.",
        url: "https://glowsocial.com",
        logo: "https://glowsocial.com/icon.png",
      },
      services: [
        {
          name: "social-media-management",
          description:
            "Affordable automated social media management — content creation and multi-platform publishing for small businesses.",
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
      capabilities: [
        "subscriptions",
        "content-generation",
        "multi-platform-publishing",
      ],
      endpoints: {
        checkout: "https://app.glowsocial.com/checkout",
        offer: "https://glowsocial.com/affordable-social-media-management",
        pricing: "https://app.glowsocial.com/pricing",
        api: "https://app.glowsocial.com/api",
      },
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
