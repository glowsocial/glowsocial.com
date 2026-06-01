import HomeJsonLd from "./HomeJsonLd";
import { getPricing } from "../pricing-config";
import StickyMobileCta from "./StickyMobileCta";
import "../home.css";

function BrandName() {
  return <span className="brand-nowrap">Glow Social</span>;
}

const heroRailCards = [
  {
    type: "checkout",
    label: "URL submitted",
    handle: "yourwebsite.com",
    time: "Step 1",
    title: "Your website goes in",
    caption: "Glow Social pulls the business context we need without sending you through a long intake form.",
    accent: "setup",
    initials: "01",
    offset: "18px",
  },
  {
    type: "work",
    label: "Work started",
    handle: "Workspace setup",
    time: "Step 2",
    title: "Your first posts are getting drafted",
    caption: "We review your site, match your brand style, and prepare the first batch in the background.",
    accent: "work",
    initials: "02",
    offset: "0px",
    items: [
      ["Reviewing your website", "done"],
      ["Matching your brand style", "active"],
      ["Drafting your first posts", "active"],
    ],
  },
  {
    type: "review",
    label: "Review drafts",
    handle: "First drafts",
    time: "Step 3",
    title: "You approve what fits",
    caption: "Nothing publishes until you review the draft, approve it, or skip it.",
    accent: "review",
    initials: "03",
    offset: "28px",
    drafts: [
      "A quick reminder before your next appointment",
      "Three signs your skin needs a calmer routine",
      "How to keep color-treated hair bright in summer",
    ],
  },
  {
    type: "social",
    platform: "Instagram",
    handle: "morningroutinecafe",
    image: "/images/home/hero-instagram-post.png",
    imageAlt: "Cafe storefront post image prepared for Instagram",
    title: "Open early, every morning",
    caption: "Fresh bread, warm coffee, and a softer start before the day gets loud.",
    accent: "instagram",
    initials: "ig",
    time: "1h",
    offset: "8px",
  },
  {
    type: "social",
    platform: "Facebook",
    handle: "Greenview Landscaping",
    image: "/images/home/hero-facebook-post.png",
    imageAlt: "Landscaping tools post image prepared for Facebook",
    title: "A better lawn starts before summer",
    caption: "A quick reminder for homeowners who want thicker grass without overthinking it.",
    accent: "facebook",
    initials: "fb",
    time: "2h",
    offset: "18px",
  },
  {
    type: "social",
    platform: "LinkedIn",
    handle: "Desert Key Realty",
    image: "/images/home/hero-linkedin-post.png",
    imageAlt: "Real estate office post image prepared for LinkedIn",
    title: "Buyers still have options",
    caption: "A practical note on programs, timing, and the parts of the process worth planning first.",
    accent: "linkedin",
    initials: "in",
    time: "1h",
    offset: "0px",
  },
  {
    type: "social",
    platform: "Google Business",
    handle: "Arc & Align Wellness",
    image: "/images/home/hero-google-post.png",
    imageAlt: "Wellness clinic room post image prepared for Google Business Profile",
    title: "New patient appointments are open",
    caption: "A useful update for people checking maps before they decide where to book.",
    accent: "google",
    initials: "g",
    time: "Today",
    offset: "8px",
  },
];

const heroRailLoop = [...heroRailCards, ...heroRailCards];

function HeroProcessVisual({ card }) {
  if (card.type === "checkout") {
    return (
      <div className="hero-process-window hero-process-window--checkout">
        <div className="hero-process-field">
          <span>Website URL</span>
          <strong>yourwebsite.com</strong>
        </div>
        <div className="hero-process-field">
          <span>Business context</span>
          <strong>Services, voice, proof, local details</strong>
        </div>
        <div className="hero-process-submit">Generate preview</div>
      </div>
    );
  }

  if (card.type === "review") {
    return (
      <div className="hero-process-window hero-process-window--review">
        <div className="hero-review-head">
          <span>Action required</span>
          <strong>Ready to review</strong>
        </div>
        <div className="hero-draft-list">
          {card.drafts.map((draft) => (
            <div className="hero-draft-card" key={draft}>
              <span>Draft</span>
              <strong>{draft}</strong>
              <div aria-hidden="true">
                <i></i>
                <i></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="hero-process-window hero-process-window--work">
      <div className="hero-work-copy">
        <span>Work started</span>
        <strong>Your first posts are getting drafted now.</strong>
      </div>
      <div className="hero-progress-list">
        {card.items.map(([item, status]) => (
          <div className="hero-progress-row" key={item}>
            <span className={`hero-progress-dot hero-progress-dot--${status}`}></span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroPlatformRail() {
  return (
    <div className="hero-platform-rail" aria-label="Examples of finished posts prepared for social channels">
      <div className="hero-platform-track" aria-hidden="true">
        {heroRailLoop.map((slide, index) => (
          <article
            className={`hero-platform-card hero-platform-card--${slide.accent} hero-platform-card--${slide.type}`}
            style={{
              "--post-image": slide.image ? `url(${slide.image})` : undefined,
              "--card-offset": slide.offset,
            }}
            key={`${slide.type}-${slide.handle}-${index}`}
          >
            <div className="hero-platform-top">
              <span className="hero-platform-avatar">{slide.initials}</span>
              <div>
                <strong>{slide.handle}</strong>
                <span>{slide.time}</span>
              </div>
              <em aria-label={slide.platform || slide.label}></em>
            </div>
            <p className="hero-platform-lead">{slide.caption}</p>
            {slide.type === "social" ? (
              <div className="hero-platform-image" role="img" aria-label={slide.imageAlt}></div>
            ) : (
              <HeroProcessVisual card={slide} />
            )}
            <div className="hero-platform-copy">
              <strong>{slide.title}</strong>
              <span>{slide.platform || slide.label}</span>
            </div>
            <div className="hero-platform-actions" aria-hidden="true">
              <span>{slide.type === "social" ? "Like" : "Start"}</span>
              <span>{slide.type === "social" ? "Comment" : "Review"}</span>
              <span>{slide.type === "social" ? "Share" : "Approve"}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function HeroSocialShowcase() {
  return (
    <div className="hero-showcase" aria-label="Glow Social channel preview rail">
      <HeroPlatformRail />
    </div>
  );
}

function WorkflowScenes() {
  return (
    <div className="workflow-scenes">
      <article className="workflow-scene">
        <div className="workflow-scene-copy">
          <span className="workflow-step">1. Add your website</span>
          <h3>Start with the business you already built.</h3>
          <p>Your services, offers, location details, and proof become the source material for posts that sound like you.</p>
        </div>
        <div className="scene-panel scene-panel--source" aria-label="Website to finished posts preview">
          <div className="source-column">
            <span>Source material</span>
            <div className="source-card">
              <strong>Services</strong>
              <p>Catering, espresso, brunch</p>
            </div>
            <div className="source-card">
              <strong>Local details</strong>
              <p>Phoenix cafe, open every morning</p>
            </div>
            <div className="source-card">
              <strong>Proof</strong>
              <p>Neighborhood favorite since 2019</p>
            </div>
          </div>
          <div className="source-output">
            <span>Becomes</span>
            <strong>20 finished posts/month</strong>
            <p>Useful reminders, service explainers, local updates, and social proof ready for review.</p>
          </div>
        </div>
      </article>

      <article className="workflow-scene workflow-scene--flip">
        <div className="workflow-scene-copy">
          <span className="workflow-step">2. We make the posts</span>
          <h3>Finished work replaces the blank calendar.</h3>
          <p>Captions, visuals, and channel formats are prepared together, so review starts with real posts instead of another content chore.</p>
        </div>
        <div className="scene-panel scene-panel--outcomes" aria-label="Finished monthly posting output preview">
          <div className="outcome-summary">
            <span>Monthly output</span>
            <strong>Ready to review</strong>
          </div>
          <div className="outcome-stats" aria-label="Posting output">
            <div>
              <strong>20</strong>
              <span>finished posts</span>
            </div>
            <div>
              <strong>5</strong>
              <span>channels covered</span>
            </div>
            <div>
              <strong>0</strong>
              <span>blank calendars</span>
            </div>
          </div>
          <div className="outcome-feed">
            <div className="outcome-feed-card outcome-feed-card--instagram">
              <span>Instagram</span>
              <strong>Fresh pastry case before the morning rush</strong>
              <p>New post ready for customers checking you today.</p>
            </div>
            <div className="outcome-feed-card outcome-feed-card--google">
              <span>Google Business</span>
              <strong>Weekend brunch hours and directions</strong>
              <p>A timely update where local searchers are already looking.</p>
            </div>
          </div>
        </div>
      </article>

      <article className="workflow-scene">
        <div className="workflow-scene-copy">
          <span className="workflow-step">3. You approve or skip</span>
          <h3>Final say stays simple.</h3>
          <p>Check the posts that are ready, approve what fits, and skip anything that should not go live.</p>
        </div>
        <div className="scene-panel scene-panel--approval" aria-label="Simple approval preview">
          <div className="approval-card">
            <span className="approval-platform">Instagram</span>
            <div className="approval-image"></div>
            <p>Fresh bread, warm coffee, and a front door that is open when you need a softer start.</p>
          </div>
          <div className="approval-actions">
            <button type="button">Skip</button>
            <button type="button">Approve</button>
          </div>
          <span className="approval-count">8 posts waiting</span>
        </div>
      </article>

      <article className="workflow-scene workflow-scene--flip">
        <div className="workflow-scene-copy">
          <span className="workflow-step">4. We keep you current</span>
          <h3>Social and local search stay alive.</h3>
          <p>Instagram, Facebook, LinkedIn, Threads, and Google Business Profile keep getting the useful updates customers check for.</p>
        </div>
        <div className="scene-panel scene-panel--cadence" aria-label="Posting cadence outcome preview">
          <div className="cadence-header">
            <span>Where it goes</span>
            <strong>Social + Google</strong>
          </div>
          <div className="cadence-list">
            <div className="cadence-row cadence-row--live">
              <span>Live this week</span>
              <strong>Fresh pastry case before the morning rush</strong>
              <p>Instagram and Facebook stay current for regulars.</p>
            </div>
            <div className="cadence-row">
              <span>Ready next</span>
              <strong>Weekend brunch hours and directions</strong>
              <p>Google Business has a useful update for local searchers.</p>
            </div>
            <div className="cadence-row">
              <span>Still covered</span>
              <strong>Catering reminder for office orders</strong>
              <p>LinkedIn gets the business-facing post it needs.</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function ValueComparison({ pricing }) {
  return (
    <section className="value-compare" id="compare-options">
      <div className="container">
        <h2>Use Glow Social when the bottleneck is making the posts.</h2>
        <p className="section-sub">The real alternative is not another scheduler. It is your time, an agency retainer, or hiring someone before you are ready.</p>
        <div className="value-table-wrap">
          <table className="value-table">
            <thead>
              <tr>
                <th></th>
                <th><BrandName /></th>
                <th>Doing it yourself</th>
                <th>Agency</th>
                <th>Hiring</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Monthly cost</th>
                <td><strong>Starts at {pricing.startingAtShort}</strong></td>
                <td>Hidden hours every week</td>
                <td>$1k-$5k+ retainers</td>
                <td>$4k+/mo before overhead</td>
              </tr>
              <tr>
                <th>Time to first draft</th>
                <td><strong>Minutes</strong></td>
                <td>Whenever you get to it</td>
                <td>After onboarding</td>
                <td>After recruiting</td>
              </tr>
              <tr>
                <th>Who makes the posts</th>
                <td><strong>Handled from your site</strong></td>
                <td>You</td>
                <td>Account team</td>
                <td>Employee</td>
              </tr>
              <tr>
                <th>Google Business Profile</th>
                <td><strong>Included</strong></td>
                <td>Usually forgotten</td>
                <td>Often an add-on</td>
                <td>Depends on the hire</td>
              </tr>
              <tr>
                <th>Commitment</th>
                <td><strong>No contracts</strong></td>
                <td>Your evenings</td>
                <td>Retainer terms</td>
                <td>Payroll</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function HomePageContent() {
  const pricing = getPricing();

  return (
    <>
      <HomeJsonLd />

      {/* ============ HERO — Local product promise ============ */}
      <section className="hero">
        <div className="container hero-stage">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              Done-for-you local social media
            </span>
            <h1>
              <span>Social media</span>
              <span>handled for you.</span>
            </h1>
            <p className="hero-sub">
              Drop in your URL. <BrandName /> prepares your first drafts, you approve what fits, and we keep Instagram, Facebook, LinkedIn, Threads, and Google Business Profile current.
            </p>
            <form
              className="hero-url-form"
              action="https://app.glowsocial.com/preview"
              method="get"
              id="hero-url-form"
            >
              <div className="hero-url-input-wrap">
                <svg className="hero-url-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <input
                  type="text"
                  name="url"
                  placeholder="yourwebsite.com"
                  className="hero-url-input"
                  autoComplete="off"
                  inputMode="url"
                  id="hero-url-input"
                  required
                />
                <button type="submit" className="hero-url-btn" id="hero-url-submit">
                  <span>Generate</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </form>
            <p className="hero-url-hint">
              Free preview. No payment required.
            </p>
            <div className="hero-proof">
              <div className="hero-proof-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Creates the posts</span>
              </div>
              <div className="hero-proof-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="9 11 12 14 22 4"/></svg>
                <span>Social + Google</span>
              </div>
              <div className="hero-proof-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Approve or skip</span>
              </div>
            </div>
          </div>
          <HeroSocialShowcase />
        </div>
      </section>

      {/* ============ TRUST BAR — Specificity builds trust ============ */}
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <div><strong>20 posts</strong> every month</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            <div><strong>Made from</strong> your site</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
            <div><strong>Social + Google</strong> covered</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <div><strong>No contracts</strong> cancel anytime</div>
          </div>
        </div>
      </section>

      {/* ============ WORKFLOW — Product in four steps ============ */}
      <section className="workflow" id="how">
        <div className="container">
          <h2>This is how Glow Social works.</h2>
          <p className="section-sub">
            Your website goes in. Finished posts come out. You approve what fits, and <BrandName /> keeps the right channels current.
          </p>

          <WorkflowScenes />

          <div className="section-cta">
            <a href="https://app.glowsocial.com/preview" className="btn btn--primary" id="workflow-cta">Generate preview</a>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL TICKER ============ */}
      <section className="testimonial-ticker" id="testimonials" aria-label="Customer testimonials">
        <div className="ticker-track">
          <div className="ticker-slide">
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I love the carousels.&rdquo;</span>
              <span className="ticker-author">— Life Coach</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I forgot I even had social media. That&apos;s the point.&rdquo;</span>
              <span className="ticker-author">— Tax Preparer</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My clients think I hired a marketing team.&rdquo;</span>
              <span className="ticker-author">— Wellness Spa Owner</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I&apos;m getting traction on profiles I didn&apos;t even have before I signed up.&rdquo;</span>
              <span className="ticker-author">— Home Care Provider</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My Mondays are lighter now. It just shows up handled.&rdquo;</span>
              <span className="ticker-author">— Mortgage Broker</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;It just quietly works. That&apos;s all I wanted.&rdquo;</span>
              <span className="ticker-author">— Real Estate Agent</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="ticker-slide" aria-hidden="true">
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I love the carousels.&rdquo;</span>
              <span className="ticker-author">— Life Coach</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I forgot I even had social media. That&apos;s the point.&rdquo;</span>
              <span className="ticker-author">— Tax Preparer</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My clients think I hired a marketing team.&rdquo;</span>
              <span className="ticker-author">— Wellness Spa Owner</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I&apos;m getting traction on profiles I didn&apos;t even have before I signed up.&rdquo;</span>
              <span className="ticker-author">— Home Care Provider</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My Mondays are lighter now. It just shows up handled.&rdquo;</span>
              <span className="ticker-author">— Mortgage Broker</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;It just quietly works. That&apos;s all I wanted.&rdquo;</span>
              <span className="ticker-author">— Real Estate Agent</span>
            </div>
            <div className="ticker-dot">✦</div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Pick the monthly coverage you need.</h2>
          <p className="section-sub">Start with steady monthly posts. Add review monitoring, carousels, video posts, and campaign support when they are useful. {pricing.billingPolicy}</p>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Glo Core</h3>
              <div className="price"><span className="price-amount">{pricing.core.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>20 finished posts/month</strong> for your core presence</li>
                <li><strong>Brand-matched voice</strong> from your website</li>
                <li><strong>Google Business</strong> visibility included</li>
                <li><strong>Simple control</strong> before posts go live</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=core" className="btn btn--outline" id="pricing-core-cta">START WITH CORE</a>
            </div>
            <div className="price-card price-card--featured">
              <span className="popular-badge">Most popular</span>
              <h3>Glo Pro</h3>
              <div className="price"><span className="price-amount">{pricing.pro.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li><strong>Carousel posts</strong> for richer stories</li>
                <li><strong>Video posts</strong> for higher-visibility moments</li>
                <li><strong>Campaign support</strong> for promos and events</li>
                <li><strong>Google review monitoring</strong></li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=pro" className="btn btn--primary" id="pricing-pro-cta">START WITH PRO</a>
            </div>
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <div className="price"><span className="price-amount">{pricing.unlimited.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>Always-on coverage</strong> for bigger seasons</li>
                <li><strong>No content ceiling</strong> when you have more to share</li>
                <li><strong>Full brand coverage</strong> across campaigns</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=unlimited" className="btn btn--outline" id="pricing-unlimited-cta">START WITH UNLIMITED</a>
            </div>
          </div>
        </div>
      </section>

      <ValueComparison pricing={pricing} />

      {/* ============ FINAL CTA — Emotional close ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>Stay active online<br />without adding social media to your week.</h2>
          <p><BrandName /> keeps your business visible, current, and easy to trust where customers already check.<br />{pricing.summaryFull} {pricing.billingPolicy}</p>
          <a href="https://app.glowsocial.com/" className="btn btn--primary btn--lg btn--glow" id="final-cta">GET MY SOCIAL MEDIA HANDLED</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Questions from business owners who hate social media</h2>
          <div className="faq-list">
            <details className="faq-item"><summary><span className="faq-question">Will this get me more customers?</span></summary><p><BrandName /> is not a replacement for advertising. It helps your business look current when people already considering you check your profiles before they call, book, visit, or refer.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much does <BrandName /> cost?</span></summary><p>{pricing.summaryFull} {pricing.billingPolicy} You keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Can I cancel anytime?</span></summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much do I have to do?</span></summary><p>Setup takes a few minutes. After that, <BrandName /> prepares and publishes the posts. You can check in before things go live, but you are not keeping a posting system alive or starting from scratch.</p></details>
            <details className="faq-item"><summary><span className="faq-question">What if something does not sound right?</span></summary><p>You stay in control. Skip anything that does not fit before it goes live. <BrandName /> learns from your website and business details, but you always have the final say on what gets published.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Does <BrandName /> post to Google Business Profile?</span></summary><p>Yes. <BrandName /> publishes to Google Business Profile alongside your regular social content, so the place local customers search does not go quiet.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Who is <BrandName /> best for?</span></summary><p><BrandName /> is for business owners who know their online presence matters but do not want to become content creators, hire an agency, or keep remembering to post.</p></details>
          </div>
        </div>
      </section>

      {/* ============ BACKED BY ============ */}
      <div className="backed-by">
        <a href="https://elevenlabs.io/startup-grants" target="_blank" rel="noopener noreferrer">
          <img
            src="https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp"
            alt="ElevenLabs Startup Grant Recipient"
            width={250}
            height={50}
            loading="lazy"
            decoding="async"
            style={{ display: 'block' }}
          />
        </a>
      </div>

      {/* STICKY MOBILE CTA */}
      <StickyMobileCta />
    </>
  );
}
