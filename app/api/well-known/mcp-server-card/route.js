/**
 * /.well-known/mcp/server-card.json — MCP Server Card (SEP-1649)
 * Allows agents to discover the Glow Social MCP server.
 */
export function GET() {
  const serverCard = {
    serverInfo: {
      name: "glow-social",
      version: "1.0.0",
      description:
        "Glow Social — Done-for-you social media management for local businesses. Create posts, manage reviews, and publish to 13 platforms.",
    },
    transport: {
      type: "streamable-http",
      endpoint: "https://app.glowsocial.com/mcp",
    },
    capabilities: {
      tools: true,
      resources: true,
      prompts: true,
    },
  };

  return new Response(JSON.stringify(serverCard, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
