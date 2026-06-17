import Link from "next/link";
import "../tools.css";
import CostComparisonCalculator from "../CostComparisonCalculator";

export const metadata = {
  title: "DIY vs Agency Social Media Cost Calculator | Glow Social",
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
        <section className="tool-copy">
          <h2>When to use this tool</h2>
          <p>
            This version is best when the real question is whether DIY is still
            cheaper once you value the owner&apos;s time. If the business is stuck
            in the blank-calendar loop, this tool helps show when DIY stops
            being the low-cost option.
          </p>
          <p>
            For full market ranges, see the
            <Link href="/research/social-media-management-pricing-benchmarks-local-businesses"> pricing benchmarks</Link>
            and
            <Link href="/resources/questions/social-media-management-pricing-2026"> 2026 pricing guide</Link>.
          </p>
        </section>
        <CostComparisonCalculator focus="diy" />
      </main>
    </>
  );
}
