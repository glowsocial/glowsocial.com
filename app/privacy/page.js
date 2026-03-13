import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Glow Social",
  description: "How Glow Social collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: March 13, 2026</p>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">
          <h2>Overview</h2>
          <p>
            Glow Social ("we," "us," or "our") operates the website glowsocial.com
            and the Glow Social application at app.glowsocial.com. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our service.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>We collect information you voluntarily provide when you:</p>
          <ul>
            <li>Create an account (name, email address, password)</li>
            <li>Subscribe to a plan (payment information processed by Stripe)</li>
            <li>Connect social media accounts (OAuth tokens for publishing)</li>
            <li>Provide your website URL for brand analysis</li>
            <li>Contact us for support</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring website addresses</li>
            <li>IP address</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Create and publish social media content on your behalf</li>
            <li>Analyze your website to generate brand-matched content</li>
            <li>Process payments and manage subscriptions</li>
            <li>Send service-related communications</li>
            <li>Monitor and improve our platform</li>
            <li>Respond to customer support requests</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>
              <strong>Stripe</strong> — Payment processing. Your payment
              information is handled directly by Stripe and is not stored on our
              servers. See{" "}
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
                Stripe's Privacy Policy
              </a>.
            </li>
            <li>
              <strong>Supabase</strong> — Database and authentication
              infrastructure.
            </li>
            <li>
              <strong>Social Media Platforms</strong> — We connect to Facebook,
              Instagram, LinkedIn, Google Business Profile, TikTok, and other
              platforms via their official APIs to publish content on your behalf.
              We only access the permissions necessary for publishing.
            </li>
          </ul>

          <h2>Social Media Account Access</h2>
          <p>
            When you connect social media accounts, we request only the
            permissions necessary to publish content on your behalf. We do not:
          </p>
          <ul>
            <li>Access your direct messages</li>
            <li>Access your personal social media feeds</li>
            <li>Share your social media credentials with third parties</li>
            <li>Post content without your approval</li>
          </ul>
          <p>
            You can disconnect any social media account at any time from your
            dashboard.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your account information for as long as your account is
            active. If you cancel your subscription, your data is retained for 30
            days in case you wish to reactivate. After 30 days, your data is
            permanently deleted.
          </p>
          <p>
            You may request immediate deletion of your data by contacting us at
            support@glowsocial.com.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information, including encryption in
            transit (TLS/SSL), encrypted storage, and access controls. However, no
            method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Disconnect social media accounts at any time</li>
            <li>Cancel your subscription at any time</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use essential cookies to maintain your session and preferences. We
            may use analytics cookies to understand how visitors interact with our
            website. You can control cookie preferences through your browser
            settings.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our service is not directed to individuals under the age of 18. We do
            not knowingly collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new policy on this page and
            updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at
            support@glowsocial.com.
          </p>
        </div>
      </article>
    </>
  );
}
