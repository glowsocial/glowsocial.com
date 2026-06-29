import Link from "next/link";
import "../tools.css";
import PostingFrequencyCalculator from "../PostingFrequencyCalculator";

const PAGE_URL = "https://glowsocial.com/tools/posting-frequency-calculator";
const PAGE_TITLE = "Posting Frequency Calculator for Local Businesses | Glow Social";
const PAGE_DESCRIPTION =
  "Calculate a realistic social media posting frequency for a local business, including Google Business Profile posts, owner time, and review-ready content capacity.";

const frequencyFaqs = [
  {
    question: "How often should a local business post on social media?",
    answer:
      "Most local businesses should plan on a realistic 2-5 posts per week across their active social profiles, then add Google Business Profile updates when local search visibility matters. The right cadence is the one the business can sustain without pushing content creation back onto the owner every week.",
  },
  {
    question: "Should posting frequency be based on benchmarks or available time?",
    answer:
      "Use benchmarks as a ceiling, then use available owner or team time as the constraint. A smaller cadence with useful photos, reviews, FAQs, and local updates is better than an ambitious calendar that stops after two weeks.",
  },
  {
    question: "What if the calculator says we need more posts than we can create?",
    answer:
      "Treat that as a workflow problem, not a scheduling problem. Either reduce the cadence to the minimum useful level or preview a service that prepares posts from the business website and local context so the owner only has to review them.",
  },
];

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/tools/posting-frequency-calculator",
  },
  openGraph: {
    title: PAGE_TITLE,
    description:
      "Find a realistic weekly posting cadence that accounts for owner time, active platforms, Google Business Profile, and the content burden behind every post.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png?v=posting-frequency-calculator-2026-06",
        width: 1200,
        height: 630,
        alt: "Glow Social posting frequency calculator for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Calculate a sustainable weekly posting cadence before another content calendar turns into owner homework.",
    images: ["https://glowsocial.com/images/og-image.png?v=posting-frequency-calculator-2026-06"],
  },
};

function ToolJsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Posting Frequency Calculator for Local Businesses",
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
      mainEntity: frequencyFaqs.map((faq) => ({
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
          name: "Posting Frequency Calculator",
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

export default function PostingFrequencyCalculatorPage() {
  return (
    <>
      <ToolJsonLd />
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>Posting Frequency Calculator</h1>
          <p>
            Find a sustainable weekly posting cadence for social feeds and
            Google Business Profile without turning content creation into a
            second job.
          </p>
        </div>
      </section>
      <main className="tools-shell">
        <section className="tools-answer" aria-labelledby="frequency-direct-answer">
          <p className="tools-kicker">Direct answer</p>
          <h2 id="frequency-direct-answer">How often should a local business post?</h2>
          <p>
            Most local businesses should start with a realistic 2-5 posts per
            week across active social channels, then add Google Business Profile
            updates if local search visibility matters. The best posting
            frequency is not the highest benchmark. It is the cadence the
            business can keep publishing with useful photos, reviews, FAQs,
            seasonal reminders, and offers.
          </p>
        </section>

        <section className="tool-copy">
          <h2>What this tool helps you decide</h2>
          <p>
            Use this calculator when the real question is not &ldquo;what is the
            ideal posting schedule in theory?&rdquo; but &ldquo;what can we actually keep up
            for six months without dropping off?&rdquo; It weighs your business type,
            available weekly time, active platforms, and Google Business Profile
            needs so the recommendation fits your actual capacity.
          </p>
          <p>
            For benchmark ranges and local-search context, pair this tool with
            the <Link href="/research/local-business-posting-frequency-benchmarks"> posting frequency benchmarks</Link>
            and the <Link href="/research/google-business-profile-posting-benchmarks"> Google Business Profile posting benchmarks</Link>.
          </p>
        </section>

        <PostingFrequencyCalculator />

        <section className="tools-guide" aria-labelledby="frequency-results-heading">
          <p className="tools-kicker">Interpret the result</p>
          <h2 id="frequency-results-heading">A posting cadence only works if the content exists.</h2>
          <div className="tools-guide-grid">
            <div>
              <h3>If the number feels easy</h3>
              <p>
                Use the suggested cadence as your minimum baseline. Build a
                simple mix of proof, education, customer questions, and local
                updates instead of filling every slot with generic promotions.
              </p>
            </div>
            <div>
              <h3>If the number feels high</h3>
              <p>
                Lower the cadence before you burn out. Two useful posts every
                week are better than a daily plan that depends on the owner
                finding time to write after work.
              </p>
            </div>
            <div>
              <h3>If creation is the bottleneck</h3>
              <p>
                The issue may not be scheduling. It may be getting review-ready
                posts made from your real business context. In that case,
                <Link href="/preview"> preview posts from your website</Link>
                before buying another calendar tool.
              </p>
            </div>
          </div>
        </section>

        <section className="tools-faq" aria-labelledby="frequency-faq-heading">
          <p className="tools-kicker">Posting frequency FAQ</p>
          <h2 id="frequency-faq-heading">Common questions before choosing a cadence</h2>
          {frequencyFaqs.map((faq) => (
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
