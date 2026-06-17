import Link from "next/link";
import "../tools.css";
import CostComparisonCalculator from "../CostComparisonCalculator";

export const metadata = {
  title: "Social Media Management Cost Calculator | Glow Social",
  description:
    "Calculate the real monthly cost of DIY social media, freelancers, agencies, and done-for-you social media automation.",
  alternates: {
    canonical: "/tools/social-media-management-cost-calculator",
  },
};

function ToolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Social Media Management Cost Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://glowsocial.com/tools/social-media-management-cost-calculator",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: "Glow Social",
      url: "https://glowsocial.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function SocialMediaManagementCostCalculatorPage() {
  return (
    <>
      <ToolJsonLd />
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>Social Media Management Cost Calculator</h1>
          <p>
            Compare the real cost of doing social media yourself, hiring a
            freelancer, hiring an agency, or using done-for-you automation.
          </p>
        </div>
      </section>
      <main className="tools-shell">
        <section className="tool-copy">
          <h2>What this calculator is good for</h2>
          <p>
            Use this when you want to compare software price against owner
            time, freelancer retainers, agency pricing, and lower-cost
            done-for-you posting. It is especially useful when the sticker
            price looks cheap but the time cost is not.
          </p>
          <p>
            For benchmark ranges and buyer guidance, pair this tool with the
            <Link href="/research/social-media-management-pricing-benchmarks-local-businesses"> pricing benchmarks</Link>
            and the
            <Link href="/resources/questions/social-media-management-pricing-2026"> 2026 pricing answer page</Link>.
          </p>
        </section>
        <CostComparisonCalculator />
      </main>
    </>
  );
}
