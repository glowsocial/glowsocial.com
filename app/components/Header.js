/* eslint-disable @next/next/no-html-link-for-pages */

const compareLinks = [
  ["/compare/marky-alternative", "VS MARKY"],
  ["/compare/later-alternative", "VS LATER"],
  ["/blog/buffer-vs-glow-social", "VS BUFFER"],
  ["/blog/hootsuite-vs-glow-social", "VS HOOTSUITE"],
  ["/blog/sprout-social-vs-glow-social", "VS SPROUT SOCIAL"],
  ["/compare/chatgpt-alternative", "VS CHATGPT"],
  ["/compare/loomly-alternative", "VS LOOMLY"],
];

const resourceLinks = [
  ["/blog", "BLOG"],
  ["/affordable-social-media-management", "AFFORDABLE SOCIAL MEDIA"],
  ["/about", "ABOUT"],
  ["/manifesto", "MANIFESTO"],
  ["/research", "RESEARCH"],
  ["/tools", "TOOLS"],
];

function Chevron({ className = "nav-chevron" }) {
  return (
    <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DropdownLinks({ links }) {
  return (
    <>
      {links.map(([href, label]) => (
        <a href={href} key={href}>
          {label}
        </a>
      ))}
    </>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <input className="mobile-menu-checkbox" type="checkbox" id="mobile-nav-toggle" />

      <div className="container">
        <a href="/" className="site-logo">
          <img
            src="/images/glow-social-logo.png"
            alt="Glow Social"
            width="676"
            height="196"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/how-it-works">HOW IT WORKS</a>
          <a href="/pricing">PRICING</a>

          <div className="nav-dropdown-wrapper">
            <button className="nav-dropdown-trigger" type="button">
              COMPARE
              <Chevron />
            </button>
            <div className="nav-dropdown">
              <DropdownLinks links={compareLinks} />
            </div>
          </div>

          <div className="nav-dropdown-wrapper">
            <button className="nav-dropdown-trigger" type="button">
              RESOURCES
              <Chevron />
            </button>
            <div className="nav-dropdown">
              <DropdownLinks links={resourceLinks} />
              <a href="https://app.glowsocial.com/kb">HELP CENTER</a>
            </div>
          </div>
        </nav>

        <div className="header-ctas">
          <a href="https://app.glowsocial.com/login" className="btn btn--outline">
            LOG IN
          </a>
          <a
            href="https://app.glowsocial.com/preview"
            className="btn btn--primary"
            data-analytics-event="header_preview_cta_click"
            data-analytics-label="Header preview CTA"
            data-analytics-location="header"
          >
            GET A PREVIEW
          </a>
        </div>

        <label
          className="mobile-menu-toggle"
          htmlFor="mobile-nav-toggle"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="mobile-menu" id="mobile-menu">
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/how-it-works">HOW IT WORKS</a>
          <a href="/pricing">PRICING</a>

          <details className="mobile-nav-details">
            <summary className="mobile-nav-section">
              COMPARE
              <Chevron />
            </summary>
            <div className="mobile-nav-sub">
              <DropdownLinks links={compareLinks} />
            </div>
          </details>

          <details className="mobile-nav-details">
            <summary className="mobile-nav-section">
              RESOURCES
              <Chevron />
            </summary>
            <div className="mobile-nav-sub">
              <DropdownLinks links={resourceLinks} />
              <a href="https://app.glowsocial.com/kb">HELP CENTER</a>
            </div>
          </details>

          <div className="mobile-nav-ctas">
            <a href="https://app.glowsocial.com/login" className="btn btn--outline btn--block">
              LOG IN
            </a>
            <a
              href="https://app.glowsocial.com/preview"
              className="btn btn--primary btn--block"
              data-analytics-event="header_preview_cta_click"
              data-analytics-label="Mobile header preview CTA"
              data-analytics-location="mobile_header"
            >
              GET A PREVIEW
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
