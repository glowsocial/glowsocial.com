import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="site-logo" style={{ marginBottom: 12 }}>
              <img src="/images/glow-social-footer-logo.png" alt="Glow Social" />
            </div>
            <p>
              Done-for-you social media that keeps local businesses visible,
              trusted, and top-of-mind.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <Link href="/how-glow-social-works">How It Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/faq">FAQ</Link>
            <a href="https://app.glowsocial.com/examples">See Examples</a>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/manifesto">Manifesto</Link>
            <Link href="/research">Research</Link>
            <Link href="/about">About</Link>
            <a href="https://app.glowsocial.com/kb">Help Center</a>
          </div>

          <div className="footer-col">
            <h4>Compare</h4>
            <Link href="/compare/marky-alternative">Marky Alternative</Link>
            <Link href="/compare/later-alternative">Later Alternative</Link>
            <Link href="/blog/buffer-vs-glow-social">Buffer vs. Glow Social</Link>
            <Link href="/compare/chatgpt-alternative">ChatGPT Alternative</Link>
            <Link href="/blog/hootsuite-vs-glow-social">Hootsuite vs. Glow Social</Link>
            <Link href="/blog/sprout-social-vs-glow-social">Sprout Social vs. Glow Social</Link>
            <Link href="/compare/loomly-alternative">Loomly Alternative</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a
              href="https://www.linkedin.com/company/glowsocialhq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/glowsocialhq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/glowsocialhq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Glow Social. All rights reserved.</div>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
