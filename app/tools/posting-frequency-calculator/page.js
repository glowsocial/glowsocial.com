import Link from "next/link";
import "../tools.css";
import PostingFrequencyCalculator from "../PostingFrequencyCalculator";

export const metadata = {
  title: "Posting Frequency Calculator for Local Businesses | Glow Social",
  description:
    "Calculate a realistic social media posting frequency for your local business based on industry, platforms, and available time.",
  alternates: {
    canonical: "/tools/posting-frequency-calculator",
  },
};

function ToolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Posting Frequency Calculator for Local Businesses",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://glowsocial.com/tools/posting-frequency-calculator",
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

export default function PostingFrequencyCalculatorPage() {
  return (
    <>
      <ToolJsonLd />
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>Posting Frequency Calculator</h1>
          <p>
            Find the minimum useful cadence for staying visible without turning
            social media into a second job.
          </p>
        </div>
      </section>
      <main className="tools-shell">
        <section className="tool-copy">
          <h2>What this tool helps you decide</h2>
          <p>
            Use this calculator when the real question is not &ldquo;what is the
            ideal posting schedule in theory?&rdquo; but &ldquo;what can we actually keep up
            for six months without dropping off?&rdquo;
          </p>
          <p>
            For benchmark ranges and local-search context, pair this tool with
            the <Link href="/research/local-business-posting-frequency-benchmarks"> posting frequency benchmarks</Link>
            and the <Link href="/research/google-business-profile-posting-benchmarks"> Google Business Profile posting benchmarks</Link>.
          </p>
        </section>
        <PostingFrequencyCalculator />
      </main>
    </>
  );
}
