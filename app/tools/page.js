import Link from "next/link";
import "./tools.css";

const PAGE_URL = "https://glowsocial.com/tools";

export const metadata = {
  title: "Free Social Media Calculators for Local Businesses",
  description:
    "Use free Glow Social calculators to estimate social media management costs, posting frequency, DIY time, agency spend, and ROI before choosing a workflow.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Free Social Media Calculators for Local Businesses",
    description:
      "Estimate social media costs, cadence, and ROI so you can choose between DIY, agencies, freelancers, or a preview-first posting workflow.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glow Social social media calculators for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Social Media Calculators for Local Businesses",
    description:
      "Estimate social media costs, cadence, and ROI before choosing DIY, agency, freelancer, or done-for-you posting support.",
    images: ["https://glowsocial.com/images/og-image.png"],
  },
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

const toolFaqs = [
  {
    question: "Which social media calculator should a local business use first?",
    answer:
      "Start with the cost calculator if you are deciding between DIY, a freelancer, an agency, or done-for-you posting. Use the posting frequency calculator next to choose a cadence you can actually maintain.",
  },
  {
    question: "Can these tools tell me whether social media is worth paying for?",
    answer:
      "They can estimate the time, cost, cadence, and customer impact needed for social media to make sense. The numbers are directional, but they make the tradeoff clearer before you buy another tool or hire help.",
  },
  {
    question: "What if I do not want to create the posts myself?",
    answer:
      "Use the calculators to size the work, then preview posts from your website. Glow Social is built for owners who need posts prepared from real business context and ready to approve.",
  },
];

function ToolsJsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Free Social Media Calculators for Local Businesses",
      description:
        "Free calculators for local businesses comparing social media management costs, posting frequency, DIY time, agency spend, and ROI.",
      url: PAGE_URL,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: tools.map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tool.title,
          url: `https://glowsocial.com${tool.href}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: toolFaqs.map((faq) => ({
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
        <section className="tools-answer" aria-labelledby="tools-direct-answer">
          <p className="tools-kicker">Direct Answer</p>
          <h2 id="tools-direct-answer">What are the best social media calculators for a local business?</h2>
          <p>
            The most useful social media calculators answer four decisions: how
            much posting really costs, whether DIY or an agency makes financial
            sense, how often you can post consistently, and how many customers
            social media needs to influence to pay for itself. Use the tools
            below to size the work before choosing another scheduler, freelancer,
            agency, or done-for-you posting workflow.
          </p>
        </section>

        <div className="tools-grid">
          {tools.map((tool) => (
            <Link href={tool.href} className="tool-tile" key={tool.href}>
              <h2>{tool.title}</h2>
              <p>{tool.description}</p>
              <span className="read-more">Open tool</span>
            </Link>
          ))}
        </div>

        <section className="tools-guide" aria-labelledby="tools-choose-heading">
          <p className="tools-kicker">Choose the right calculator</p>
          <h2 id="tools-choose-heading">Use the calculator that matches the decision you are making.</h2>
          <div className="tools-guide-grid">
            <div>
              <h3>Budgeting the work</h3>
              <p>
                Start with the cost calculators when you need to compare your
                own time, a freelancer, an agency retainer, and a service that
                prepares posts for review.
              </p>
            </div>
            <div>
              <h3>Setting a realistic cadence</h3>
              <p>
                Use the posting frequency calculator before committing to an
                ambitious calendar. A smaller cadence you can sustain is usually
                better than a plan that disappears after two weeks.
              </p>
            </div>
            <div>
              <h3>Checking business impact</h3>
              <p>
                Use the ROI estimator to see how many calls, bookings, or repeat
                customers consistent posting needs to influence before it is
                worth paying for.
              </p>
            </div>
          </div>
        </section>

        <section className="tools-faq" aria-labelledby="tools-faq-heading">
          <p className="tools-kicker">Tool FAQ</p>
          <h2 id="tools-faq-heading">Common questions before you calculate</h2>
          {toolFaqs.map((faq) => (
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
