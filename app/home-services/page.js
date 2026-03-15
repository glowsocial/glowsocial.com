import Link from "next/link";

export const metadata = {
  title: "Home Services Social Media — Glow Social",
  description: "Done-for-you social media for home service businesses. Plumbers, electricians, roofers, HVAC, and contractors — $49/month.",
};

export default function HomeServices() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Social Media for Home Service Businesses</h1>
          <p>Plumbers, roofers, electricians, HVAC, contractors — handled for $49/month.</p>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">

          <h2>You Fix Things. We Handle Your Social Media.</h2>
          <p>
            When you're crawling under a house at 7am or finishing a roof before
            the rain hits, the last thing on your mind is posting to Instagram.
            But when someone searches "plumber near me" or "best roofer in
            [your city]," an active social media presence is what makes them call
            you instead of the next guy.
          </p>

          <h2>Why Home Service Businesses Need Social Media</h2>
          <ul>
            <li><strong>Trust signals:</strong> Active social pages tell customers you're legitimate and in business</li>
            <li><strong>Local discovery:</strong> Google factors social media presence into local search results</li>
            <li><strong>Referral validation:</strong> When someone gets your name from a neighbor, they check your pages before calling</li>
            <li><strong>Review visibility:</strong> Google Reviews are the #1 driver of new customer calls</li>
          </ul>

          <h2>What Glow Social Does for Home Services</h2>
          <p>
            We read your website and create posts that showcase your expertise,
            highlight your services, and keep your pages active — without you
            lifting a finger.
          </p>
          <ul>
            <li>12+ posts per month across all platforms</li>
            <li>Google Business Profile posting included</li>
            <li>Google Review monitoring — never miss a new review</li>
            <li>Custom graphics in your brand colors</li>
            <li>Content that sounds like you, not a robot</li>
          </ul>

          <h2>Built for Trades</h2>
          <ul>
            <li>Plumbers</li>
            <li>Electricians</li>
            <li>Roofers</li>
            <li>HVAC technicians</li>
            <li>General contractors</li>
            <li>Landscapers</li>
            <li>Painters</li>
            <li>Handymen</li>
          </ul>

          <h2>$49/Month. 5-Minute Setup.</h2>
          <p>
            No contracts. No commitments. No content creation on your end.
          </p>
          <p>
            <a href="https://app.glowsocial.com/pricing/">Get started →</a>
          </p>
        </div>
      </article>
    </>
  );
}
