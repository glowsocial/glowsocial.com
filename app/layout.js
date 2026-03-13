import { Inter, Urbanist } from "next/font/google";
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
  title: {
    default: "Glow Social | Done-For-You Social Media for Local Businesses",
    template: "%s | Glow Social",
  },
  description:
    "Glow Social creates and publishes professional social media content for your business — 12+ posts/month across 13 platforms including Google Business Profile. Starting at $49/mo.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glowsocial.com",
    siteName: "Glow Social",
    title: "Glow Social | Done-For-You Social Media for Local Businesses",
    description:
      "3 taps. 12 posts. 13 platforms. Every month, for $49. Glow Social reads your website and creates content that sounds like you wrote it on your best day.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${urbanist.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
