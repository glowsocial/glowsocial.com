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

const heroCarouselGroups = [preparedPostCards, preparedPostCards, preparedPostCards];

const outcomeCards = [
  {
    label: "Customer questions",
    title: "Answer what people already wonder.",
    body: "We look for the problems, hesitations, and decisions your customers are trying to work through before they buy.",
  },
  {
    label: "Proof and trust",
    title: "Show why they should believe you.",
    body: "Posts point to outcomes, experience, and useful context instead of generic reminders or empty calendar filler.",
  },
  {
    label: "Your point of view",
    title: "Sound like someone with a real take.",
    body: "Your posts can teach, clarify, and lead instead of just announcing holidays, sales, or staff updates.",
  },
  {
    label: "Steady presence",
    title: "Stay current where people check.",
    body: "Approved posts keep your social channels and Google Business Profile active without asking you to remember.",
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

const productDemoSteps = [
  {
    step: "1. Enter",
    title: "Your website gives us the raw material.",
    body: "Glow Social pulls the customer problems, outcomes, and differentiators that should shape your posts.",
    image: "/images/home/what%20your%20posts%20are%20based%20on.png",
    imageAlt: "Glow Social fields showing what posts are based on",
  },
  {
    step: "2. Build",
    title: "We turn that into topics.",
    body: "The first batch is built around what customers care about, not filler for the calendar.",
    image: "/images/home/content%20topics.png",
    imageAlt: "Glow Social content topics generated from a business website",
  },
  {
    step: "3. Review",
    title: "You get 20 posts to check.",
    body: "Approve everything, or open a post to edit the caption, swap the image, or remove it.",
    image: "/images/home/review%20edit%20modal.png",
    imageAlt: "Glow Social post review modal with caption and image editing controls",
  },
  {
    step: "4. Schedule",
    title: "Approved posts go out.",
    body: "Once your accounts are connected, the approved posts publish on the schedule you choose.",
    image: "/images/home/schedule.png",
    imageAlt: "Glow Social schedule view showing approved posts going out",
  },
];

const workflowSummarySteps = [
  {
    number: "1",
    title: "Give us your website",
    body: "We scan it for the problems customers care about, the outcomes you sell, and what makes you different.",
  },
  {
    number: "2",
    title: "Review your 20 posts",
    body: "Approve everything at once, or edit the caption, swap the image, or remove anything that does not fit.",
  },
  {
    number: "3",
    title: "Connect and schedule",
    body: "Once your accounts are connected, approved posts publish on the days and times you choose.",
  },
];

function HeroVideoCarousel() {
  return (
    <div className="hero-video-carousel" aria-label="Glow Social finished post videos">
      <div className="blackbox-output-rail" aria-hidden="true">
        <div className="blackbox-output-track">
          {heroCarouselGroups.map((group, groupIndex) => (
            <div className="blackbox-output-group" key={`video-group-${groupIndex}`}>
              {group.map((slide, index) => (
                <article
                  className={`hero-video-card hero-video-card--${slide.accent}`}
                  style={{
                    "--card-offset": slide.offset,
                  }}
                  key={`${slide.title}-${groupIndex}`}
                >
                  <div className="hero-video-media">
                    <img
                      src={slide.image}
                      alt=""
                      width={382}
                      height={510}
                      loading={groupIndex === 0 && index < preparedPostCards.length ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <span className="hero-video-play" />
                    <span className="hero-video-progress" />
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSocialShowcase() {
  return (
    <div className="hero-showcase" aria-label="Glow Social website-to-posts preview">
      <HeroVideoCarousel />
    </div>
  );
}

function OutcomeSection() {
  return (
    <section className="outcome-section" aria-labelledby="outcome-heading">
      <div className="container">
        <div className="outcome-heading">
          <span className="section-kicker">Why the posts are different</span>
          <h2 id="outcome-heading">Not a calendar full of filler.</h2>
          <p className="section-sub">
            Glow Social uses your website plus 20+ years of marketing judgment to find what is worth saying before it creates the posts.
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

function ProductDemoSection() {
  return (
    <section className="product-demo" aria-labelledby="product-demo-heading">
      <div className="container">
        <div className="product-demo-heading">
          <span className="section-kicker">Product demo</span>
          <h2 id="product-demo-heading">See what happens after you enter your website.</h2>
          <p className="section-sub">
            <BrandName /> scans your site, finds what is worth posting about, and prepares 20 posts for review.
          </p>
        </div>
        <div className="product-demo-grid">
          {productDemoSteps.map((item) => (
            <article className="product-demo-step" key={item.step}>
              <div className="product-demo-shot">
                <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
              </div>
              <div className="product-demo-copy">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="before-after" aria-labelledby="before-after-heading">
      <div className="container">
        <h2 id="before-after-heading">
          From making posts yourself to approving what is ready.
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
        <div className="before-after-mobile">
          {beforeAfterRows.map(([before, after]) => (
            <article className="before-after-pair" key={`mobile-${before}`}>
              <div className="before-after-pair-item before-after-pair-item--before">
                <span>Before</span>
                <p>{before}</p>
              </div>
              <div className="before-after-pair-item before-after-pair-item--after">
                <span>After</span>
                <p>{after}</p>
              </div>
            </article>
          ))}
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
          <span className="section-kicker">Anonymous owner note</span>
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
      <ProductDemoSection />
      <OutcomeSection />

      {/* ============ WORKFLOW — Product in three steps ============ */}
      <section className="workflow" id="how">
        <div className="container">
          <h2>This is how Glow Social works.</h2>
          <p className="section-sub">
            Your website goes in. <BrandName /> finds the topics, creates the posts, and publishes them after you approve and connect your accounts.
          </p>

          <div className="workflow-grid">
            {workflowSummarySteps.map((step) => (
              <article className="workflow-card" key={step.number}>
                <span className="workflow-num">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <a href="https://app.glowsocial.com/preview" className="btn btn--primary" id="workflow-cta">Get a preview</a>
          </div>
        </div>
      </section>

      <CustomerProof />

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
                <li><strong>More posts</strong> for busier seasons</li>
                <li><strong>More room</strong> for launches, promos, and events</li>
                <li><strong>Campaign posts</strong> across your offers</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=unlimited" className="btn btn--outline" id="pricing-unlimited-cta">START WITH UNLIMITED</a>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterSection />

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
          <h2>Questions from business owners who want social media handled</h2>
          <div className="faq-list">
            <details className="faq-item"><summary><span className="faq-question">Will this get me more customers?</span></summary><p><BrandName /> is not a replacement for advertising. It helps your business look current when people already considering you check your profiles before they call, book, visit, or refer.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much does <BrandName /> cost?</span></summary><p>{pricing.summaryFull} {pricing.billingPolicy} You keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Can I cancel anytime?</span></summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much do I have to do?</span></summary><p>Give us your website, review the posts, approve what fits, and connect your social accounts. After that, approved posts go out on schedule.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How does <BrandName /> know what to post?</span></summary><p>We use your website plus our own marketing process shaped by 20+ years of experience to identify what customers care about, why they should trust you, and what makes you different.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How is this different from hiring an agency or using a scheduler?</span></summary><p>A scheduler gives you another empty calendar to fill. An agency can help, but usually costs more and takes more onboarding. <BrandName /> sits in the middle: your website goes in, 20 posts come back for review, and approved posts go out on schedule without a contract.</p></details>
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
