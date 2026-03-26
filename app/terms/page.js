import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Glow Social",
  description: "Terms and conditions for using the Glow Social platform and services.",
};

export default function Terms() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last updated: March 13, 2026</p>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using Glow Social's website (glowsocial.com) and
            application (app.glowsocial.com), you agree to be bound by these
            Terms of Service. If you do not agree to these terms, do not use our
            service.
          </p>

          <h2>Description of Service</h2>
          <p>
            Glow Social is a done-for-you social media posting service. We
            create and publish social media content on behalf of subscribing
            businesses. Our service includes:
          </p>
          <ul>
            <li>AI-generated social media posts customized to your business</li>
            <li>Automated publishing to connected social media platforms</li>
            <li>Google Business Profile posting</li>
            <li>Google Review monitoring</li>
            <li>Custom graphics in your brand colors</li>
          </ul>

          <h2>Account Registration</h2>
          <p>
            To use our service, you must create an account and provide accurate,
            complete information. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            under your account.
          </p>
          <p>You must be at least 18 years old to use our service.</p>

          <h2>Subscriptions and Payment</h2>
          <h3>Plans and Pricing</h3>
          <p>
            Glow Social offers monthly subscription plans. Current pricing is
            available at{" "}
            <a href="https://app.glowsocial.com/">
              app.glowsocial.com
            </a>
            . We reserve the right to modify pricing with 30 days' notice to
            existing subscribers.
          </p>

          <h3>Billing</h3>
          <p>
            Subscriptions are billed monthly in advance. Payment is processed
            through Stripe. You authorize us to charge your payment method on a
            recurring basis until you cancel.
          </p>

          <h3>Cancellation</h3>
          <p>
            You may cancel your subscription at any time from your account
            dashboard. Upon cancellation:
          </p>
          <ul>
            <li>
              You retain access to the service through the end of your current
              billing period
            </li>
            <li>No further charges will be applied</li>
            <li>
              Scheduled posts will continue to publish through the end of your
              billing period
            </li>
            <li>
              Your data will be retained for 30 days after your subscription
              ends, then permanently deleted
            </li>
          </ul>

          <h3>Refunds</h3>
          <p>
            As a month-to-month service with no contracts, we generally do not
            offer refunds for partial months. If you experience a service issue,
            contact support@glowsocial.com and we will work to resolve it.
          </p>

          <h2>Content and Intellectual Property</h2>
          <h3>Your Content</h3>
          <p>
            You retain ownership of all content you provide to us, including
            your website content, brand assets, and business information.
          </p>

          <h3>Generated Content</h3>
          <p>
            Social media posts and graphics created by Glow Social on your
            behalf become your property upon creation. You may use, modify, or
            repurpose this content as you see fit.
          </p>

          <h3>Our Intellectual Property</h3>
          <p>
            The Glow Social platform, including its design, software, and
            proprietary algorithms, remains our intellectual property. Your
            subscription grants you a limited, non-exclusive license to use our
            platform for its intended purpose.
          </p>

          <h2>Social Media Account Access</h2>
          <p>
            By connecting your social media accounts, you authorize Glow Social
            to:
          </p>
          <ul>
            <li>Publish content to your connected accounts</li>
            <li>Access basic account information necessary for publishing</li>
            <li>Monitor Google Reviews on your behalf (if connected)</li>
          </ul>
          <p>
            You may revoke access to any social media account at any time from
            your dashboard. You remain solely responsible for your social media
            accounts and their compliance with each platform's terms of service.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree not to use our service to:</p>
          <ul>
            <li>Publish unlawful, harassing, or fraudulent content</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Distribute spam or unsolicited communications</li>
            <li>
              Attempt to reverse-engineer, decompile, or otherwise access the
              source code of our platform
            </li>
            <li>
              Resell or redistribute our service without written permission
            </li>
          </ul>

          <h2>Content Review</h2>
          <p>
            While our AI creates content customized to your business, you are
            responsible for reviewing and approving content before it is
            published. Glow Social is not liable for any content published with
            your approval that may be inaccurate, inappropriate, or in violation
            of third-party rights.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Glow Social shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including but not limited to loss of profits, data,
            or business opportunities, arising from your use of our service.
          </p>
          <p>
            Our total liability for any claim arising from these terms or your
            use of the service shall not exceed the amount you paid us in the 12
            months preceding the claim.
          </p>

          <h2>Service Availability</h2>
          <p>
            We strive to maintain 99.9% uptime but do not guarantee
            uninterrupted service. We are not liable for temporary unavailability
            due to maintenance, updates, or circumstances beyond our control.
            Social media platform API changes or outages may temporarily affect
            publishing functionality.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Glow Social, its officers,
            directors, employees, and agents from any claims, damages, or
            expenses arising from your use of the service, your violation of
            these terms, or your violation of any third-party rights.
          </p>

          <h2>Modifications to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Material
            changes will be communicated via email to active subscribers at
            least 30 days before taking effect. Continued use of the service
            after changes take effect constitutes acceptance of the new terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with
            the laws of the State of Arizona, without regard to its conflict of
            law provisions.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these terms is found to be unenforceable, the
            remaining provisions shall remain in full force and effect.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms of Service? Contact us at
            support@glowsocial.com.
          </p>
        </div>
      </article>
    </>
  );
}
