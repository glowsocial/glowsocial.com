import Link from "next/link";

export const metadata = {
  title: "How Glow Social Works",
  description: "See how Glow Social creates and publishes social media content for your business in 3 simple steps. Setup takes 5 minutes.",
};

export default function HowItWorks() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>How Glow Social Works</h1>
          <p>3 taps. 12 posts. 13 platforms. Every month.</p>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">

          <h2>Step 1: Enter Your Website</h2>
          <p>
            We read up to 11 pages of your website to learn your brand voice,
            services, tone, and style. This means every post we create sounds
            like you wrote it on your best day — not a generic template.
          </p>

          <h2>Step 2: Connect Your Platforms</h2>
          <p>
            Connect Facebook, Instagram, LinkedIn, Google Business Profile,
            TikTok, and more. We support 13 platforms total. Connect as many or
            as few as you want.
          </p>

          <h2>Step 3: Review and Publish</h2>
          <p>
            We create your posts with professional graphics in your brand
            colors. You review them, tap approve, and they publish automatically.
            Three taps, done.
          </p>

          <hr />

          <h2>What You Get Every Month</h2>
          <ul>
            <li><strong>12+ custom posts</strong> written in your brand voice</li>
            <li><strong>Professional graphics</strong> in your brand colors</li>
            <li><strong>Multi-platform publishing</strong> to up to 13 platforms</li>
            <li><strong>Google Business Profile posting</strong> — most tools skip this</li>
            <li><strong>Google Review monitoring</strong> — see and respond to reviews</li>
          </ul>

          <h2>What You Don't Have to Do</h2>
          <ul>
            <li>Write captions</li>
            <li>Design graphics</li>
            <li>Manage a content calendar</li>
            <li>Figure out scheduling</li>
            <li>Learn another complicated tool</li>
          </ul>

          <h2>Setup Takes 5 Minutes</h2>
          <p>
            Enter your website. Connect your accounts. Review your first posts.
            That's the entire onboarding process.
          </p>

          <h2>Pricing</h2>
          <p>
            Starting at <strong>$49/month</strong>. No contracts. Cancel anytime.
          </p>
          <p>
            <a href="https://app.glowsocial.com/pricing/">Get started →</a>
          </p>
        </div>
      </article>
    </>
  );
}
