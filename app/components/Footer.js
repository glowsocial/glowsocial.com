/* eslint-disable @next/next/no-html-link-for-pages */

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="site-logo" style={{ marginBottom: 12 }}>
              <img
                src="/images/glow-social-footer-logo.png"
                alt="Glow Social"
                width="554"
                height="299"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p>
              Your website becomes posts ready to approve. Social and Google
              stay handled after you say yes.
            </p>
          </div>

          <div className="footer-col">
            <h4>PRODUCT</h4>
            <a href="/how-it-works">HOW IT WORKS</a>
            <a href="/pricing">PRICING</a>
            <a href="/affordable-social-media-management">AFFORDABLE SOCIAL MEDIA</a>
            <a href="/faq">FAQ</a>
            <a href="https://app.glowsocial.com/examples">SEE EXAMPLES</a>
          </div>

          <div className="footer-col">
            <h4>RESOURCES</h4>
            <a href="/blog">BLOG</a>
            <a href="/manifesto">MANIFESTO</a>
            <a href="/research">RESEARCH</a>
            <a href="/tools">TOOLS</a>
            <a href="/about">ABOUT</a>
            <a href="https://app.glowsocial.com/kb">HELP CENTER</a>
          </div>

          <div className="footer-col">
            <h4>COMPARE</h4>
            <a href="/compare/marky-alternative">MARKY ALTERNATIVE</a>
            <a href="/compare/later-alternative">LATER ALTERNATIVE</a>
            <a href="/blog/buffer-vs-glow-social">BUFFER VS. GLOW SOCIAL</a>
            <a href="/compare/chatgpt-alternative">CHATGPT ALTERNATIVE</a>
            <a href="/blog/hootsuite-vs-glow-social">HOOTSUITE VS. GLOW SOCIAL</a>
            <a href="/blog/sprout-social-vs-glow-social">SPROUT SOCIAL VS. GLOW SOCIAL</a>
            <a href="/compare/loomly-alternative">LOOMLY ALTERNATIVE</a>
          </div>

          <div className="footer-col">
            <h4>CONNECT</h4>
            <a
              href="https://www.linkedin.com/company/glowsocialhq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            <a
              href="https://instagram.com/glowsocialhq"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
            <a
              href="https://facebook.com/glowsocialhq"
              target="_blank"
              rel="noopener noreferrer"
            >
              FACEBOOK
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Glow Social. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a href="/privacy">PRIVACY POLICY</a>
            <a href="/terms">TERMS OF SERVICE</a>
            <button
              type="button"
              data-cookie-settings-open
              data-analytics-event="footer_cookie_settings_click"
              data-analytics-label="Footer cookie settings"
              data-analytics-location="footer"
            >
              COOKIE SETTINGS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
