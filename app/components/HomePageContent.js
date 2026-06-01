import HomeJsonLd from "./HomeJsonLd";
import { getPricing } from "../pricing-config";
import StickyMobileCta from "./StickyMobileCta";
import "../home.css";

function BrandName() {
  return <span className="brand-nowrap">Glow Social</span>;
}

function HeroSocialShowcase() {
  return (
    <div className="hero-showcase" aria-label="Glow Social workflow and Instagram preview">
      <div className="hero-workflow-stage">
        <article className="hero-screen hero-screen--checkout" aria-label="Secure checkout preview">
          <div className="hero-screen-bar">
            <span></span><span></span><span></span>
            <strong>checkout.glowsocial.com</strong>
          </div>
          <div className="hero-checkout-card">
            <div>
              <span>Glo Pro</span>
              <strong>$149/month</strong>
            </div>
            <label>
              <span>Business name</span>
              <b>Morning Routine Cafe</b>
            </label>
            <label>
              <span>Website URL</span>
              <b>morningroutinecafe.com</b>
            </label>
            <div className="hero-checkout-button">Subscribe</div>
          </div>
        </article>

        <article className="hero-screen hero-screen--work" aria-label="Workspace setup preview">
          <div className="hero-screen-bar">
            <span></span><span></span><span></span>
            <strong>Workspace setup</strong>
          </div>
          <div className="hero-work-card">
            <span>Work started</span>
            <h3>Your first posts are getting drafted now.</h3>
            <div className="hero-progress-list">
              <div><i></i><strong>Reviewing your website</strong></div>
              <div><i></i><strong>Matching your brand style</strong></div>
              <div><i></i><strong>Drafting your first posts</strong></div>
            </div>
          </div>
        </article>

        <article className="hero-screen hero-screen--review" aria-label="Review drafts preview">
          <div className="hero-screen-bar">
            <span></span><span></span><span></span>
            <strong>Review drafts</strong>
          </div>
          <div className="hero-review-card">
            <div className="hero-review-header">
              <div>
                <span>Action required</span>
                <h3>First drafts</h3>
              </div>
              <b>Review</b>
            </div>
            <div className="hero-draft-list">
              <div>
                <span>Ready to review</span>
                <strong>A softer start before the morning rush</strong>
                <p>Fresh bread, warm coffee, and a front door that is open when your customers need it.</p>
              </div>
              <div>
                <span>Ready to review</span>
                <strong>Why regulars check your page before they visit</strong>
                <p>A quick reminder that your hours, menu, and updates are active where people look first.</p>
              </div>
              <div>
                <span>Ready to review</span>
                <strong>Weekend brunch hours and directions</strong>
                <p>A Google Business Profile post for people deciding where to go next.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="instagram-preview" aria-label="Instagram preview of an approved Glow Social post">
          <div className="instagram-preview-top">
            <span className="instagram-avatar">ig</span>
            <div>
              <strong>morningroutinecafe</strong>
              <span>Phoenix, AZ</span>
            </div>
          </div>
          <div className="instagram-preview-photo" role="img" aria-label="Cafe doorway post image created by Glow Social"></div>
          <div className="instagram-preview-actions" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p><strong>morningroutinecafe</strong> Fresh bread, warm coffee, and a front door that is open when you need a softer start.</p>
        </article>
      </div>
    </div>
  );
}

function WorkflowScenes() {
  return (
    <div className="workflow-scenes">
      <article className="workflow-scene">
        <div className="workflow-scene-copy">
          <span className="workflow-step">1. Start with your real business</span>
          <h3>Your website becomes the source material.</h3>
          <p>Services, location details, offers, and proof become the raw material for useful posts instead of generic content ideas.</p>
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
          <span className="workflow-step">2. Create the posts, not the calendar</span>
          <h3>You are not handed a blank scheduler.</h3>
          <p>Captions, visuals, and channel formats are prepared together, so review starts with finished work instead of another empty content tool.</p>
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
              <strong>4</strong>
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
          <span className="workflow-step">3. Keep approval simple</span>
          <h3>Final say without content production.</h3>
          <p>Approve the posts that fit and skip anything that does not. The work stays light because the posts are already made.</p>
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
          <span className="workflow-step">4. Cover social and local search</span>
          <h3>Google Business does not get forgotten.</h3>
          <p>The same monthly system keeps social profiles and high-intent local search surfaces current.</p>
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

function DifferenceSection() {
  const differences = [
    {
      label: "Not a scheduler",
      title: "Schedulers still need you to make the posts.",
      body: "Glow Social starts before the calendar. The posts are created for you, then prepared for publishing.",
    },
    {
      label: "Not an agency retainer",
      title: "No meetings just to keep the basics moving.",
      body: "It is built for steady local visibility, not a custom marketing department you have to manage.",
    },
    {
      label: "Not generic posting",
      title: "The content comes from your business.",
      body: "Your services, offers, location details, and proof give the posts something real to say.",
    },
    {
      label: "Not social-only",
      title: "Google Business is part of the system.",
      body: "Because local customers check search, maps, reviews, hours, and social before they decide.",
    },
  ];

  return (
    <section className="difference" aria-label="How Glow Social is different">
      <div className="container">
        <div className="difference-header">
          <h2>Glow Social handles the part other tools leave with you.</h2>
          <p>
            Schedulers publish content you already made. Agencies need direction, meetings, and bigger retainers.
            {" "}
            <BrandName /> turns your business context into a steady month of posts.
          </p>
        </div>
        <div className="difference-grid">
          {differences.map((item) => (
            <article className="difference-card" key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
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
              <span>Your website already has</span>
              <span>the posts in it.</span>
            </h1>
            <p className="hero-sub">
              Paste your website. <BrandName /> turns your services, offers, proof, and local details into finished posts for Instagram, Facebook, LinkedIn, and Google Business Profile.
            </p>
            <p className="hero-desc">
              Not a scheduler. Not an agency retainer. A steady posting system for businesses that need to look current without creating content every week.
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
                  GENERATE PREVIEW
                </button>
              </div>
            </form>
            <p className="hero-url-hint">
              Drop your URL and we&apos;ll build a free post preview. No payment required.
            </p>
            <div className="hero-actions">
              <a href="#pricing" className="btn btn--outline" id="hero-cta-secondary">
                See plans
              </a>
            </div>
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

      <DifferenceSection />

      {/* ============ WORKFLOW — Product in four steps ============ */}
      <section className="workflow" id="how">
        <div className="container">
          <h2>How it works without making social media your job.</h2>
          <p className="section-sub">
            <BrandName /> turns the business you already built into finished social content customers can actually see, then keeps it moving on the channels that matter locally.
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
          <h2>Choose how handled you want it.</h2>
          <p className="section-sub">Start with the level of presence you want. Add review monitoring and more formats only when they are useful. {pricing.billingPolicy}</p>
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
