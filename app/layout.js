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
    default: "Glow Social | Done-For-You Social Media for Local Businesses",
    template: "%s | Glow Social",
  },
  description:
    "Done-for-you social media for local businesses who hate social media. Professional posts, Google Business Profile, and Google Review monitoring — starting at $99/mo. Setup in 5 minutes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glowsocial.com",
    siteName: "Glow Social",
    title: "Glow Social | Done-For-You Social Media for Local Businesses",
    description:
      "$99/month social media — handled. Glow Social reads your website, creates professional content, and publishes to 13 platforms so you never have to think about social media again.",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glow Social — Done-For-You Social Media for Local Businesses. $99/month, 13 platforms, 5-minute setup.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Social | Done-For-You Social Media for Local Businesses",
    description:
      "$99/month social media — handled. Professional posts across 13 platforms so you never have to think about social media again.",
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
    "Done-for-you social media management for local businesses. Glow Social creates and publishes professional posts to Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile — starting at $99/month.",
  applicationCategory: "SocialMediaApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "USD",
    description: "12 custom posts per month, fully automated",
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
                description: "Get current Glow Social pricing information. Glo Core is $99/mo (12 posts), Glo Pro is $149/mo (20+ posts, reviews), Glo Unlimited is $299/mo (unlimited).",
                inputSchema: { type: "object", properties: {} },
                execute: function() {
                  return {
                    plans: [
                      { name: "Glo Core", price: "$99/mo", posts: "12/month", features: ["12 platforms", "GBP posting", "automated scheduling"] },
                      { name: "Glo Pro", price: "$149/mo", posts: "20+/month", features: ["carousels", "video", "Google Review monitoring", "analytics"] },
                      { name: "Glo Unlimited", price: "$299/mo", posts: "unlimited", features: ["unlimited everything"] }
                    ]
                  };
                }
              });

              mc.registerTool({
                name: "start-trial",
                description: "Navigate to Glow Social signup to start a subscription. No free trial — plans start at $99/mo with no contract.",
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
