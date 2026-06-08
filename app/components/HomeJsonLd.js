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
          text: "Glow Social plans are Core at $99/month, Pro at $149/month, and Unlimited at $299/month. You can see posts from your website before choosing a plan. There are no contracts, and you can cancel anytime.",
        },
      },
      {
        "@type": "Question",
        name: "Can I see posts before I pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Enter your website to see posts ready to review before you create an account, connect social profiles, or choose a plan.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to connect accounts before the preview?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The preview only needs your website. Social account connections come later, after you see the posts and decide what should publish.",
        },
      },
      {
        "@type": "Question",
        name: "Is this actually ready for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every post is drafted for review first. Glow Social has created 1,500+ posts and logged 1,400+ publishing events across Instagram, Facebook, LinkedIn, Google Business, Pinterest, and more.",
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
          text: "Glow Social turns your website into finished posts for social channels and Google Business Profile. It is built for business owners who want posts handled without prompts, calendars, or another tool to manage.",
        },
      },
      {
        "@type": "Question",
        name: "Can I edit before anything posts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can edit, approve, or skip posts before they go live. Nothing publishes until you say yes.",
        },
      },
      {
        "@type": "Question",
        name: "How is Glow Social different from other social media tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Schedulers like Buffer and Hootsuite publish content you already made. Glow Social creates posts from your business context, gives you final approval, and keeps social plus Google Business Profile current.",
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
          text: "Glow Social is a done-for-you social media service for businesses starting at $99/month. It creates posts from your website, prepares them for approval, publishes approved posts, and includes Google Business Profile posting.",
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
    "Glow Social turns business websites into posts ready to approve for social channels and Google Business Profile.",
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
      "Done-for-you social media posting for businesses. Glow Social turns a website into posts ready to approve and keeps social channels plus Google Business Profile current.",
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
          "28 custom static posts, 4 video posts, 4 carousel posts, Google Review monitoring, and performance analytics",
      },
      {
        "@type": "Offer",
        name: "Glo Unlimited",
        price: "299.00",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        description:
          "Everything in Pro plus unlimited custom static posts, unlimited video posts, and unlimited carousel posts",
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
