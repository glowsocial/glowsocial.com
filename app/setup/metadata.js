// Metadata exported separately so the client component page can use it
// Import this in layout.js or use generateMetadata in a server wrapper

export const setupMetadata = {
  title: "Free Social Media Bio Generator for Business Profiles",
  description:
    "Enter your website and email to get platform-specific social media bios for Google Business Profile, Facebook, Instagram, LinkedIn, X, Pinterest, Bluesky, and Threads. Free — no login required.",
  alternates: {
    canonical: "/setup",
  },
  openGraph: {
    title: "Free Social Media Bio Generator for Business Profiles",
    description:
      "Enter your website and get platform-specific bios, images, and signup links for every social platform. Free tool from Glow Social.",
    url: "https://glowsocial.com/setup",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/setup/slide-1.png",
        width: 1200,
        height: 900,
        alt: "Glow Social Free Setup Tool — Set up every social media platform in 15 minutes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Social Media Bio Generator for Business Profiles",
    description:
      "Enter your website and get platform-specific bios, images, and signup links for every social platform. Free tool from Glow Social.",
    images: ["https://glowsocial.com/images/setup/slide-1.png"],
  },
};
