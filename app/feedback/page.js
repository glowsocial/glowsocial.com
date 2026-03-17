import Script from "next/script";

export const metadata = {
  title: "Share Your Feedback",
  description:
    "Tell us about your experience with Glow Social. Your feedback helps us improve and helps other local businesses find us.",
};

export default function FeedbackPage() {
  return (
    <>
      <section style={{ padding: "60px 0 0", textAlign: "center" }}>
        <div className="container">
          <h1>We&apos;d Love Your Feedback</h1>
          <p
            style={{
              color: "var(--text-muted)",
              maxWidth: "520px",
              margin: "12px auto 40px",
              fontSize: "1.05rem",
            }}
          >
            Takes about 30 seconds. Your words help other local business owners
            find us.
          </p>
          <div data-paperform-id="glowsocialfeedback"></div>
        </div>
      </section>
      <Script
        src="https://paperform.co/__embed.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
