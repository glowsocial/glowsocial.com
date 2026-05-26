import { Inter, Urbanist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://glowsocial.com"),
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": "https://glowsocial.com/feed.xml",
    },
  },
  title: {
    default: "Glow Social | Social media for business owners who hate social media",
    template: "%s | Glow Social",
  },
  description:
    "Glow Social gives business owners 12 custom social media posts a month, written in their voice and scheduled for them, so they look active online without becoming content creators.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glowsocial.com",
    siteName: "Glow Social",
    title: "Glow Social | Social media for business owners who hate social media",
    description:
      "For business owners who hate posting, but know customers check. 12 custom posts a month, written in your voice and scheduled for you.",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glow Social — social media for business owners who hate social media. 12 custom posts a month, written and scheduled for you.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Social | Social media for business owners who hate social media",
    description:
      "12 custom posts a month, written in your voice and scheduled for you, so your business looks active when customers check.",
    images: ["https://glowsocial.com/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "SoftwareApplication"],
  "@id": "https://glowsocial.com/#organization",
  name: "Glow Social",
  url: "https://glowsocial.com",
  logo: "https://glowsocial.com/icon.png",
  description:
    "Social media for business owners who hate social media. Glow Social creates 12 custom posts a month, writes in your voice, creates graphics, and schedules posts to the platforms customers check.",
  applicationCategory: "SocialMediaApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    description: "Core is $99/month. Pro is $149/month. Unlimited is $299/month. No free trials. No contracts. Cancel anytime.",
  },
  founder: {
    "@type": "Person",
    name: "Kathleen Celmins",
    url: "https://glowsocial.com/about",
    sameAs: [
      "https://www.linkedin.com/in/kathleencelmins/",
      "https://thewellpaidexpert.com/about/",
    ],
  },
  sameAs: [
    "https://www.g2.com/products/glow-social/reviews",
    "https://www.capterra.com/p/10033703/Glow-Social/",
    "https://www.linkedin.com/company/glow-social",
    "https://www.facebook.com/glowsocialhq",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@glowsocial.com",
    contactType: "customer support",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable}`}>
      <head>
        <meta name="p:domain_verify" content="cb7027727e882ade9ae656bc56cbe93c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W571GNWJRB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W571GNWJRB');
          `}
        </Script>
        <Script id="webmcp-tools" strategy="afterInteractive">
          {`
            (function() {
              if (!navigator.modelContext) return;
              var mc = navigator.modelContext;

              mc.registerTool({
                name: "search-blog",
                description: "Search the Glow Social blog for articles about social media management, content strategy, and local business marketing.",
                inputSchema: {
                  type: "object",
                  properties: {
                    query: { type: "string", description: "Search query for blog articles" }
                  },
                  required: ["query"]
                },
                execute: function(params) {
                  window.location.href = "/blog?q=" + encodeURIComponent(params.query);
                  return { status: "navigating", url: "/blog?q=" + encodeURIComponent(params.query) };
                }
              });

              mc.registerTool({
                name: "get-pricing",
                description: "Get current Glow Social pricing information. Glo Core is $99/mo (12 posts), Glo Pro is $149/mo (20+ posts, reviews), Glo Unlimited is $299/mo (unlimited). No free trials. No contracts. Cancel anytime.",
                inputSchema: { type: "object", properties: {} },
                execute: function() {
                  return {
                    plans: [
                      { name: "Glo Core", price: "$99/mo", posts: "12/month", features: ["Core platform coverage", "Steady posting rhythm", "Brand-matched voice", "Google Business visibility", "Weekly approvals"] },
                      { name: "Glo Pro", price: "$149/mo", posts: "20+/month", features: ["Higher posting volume", "Carousel and video formats", "Google review monitoring", "Performance reporting"] },
                      { name: "Glo Unlimited", price: "$299/mo", posts: "unlimited", features: ["Always-on coverage", "More formats", "No content ceiling", "Full brand coverage"] }
                    ]
                  };
                }
              });

              mc.registerTool({
                name: "start-subscription",
                description: "Navigate to Glow Social checkout to start a subscription. No free trials. Core is $99/mo, Pro is $149/mo, and Unlimited is $299/mo with no contract.",
                inputSchema: {
                  type: "object",
                  properties: {
                    plan: { type: "string", enum: ["core", "pro", "unlimited"], description: "Plan to start" }
                  },
                  required: ["plan"]
                },
                execute: function(params) {
                  var url = "https://app.glowsocial.com/checkout?plan=" + params.plan;
                  window.location.href = url;
                  return { status: "navigating", url: url };
                }
              });
            })();
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
