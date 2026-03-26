import Link from "next/link";

export const metadata = {
  title: "FAQ — Glow Social",
  description: "Frequently asked questions about Glow Social's done-for-you social media posting for local businesses.",
};

export default function FAQ() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">

          <h2>What is Glow Social?</h2>
          <p>
            Glow Social is done-for-you social media posting for local
            businesses. We create and publish custom social media content for
            your business automatically — 12+ posts per month across 13
            platforms, starting at $49/month.
          </p>

          <h2>How does it work?</h2>
          <p>
            You enter your website URL and connect your social media accounts.
            We read up to 11 pages of your website to learn your brand voice,
            services, and style. Then we create custom posts with professional
            graphics and publish them on your behalf. Setup takes about 5
            minutes.
          </p>

          <h2>What platforms do you post to?</h2>
          <p>
            We support 13 platforms including Facebook, Instagram, LinkedIn,
            Google Business Profile, TikTok, X (Twitter), Pinterest, and more.
          </p>

          <h2>Will the posts sound like me?</h2>
          <p>
            Yes. We read your actual website content to match your brand voice
            and tone. Posts are customized to your specific business — not
            generic templates. You can also review and edit posts before they
            publish.
          </p>

          <h2>How much does it cost?</h2>
          <p>
            Plans start at $49/month. No contracts, no setup fees, cancel
            anytime. See current pricing at{" "}
            <a href="https://app.glowsocial.com/">app.glowsocial.com</a>.
          </p>

          <h2>Can I cancel anytime?</h2>
          <p>
            Yes. There are no contracts or commitments. You can cancel from your
            dashboard at any time. You'll retain access through the end of your
            current billing period.
          </p>

          <h2>Do I need to approve posts before they publish?</h2>
          <p>
            Yes. You review and approve posts before they go live. It takes
            about 3 taps — review, approve, done.
          </p>

          <h2>How many posts do I get per month?</h2>
          <p>
            The Core plan includes 12+ posts per month. Posts are distributed
            across your connected platforms to maintain consistent visibility.
          </p>

          <h2>Do you create the graphics too?</h2>
          <p>
            Yes. Every post includes a professional graphic designed in your
            brand colors. No separate design tool needed.
          </p>

          <h2>Do you post to Google Business Profile?</h2>
          <p>
            Yes — and most social media tools don't. Google Business Profile
            posting is included in every Glow Social plan at no extra cost.
          </p>

          <h2>What about Google Reviews?</h2>
          <p>
            Every plan includes Google Review monitoring. You'll see new reviews
            in your dashboard and can respond to them directly.
          </p>

          <h2>How is this different from Buffer or Hootsuite?</h2>
          <p>
            Buffer and Hootsuite are scheduling tools — you still create all the
            content yourself. Glow Social creates the content for you and
            publishes it automatically. You save 5-10 hours per month.
          </p>

          <h2>How is this different from hiring a social media manager?</h2>
          <p>
            A freelance social media manager costs $300-500/month. An agency
            costs $2,000+/month. Glow Social delivers consistent posting for
            $49/month without the hiring, management, or communication overhead.
          </p>

          <h2>What businesses is Glow Social best for?</h2>
          <p>
            We're built for local businesses: restaurants, salons, contractors,
            dentists, gyms, law firms, boutiques, real estate agents, and any
            service business that wants consistent social media without doing
            the work.
          </p>

          <h2>How long does setup take?</h2>
          <p>
            About 5 minutes. Enter your website URL, connect your social
            accounts, and your first batch of posts will be ready to review the
            same day.
          </p>

          <h2>Still have questions?</h2>
          <p>
            Visit our <a href="https://app.glowsocial.com/help">Help Center</a> or
            email us at support@glowsocial.com.
          </p>
        </div>
      </article>
    </>
  );
}
