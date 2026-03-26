import Link from "next/link";

export default function AuthorBio() {
  return (
    <div className="author-bio">
      <div className="author-bio-inner">
        <div className="author-avatar">
          <span className="author-avatar-initials">KC</span>
        </div>
        <div className="author-bio-text">
          <p className="author-name">
            Written by <Link href="/about">Kathleen Celmins</Link>
          </p>
          <p className="author-desc">
            Founder of Glow Social. Helping local businesses stay visible on
            social media without doing the work themselves.
          </p>
        </div>
      </div>
    </div>
  );
}

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kathleen Celmins",
    url: "https://glowsocial.com/about",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "Glow Social",
      url: "https://glowsocial.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/glowsocialhq/",
      "https://thewellpaidexpert.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
