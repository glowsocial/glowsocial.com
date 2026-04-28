/**
 * /.well-known/acp.json — Agentic Commerce Protocol
 * Discovery document so agents can find the ACP implementation.
 */
export function GET() {
  const acp = {
    protocol: {
      name: "acp",
      version: "1.0.0",
    },
    api_base_url: "https://app.glowsocial.com/api",
    transports: ["https"],
    capabilities: {
      services: [
        "social-media-management",
        "content-generation",
        "review-monitoring",
        "multi-platform-publishing",
      ],
    },
    documentation: "https://glowsocial.com/faq",
    contact: "hello@glowsocial.com",
  };

  return new Response(JSON.stringify(acp, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
