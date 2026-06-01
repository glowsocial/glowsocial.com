import HomeJsonLd from "./HomeJsonLd";
import { getPricing } from "../pricing-config";
import StickyMobileCta from "./StickyMobileCta";
import "../home.css";

function BrandName() {
  return <span className="brand-nowrap">Glow Social</span>;
}

const preparedPostCards = [
  {
    title: "Morning routine cafe",
    channels: ["Instagram", "Facebook"],
    caption: "Fresh bread, warm coffee, and a softer start before the day gets loud.",
    image: "/images/home/hero-instagram-post.png",
    imageAlt: "Generated post image for a cafe",
    accent: "instagram",
    label: "Post 01",
    offset: "6px",
  },
  {
    title: "Greenview landscaping",
    channels: ["Facebook", "Google"],
    caption: "A quick reminder for homeowners who want thicker grass without overthinking it.",
    image: "/images/home/hero-facebook-post.png",
    imageAlt: "Generated post image for a landscaping business",
    accent: "facebook",
    label: "Post 02",
    offset: "0px",
  },
  {
    title: "Desert key realty",
    channels: ["LinkedIn", "Facebook"],
    caption: "A practical note on programs, timing, and the parts of the process worth planning first.",
    image: "/images/home/hero-linkedin-post.png",
    imageAlt: "Generated post image for a real estate business",
    accent: "linkedin",
    label: "Post 03",
    offset: "8px",
  },
  {
    title: "Arc and align wellness",
    channels: ["Google Business", "Instagram"],
    caption: "A useful update for people checking maps before they decide where to book.",
    image: "/images/home/hero-google-post.png",
    imageAlt: "Generated post image for a wellness business",
    accent: "google",
    label: "Post 04",
    offset: "3px",
  },
];

const heroRailLoop = [...preparedPostCards, ...preparedPostCards];

const outcomeCards = [
  {
    label: "Website scan",
    title: "We figure out what you should talk about.",
    body: "Glow Social scans your website to understand your services, expertise, offers, proof, and point of view.",
  },
  {
    label: "Thought leadership",
    title: "You get 20 posts built from that strategy.",
    body: "We turn the topics your audience should hear from you about into finished posts with captions and visuals.",
  },
  {
    label: "Approval",
    title: "All you do is look them over.",
    body: "Approve what fits, edit anything that needs your voice, swap an image, or remove a post before it goes live.",
  },
  {
    label: "Publishing",
    title: "Connect your accounts and the schedule runs.",
    body: "Once your socials are connected, approved posts go out automatically on the posting rhythm you choose.",
  },
];

const channelChips = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "Threads",
  "Google Business",
  "TikTok",
  "Pinterest",
  "Bluesky",
];

const beforeAfterRows = [
  ["Wondering what you should talk about", "A topic strategy pulled from your own website"],
  ["Starting from a blank content calendar", "20 thought-leadership posts ready to review"],
  ["Trying to remember every platform", "One approval queue for social and Google"],
  ["Posting only when business slows down", "Approved posts going out on schedule"],
  ["Paying agency prices before you need an agency", "Done-for-you coverage starting at $99/month"],
];

const testimonialQuotes = [
  ["I love the carousels.", "Life Coach"],
  ["I forgot I even had social media. That is the point.", "Tax Preparer"],
  ["My clients think I hired a marketing team.", "Wellness Spa Owner"],
  ["I am getting traction on profiles I did not even have before I signed up.", "Home Care Provider"],
  ["My Mondays are lighter now. It just shows up handled.", "Mortgage Broker"],
  ["It just quietly works. That is all I wanted.", "Real Estate Agent"],
];

function WorkflowScreenshot({ src, alt, className = "" }) {
  return (
    <div className={`workflow-shot ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

function HeroPreparedBatch() {
  return (
    <div className="hero-batch-preview" aria-label="Preview batch of prepared Glow Social posts">
      <div className="hero-batch-header">
        <div>
          <span>Thought leadership batch</span>
          <strong>20 posts ready to review</strong>
        </div>
        <em>Built from your website</em>
      </div>
      <div className="hero-batch-track" aria-hidden="true">
        {heroRailLoop.map((slide, index) => (
          <article
            className={`hero-draft-card hero-draft-card--${slide.accent}`}
            style={{
              "--card-offset": slide.offset,
            }}
            key={`${slide.title}-${index}`}
          >
            <div className="hero-draft-media">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                width={382}
                height={510}
                loading={index < preparedPostCards.length ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
            <div className="hero-draft-body">
              <div className="hero-draft-meta">
                <span>{slide.label}</span>
                <em>Ready to review</em>
              </div>
              <h3>{slide.title}</h3>
              <p>{slide.caption}</p>
              <div className="hero-draft-channels">
                {slide.channels.map((channel) => (
                  <span key={channel}>{channel}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function HeroSocialShowcase() {
  return (
    <div className="hero-showcase" aria-label="Glow Social prepared post batch">
      <HeroPreparedBatch />
    </div>
  );
}

function OutcomeSection() {
  return (
    <section className="outcome-section" aria-labelledby="outcome-heading">
      <div className="container">
        <div className="outcome-heading">
          <span className="section-kicker">What changes</span>
          <h2 id="outcome-heading">Your online presence stops depending on spare time.</h2>
          <p className="section-sub">
            Glow Social gives you a simple operating rhythm: drafts prepared from your business,
            quick review, and steady publishing where customers check.
          </p>
        </div>
        <div className="outcome-grid">
          {outcomeCards.map((card) => (
            <article className="outcome-card" key={card.label}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChannelCoverage() {
  return (
    <section className="channel-coverage" aria-label="Supported publishing channels">
      <div className="container channel-coverage-inner">
        <p>Built for the places customers already check</p>
        <div>
          {channelChips.map((channel) => (
            <span key={channel}>{channel}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreparedBatchMockup() {
  return (
    <div className="prepared-batch-mockup" aria-label="Twenty posts prepared for review">
      <div className="prepared-batch-top">
        <span>Batch created</span>
        <strong>20 posts ready to review</strong>
      </div>
      <div className="prepared-batch-grid" aria-hidden="true">
        {preparedPostCards.map((post) => (
          <div className={`prepared-batch-card prepared-batch-card--${post.accent}`} key={post.label}>
            <img src={post.image} alt="" loading="lazy" decoding="async" />
            <span>{post.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowScenes() {
  return (
    <div className="workflow-scenes">
      <article className="workflow-scene">
        <div className="workflow-scene-copy">
          <span className="workflow-step">1. Give us your website</span>
          <h3>We figure out what you should talk about.</h3>
          <p>Enter your URL and Glow Social scans your website to understand your business, your expertise, and the topics that can build your thought leadership.</p>
        </div>
        <div className="scene-panel scene-panel--prepared" aria-label="Twenty prepared posts">
          <PreparedBatchMockup />
        </div>
      </article>

      <article className="workflow-scene workflow-scene--flip">
        <div className="workflow-scene-copy">
          <span className="workflow-step">2. We create the posts</span>
          <h3>You get 20 posts ready to approve.</h3>
          <p>Open each post to check the image and caption. Swap the image, edit the caption, approve it, or remove anything that does not fit.</p>
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
          <span className="workflow-step">3. Approve and connect</span>
          <h3>Everything goes out on schedule.</h3>
          <p>Once you approve the posts and connect your social accounts, Glow Social publishes them on the schedule you choose.</p>
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

function BeforeAfterSection() {
  return (
    <section className="before-after" aria-labelledby="before-after-heading">
      <div className="container">
        <h2 id="before-after-heading">
          <span>Traditional social media is a second job.</span>
          Glow Social turns it into a review queue.
        </h2>
        <div className="before-after-card">
          <div className="before-after-column before-after-column--before">
            <p className="section-kicker">Before</p>
            <h3>Doing social manually</h3>
          </div>
          <div className="before-after-column before-after-column--after">
            <p className="section-kicker">After</p>
            <h3>Glow Social handling the system</h3>
          </div>
          <div className="before-after-rows">
            {beforeAfterRows.map(([before, after]) => (
              <div className="before-after-row" key={before}>
                <p><span aria-hidden="true">&times;</span>{before}</p>
                <p><span aria-hidden="true">✓</span>{after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomerProof() {
  return (
    <section className="customer-proof" id="testimonials" aria-labelledby="proof-heading">
      <div className="container customer-proof-inner">
        <div className="proof-copy">
          <span className="section-kicker">Customer proof</span>
          <h2 id="proof-heading">Built for owners who are too busy to become content creators.</h2>
          <p>
            Glow Social is intentionally quiet software: it prepares the work, shows you what
            needs review, and keeps moving once you approve it.
          </p>
        </div>
        <blockquote className="proof-quote">
          <span aria-hidden="true">&ldquo;</span>
          <p>
            I forgot I even had social media. That is the point. My profiles stay current,
            but I am not stuck planning content every week.
          </p>
          <footer>
            <div className="proof-avatar" aria-hidden="true" />
            <div>
              <strong>Small business owner</strong>
              <small>Customer quote from Glow Social feedback</small>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function TestimonialTicker() {
  const tickerItems = [...testimonialQuotes, ...testimonialQuotes];

  return (
    <section className="testimonial-ticker" aria-label="Customer testimonials">
      <div className="ticker-track">
        {tickerItems.map(([quote, author], index) => (
          <div className="ticker-quote" aria-hidden={index >= testimonialQuotes.length} key={`${quote}-${index}`}>
            <span className="ticker-text">&ldquo;{quote}&rdquo;</span>
            <span className="ticker-author">— {author}</span>
            <span className="ticker-dot" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueComparison({ pricing }) {
  return (
    <section className="value-compare" id="compare-options">
      <div className="container">
        <h2>Use Glow Social when the bottleneck is knowing what to say.</h2>
        <p className="section-sub">The real alternative is not another scheduler. It is your time, an agency retainer, or hiring someone to figure out the strategy and make the posts.</p>
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
                <td><strong>Created from your website strategy</strong></td>
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
              Drop in your URL. <BrandName /> figures out what you should talk about, creates 20 thought-leadership posts, and schedules them after you approve.
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
                  placeholder="yourbusiness.com"
                  className="hero-url-input"
                  autoComplete="off"
                  inputMode="url"
                  id="hero-url-input"
                  required
                />
                <button type="submit" className="hero-url-btn" id="hero-url-submit">
                  <span>Get a preview</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </form>
            <p className="hero-url-hint">
              Get a free custom preview. No login or payment required.
            </p>
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
            <div><strong>Strategy from</strong> your site</div>
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

      <ChannelCoverage />
      <OutcomeSection />

      {/* ============ WORKFLOW — Product in three steps ============ */}
      <section className="workflow" id="how">
        <div className="container">
          <h2>This is how Glow Social works.</h2>
          <p className="section-sub">
            Your website goes in. <BrandName /> finds the topics, creates the posts, and publishes them after you approve and connect your accounts.
          </p>

          <WorkflowScenes />

          <div className="section-cta">
            <a href="https://app.glowsocial.com/preview" className="btn btn--primary" id="workflow-cta">Get a preview</a>
          </div>
        </div>
      </section>

      <CustomerProof />
      <TestimonialTicker />

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
                <li><strong>20 thought-leadership posts/month</strong> for your core presence</li>
                <li><strong>Topic strategy</strong> from your website</li>
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

      <BeforeAfterSection />
      <ValueComparison pricing={pricing} />

      {/* ============ FINAL CTA — Emotional close ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>Build thought leadership<br />without adding social media to your week.</h2>
          <p><BrandName /> figures out what to say, creates the posts, and keeps your business visible where customers already check.<br />{pricing.summaryFull} {pricing.billingPolicy}</p>
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
            <details className="faq-item"><summary><span className="faq-question">How much do I have to do?</span></summary><p>Give us your website, review the posts, approve what fits, and connect your social accounts. After that, approved posts go out on schedule.</p></details>
            <details className="faq-item"><summary><span className="faq-question">What if something does not sound right?</span></summary><p>You stay in control. Edit the caption, swap the image, skip anything that does not fit, or remove it before it goes live. You always have the final say on what gets published.</p></details>
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
