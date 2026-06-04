import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

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
    default: "Glow Social | Social media on autopilot for your business",
    template: "%s | Glow Social",
  },
  description:
    "Glow Social turns your website and business context into finished posts for social channels plus Google Business Profile.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glowsocial.com",
    siteName: "Glow Social",
    title: "Glow Social | Social media on autopilot for your business",
    description:
      "Glow Social turns your website, services, offers, and proof into finished posts for social channels plus Google Business Profile.",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glow Social — your social media handled with posts written, designed, scheduled, and published for your business.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Social | Social media on autopilot for your business",
    description:
      "Glow Social turns your website and business context into finished posts for social channels plus Google Business Profile.",
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
    "Glow Social keeps businesses active online by creating, designing, scheduling, and publishing social posts where customers check.",
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

const deferredBrowserScripts = `
(function() {
  function loadScript(id, src) {
    if (document.getElementById(id)) return;
    var script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }

  function runIdle(callback) {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(callback, { timeout: 2500 });
    } else {
      window.setTimeout(callback, 1);
    }
  }

  window.addEventListener("load", function() {
    runIdle(function() {
      loadScript("webmcp-tools-src", "/webmcp-tools.js");
    });
  }, { once: true });
})();
`;

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
        <script
          dangerouslySetInnerHTML={{
            __html: deferredBrowserScripts,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
