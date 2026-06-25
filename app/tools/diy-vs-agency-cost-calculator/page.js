import Link from "next/link";
import "../tools.css";
import CostComparisonCalculator from "../CostComparisonCalculator";

const PAGE_URL = "https://glowsocial.com/tools/diy-vs-agency-cost-calculator";
const PAGE_TITLE = "DIY vs Agency Social Media Cost Calculator | Glow Social";
const PAGE_DESCRIPTION =
  "Compare DIY social media time cost against freelancer, agency, and done-for-you posting options before you hire help or buy another tool.";

const faqs = [
  {
    question: "Is DIY social media cheaper than hiring an agency?",
    answer:
      "DIY social media is only cheaper when the owner has a repeatable workflow and enough time to create posts consistently. Once owner hours are valued, a freelancer, agency, or lighter done-for-you service can be the better financial choice.",
  },
  {
    question: "When should a small business hire a social media agency?",
    answer:
      "Hire an agency when you need strategy, ads, campaign planning, community management, custom creative, reporting, or frequent marketing judgment. If you mainly need regular posts prepared and published, a lighter approval-first posting service may fit better.",
  },
  {
    question: "What costs should I include in a DIY vs agency comparison?",
    answer:
      "Include software, owner hours, content planning, writing, design, scheduling, approval time, freelancer retainers, agency retainers, meetings, reporting, and whether the option actually removes the weekly content burden.",
  },
];

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/tools/diy-vs-agency-cost-calculator",
  },
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Put a dollar value on owner time, agency retainers, freelancer support, and done-for-you posting before choosing a social media workflow.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png?v=diy-agency-calculator-2026-06",
        width: 1200,
        height: 630,
        alt: "Glow Social DIY vs agency social media cost calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Compare DIY social media time cost with agency, freelancer, and done-for-you posting options.",
    images: ["https://glowsocial.com/images/og-image.png?v=diy-agency-calculator-2026-06"],
  },
};

function ToolJsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "DIY vs Agency Social Media Cost Calculator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://glowsocial.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://glowsocial.com/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "DIY vs Agency Social Media Cost Calculator",
          item: PAGE_URL,
        },
      ],
    },
  ];

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
        <section className="tools-answer" aria-labelledby="diy-agency-answer">
          <p className="tools-kicker">Direct answer</p>
          <h2 id="diy-agency-answer">Should you DIY social media or hire an agency?</h2>
          <p>
            DIY social media is cheapest only when the owner can create and
            publish posts consistently without crowding out higher-value work.
            Agencies make sense when you need strategy, campaigns, ads,
            reporting, or hands-on judgment. If the main problem is an empty
            content calendar, compare the owner&apos;s time cost against lighter
            options that prepare posts for review before you commit to a full
            retainer.
          </p>
        </section>

        <section className="tool-copy" aria-labelledby="when-to-use-heading">
          <h2 id="when-to-use-heading">When to use this tool</h2>
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

        <section className="tools-guide" aria-labelledby="diy-agency-interpretation">
          <p className="tools-kicker">Interpretation guide</p>
          <h2 id="diy-agency-interpretation">Use the result to choose the right level of help.</h2>
          <div className="tools-guide-grid">
            <div>
              <h3>Stay DIY if the hours are real</h3>
              <p>
                If the calculator shows a small time cost and you have a weekly
                content habit, DIY may still be the efficient choice.
              </p>
            </div>
            <div>
              <h3>Hire an agency for bigger scope</h3>
              <p>
                Choose an agency when you need strategy, ads, campaigns,
                reporting, community management, or custom creative direction.
              </p>
            </div>
            <div>
              <h3>Preview posts before buying another tool</h3>
              <p>
                If the time cost is coming from writing and designing posts,
                start with a
                <Link href="/preview"> preview from your website</Link> before
                you buy another scheduler or sign a large retainer.
              </p>
            </div>
          </div>
        </section>

        <section className="tools-faq" aria-labelledby="diy-agency-faq">
          <p className="tools-kicker">DIY vs agency FAQ</p>
          <h2 id="diy-agency-faq">Common questions before choosing</h2>
          {faqs.map((faq) => (
            <div className="tools-faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
