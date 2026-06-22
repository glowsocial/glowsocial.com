import Link from "next/link";
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
    status: "Drafted · publishing soon",
  },
  {
    cluster: "Trust Signals",
    title: "What Customers Check Before They Call a Local Business",
    description:
      "Before calling a local business, people usually run a fast trust check: does this look real, current, relevant, and easy to contact?",
    status: "Drafted · publishing soon",
  },
  {
    cluster: "Local Visibility",
    title: "Why Google Business Profile Often Matters More Than Instagram",
    description:
      "For many local businesses, Google Business Profile sits much closer to the buying moment than Instagram, so it deserves more attention than it usually gets.",
    status: "Drafted · publishing soon",
  },
  {
    cluster: "Content Sources",
    title: "How to Turn One Useful Idea Into a Post, Email, and Week of Social",
    description:
      "One strong idea should not die after one email. A website-first workflow lets it become a page, an email, and several social pieces without starting over.",
    status: "Drafted · publishing soon",
  },
  {
    cluster: "Buyer Guides",
    title: "When a Scheduler Is Enough and When It Is Not",
    description:
      "Schedulers are useful when the content already exists. They disappoint when the real bottleneck is still deciding what to say.",
    status: "Drafted · publishing soon",
  },
  {
    cluster: "Website Engine",
    title: "Why Website-First Content Is Better Than Email-First Content",
    description:
      "When the page comes first, the idea has a durable home. Email gets easier, reuse gets cleaner, and the content can keep working after the send is over.",
    status: "Drafted · publishing soon",
  },
  {
    cluster: "Objections",
    title: "What If I Do Not Have Enough Photos for Social Media?",
    description:
      "A business can keep posting without a constant stream of new photos by leaning on reviews, FAQs, explainers, reminders, and smarter reuse of the images it already has.",
    status: "Drafted · publishing soon",
  },
  {
    cluster: "AI Search Readiness",
    title: "How to Help Your Local Business Show Up in AI Answers",
    description:
      "Local businesses show up in AI answers more often when their website and profiles make it easy to understand what they do, where they work, and why people trust them.",
    status: "Drafted · publishing soon",
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
    name: "Drops",
    url: "https://glowsocial.com/drops",
    description:
      "Boomp Drops is a practical library of website-first marketing ideas that also become email drops.",
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

      <section className="blog-hero drops-hero">
        <div className="container drops-hero__grid">
          <div>
            <div className="drops-eyebrow">Boomp Drops</div>
            <h1>Drops</h1>
            <p className="drops-hero__lead">
              Useful weekly drops on content, visibility, trust, and the real work
              of keeping a business active online.
            </p>
            <p className="drops-hero__copy">
              This is where the library lives. Each Drop is meant to become a real
              page on the site, then a lighter email version after that. We are
              building the archive here first so it can grow into the long-term
              home for the series.
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
        <section className="question-hub-section drops-stats">
          <div className="drops-stat-card">
            <strong>100</strong>
            <span>drafted Drops in the queue</span>
          </div>
          <div className="drops-stat-card">
            <strong>10</strong>
            <span>core topic clusters</span>
          </div>
          <div className="drops-stat-card">
            <strong>1</strong>
            <span>canonical page-first publishing system</span>
          </div>
        </section>

        <section className="question-hub-section">
          <div className="section-kicker">Browse by topic</div>
          <h2 className="drops-section-title">Use this like a library, not a blog roll.</h2>
          <p className="drops-section-copy">
            The goal is not a pile of posts. The goal is a durable archive of
            useful pages that can also become email Drops.
          </p>
          <div className="drops-chip-row">
            {topicGroups.map((topic) => (
              <span key={topic} className="drops-chip">
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="question-hub-section">
          <div className="section-kicker">How the section works</div>
          <div className="drops-feature-grid">
            <article className="drops-feature-card">
              <div className="drops-feature-card__copy">
                <div className="drops-feature-card__label">Featured Drop format</div>
                <h2>Each Drop becomes a page first, then an email.</h2>
                <p>
                  That keeps the strongest version of the idea on the site, where
                  it can be indexed, linked, shared, and reused later. The email
                  becomes the shorter delivery layer instead of the only place the
                  idea exists.
                </p>
                <p>
                  We&apos;re launching the archive now on Glow Social so it can keep
                  growing here, then move cleanly when the new brand URL is ready.
                </p>
              </div>

              <div className="drops-phone-shell" aria-hidden="true">
                <div className="drops-phone-frame">
                  <div className="drops-phone-screen">
                    <div className="drops-phone-pill">Owner burden</div>
                    <div className="drops-phone-post">
                      <h3>The tool isn&apos;t the bottleneck</h3>
                      <p>
                        If you still have to invent every post, the hard part never
                        left. Scheduling was not the problem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <aside className="question-topic-card drops-side-note">
              <h2>What is live now</h2>
              <p>
                This page is the new home for the library itself. Individual Drop
                pages are the next publishing layer to roll out here.
              </p>
              <ul>
                <li>The archive route is now in place.</li>
                <li>The editorial structure is set.</li>
                <li>The first wave is drafted and queued below.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="question-hub-section" id="first-wave">
          <div className="section-kicker">First wave</div>
          <h2 className="drops-section-title">First drafted Drops in the queue</h2>
          <p className="drops-section-copy">
            These are real drafted entries from the library. They are listed here
            now so the section can grow in public as the individual pages go live.
          </p>
          <div className="blog-grid drops-card-grid">
            {firstWave.map((drop) => (
              <article key={drop.title} className="blog-card drops-card">
                <div className="blog-card-body">
                  <div className="blog-card-meta">{drop.cluster}</div>
                  <h3>{drop.title}</h3>
                  <p>{drop.description}</p>
                  <span className="read-more drops-card__status">{drop.status}</span>
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
              See posts from your website first — {pricing.summaryShort}
            </a>
            <p className="drops-cta-box__subcopy">
              Drops is the public library. Your preview shows what the system can do
              from your real business information.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
