/**
 * /api — x402 payment gateway
 *
 * Returns HTTP 402 with x402 V2 payment headers.
 * The PAYMENT-REQUIRED header contains Base64-encoded payment requirements
 * as per the x402 specification.
 */
export function GET() {
  const paymentRequirements = {
    x402Version: 2,
    scheme: "exact",
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
  };

  // Base64-encode the payment requirements for the PAYMENT-REQUIRED header
  const paymentRequiredHeader = Buffer.from(
    JSON.stringify(paymentRequirements)
  ).toString("base64");

  return new Response(JSON.stringify(paymentRequirements, null, 2), {
    status: 402,
    statusText: "Payment Required",
    headers: {
      "Content-Type": "application/json",
      "PAYMENT-REQUIRED": paymentRequiredHeader,
      "X-Payment-Required": "x402",
      "X-Payment-Facilitator": "https://facilitator.x402.org",
    },
  });
}
