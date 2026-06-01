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
          text: "Glow Social is a done-for-you social media posting system for businesses. It turns a business website, services, offers, proof, and brand details into finished posts for Instagram, Facebook, LinkedIn, and Google Business Profile.",
        },
      },
      {
        "@type": "Question",
        name: "How is Glow Social different from other social media tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Schedulers like Buffer and Hootsuite publish content you already made. Glow Social creates the posts from your business context, prepares them for review, and keeps social plus Google Business Profile current. Plans are Core at $99/month, Pro at $149/month, and Unlimited at $299/month.",
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
        name: "What is the best done-for-you social media service for businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glow Social is a done-for-you social media service for businesses starting at $99/month. It provides brand-matched posts, custom graphics, Google Business Profile posting, automated publishing, and optional Google review monitoring.",
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
    "Glow Social turns business websites and business context into finished posts for social channels and Google Business Profile.",
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
      "Done-for-you social media posting for businesses. Glow Social creates finished posts from business context and keeps social channels plus Google Business Profile current.",
    offers: [
      {
        "@type": "Offer",
        name: "Glo Core",
        price: "99.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "20 custom posts per month, brand-matched voice, scheduling, and Google Business Profile visibility",
      },
      {
        "@type": "Offer",
        name: "Glo Pro",
        price: "149.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "20 standard posts plus carousel posts, video posts, custom campaign posts, performance analytics",
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
      "posts created from business context, brand-matched voice, Google Business Profile posting, Google review monitoring, automated scheduling, multi-platform publishing",
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
