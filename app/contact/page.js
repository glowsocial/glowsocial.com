import Link from "next/link";

export const metadata = {
  title: "Contact Glow Social",
  description: "Get in touch with the Glow Social team. We're here to help with questions about done-for-you social media for local businesses.",
};

export default function Contact() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Get in Touch</h1>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">
          <h2>Support</h2>
          <p>
            For help with your account, billing, or technical questions:
          </p>
          <p>
            <strong>Email:</strong> support@glowsocial.com
          </p>
          <p>
            Existing customers can also reach support through the{" "}
            <a href="https://app.glowsocial.com/help">Help Center</a> in your
            dashboard.
          </p>

          <h2>Sales</h2>
          <p>
            Want to learn more about Glow Social for your business? Visit our{" "}
            <Link href="/how-glow-social-works">How It Works</Link> page or
            check out <Link href="/faq">frequently asked questions</Link>.
          </p>
          <p>
            Ready to get started? <a href="https://app.glowsocial.com/">See pricing and sign up →</a>
          </p>

          <h2>Partnerships</h2>
          <p>
            Interested in the <Link href="/agency">agency program</Link> or{" "}
            <Link href="/become-an-affiliate">affiliate program</Link>? Email
            us at support@glowsocial.com.
          </p>
        </div>
      </article>
    </>
  );
}
