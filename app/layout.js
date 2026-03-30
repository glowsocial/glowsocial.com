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
  },
  title: {
    default: "Glow Social | Done-For-You Social Media for Local Businesses",
    template: "%s | Glow Social",
  },
  description:
    "Done-for-you social media for local businesses who hate social media. Professional posts, Google Business Profile, and Google Review monitoring — starting at $49/mo. Setup in 5 minutes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glowsocial.com",
    siteName: "Glow Social",
    title: "Glow Social | Done-For-You Social Media for Local Businesses",
    description:
      "$49/month social media — handled. Glow Social reads your website, creates professional content, and publishes to 12 platforms so you never have to think about social media again.",
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
      <head>
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
