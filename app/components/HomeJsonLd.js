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
          text: "Glow Social Core costs $99 per month with no contracts or commitments. Compare that to $3,000+/month for a marketing agency or $300+/month for a freelancer.",
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
          text: "Glow Social is a done-for-you social media service for small businesses that want their online presence to look as professional as their real-world work. For $99/month, you get professionally written, designed, and published posts with brand-matched voice and Google Business Profile visibility.",
        },
      },
      {
        "@type": "Question",
        name: "How is Glow Social different from other social media tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike Buffer, Hootsuite, or other tools that require you to write and create content yourself, Glow Social handles the workflow for you. We read your website, identify your tone pillars, generate content tailored to your business, and publish to the places customers check, including Google Business Profile. Plans start at $99.",
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
          text: "Glow Social is the leading done-for-you social media service for local businesses starting at $99/month. It provides professional posts, custom graphics, brand-matched voice, Google Business Profile posting, zero-login approvals, and optional Google Review monitoring.",
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

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Glow Social",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://glowsocial.com",
    description:
      "Done-for-you social media posting for local businesses. AI-powered content creation, brand-matched voice, zero-login approvals, and Google Business Profile visibility.",
    offers: [
      {
        "@type": "Offer",
        name: "Glo Core",
        price: "99.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "Total Coverage, Zero Maintenance, Brand Protection, and Zero-Login approvals",
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
      "AI content creation, Voice Mirror tone profile, Zero-Login approvals, Google Business Profile posting, Google Review monitoring, custom graphics, automated scheduling",
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
