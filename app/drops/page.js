import { getPricing } from "@/app/pricing-config";
import { getAllDrops, getDropsByCluster } from "@/lib/drops";
import DropsSignupCard from "./DropsSignupCard";
import "./drops.css";

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

function CollectionJsonLd({ drops }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Boomp Drops",
    url: "https://glowsocial.com/drops",
    description:
      "Boomp Drops is a practical library of website-first marketing ideas for small businesses.",
    hasPart: drops.slice(0, 100).map((drop) => ({
      "@type": "Article",
      headline: drop.title,
      url: `https://glowsocial.com/drops/${drop.slug}`,
      description: drop.description,
    })),
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
  const drops = getAllDrops();
  const dropsByCluster = getDropsByCluster();
  const clusters = Object.keys(dropsByCluster);

  return (
    <>
      <CollectionJsonLd drops={drops} />

      <section className="drops-hero">
        <div className="container drops-hero__grid">
          <div className="drops-hero__copy-block">
            <div className="drops-eyebrow">Boomp Drops</div>
            <h1>Stop wondering what to post.</h1>
            <p className="drops-hero__lead">
              Drops gives you simple, useful ideas for showing customers why your
              business is worth choosing.
            </p>
            <p className="drops-hero__copy">
              Start with questions people already ask, proof you already have, and
              moments from the work you already do. Turn those into pages, emails,
              and posts without starting from a blank screen.
            </p>
            <div className="drops-hero__actions">
              <a className="btn btn--primary" href="#all-drops">
                Browse all {drops.length} Drops
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
            The whole archive is live now. Pick a topic, read what is useful, and
            use it the next time you are stuck staring at a blank post.
          </p>
          <div className="drops-chip-row">
            {clusters.map((topic) => (
              <a key={topic} className="drops-chip" href={`#${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {topic}
              </a>
            ))}
          </div>
        </section>

        <section className="question-hub-section" id="all-drops">
          <div className="section-kicker">All Drops</div>
          <h2 className="drops-section-title">Published archive</h2>
          <p className="drops-section-copy">
            One hundred practical prompts, answers, and angles for turning real
            business knowledge into useful marketing.
          </p>

          <div className="drops-cluster-stack">
            {clusters.map((cluster) => (
              <section
                className="drops-cluster"
                id={cluster.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                key={cluster}
              >
                <div className="drops-cluster__header">
                  <h3>{cluster}</h3>
                  <span>{dropsByCluster[cluster].length} Drops</span>
                </div>
                <div className="blog-grid drops-card-grid">
                  {dropsByCluster[cluster].map((drop) => (
                    <article key={drop.slug} className="blog-card drops-card">
                      <div className="blog-card-body">
                        <div className="blog-card-meta">{drop.readingTime}</div>
                        <h4>{drop.title}</h4>
                        <p>{drop.description}</p>
                        <a className="read-more drops-card__status" href={`/drops/${drop.slug}`}>
                          Read Drop →
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
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
