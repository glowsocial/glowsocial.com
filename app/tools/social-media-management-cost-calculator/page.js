import "../tools.css";
import CostComparisonCalculator from "../CostComparisonCalculator";

export const metadata = {
  title: "Social Media Management Cost Calculator",
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
        <CostComparisonCalculator />
      </main>
    </>
  );
}
