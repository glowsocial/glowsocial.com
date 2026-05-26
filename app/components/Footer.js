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
            <h4>PRODUCT</h4>
            <Link href="/how-glow-social-works">HOW IT WORKS</Link>
            <Link href="/pricing">PRICING</Link>
            <Link href="/affordable-social-media-management">AFFORDABLE SOCIAL MEDIA</Link>
            <Link href="/faq">FAQ</Link>
            <a href="https://app.glowsocial.com/examples">SEE EXAMPLES</a>
          </div>

          <div className="footer-col">
            <h4>RESOURCES</h4>
            <Link href="/blog">BLOG</Link>
            <Link href="/manifesto">MANIFESTO</Link>
            <Link href="/research">RESEARCH</Link>
            <Link href="/tools">TOOLS</Link>
            <Link href="/about">ABOUT</Link>
            <a href="https://app.glowsocial.com/kb">HELP CENTER</a>
          </div>

          <div className="footer-col">
            <h4>COMPARE</h4>
            <Link href="/compare/marky-alternative">MARKY ALTERNATIVE</Link>
            <Link href="/compare/later-alternative">LATER ALTERNATIVE</Link>
            <Link href="/blog/buffer-vs-glow-social">BUFFER VS. GLOW SOCIAL</Link>
            <Link href="/compare/chatgpt-alternative">CHATGPT ALTERNATIVE</Link>
            <Link href="/blog/hootsuite-vs-glow-social">HOOTSUITE VS. GLOW SOCIAL</Link>
            <Link href="/blog/sprout-social-vs-glow-social">SPROUT SOCIAL VS. GLOW SOCIAL</Link>
            <Link href="/compare/loomly-alternative">LOOMLY ALTERNATIVE</Link>
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
            <Link href="/privacy">PRIVACY POLICY</Link>
            <Link href="/terms">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
