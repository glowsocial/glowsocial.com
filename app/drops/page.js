import { getPricing } from "@/app/pricing-config";
import DropsSignupCard from "./DropsSignupCard";
import "./drops.css";

const topicGroups = [
  "Owner Burden",
  "Trust Signals",
  "Content Sources",
  "Buyer Guides",
  "Local Visibility",
  "Website Engine",
  "Objections",
  "Proof & Reviews",
  "Seasonal Operations",
  "AI Search Readiness",
];

const firstWave = [
  {
    cluster: "Owner Burden",
    title: "Why Social Media Tools Still Leave Business Owners Doing the Work",
    description:
      "Most social media tools make publishing easier but still leave the owner stuck finding ideas, writing captions, choosing visuals, and keeping the whole thing moving.",
  },
  {
    cluster: "Trust Signals",
    title: "What Customers Check Before They Call a Local Business",
    description:
      "Before calling a local business, people usually run a fast trust check: does this look real, current, relevant, and easy to contact?",
  },
  {
    cluster: "Local Visibility",
    title: "Why Google Business Profile Often Matters More Than Instagram",
    description:
      "For many local businesses, Google Business Profile sits much closer to the buying moment than Instagram, so it deserves more attention than it usually gets.",
  },
  {
    cluster: "Content Sources",
    title: "How to Turn One Useful Idea Into a Post, Email, and Week of Social",
    description:
      "One strong idea should not die after one email. A website-first workflow lets it become a page, an email, and several social pieces without starting over.",
  },
  {
    cluster: "Buyer Guides",
    title: "When a Scheduler Is Enough and When It Is Not",
    description:
      "Schedulers are useful when the content already exists. They disappoint when the real bottleneck is still deciding what to say.",
  },
  {
    cluster: "Website Engine",
    title: "Why Website-First Content Is Better Than Email-First Content",
    description:
      "When the page comes first, the idea has a durable home. Email gets easier, reuse gets cleaner, and the content can keep working after the send is over.",
  },
  {
    cluster: "Objections",
    title: "What If I Do Not Have Enough Photos for Social Media?",
    description:
      "A business can keep posting without a constant stream of new photos by leaning on reviews, FAQs, explainers, reminders, and smarter reuse of the images it already has.",
  },
  {
    cluster: "AI Search Readiness",
    title: "How to Help Your Local Business Show Up in AI Answers",
    description:
      "Local businesses show up in AI answers more often when their website and profiles make it easy to understand what they do, where they work, and why people trust them.",
  },
];

export const metadata = {
  title: "Boomp Drops | Website-First Marketing Ideas for Small Businesses",
  description:
    "Boomp Drops is a practical library of website-first marketing ideas for small businesses that want better visibility, stronger trust signals, and less content burden.",
  alternates: {
    canonical: "/drops",
  },
  openGraph: {
    title: "Boomp Drops | Website-First Marketing Ideas",
    description:
      "A practical content library for owners who want clearer marketing, better visibility, stronger trust signals, and less content burden.",
    url: "https://glowsocial.com/drops",
    siteName: "Glow Social",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boomp Drops | Website-First Marketing Ideas",
    description:
      "Read practical Drops on content, visibility, trust, and easier marketing for small businesses.",
  },
};

function CollectionJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Boomp Drops",
    url: "https://glowsocial.com/drops",
    description:
      "Boomp Drops is a practical library of website-first marketing ideas for small businesses.",
    isPartOf: {
      "@type": "WebSite",
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

export default function DropsPage() {
  const pricing = getPricing();

  return (
    <>
      <CollectionJsonLd />

      <section className="drops-hero">
        <div className="container drops-hero__grid">
          <div className="drops-hero__copy-block">
            <div className="drops-eyebrow">Boomp Drops</div>
            <h1>Useful marketing ideas for small businesses.</h1>
            <p className="drops-hero__lead">
              Practical notes on content, local visibility, trust, and the work of
              looking active online without becoming a full-time content creator.
            </p>
            <p className="drops-hero__copy">
              We are starting the archive here while Glow Social becomes Boomp. The
              pieces below are the first topics being turned into permanent pages.
            </p>
            <div className="drops-hero__actions">
              <a className="btn btn--primary" href="#first-wave">
                Browse the first wave
              </a>
              <a className="btn btn--outline" href="https://app.glowsocial.com/preview">
                See posts from your website first — {pricing.startingAtShort}
              </a>
            </div>
          </div>

          <DropsSignupCard />
        </div>
      </section>

      <div className="container drops-page">
        <section className="question-hub-section drops-topic-section">
          <div className="section-kicker">Browse by topic</div>
          <h2 className="drops-section-title">A library, not a blog roll.</h2>
          <p className="drops-section-copy">
            The goal is to build a useful set of pages that answer real questions,
            support search, and make email/social reuse easier later.
          </p>
          <div className="drops-chip-row">
            {topicGroups.map((topic) => (
              <span key={topic} className="drops-chip">
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="question-hub-section" id="first-wave">
          <div className="section-kicker">First wave</div>
          <h2 className="drops-section-title">First Drops in the pipeline</h2>
          <p className="drops-section-copy">
            These are the first topics we are turning into permanent pages. They
            show where the library is headed before the individual articles go live.
          </p>
          <div className="blog-grid drops-card-grid">
            {firstWave.map((drop) => (
              <article key={drop.title} className="blog-card drops-card">
                <div className="blog-card-body">
                  <div className="blog-card-meta">{drop.cluster}</div>
                  <h3>{drop.title}</h3>
                  <p>{drop.description}</p>
                  <span className="read-more drops-card__status">Coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="question-hub-section drops-cta-wrap">
          <div className="about-cta drops-cta-box">
            <p className="about-cta-price">
              Want to see the kind of posts your own website could turn into?
            </p>
            <a href="https://app.glowsocial.com/preview" className="btn btn--primary btn--lg">
              See posts from your website first — {pricing.startingAtShort}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
