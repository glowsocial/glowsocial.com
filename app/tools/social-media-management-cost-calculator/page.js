import Link from "next/link";
import "../tools.css";
import CostComparisonCalculator from "../CostComparisonCalculator";

const PAGE_URL = "https://glowsocial.com/tools/social-media-management-cost-calculator";
const PAGE_TITLE = "Social Media Management Cost Calculator for Small Business";
const PAGE_DESCRIPTION =
  "Estimate the real monthly cost of DIY social media, tools, freelancers, agencies, and done-for-you posting once owner time is included.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/tools/social-media-management-cost-calculator",
  },
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Compare owner time, software costs, freelancer retainers, agency pricing, and done-for-you posting so the cheapest option is not hiding unpaid work.",
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
      "Estimate what social media management really costs once owner time, tools, freelancers, agencies, and done-for-you posting are compared side by side.",
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
          name: "What should a local business compare before choosing a social media management option?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Compare the monthly cash cost, the owner's time cost, the amount of content creation included, approval control, and whether the option actually keeps posts moving without creating another weekly task.",
          },
        },
        {
          "@type": "Question",
          name: "What is a reasonable monthly social media management budget for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A reasonable monthly budget depends on how much work is included. A scheduler may cost under $50 but requires owner-created posts. A lightweight done-for-you posting service can be around $99 per month, while freelancers and agencies often cost more when strategy, meetings, reporting, and custom creative are included.",
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
          <h1>Social Media Management Cost Calculator for Small Business</h1>
          <p>
            Compare the real cost of doing social media yourself, using tools,
            hiring a freelancer, hiring an agency, or choosing done-for-you
            posting.
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
          <p>
            For most local businesses, the hidden variable is not the scheduling
            fee. It is whether someone still has to decide what to post every
            week. Use the result to compare cash cost, time cost, and content
            burden together.
          </p>
        </section>

        <section className="decision-diagram" aria-labelledby="cost-calculator-diagram-title">
          <p className="decision-diagram__label">Decision diagram</p>
          <h2 className="decision-diagram__title" id="cost-calculator-diagram-title">
            The cheapest monthly price is not always the cheapest option.
          </h2>
          <div className="decision-diagram__scroll">
            <svg viewBox="0 0 760 250" role="img" aria-labelledby="cost-calculator-svg-title cost-calculator-svg-desc">
              <title id="cost-calculator-svg-title">Social media cost comparison including owner time</title>
              <desc id="cost-calculator-svg-desc">A cheap tool has a small software bill but leaves the owner planning, writing, designing, and scheduling. Freelancers and agencies cost more cash. Review-ready posting reduces content burden by preparing posts for approval.</desc>
              <rect className="decision-diagram__card" x="24" y="38" width="210" height="154" rx="18" />
              <text className="decision-diagram__text" x="52" y="76">DIY tool</text>
              <text className="decision-diagram__small" x="52" y="106">Low cash cost</text>
              <text className="decision-diagram__small" x="52" y="134">High owner time</text>
              <text className="decision-diagram__small" x="52" y="162">Posts still start blank</text>
              <path className="decision-diagram__line" d="M236 116 H286" />
              <rect className="decision-diagram__card" x="296" y="38" width="190" height="154" rx="18" />
              <text className="decision-diagram__text" x="324" y="76">Freelancer</text>
              <text className="decision-diagram__small" x="324" y="106">More cash</text>
              <text className="decision-diagram__small" x="324" y="134">Scope varies</text>
              <text className="decision-diagram__small" x="324" y="162">Meetings add time</text>
              <path className="decision-diagram__line" d="M488 116 H538" />
              <rect className="decision-diagram__card decision-diagram__card--accent" x="548" y="38" width="188" height="154" rx="18" />
              <text className="decision-diagram__text" x="576" y="76">Review-ready</text>
              <text className="decision-diagram__small" x="576" y="106">Posts prepared</text>
              <text className="decision-diagram__small" x="576" y="134">Owner approves</text>
              <text className="decision-diagram__small" x="576" y="162">Approved posts publish</text>
            </svg>
          </div>
          <p className="decision-diagram__caption">
            The right choice depends on what you are actually buying: software,
            creative help, or a workflow that gets posts ready for approval.
          </p>
        </section>

        <CostComparisonCalculator />

        <section className="tools-guide">
          <h2>How to read the results</h2>
          <div className="tools-guide-grid">
            <div>
              <h3>If DIY looks cheapest</h3>
              <p>
                Count the owner&apos;s hours, not just the software bill. DIY only
                wins when the content workload is realistic and repeatable.
              </p>
            </div>
            <div>
              <h3>If a freelancer or agency looks expensive</h3>
              <p>
                Compare the retainer against what is actually included:
                strategy, writing, design, approvals, posting, reporting, and
                meetings.
              </p>
            </div>
            <div>
              <h3>If done-for-you posting is close</h3>
              <p>
                A lighter service can be a better fit when the business mainly
                needs posts prepared from real context and kept moving after
                approval.
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
          <div className="tools-faq-item">
            <h3>What is a reasonable monthly social media management budget?</h3>
            <p>
              It depends on what is included. A basic scheduler may be under
              $50/month but leaves content creation on you. A lightweight
              done-for-you posting workflow can be closer to $99/month, while
              freelancer and agency retainers usually cost more because they may
              include custom creative, meetings, strategy, and reporting.
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
            For benchmark ranges and buyer guidance, pair this tool with the{" "}
            <Link href="/blog/social-media-management-cost-pricing-guide">social media management pricing guide</Link>,{" "}
            the{" "}
            <Link href="/research/social-media-management-pricing-benchmarks-local-businesses">pricing benchmarks</Link>,{" "}
            and the{" "}
            <Link href="/resources/questions/social-media-management-pricing-2026">2026 pricing answer page</Link>.
          </p>
          <p>
            If the result shows the owner is still carrying the content burden,
            compare the calculator against{" "}
            <Link href="/affordable-social-media-management">affordable social media management</Link>{" "}
            or see how{" "}
            <Link href="/social-media-scheduler-that-creates-content">a scheduler that creates content</Link>{" "}
            changes the workflow.
          </p>
          <p>
            If you are mostly comparing low-cost software, the{" "}
            <Link href="/blog/social-media-tools-under-50">under-$50 social media tools guide</Link>{" "}
            explains where tools help and where owner time still carries the
            workload.
          </p>
        </section>
      </main>
    </>
  );
}
