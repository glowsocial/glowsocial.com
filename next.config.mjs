/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/social-media-quiz",
        destination: "/how-glow-social-works",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/local",
        permanent: true,
      },
      {
        source: "/glow-up",
        destination: "https://app.glowsocial.com/pricing/",
        permanent: true,
      },
      {
        source: "/more",
        destination: "/how-glow-social-works",
        permanent: true,
      },
      {
        source: "/15-min",
        destination: "/lets-meet",
        permanent: true,
      },
      {
        source: "/post-ideas",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "https://app.glowsocial.com/examples",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
