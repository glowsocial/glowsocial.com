import { setupMetadata } from "./metadata";

export const metadata = setupMetadata;

export default function SetupLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the Social Media Setup Tool really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The Social Profile Kit is 100% free. Glow Social built it because they kept setting up social accounts for customers manually — this tool saves everyone time. No credit card required."
                }
              },
              {
                "@type": "Question",
                "name": "What do you do with my email?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Glow Social sends you a copy of your Profile Kit and a few follow-up tips on getting the most out of your new social accounts. You can unsubscribe anytime. They never share or sell your email."
                }
              },
              {
                "@type": "Question",
                "name": "Does the Social Media Setup Tool actually create my accounts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No — it generates all the content and links you need to create them yourself. Each platform requires you to sign up directly. The kit makes the process painless by giving you everything pre-written and ready to paste."
                }
              },
              {
                "@type": "Question",
                "name": "What if I already have some social media accounts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The tool detects your existing social accounts and shows which ones you already have. For platforms you're already on, the bios make great profile updates."
                }
              },
              {
                "@type": "Question",
                "name": "What happens after I set up my social media profiles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Setting up profiles is the first step. Keeping them active is what drives results. Glow Social publishes professional content to all your platforms automatically — starting at $99/month."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use the Social Media Setup Tool without a website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not yet — the tool needs a website to scan for your business info. But if you have a Google Business Profile, Facebook page, or even a Yelp listing, you can reach out to Glow Social and they'll help you get started."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Social Media Profile Kit by Glow Social",
            "alternateName": "Free Social Media Setup Tool",
            "description": "Enter your website and get platform-specific bios, images, and signup links for every social media platform. Set up Google Business Profile, Facebook, Instagram, LinkedIn, Bluesky, Twitter/X, Pinterest, and Threads in under 15 minutes.",
            "url": "https://glowsocial.com/setup",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "creator": {
              "@type": "Organization",
              "name": "Glow Social",
              "url": "https://glowsocial.com"
            },
            "featureList": [
              "Platform-specific bios",
              "Logo and image extraction from website",
              "Copy-paste content for 8 social platforms",
              "Direct signup links for each platform",
              "Existing account detection",
              "Google Business Profile setup content",
              "Character-limit-optimized bios"
            ]
          })
        }}
      />
    </>
  );
}
