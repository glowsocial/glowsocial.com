// Metadata exported separately so the client component page can use it
// Import this in layout.js or use generateMetadata in a server wrapper

export const setupMetadata = {
  title: "Free Social Media Setup Tool — Set Up Every Platform in 15 Minutes",
  description:
    "Enter your website URL and get a ready-to-use Social Profile Kit with platform-specific bios, images, and direct signup links for Google Business Profile, Facebook, Instagram, LinkedIn, and more. Free — no login required.",
  alternates: {
    canonical: "/setup",
  },
  openGraph: {
    title: "Free Social Media Setup Tool — Set Up Every Platform in 15 Minutes",
    description:
      "Enter your website and get AI-generated bios, images, and signup links for every social platform. Free tool from Glow Social.",
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
    title: "Free Social Media Setup Tool — Set Up Every Platform in 15 Minutes",
    description:
      "Enter your website and get AI-generated bios, images, and signup links for every social platform. Free tool from Glow Social.",
    images: ["https://glowsocial.com/images/setup/slide-1.png"],
  },
};
