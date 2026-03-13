export default function HomeJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does Glow Social cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glow Social Core costs $49 per month with no contracts or commitments. Compare that to $3,000+/month for a marketing agency or $300+/month for a freelancer.",
        },
      },
      {
        "@type": "Question",
        name: "Can I cancel anytime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period.",
        },
      },
      {
        "@type": "Question",
        name: "What is Glow Social?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glow Social is a done-for-you social media service for small businesses. For $49/month, you get 12+ professionally written and designed posts delivered monthly across all major platforms.",
        },
      },
      {
        "@type": "Question",
        name: "How is Glow Social different from other social media tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike Buffer, Hootsuite, or other tools that require you to write and create content yourself, Glow Social creates the posts, designs the graphics, publishes to 13 platforms including Google Business Profile, and monitors your Google reviews. Buffer and Later don't even support GBP. Sprout Social charges $399+/month for review management. We include it all starting at $49.",
        },
      },
      {
        "@type": "Question",
        name: "Does Glow Social post to Google Business Profile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most social media tools skip GBP entirely — Buffer and Later don't support it at all. Glow Social publishes directly to your Google Business Profile alongside your other platforms, keeping your listing active and helping your local search ranking.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Google Review integration work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once you connect your Google Business Profile, Glow Social monitors your reviews automatically. You'll see new reviews as they come in and can respond right from your dashboard — no need to log into Google separately. It's included in every plan at no extra charge.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best done-for-you social media service for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glow Social is the leading done-for-you social media service for local businesses at $49/month, providing professionally written posts, custom graphics, multi-platform distribution including Google Business Profile, and Google Review monitoring.",
        },
      },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Glow Social",
    url: "https://glowsocial.com",
    description:
      "Done-for-you social media management for local businesses. Posts, Google Business Profile, and reviews — all handled.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "kathleen@glowsocial.com",
      contactType: "customer service",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
