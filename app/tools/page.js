import Link from "next/link";
import "./tools.css";

export const metadata = {
  title: "Social Media Calculators and Planning Tools",
  description:
    "Free calculators for local businesses comparing social media management costs, posting frequency, and ROI.",
};

const tools = [
  {
    href: "/tools/social-media-management-cost-calculator",
    title: "Social Media Management Cost Calculator",
    description:
      "Compare DIY time, freelancers, agencies, and done-for-you automation.",
  },
  {
    href: "/tools/diy-vs-agency-cost-calculator",
    title: "DIY vs Agency Cost Calculator",
    description:
      "See the real monthly cost of doing social media yourself versus outsourcing it.",
  },
  {
    href: "/tools/posting-frequency-calculator",
    title: "Posting Frequency Calculator",
    description:
      "Find a realistic posting cadence based on your industry, platforms, and available time.",
  },
  {
    href: "/tools/social-media-roi-estimator",
    title: "Social Media ROI Estimator",
    description:
      "Estimate how many customers consistent posting needs to influence to pay for itself.",
  },
];

function ToolsJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Social Media Calculators and Planning Tools",
    description:
      "Free calculators for local businesses comparing social media management costs, posting frequency, and ROI.",
    url: "https://glowsocial.com/tools",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.title,
        url: `https://glowsocial.com${tool.href}`,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ToolsPage() {
  return (
    <>
      <ToolsJsonLd />
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>Social Media Calculators for Local Businesses</h1>
          <p>
            Practical tools for deciding what to post, how often to post, and
            whether DIY, freelancers, agencies, or automation make financial
            sense.
          </p>
        </div>
      </section>

      <main className="tools-shell">
        <div className="tools-grid">
          {tools.map((tool) => (
            <Link href={tool.href} className="tool-tile" key={tool.href}>
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <span className="read-more">Open tool</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
