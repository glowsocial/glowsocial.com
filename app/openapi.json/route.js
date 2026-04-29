/**
 * /openapi.json — OpenAPI 3.1 document with MPP payment discovery
 *
 * Machine Payment Protocol requires an OpenAPI doc at /openapi.json
 * with x-payment-info extensions on payable operations.
 */
export function GET() {
  const openapi = {
    openapi: "3.1.0",
    info: {
      title: "Glow Social API",
      version: "1.0.0",
      description:
        "Done-for-you social media management API for local businesses.",
      contact: {
        email: "hello@glowsocial.com",
      },
      "x-service-info": {
        categories: ["social-media", "content-generation", "marketing"],
      },
    },
    servers: [
      {
        url: "https://app.glowsocial.com/api",
        description: "Production API",
      },
    ],
    paths: {
      "/preview": {
        get: {
          summary: "Generate preview social media posts for a business",
          description:
            "Analyzes a business website and generates sample social media posts.",
          operationId: "previewPosts",
          parameters: [
            {
              name: "url",
              in: "query",
              required: true,
              schema: { type: "string", format: "uri" },
              description: "Business website URL to analyze",
            },
          ],
          "x-payment-info": {
            intent: "charge",
            method: "stripe",
            amount: "0.00",
            currency: "USD",
            description: "Free preview — no payment required",
          },
          responses: {
            200: {
              description: "Preview posts generated successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      posts: {
                        type: "array",
                        items: { type: "object" },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/content/generate": {
        post: {
          summary: "Generate social media content",
          description:
            "Generates professional social media posts for a subscribed business.",
          operationId: "generateContent",
          "x-payment-info": {
            intent: "session",
            method: "stripe",
            amount: "99.00",
            currency: "USD",
            description:
              "Glow Social subscription — 12+ posts/month starting at $99",
          },
          responses: {
            200: { description: "Content generated" },
            402: { description: "Payment required" },
          },
        },
      },
    },
  };

  return new Response(JSON.stringify(openapi, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
