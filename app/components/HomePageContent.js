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
    caption: "The best cafes are not just selling coffee. They give people a reliable third place before the day starts.",
    image: "/images/home/hero-instagram-post.png",
    imageAlt: "Generated post image for a cafe",
    accent: "instagram",
    offset: "6px",
  },
  {
    title: "Greenview landscaping",
    caption: "If your lawn only gets attention when it looks bad, you are already working from behind. The greenest yards are planned earlier.",
    image: "/images/home/hero-facebook-post.png",
    imageAlt: "Generated post image for a landscaping business",
    accent: "facebook",
    offset: "0px",
  },
  {
    title: "Desert key realty",
    caption: "Most buyers focus on the listing price. The smarter move is understanding timing, programs, and what needs to be ready first.",
    image: "/images/home/hero-linkedin-post.png",
    imageAlt: "Generated post image for a real estate business",
    accent: "linkedin",
    offset: "8px",
  },
  {
    title: "Arc and align wellness",
    caption: "Before someone books, they want proof you understand their problem. Your posts can answer that before they call.",
    image: "/images/home/hero-google-post.png",
    imageAlt: "Generated post image for a wellness business",
    accent: "google",
    offset: "3px",
  },
];

const outcomeCards = [
  {
    label: "Website scan",
    title: "We find posts worth making.",
    body: "Glow Social scans your website, then applies our own marketing process shaped by 20+ years of experience.",
  },
  {
    label: "Better topics",
    title: "You get 20 posts with a reason to exist.",
    body: "The posts focus on what customers care about, why they should trust you, and what makes you different.",
  },
  {
    label: "Approval",
    title: "All you do is look them over.",
    body: "Approve what fits, edit anything that needs your voice, swap an image, or remove a post before it goes live.",
  },
  {
    label: "Publishing",
    title: "Connect your accounts and the schedule runs.",
    body: "Once your socials are connected, approved posts go out automatically on the days and times you choose.",
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
  ["Filling the calendar with generic holiday and staff posts", "Posts about what customers care about and why they should trust you"],
  ["Starting from a blank content calendar", "20 posts ready to review"],
  ["Trying to remember where to post", "One place to review social and Google posts"],
  ["Posting only when business slows down", "Approved posts going out on schedule"],
  ["Paying agency prices before you need an agency", "Done-for-you posting starting at $99/month"],
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

function HeroBlackBoxPreview() {
  return (
    <div className="hero-blackbox-preview" aria-label="Glow Social turns a website into finished posts">
      <div className="blackbox-stage">
        <div className="blackbox-core" aria-hidden="true">
          <div className="blackbox-input-chip">yourbusiness.com</div>
          <div className="blackbox-mark">glow</div>
          <div className="blackbox-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="blackbox-output-rail" aria-hidden="true">
          {preparedPostCards.map((slide, index) => (
            <article
              className={`hero-video-card hero-video-card--${slide.accent}`}
              style={{
                "--card-offset": slide.offset,
              }}
              key={slide.title}
            >
              <div className="hero-video-media">
                <img
                  src={slide.image}
                  alt=""
                  width={382}
                  height={510}
                  loading={index < preparedPostCards.length ? "eager" : "lazy"}
                  decoding="async"
                />
                <span className="hero-video-play" />
                <span className="hero-video-progress" />
              </div>
              <div className="hero-video-body">
                <h3>{slide.title}</h3>
                <p>{slide.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSocialShowcase() {
  return (
    <div className="hero-showcase" aria-label="Glow Social website-to-posts preview">
      <HeroBlackBoxPreview />
    </div>
  );
}

function OutcomeSection() {
  return (
    <section className="outcome-section" aria-labelledby="outcome-heading">
      <div className="container">
        <div className="outcome-heading">
          <span className="section-kicker">What changes</span>
          <h2 id="outcome-heading">Your social media stops depending on spare time.</h2>
          <p className="section-sub">
            Glow Social gives you a simple process: posts prepared from your business,
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

function StrategyScreensPreview() {
  return (
    <div className="strategy-screens">
      <WorkflowScreenshot
        src="/images/home/what%20your%20posts%20are%20based%20on.png"
        alt="Glow Social strategy fields for customer problems, best outcome, and differentiators"
        className="workflow-shot--strategy-base"
      />
      <WorkflowScreenshot
        src="/images/home/content%20topics.png"
        alt="Glow Social content topics generated for a business"
        className="workflow-shot--strategy-topics"
      />
    </div>
  );
}

function WorkflowScenes() {
  return (
    <div className="workflow-scenes">
      <article className="workflow-scene">
        <div className="workflow-scene-copy">
          <span className="workflow-step">1. Give us your website</span>
          <h3>We find what you should talk about.</h3>
          <p>Glow Social scans your website, then runs it through our own marketing process shaped by 20+ years of experience to find what customers care about, why they should trust you, and what makes you different.</p>
        </div>
        <div className="scene-panel scene-panel--strategy" aria-label="Website strategy and content topics">
          <StrategyScreensPreview />
        </div>
      </article>

      <article className="workflow-scene workflow-scene--flip">
        <div className="workflow-scene-copy">
          <span className="workflow-step">2. Review your posts</span>
          <h3>Approve them all or change what needs it.</h3>
          <p>Approve everything at once, or open a post to edit its caption, swap its image, approve it, or remove it before it joins the schedule.</p>
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
          <span className="section-kicker">Customer quote</span>
          <h2 id="proof-heading">Built for owners who are too busy to plan posts.</h2>
          <p>
            Glow Social prepares the work, shows you what needs review,
            and keeps moving once you approve it.
          </p>
        </div>
        <blockquote className="proof-quote">
          <span aria-hidden="true">&ldquo;</span>
          <p>
            My profiles finally look alive without me having to become a content person.
            I just review what is ready and get back to running the business.
          </p>
          <footer>
            <div className="proof-avatar" aria-hidden="true" />
            <div>
              <strong>Small business owner</strong>
              <small>Wants to keep Glow Social their little secret</small>
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
        <h2>For business owners who have better things to do than plan posts.</h2>
        <p className="section-sub">You do not need more filler for the calendar. You need posts based on what you know, what customers ask, and why they should trust you.</p>
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
                <td>$1k-$5k+ monthly fees</td>
                <td>$4k+/mo before extra costs</td>
              </tr>
              <tr>
                <th>Time to first draft</th>
                <td><strong>Minutes</strong></td>
                <td>Whenever you get to it</td>
                <td>After onboarding</td>
                <td>After recruiting</td>
              </tr>
              <tr>
                <th>What the posts are based on</th>
                <td><strong>Your site + 20+ years of marketing judgment</strong></td>
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
                <td>Agency contract</td>
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
              Enter your website. We&apos;ll prepare 20 posts for you.
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
          <h2>Pick how much posting you want handled.</h2>
          <p className="section-sub">Start with steady monthly posts. Add review monitoring, carousels, video posts, and campaign support when they are useful. {pricing.billingPolicy}</p>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Glo Core</h3>
              <div className="price"><span className="price-amount">{pricing.core.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>20 posts/month</strong> based on what your customers care about</li>
                <li><strong>Post topics</strong> pulled from your website</li>
                <li><strong>Google Business</strong> posts included</li>
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
                <li><strong>Video posts</strong> when a topic needs more than text</li>
                <li><strong>Posts for promos and events</strong></li>
                <li><strong>Google review monitoring</strong></li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=pro" className="btn btn--primary" id="pricing-pro-cta">START WITH PRO</a>
            </div>
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <div className="price"><span className="price-amount">{pricing.unlimited.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>More posts</strong> for bigger seasons</li>
                <li><strong>More posts</strong> when you have more to share</li>
                <li><strong>Campaign posts</strong> across your offers and events</li>
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
          <h2>Show what you know<br />without adding social media to your week.</h2>
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
            <details className="faq-item"><summary><span className="faq-question">How does <BrandName /> know what to post?</span></summary><p>We use your website plus our own marketing process shaped by 20+ years of experience to identify what customers care about, why they should trust you, and what makes you different.</p></details>
            <details className="faq-item"><summary><span className="faq-question">What if something does not sound right?</span></summary><p>You stay in control. Edit the caption, swap the image, skip anything that does not fit, or remove it before it goes live. You always have the final say on what gets published.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Does <BrandName /> post to Google Business Profile?</span></summary><p>Yes. <BrandName /> publishes to Google Business Profile alongside your regular social content, so the profile customers check does not go quiet.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Who is <BrandName /> best for?</span></summary><p><BrandName /> is for business owners who know social media matters but do not want to make content, hire an agency, or keep remembering to post.</p></details>
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
