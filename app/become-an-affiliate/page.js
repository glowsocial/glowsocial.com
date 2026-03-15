import Link from "next/link";

export const metadata = {
  title: "Become an Affiliate — Glow Social",
  description: "Earn recurring commissions by referring local businesses to Glow Social. Join the affiliate program today.",
};

export default function Affiliate() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Become an Affiliate</h1>
          <p>Earn recurring commissions for every business you refer.</p>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">

          <h2>Know a Business That Needs Social Media Help?</h2>
          <p>
            If you work with local businesses — as a consultant, web designer,
            accountant, or coach — you probably hear the same complaint: "I know
            I need to post on social media, but I don't have time."
          </p>
          <p>
            Glow Social solves that problem for $49/month. And when you refer
            businesses to us, you earn recurring commissions for as long as they
            stay subscribed.
          </p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>Sign up</strong> for the affiliate program</li>
            <li><strong>Share your link</strong> with businesses you work with</li>
            <li><strong>Earn commissions</strong> every month they stay subscribed</li>
          </ol>

          <h2>Who Makes a Great Affiliate</h2>
          <ul>
            <li>Web designers and developers</li>
            <li>Business coaches and consultants</li>
            <li>Accountants and bookkeepers</li>
            <li>Marketing professionals</li>
            <li>Anyone who works with local business owners</li>
          </ul>

          <h2>Get Started</h2>
          <p>
            Email us at support@glowsocial.com to learn more about the affiliate
            program and get your referral link.
          </p>
        </div>
      </article>
    </>
  );
}
