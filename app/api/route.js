/**
 * /api — x402 payment gateway
 *
 * Returns HTTP 402 with x402 payment headers.
 * x402 V2: PAYMENT-REQUIRED header + JSON body
 */
export function GET() {
  const paymentRequired = {
    x402Version: 2,
    schemes: [
      {
        schemeId: "exact",
        network: "base-sepolia",
        maxAmountRequired: "100000",
        resource: "https://app.glowsocial.com/api",
        description:
          "Access to the Glow Social API for content generation and management.",
        mimeType: "application/json",
        payTo: "0x0000000000000000000000000000000000000000",
        maxTimeoutSeconds: 300,
        asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
        extra: {
          name: "Glow Social API Access",
          description:
            "Done-for-you social media management API — starting at $99/month",
        },
      },
    ],
  };

  // Base64-encode the requirements per x402 V2 spec
  const base64Payload = Buffer.from(
    JSON.stringify(paymentRequired)
  ).toString("base64");

  return new Response(JSON.stringify(paymentRequired, null, 2), {
    status: 402,
    statusText: "Payment Required",
    headers: {
      "Content-Type": "application/json",
      "PAYMENT-REQUIRED": base64Payload,
      "X-Payment": base64Payload,
      "X-PAYMENT": base64Payload,
      "X-Payment-Required": "x402",
      "X-Payment-Facilitator": "https://facilitator.x402.org",
    },
  });
}
