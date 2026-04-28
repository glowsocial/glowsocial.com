/**
 * /.well-known/openid-configuration — OpenID Connect Discovery
 * Advertises authentication endpoints for AI agents.
 */
export function GET() {
  const config = {
    issuer: "https://app.glowsocial.com",
    authorization_endpoint: "https://app.glowsocial.com/api/auth/authorize",
    token_endpoint: "https://app.glowsocial.com/api/auth/token",
    jwks_uri: "https://app.glowsocial.com/.well-known/jwks.json",
    response_types_supported: ["code"],
    grant_types_supported: ["authorization_code", "refresh_token"],
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["RS256"],
    scopes_supported: ["openid", "profile", "email", "content:read", "content:write"],
    token_endpoint_auth_methods_supported: ["client_secret_basic", "client_secret_post"],
  };

  return new Response(JSON.stringify(config, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
