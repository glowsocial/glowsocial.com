import "../tools.css";
import CostComparisonCalculator from "../CostComparisonCalculator";

export const metadata = {
  title: "DIY vs Agency Social Media Cost Calculator",
  description:
    "Compare DIY social media time cost against freelancer, agency, and Glow Social pricing for local businesses.",
  alternates: {
    canonical: "/tools/diy-vs-agency-cost-calculator",
  },
};

function ToolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DIY vs Agency Social Media Cost Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://glowsocial.com/tools/diy-vs-agency-cost-calculator",
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

export default function DiyVsAgencyCostCalculatorPage() {
  return (
    <>
      <ToolJsonLd />
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>DIY vs Agency Social Media Cost Calculator</h1>
          <p>
            Put a dollar value on the hours you spend planning, writing,
            designing, scheduling, and second-guessing posts every month.
          </p>
        </div>
      </section>
      <main className="tools-shell">
        <CostComparisonCalculator focus="diy" />
      </main>
    </>
  );
}
