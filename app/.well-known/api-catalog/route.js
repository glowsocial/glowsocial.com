/**
 * /.well-known/api-catalog — RFC 9727
 * API Catalog for automated API discovery.
 */
export function GET() {
  const catalog = {
    linkset: [
      {
        anchor: "https://app.glowsocial.com/api",
        "service-desc": [
          {
            href: "https://glowsocial.com/.well-known/openapi.json",
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: "https://glowsocial.com/faq",
            type: "text/html",
          },
        ],
        status: [
          {
            href: "https://app.glowsocial.com/api/health",
            type: "application/json",
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/linkset+json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
