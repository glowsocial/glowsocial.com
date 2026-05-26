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
          text: "Glow Social plans are Core at $99/month, Pro at $149/month, and Unlimited at $299/month. There are no free trials, no contracts, and customers can cancel anytime.",
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
          text: "Glow Social is a done-for-you social media service for business owners who hate social media but know customers check it. Core is $99/month and includes 12 custom posts written in your voice, designed for your business, and scheduled for you with Google Business Profile visibility.",
        },
      },
      {
        "@type": "Question",
        name: "How is Glow Social different from other social media tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike Buffer, Hootsuite, or other tools that require you to create content yourself, Glow Social handles the repeatable posting work. We read your website, learn your voice, generate posts and graphics tailored to your business, and publish to the places customers check, including Google Business Profile. Plans are Core at $99/month, Pro at $149/month, and Unlimited at $299/month.",
        },
      },
      {
        "@type": "Question",
        name: "Does Glow Social post to Google Business Profile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most social media tools skip GBP entirely — Buffer and Later don't support it at all. Glow Social publishes directly to your Google Business Profile alongside your regular social posts.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Google Review integration work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Review monitoring is included in Glo Pro and Glo Unlimited plans. Once connected, Glow Social monitors your reviews automatically and you can respond from your dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best done-for-you social media service for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glow Social is a done-for-you social media service for local businesses starting at $99/month. It provides 12 custom posts a month, custom graphics, brand-matched voice, Google Business Profile posting, simple approvals, and optional Google review monitoring.",
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
      "Social media for business owners who hate social media. Glow Social creates and schedules custom posts so small businesses look active, trustworthy, and open for business.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "kathleen@glowsocial.com",
      contactType: "customer service",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Glow Social",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://glowsocial.com",
    description:
      "Done-for-you social media posting for business owners who hate social media. Custom monthly posts, brand-matched voice, custom graphics, simple approvals, scheduling, and Google Business Profile visibility.",
    offers: [
      {
        "@type": "Offer",
        name: "Glo Core",
        price: "99.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "12 custom posts per month, brand-matched voice, scheduling, Google Business Profile visibility, and weekly approvals",
      },
      {
        "@type": "Offer",
        name: "Glo Pro",
        price: "149.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "20+ posts/month, carousels, videos, custom posts, performance analytics",
      },
      {
        "@type": "Offer",
        name: "Glo Unlimited",
        price: "299.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "Unlimited static, video, carousel, and custom posts",
      },
    ],
    featureList:
      "12 custom posts per month, brand-matched voice, weekly approvals, Google Business Profile posting, Google review monitoring, custom graphics, automated scheduling",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
