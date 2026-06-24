import Link from "next/link";
import "../tools.css";
import CostComparisonCalculator from "../CostComparisonCalculator";

const PAGE_URL = "https://glowsocial.com/tools/social-media-management-cost-calculator";
const PAGE_TITLE = "Social Media Management Cost Calculator | Glow Social";
const PAGE_DESCRIPTION =
  "Calculate the real monthly cost of DIY social media, freelancers, agencies, and done-for-you social media help for a local business.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/tools/social-media-management-cost-calculator",
  },
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Compare owner time, tool costs, freelancer retainers, agency pricing, and done-for-you posting so the cheapest option is not hiding unpaid work.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png?v=cost-calculator-2026-06",
        width: 1200,
        height: 630,
        alt: "Glow Social social media management cost calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Estimate what social media really costs once owner time, tools, freelancers, agencies, and done-for-you posting are compared side by side.",
    images: ["https://glowsocial.com/images/og-image.png?v=cost-calculator-2026-06"],
  },
};

function ToolJsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Social Media Management Cost Calculator",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "How do you calculate the real cost of social media management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with direct costs such as software, freelancers, agency retainers, or a done-for-you service. Then add the owner's monthly hours for planning, writing, designing, approving, and scheduling posts so DIY and low-cost tools are not understated.",
          },
        },
        {
          "@type": "Question",
          name: "Is DIY social media cheaper than hiring help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DIY can be cheaper when the owner has time and a repeatable workflow. It becomes expensive when the owner spends hours every month creating posts instead of serving customers, selling, or managing the business.",
          },
        },
        {
          "@type": "Question",
          name: "What should a local business compare before choosing a social media option?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compare the monthly cash cost, the owner's time cost, the amount of content creation included, approval control, and whether the option actually keeps posts moving without creating another weekly task.",
          },
        },
      ],
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
          name: "Social Media Management Cost Calculator",
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
        <section className="tools-answer">
          <p className="tools-kicker">Direct answer</p>
          <h2>What does social media management really cost?</h2>
          <p>
            The real cost is the monthly cash you pay plus the owner time still
            required to plan, write, design, approve, and schedule posts. A tool
            can look cheap while leaving the hardest work on the business owner.
            Use this calculator to compare DIY, freelancers, agencies, and
            done-for-you posting side by side.
          </p>
        </section>

        <CostComparisonCalculator />

        <section className="tools-guide">
          <h2>How to read the results</h2>
          <div className="tools-guide-grid">
            <div>
              <h3>DIY cost</h3>
              <p>
                Count the owner&apos;s hours, not just the software bill. DIY is
                only the cheapest option when the time burden is realistic.
              </p>
            </div>
            <div>
              <h3>Freelancer or agency cost</h3>
              <p>
                Compare retainers against what is actually included: strategy,
                content creation, approvals, posting, reporting, and meetings.
              </p>
            </div>
            <div>
              <h3>Done-for-you posting cost</h3>
              <p>
                A lighter service can be a better fit when the business mainly
                needs posts created from real business context and kept moving.
              </p>
            </div>
          </div>
        </section>

        <section className="tools-faq">
          <div className="tools-faq-item">
            <h3>How do you calculate the real cost of social media management?</h3>
            <p>
              Add direct monthly costs, then add the owner&apos;s time for planning,
              writing, designing, approving, and scheduling posts. That shows
              whether DIY or a low-cost tool is actually cheaper.
            </p>
          </div>
          <div className="tools-faq-item">
            <h3>Is DIY social media cheaper than hiring help?</h3>
            <p>
              Sometimes. DIY is cheaper when the owner has time and a repeatable
              process. It stops being cheap when content creation crowds out
              sales, service, hiring, or customer follow-up.
            </p>
          </div>
          <div className="tools-faq-item">
            <h3>What should I compare before choosing an option?</h3>
            <p>
              Compare cash cost, time cost, content creation support, approval
              control, publishing help, and whether the option prevents another
              blank calendar next month.
            </p>
          </div>
        </section>

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
          <p>
            If the result shows the owner is still carrying the content burden,
            compare the calculator against
            <Link href="/affordable-social-media-management"> affordable social media management</Link>
            or see how
            <Link href="/social-media-scheduler-that-creates-content"> a scheduler that creates content</Link>
            changes the workflow.
          </p>
        </section>
      </main>
    </>
  );
}
