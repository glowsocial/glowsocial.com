/**
 * /api — x402 payment gateway
 *
 * Returns HTTP 402 with x402 V2 payment headers matching the
 * official @x402/core PaymentRequiredV2Schema exactly.
 */
import { encodePaymentRequiredHeader } from "@x402/core/http";

export function GET() {
  // Must match PaymentRequiredV2Schema from @x402/core
  const paymentRequired = {
    x402Version: 2,
    resource: {
      url: "https://app.glowsocial.com/api",
      description:
        "Glow Social API — social media content generation and management",
      mimeType: "application/json",
    },
    accepts: [
      {
        scheme: "exact",
        network: "eip155:84532",
        amount: "100000",
        asset: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
        payTo: "0x0000000000000000000000000000000000000000",
        maxTimeoutSeconds: 300,
        extra: {
          name: "USDC",
          description:
            "Glow Social API access — starting at $99/month",
        },
      },
    ],
  };

  // Use the official @x402/core encoder for exact header format
  const encodedHeader = encodePaymentRequiredHeader(paymentRequired);

  return new Response(JSON.stringify(paymentRequired, null, 2), {
    status: 402,
    statusText: "Payment Required",
    headers: {
      "Content-Type": "application/json",
      "PAYMENT-REQUIRED": encodedHeader,
    },
  });
}
