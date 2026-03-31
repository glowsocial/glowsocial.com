import "./[slug]/preview.css";

export const metadata = {
  title: "Free Social Media Preview — See 12 Posts Written for Your Business | Glow Social",
  description:
    "Enter your website and see 12 social media posts written in your voice, for your business. Custom captions and AI images — ready to copy and post today. Free, no login required.",
  alternates: {
    canonical: "/preview",
  },
  openGraph: {
    title: "Free Social Media Preview — See 12 Posts Written for Your Business | Glow Social",
    description:
      "Drop your website URL and get a full month of done-for-you social media content in 60 seconds. Free, no login required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Social Media Preview | Glow Social",
    description:
      "See 12 social media posts written for your business — free, no login required.",
  },
};

export default function PreviewPage() {
  return (
    <div className="preview-page">
      <section className="preview-hero">
        <div className="container preview-hero-inner">
          <div className="preview-content">
            <div className="preview-badge">Free for Any Business — No Card, No Login</div>
            <h1 className="preview-hl">
              See a month of done-for-you social media — written for your business
            </h1>
            <p className="preview-sub">
              Drop your website below. We scan your services, your tone, and your brand — then write 12 posts that sound like you wrote them on your best day.
            </p>

            <div className="preview-features">
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Reads your actual website:</strong> We scan your services, tone, and unique value to write posts that sound like you.
                </span>
              </div>
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>AI images for every post:</strong> Custom photorealistic images tailored to your industry. No stock photos.
                </span>
              </div>
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Scheduled and ready to go:</strong> A full month of content on a Mon/Wed/Fri schedule. Copy it straight into your social channels.
                </span>
              </div>
            </div>
          </div>

          <div className="preview-form-wrapper">
            <div className="preview-card">
              <h2>Get your free preview</h2>
              <p>12 posts, custom images, and a content calendar — in 60 seconds.</p>

              {/*
                Form submits to /preview (same domain).
                next.config.mjs rewrites requests with ?url= to app.glowsocial.com/preview
                via beforeFiles so the user never leaves glowsocial.com.
              */}
              <form
                action="/preview"
                method="GET"
                className="preview-form"
              >
                <div className="form-group">
                  <label htmlFor="url">Your Website URL</label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    placeholder="https://yourwebsite.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@yourbusiness.com"
                    required
                    className="form-input"
                  />
                </div>

                <button type="submit" className="btn btn--primary btn--lg preview-btn">
                  Show Me My Posts
                </button>
                <p className="privacy-note">Results are generated instantly. No login required.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="preview-proof">
        <div className="container">
          <div className="proof-banner">
            <p>
              <strong>Stop guessing what to post.</strong> Our AI reads your website and writes a full month of social media content — in your voice, for your customers, in about 60 seconds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
