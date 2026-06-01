import HomeJsonLd from "./HomeJsonLd";
import { getPricing } from "../pricing-config";
import StickyMobileCta from "./StickyMobileCta";
import "../home.css";

function BrandName() {
  return <span className="brand-nowrap">Glow Social</span>;
}

const heroPostCards = [
  {
    platform: "Instagram",
    handle: "Morning Routine Cafe",
    time: "1h",
    caption: "Fresh bread, warm coffee, and a softer start before the day gets loud.",
    image: "/images/home/hero-instagram-post.png",
    imageAlt: "Instagram-style post image for a cafe",
    accent: "instagram",
    offset: "12px",
  },
  {
    platform: "Facebook",
    handle: "Greenview Landscaping",
    time: "2h",
    caption: "A quick reminder for homeowners who want thicker grass without overthinking it.",
    image: "/images/home/hero-facebook-post.png",
    imageAlt: "Facebook-style post image for landscaping",
    accent: "facebook",
    offset: "0px",
  },
  {
    platform: "LinkedIn",
    handle: "Desert Key Realty",
    time: "1h",
    caption: "A practical note on programs, timing, and the parts of the process worth planning first.",
    image: "/images/home/hero-linkedin-post.png",
    imageAlt: "LinkedIn-style post image for real estate",
    accent: "linkedin",
    offset: "16px",
  },
  {
    platform: "Google Business",
    handle: "Arc & Align Wellness",
    time: "Today",
    caption: "A useful update for people checking maps before they decide where to book.",
    image: "/images/home/hero-google-post.png",
    imageAlt: "Google Business Profile-style post image for a wellness business",
    accent: "google",
    offset: "6px",
  },
];

const heroRailLoop = [...heroPostCards, ...heroPostCards];

function WorkflowScreenshot({ src, alt, className = "" }) {
  return (
    <div className={`workflow-shot ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

function HeroPlatformRail() {
  return (
    <div className="hero-platform-rail" aria-label="Examples of finished social posts">
      <div className="hero-platform-track" aria-hidden="true">
        {heroRailLoop.map((slide, index) => (
          <article
            className={`hero-post-card hero-post-card--${slide.accent}`}
            style={{
              "--card-offset": slide.offset,
            }}
            key={`${slide.platform}-${slide.handle}-${index}`}
          >
            <div className="hero-post-top">
              <span className="hero-post-avatar">{slide.platform.slice(0, 2)}</span>
              <div>
                <strong>{slide.handle}</strong>
                <span>{slide.time}</span>
              </div>
              <em>{slide.platform}</em>
            </div>
            <p className="hero-post-caption">{slide.caption}</p>
            <div className="hero-post-media">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                width={382}
                height={510}
                loading={index < heroPostCards.length ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
            <div className="hero-post-actions">
              <span>Like</span>
              <span>Comment</span>
              <span>Share</span>
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
          <span className="workflow-step">1. Posts are prepared</span>
          <h3>Your first batch shows up ready to review.</h3>
          <p>Drop in your URL and Glow Social prepares a batch of finished posts. When they are ready, the dashboard tells you exactly what needs attention.</p>
        </div>
        <div className="scene-panel scene-panel--screenshot" aria-label="Dashboard showing posts ready to review">
          <WorkflowScreenshot
            src="/images/home/dashboard-%20items%20needed.png"
            alt="Glow Social dashboard showing 20 posts ready to review"
          />
        </div>
      </article>

      <article className="workflow-scene workflow-scene--flip">
        <div className="workflow-scene-copy">
          <span className="workflow-step">2. You review what matters</span>
          <h3>Edit, approve, or remove a post.</h3>
          <p>Open any post to check the image and caption. Keep what fits, adjust anything that needs your voice, and remove what should not go live.</p>
        </div>
        <div className="scene-panel scene-panel--screenshot" aria-label="Edit post modal">
          <WorkflowScreenshot
            src="/images/home/review%20edit%20modal.png"
            alt="Glow Social edit post modal with image and caption fields"
          />
        </div>
      </article>

      <article className="workflow-scene">
        <div className="workflow-scene-copy">
          <span className="workflow-step">3. We keep it moving</span>
          <h3>Approved posts follow your schedule.</h3>
          <p>Set posting days, time slots, and platform limits once. After that, Glow Social keeps the queue moving and only interrupts you when something needs review.</p>
        </div>
        <div className="scene-panel scene-panel--screenshot scene-panel--stacked" aria-label="Schedule and covered dashboard states">
          <WorkflowScreenshot
            src="/images/home/schedule.png"
            alt="Glow Social schedule settings with posting days, time slots, timezone, and platform limits"
          />
          <WorkflowScreenshot
            src="/images/home/dashboard%20-%20all%20caught%20up.png"
            alt="Glow Social dashboard all caught up state with next scheduled post"
            className="workflow-shot--secondary"
          />
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

      {/* ============ HERO — Product promise ============ */}
      <section className="hero">
        <div className="container hero-stage">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              Done-for-you social media
            </span>
            <h1>
              <span>Social media</span>
              <span className="hero-for-line">for <strong>your business</strong></span>
              <span>handled.</span>
            </h1>
            <p className="hero-sub">
              Drop in your URL. <BrandName /> prepares your first drafts, you approve what fits, and we keep Instagram, Facebook, LinkedIn, Threads, and Google Business Profile current on autopilot.
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
            <details className="faq-item"><summary><span className="faq-question">Does <BrandName /> post to Google Business Profile?</span></summary><p>Yes. <BrandName /> publishes to Google Business Profile alongside your regular social content, so the profile customers check does not go quiet.</p></details>
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
