/**
 * /.well-known/oauth-protected-resource — RFC 9728
 * Tells agents how to obtain access tokens for the Glow Social API.
 */
export function GET() {
  const metadata = {
    resource: "https://app.glowsocial.com/api",
    authorization_servers: ["https://app.glowsocial.com"],
    scopes_supported: ["openid", "profile", "content:read", "content:write"],
  };

  return new Response(JSON.stringify(metadata, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
