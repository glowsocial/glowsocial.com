import "../tools.css";
import RoiEstimator from "../RoiEstimator";

export const metadata = {
  title: "Social Media ROI Estimator for Local Businesses",
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
        <RoiEstimator />
      </main>
    </>
  );
}
