import Link from "next/link";
import "../tools.css";
import RoiEstimator from "../RoiEstimator";

export const metadata = {
  title: "Social Media ROI Estimator for Local Businesses | Glow Social",
  description:
    "Estimate how many customers consistent social media posting needs to influence to pay for itself.",
  alternates: {
    canonical: "/tools/social-media-roi-estimator",
  },
};

function ToolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Social Media ROI Estimator for Local Businesses",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://glowsocial.com/tools/social-media-roi-estimator",
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

export default function SocialMediaRoiEstimatorPage() {
  return (
    <>
      <ToolJsonLd />
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>Social Media ROI Estimator</h1>
          <p>
            Estimate whether consistent posting can pay for itself based on
            your sale value, margin, close rate, and monthly cost.
          </p>
        </div>
      </section>
      <main className="tools-shell">
        <section className="tool-copy">
          <h2>What this tool answers</h2>
          <p>
            Use this estimator to figure out how many customers consistent
            social media posting needs to influence each month to pay for
            itself. It is useful after you already have a likely monthly cost
            in mind and want to test whether that cost is reasonable.
          </p>
          <p>
            If you still need help choosing the right pricing lane first, start
            with the
            <Link href="/research/social-media-management-pricing-benchmarks-local-businesses"> pricing benchmarks</Link>
            or the
            <Link href="/tools/social-media-management-cost-calculator"> cost calculator</Link>.
          </p>
        </section>
        <RoiEstimator />
      </main>
    </>
  );
}
