/**
 * /api — x402 payment gateway
 *
 * Returns HTTP 402 with payment requirements so agents can discover
 * x402 payment flow. The facilitator handles actual payment processing.
 */
export function GET() {
  const paymentRequirements = {
    x402Version: 1,
    accepts: [
      {
        scheme: "exact",
        network: "base-sepolia",
        maxAmountRequired: "100000",
        resource: "https://app.glowsocial.com/api",
        description: "Access to the Glow Social API for content generation and management.",
        mimeType: "application/json",
        payTo: "0x0000000000000000000000000000000000000000",
        maxTimeoutSeconds: 300,
        asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
      },
    ],
  };

  return new Response(JSON.stringify(paymentRequirements, null, 2), {
    status: 402,
    headers: {
      "Content-Type": "application/json",
      "X-Payment-Required": "x402",
      "X-Payment-Facilitator": "https://facilitator.x402.org",
    },
  });
}
