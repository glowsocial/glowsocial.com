/**
 * /.well-known/oauth-protected-resource — RFC 9728
 * Tells agents how to obtain access tokens for the Glow Social API.
 */
export function GET() {
  const metadata = {
    resource: "https://glowsocial.com",
    authorization_servers: ["https://app.glowsocial.com"],
    scopes_supported: ["openid", "profile", "content:read", "content:write"],
    bearer_methods_supported: ["header"],
    resource_documentation: "https://glowsocial.com/faq",
  };

  return new Response(JSON.stringify(metadata, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
