import Link from "next/link";
import "../tools.css";
import RoiEstimator from "../RoiEstimator";

const PAGE_URL = "https://glowsocial.com/tools/social-media-roi-estimator";
const PAGE_TITLE = "Social Media ROI Calculator for Local Businesses | Glow Social";
const PAGE_DESCRIPTION =
  "Estimate how many customers social media needs to influence each month to justify DIY time, agency fees, or done-for-you posting support.";

const roiFaqs = [
  {
    question: "How do you calculate social media ROI for a local business?",
    answer:
      "Start with the monthly cost of social media, then estimate gross profit per customer and the percentage of influenced leads that become customers. The break-even point is how many customers the work needs to influence each month to pay for itself.",
  },
  {
    question: "What counts as the monthly cost of social media?",
    answer:
      "Include software, freelancers, agency retainers, or done-for-you posting fees, plus the owner's time spent planning, writing, approving, and publishing content. Leaving out owner time can make DIY look cheaper than it is.",
  },
  {
    question: "When is social media worth paying for?",
    answer:
      "It is easier to justify when the required customer count is realistic for your traffic, referrals, and repeat-business cycle. If the math only works with perfect attribution, start with a lighter preview-first workflow before committing to a larger retainer.",
  },
];

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/tools/social-media-roi-estimator",
  },
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Use a free social media ROI calculator to compare monthly cost, profit per customer, close rate, and the break-even customer count for local-business posting.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png?v=roi-estimator-2026-06",
        width: 1200,
        height: 630,
        alt: "Glow Social social media ROI calculator for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Estimate how many customers social media needs to influence before you buy another tool, hire an agency, or choose done-for-you posting.",
    images: ["https://glowsocial.com/images/og-image.png?v=roi-estimator-2026-06"],
  },
};

function ToolJsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Social Media ROI Calculator for Local Businesses",
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
      mainEntity: roiFaqs.map((faq) => ({
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
          name: "Social Media ROI Calculator",
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

export default function SocialMediaRoiEstimatorPage() {
  return (
    <>
      <ToolJsonLd />
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>Social Media ROI Calculator</h1>
          <p>
            Estimate how many customers consistent posting needs to influence
            before another tool, agency, or done-for-you workflow pays for
            itself.
          </p>
        </div>
      </section>
      <main className="tools-shell">
        <section className="tools-answer" aria-labelledby="roi-direct-answer">
          <p className="tools-kicker">Direct answer</p>
          <h2 id="roi-direct-answer">How many customers does social media need to influence?</h2>
          <p>
            Social media ROI comes down to a break-even customer count: monthly
            social media cost divided by the profit you keep from each customer.
            The right cost is not just the software bill. Include owner time,
            freelancer or agency fees, and any work still needed to create posts
            so you can tell whether the plan is realistic before buying another
            platform.
          </p>
        </section>

        <section className="tool-copy">
          <h2>What this tool answers</h2>
          <p>
            Use this estimator to figure out how many customers consistent
            social media posting needs to influence each month to pay for
            itself. It is useful after you have a likely monthly cost in mind
            and want to test whether that spend is reasonable for your average
            sale value, margin, and close rate.
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

        <section className="tools-guide" aria-labelledby="roi-interpret-heading">
          <p className="tools-kicker">Read the result</p>
          <h2 id="roi-interpret-heading">Use the break-even number to choose the next step.</h2>
          <div className="tools-guide-grid">
            <div>
              <h3>Low break-even count</h3>
              <p>
                If one or two realistic customers cover the monthly cost, the
                bigger question is whether posts will actually get created and
                approved consistently.
              </p>
            </div>
            <div>
              <h3>High break-even count</h3>
              <p>
                If the calculator needs a large number of influenced customers,
                avoid an oversized retainer until you have a clearer offer,
                cadence, and tracking plan.
              </p>
            </div>
            <div>
              <h3>Owner time is the swing factor</h3>
              <p>
                DIY can look profitable until the owner&apos;s planning, writing,
                and scheduling time is counted. That is the hidden cost this
                calculator should keep visible.
              </p>
            </div>
          </div>
        </section>

        <section className="tools-answer" aria-labelledby="roi-preview-heading">
          <p className="tools-kicker">Preview-first next step</p>
          <h2 id="roi-preview-heading">Check the posts before committing to the spend.</h2>
          <p>
            If the math works only when posting happens every week, make sure
            the content burden is solved before you choose a bigger tool or
            agency package. You can
            <Link href="/preview"> preview posts from your website</Link> and
            see whether a review-ready workflow is enough before taking on a
            larger monthly commitment.
          </p>
        </section>

        <section className="tools-faq" aria-labelledby="roi-faq-heading">
          <p className="tools-kicker">ROI FAQ</p>
          <h2 id="roi-faq-heading">Common questions before you estimate ROI</h2>
          {roiFaqs.map((faq) => (
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
