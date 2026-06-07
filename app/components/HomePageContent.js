import HomeJsonLd from "./HomeJsonLd";
import { getPricing } from "../pricing-config";
import StickyMobileCta from "./StickyMobileCta";
import "../home.css";

function BrandName() {
  return <span className="brand-nowrap">Glow Social</span>;
}

const preparedPostCardData = [
  {
    type: "video",
    title: "Morning Routine Cafe",
    platform: "Instagram",
    meta: "Downtown Phoenix · 1h",
    avatar: "IN",
    caption: "The best cafes are not just selling coffee. They give people a reliable third place before the day starts.",
    visualTitle: "Regulars are built before 9am",
    visualDetail: "Cafe owners win when the morning routine feels easy to repeat.",
    accent: "instagram",
    offset: "6px",
  },
  {
    type: "quote",
    title: "Rose & Finch Salon",
    platform: "Instagram",
    meta: "Today",
    avatar: "IG",
    quote: "The right hair color should still feel like you, just better lit.",
    quoteStyle: "photo",
    caption: "A small trust-building post that sounds like the stylist, not a template.",
    accent: "instagram",
    offset: "-2px",
  },
  {
    type: "carousel",
    title: "Oak & Stone Interiors",
    platform: "Instagram",
    meta: "Oak Street · 2h",
    avatar: "CA",
    slides: [
      ["1", "Before you renovate", "Three decisions that make the project calmer."],
      ["2", "Start with use", "Choose the room around how you actually live."],
      ["3", "Then choose materials", "Texture, maintenance, and light matter more than trends."],
    ],
    caption: "Carousel posts turn one useful idea into a swipeable mini-guide.",
    accent: "carousel",
    offset: "10px",
  },
  {
    type: "video",
    title: "Greenview Landscaping",
    platform: "Facebook",
    meta: "Mesa, AZ · 2h",
    avatar: "FA",
    caption: "If your lawn only gets attention when it looks bad, you are already working from behind. The greenest yards are planned earlier.",
    visualTitle: "The yard gets planned before it browns",
    visualDetail: "A seasonal reminder for homeowners who want less guesswork.",
    accent: "facebook",
    offset: "0px",
  },
  {
    type: "quote",
    title: "North Mesa Dental",
    platform: "Facebook",
    meta: "Today",
    avatar: "FB",
    quote: "A good visit starts before the appointment, when people know what to expect.",
    quoteStyle: "light",
    caption: "Quote graphics help service businesses make invisible care visible.",
    accent: "facebook",
    offset: "5px",
  },
  {
    type: "carousel",
    title: "Desert Key Realty",
    platform: "LinkedIn",
    meta: "Spring market · 3h",
    avatar: "LI",
    slides: [
      ["1", "Buying this spring?", "Do these three things before you tour."],
      ["2", "Know the payment", "Pre-approval is only useful if the monthly number works."],
      ["3", "Watch the timing", "Your best offer depends on more than list price."],
    ],
    caption: "A carousel lets a practical advisor teach the whole decision path.",
    accent: "linkedin",
    offset: "-4px",
  },
  {
    type: "video",
    title: "Canyon Vista Realty",
    platform: "LinkedIn",
    meta: "Open house notes · 1h",
    avatar: "LI",
    caption: "Most buyers focus on the listing price. The smarter move is understanding timing, programs, and what needs to be ready first.",
    visualTitle: "Touring is not the first step",
    visualDetail: "A practical note about payment, timing, and readiness.",
    accent: "linkedin",
    offset: "8px",
  },
  {
    type: "video",
    title: "Arc & Align Wellness",
    platform: "Google Business",
    meta: "Today",
    avatar: "GO",
    caption: "Before someone books, they want proof you understand their problem. Your posts can answer that before they call.",
    visualTitle: "People decide before they book",
    visualDetail: "A profile update that turns hesitation into confidence.",
    accent: "google",
    offset: "3px",
  },
  {
    type: "carousel",
    title: "Copper Ridge Roofing",
    platform: "Facebook",
    meta: "After the storm · 2h",
    avatar: "RF",
    slides: [
      ["1", "After the storm", "What homeowners should check before calling anyone."],
      ["2", "Start from the ground", "Look for granules, dents, and shifted flashing."],
      ["3", "Document before repair", "Clear photos make the next step easier."],
    ],
    caption: "A practical carousel turns seasonal urgency into useful homeowner guidance.",
    accent: "facebook",
    offset: "12px",
  },
  {
    type: "quote",
    title: "Braid & Co",
    platform: "Instagram",
    meta: "Today",
    avatar: "IG",
    quote: "The style should work on Monday morning, not just when you leave the chair.",
    quoteStyle: "dark",
    caption: "A quote post gives a local brand a repeatable point of view.",
    accent: "instagram",
    offset: "-6px",
  },
  {
    type: "video",
    title: "Harbor Pet Grooming",
    platform: "TikTok",
    meta: "3h",
    avatar: "TT",
    caption: "The easiest grooming visits usually start before the appointment, with a dog who knows what to expect.",
    visualTitle: "The calm groom starts before drop-off",
    visualDetail: "Short-form advice for new puppy owners.",
    accent: "tiktok",
    offset: "4px",
  },
  {
    type: "carousel",
    title: "Summit Chiropractic",
    platform: "Google Business",
    meta: "Today",
    avatar: "GO",
    slides: [
      ["1", "Desk tension again?", "Your setup may be asking too much from your neck."],
      ["2", "Move before it hurts", "Small breaks help before stiffness becomes pain."],
      ["3", "Book when it lingers", "Persistent discomfort deserves a real assessment."],
    ],
    caption: "Health carousels can educate without making medical promises.",
    accent: "google",
    offset: "9px",
  },
  {
    type: "quote",
    title: "Bluebird Books",
    platform: "Threads",
    meta: "45m",
    avatar: "TH",
    quote: "A good bookstore is a shortcut to better conversations.",
    quoteStyle: "photo",
    caption: "Short quote posts help community businesses sound memorable.",
    accent: "threads",
    offset: "0px",
  },
  {
    type: "video",
    title: "Elena's Bakery",
    platform: "Pinterest",
    meta: "Custom orders · 2h",
    avatar: "PI",
    caption: "A custom cake should taste like the party, not just match the invitation.",
    visualTitle: "The cake should taste like the party",
    visualDetail: "A visual-first prompt for custom bakery orders.",
    accent: "pinterest",
    offset: "7px",
  },
  {
    type: "carousel",
    title: "Metro Auto Repair",
    platform: "Facebook",
    meta: "Road trip season · 2h",
    avatar: "AR",
    slides: [
      ["1", "Before a road trip", "Three checks save bigger problems later."],
      ["2", "Tires first", "Pressure and tread tell you more than you think."],
      ["3", "Listen cold", "New sounds on startup are worth catching early."],
    ],
    caption: "Service shops can turn routine maintenance into save-worthy posts.",
    accent: "facebook",
    offset: "-3px",
  },
  {
    type: "quote",
    title: "Willow Yoga Studio",
    platform: "Instagram",
    meta: "Today",
    avatar: "IG",
    quote: "Progress is not a pose. It is how you feel walking out.",
    quoteStyle: "light",
    caption: "A calm quote post gives the studio a voice without a photo shoot.",
    accent: "instagram",
    offset: "11px",
  },
  {
    type: "video",
    title: "Keystone Home Loans",
    platform: "LinkedIn",
    meta: "Homebuyer notes · 1h",
    avatar: "LI",
    caption: "The best mortgage conversation starts with what you want monthly life to feel like, not the biggest number you can borrow.",
    visualTitle: "The payment matters more than the preapproval",
    visualDetail: "Advice that sounds calmer than a rate table.",
    accent: "linkedin",
    offset: "2px",
  },
  {
    type: "carousel",
    title: "Milo Pet Grooming",
    platform: "Instagram",
    meta: "New puppy care · 1h",
    avatar: "CA",
    slides: [
      ["1", "New puppy?", "Start grooming before the first big haircut."],
      ["2", "Touch paws often", "Gentle handling makes nail trims less stressful."],
      ["3", "Keep it short", "Early wins matter more than perfect style."],
    ],
    caption: "A carousel gives pet owners something useful to save and share.",
    accent: "carousel",
    offset: "-7px",
  },
  {
    type: "quote",
    title: "Brightline Accounting",
    platform: "LinkedIn",
    meta: "Today",
    avatar: "LI",
    quote: "Clean books are not just for tax season. They are how you make calmer decisions.",
    quoteStyle: "dark",
    caption: "Professional services need authority posts that still sound human.",
    accent: "linkedin",
    offset: "5px",
  },
  {
    type: "carousel",
    title: "Saguaro Med Spa",
    platform: "Instagram",
    meta: "First visit notes · 2h",
    avatar: "MS",
    slides: [
      ["1", "Before your first visit", "Know the goal before choosing the treatment."],
      ["2", "Ask about downtime", "The best plan fits your calendar too."],
      ["3", "Think in months", "Subtle results usually come from consistency."],
    ],
    caption: "A carousel helps explain premium services without sounding salesy.",
    accent: "pinterest",
    offset: "13px",
  },
];

const preparedPostCards = preparedPostCardData.map((card, index) => ({
  ...card,
  image: `/images/home/generated/hero-bg-${String(index + 1).padStart(2, "0")}.webp`,
  carouselImages: card.type === "carousel"
    ? card.slides.map((_, slideIndex) => (
      `/images/home/generated/carousel-${String(index + 1).padStart(2, "0")}-slide-${slideIndex + 1}.webp`
    ))
    : null,
}));

const heroCarouselGroups = [preparedPostCards, preparedPostCards, preparedPostCards];

const heroPostEngagement = [
  { likes: "42", comments: "5" },
  { likes: "31", comments: "4" },
  { likes: "68", comments: "9" },
  { likes: "24", comments: "3" },
  { likes: "53", comments: "7" },
  { likes: "39", comments: "6" },
  { likes: "47", comments: "4" },
  { likes: "28", comments: "2" },
  { likes: "61", comments: "8" },
  { likes: "44", comments: "5" },
];

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
    step: "1. Add your website",
    title: "Add your website.",
    body: "Glow Social reads your site for the services, proof, customer questions, and voice your posts should use.",
    image: "/images/home/what%20your%20posts%20are%20based%20on.png",
    imageAlt: "Glow Social fields showing what posts are based on",
    frameTitle: "Website scan",
    frameUrl: "app.glowsocial.com/preview",
    signals: [
      ["Input", "yourbusiness.com"],
      ["Found", "Services, proof, voice"],
    ],
    visual: "source",
  },
  {
    step: "2. We find what to say",
    title: "We find the posts worth making.",
    body: "Your first batch is built from useful topics customers already care about, not generic calendar filler.",
    image: "/images/home/content%20topics.png",
    imageAlt: "Glow Social content topics generated from a business website",
    frameTitle: "Content plan",
    frameUrl: "app.glowsocial.com/topics",
    signals: [
      ["Topics", "Questions customers ask"],
      ["Drafts", "20 posts prepared"],
    ],
    visual: "topics",
  },
  {
    step: "3. You approve",
    title: "Approve what looks right.",
    body: "Review the finished posts, edit anything that needs a tweak, and skip anything you do not want published.",
    image: "/images/home/review%20edit%20modal.png",
    imageAlt: "Glow Social post review modal with caption and image editing controls",
    frameTitle: "Post review",
    frameUrl: "app.glowsocial.com/review",
    signals: [
      ["Review", "Approve, edit, or skip"],
      ["Ready", "No blank calendar"],
    ],
    visual: "review",
  },
  {
    step: "4. We publish",
    title: "Approved posts go out.",
    body: "Connect your accounts once. The posts you approve publish on the schedule you choose.",
    image: "/images/home/schedule.png",
    imageAlt: "Glow Social schedule view showing approved posts going out",
    frameTitle: "Publishing schedule",
    frameUrl: "app.glowsocial.com/schedule",
    signals: [
      ["Channels", "Social + Google"],
      ["Schedule", "Publishing handled"],
    ],
    visual: "schedule",
  },
];

function HeroGeneratedArtwork({
  avatar = "G",
  body = "",
  businessName = "",
  eyebrow,
  image,
  quoteStyle = "photo",
  slideNumber = 1,
  title,
  totalSlides = 3,
  variant,
}) {
  const quoteStyleClass = variant === "quote" ? ` hero-generated-art--quote-${quoteStyle}` : "";

  return (
    <div
      aria-label={`${eyebrow}: ${title}`}
      className={`hero-generated-art hero-generated-art--${variant}${quoteStyleClass}`}
      role="img"
      style={{ "--hero-generated-image": `url(${image})` }}
    >
      <span className="hero-generated-scrim" />
      {variant === "carousel" ? (
        <div className="hero-generated-carousel-card">
          <div className="hero-generated-carousel-header">
            <span className="hero-generated-carousel-avatar">{avatar}</span>
            <span className="hero-generated-carousel-meta">
              <strong>{businessName}</strong>
              <small>{slideNumber} / {totalSlides}</small>
            </span>
          </div>
          <span className="hero-generated-carousel-accent" />
          <div className="hero-generated-carousel-copy">
            <strong>{title}</strong>
            {body ? <p>{body}</p> : null}
          </div>
          <div className="hero-generated-carousel-progress" aria-hidden="true">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                className={index + 1 === Number(slideNumber) ? "is-active" : undefined}
                key={`${title}-progress-${index}`}
              />
            ))}
          </div>
        </div>
      ) : variant === "quote" ? (
        <>
          <div className="hero-generated-quote-card">
            <strong>{title}</strong>
          </div>
          <div className="hero-generated-quote-logo-row" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </>
      ) : (
        <div className="hero-generated-video-card">
          <strong>{title}</strong>
        </div>
      )}
    </div>
  );
}

function HeroVideoCarousel() {
  return (
    <div className="hero-video-carousel" aria-label="Glow Social finished social post examples">
      <div className="blackbox-output-rail" aria-hidden="true">
        <div className="blackbox-output-track">
          {heroCarouselGroups.map((group, groupIndex) => (
            <div className="blackbox-output-group" key={`post-group-${groupIndex}`}>
              {group.map((slide, index) => {
                const engagement = heroPostEngagement[index % heroPostEngagement.length];

                return (
                  <article
                    className={`hero-video-card hero-video-card--${slide.accent} hero-video-card--${slide.type}`}
                    style={{
                      "--card-offset": slide.offset,
                    }}
                    key={`${slide.title}-${slide.type}-${groupIndex}-${index}`}
                  >
                    <div className="hero-post-header">
                      <span className="hero-post-avatar">{slide.avatar}</span>
                      <span className="hero-post-name">
                        <strong>{slide.title}</strong>
                        <small>{slide.meta}</small>
                      </span>
                      <span className="hero-post-menu">•••</span>
                    </div>
                    {slide.type === "quote" ? (
                      <div className="hero-quote-media">
                        <HeroGeneratedArtwork
                          eyebrow={slide.platform}
                          image={slide.image}
                          quoteStyle={slide.quoteStyle}
                          title={`"${slide.quote}"`}
                          variant="quote"
                        />
                      </div>
                    ) : slide.type === "carousel" ? (
                      <div className="hero-carousel-media">
                        <div className="hero-carousel-stack">
                          {slide.slides.map(([number], slideIndex) => (
                            <div className="hero-carousel-slide" key={`${slide.title}-${number}`}>
                              <span
                                className="hero-carousel-rendered-slide"
                                style={{ "--hero-carousel-slide-image": `url(${slide.carouselImages[slideIndex]})` }}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="hero-carousel-dots" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    ) : (
                      <div className="hero-video-media">
                        <HeroGeneratedArtwork
                          eyebrow={slide.platform}
                          image={slide.image}
                          title={slide.visualTitle}
                          variant="video"
                        />
                        <span className="hero-video-play" />
                        <span className="hero-video-progress" />
                      </div>
                    )}
                    <div className="hero-post-actions">
                      <span className="hero-post-action-set">
                        <span className="hero-post-action-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
                        </span>
                        <span className="hero-post-action-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5A8.5 8.5 0 0 1 21 11v.5z" /></svg>
                        </span>
                        <span className="hero-post-action-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7z" /></svg>
                        </span>
                      </span>
                      <span className="hero-post-action-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 21 12 17 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                      </span>
                    </div>
                    <p className="hero-post-stats">
                      <strong>{engagement.likes} likes</strong>
                      <span>{engagement.comments} comments</span>
                    </p>
                  </article>
                );
              })}
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

function HeroPreviewBridge() {
  return (
    <div className="hero-preview-bridge" aria-label="Preview output">
      <span className="hero-preview-pill hero-preview-pill--url">yourbusiness.com</span>
      <svg className="hero-preview-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <line x1="4" y1="12" x2="19" y2="12" />
        <polyline points="13 6 19 12 13 18" />
      </svg>
      <span className="hero-preview-pill">20 posts ready</span>
      <span className="hero-preview-pill">Social + Google</span>
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
          <span className="section-kicker">How it works</span>
          <h2 id="product-demo-heading">One website in. A month of posts out.</h2>
          <p className="section-sub">
            Add your URL. <BrandName /> drafts the posts, gives you final say, and publishes what you approve.
          </p>
          <a
            href="https://app.glowsocial.com/preview"
            className="btn btn--primary product-demo-cta"
            data-analytics-event="how_it_works_cta_click"
            data-analytics-label="How it works preview CTA"
            data-analytics-location="how_it_works"
          >
            Get a preview
          </a>
        </div>
        <div className="product-demo-story">
          {productDemoSteps.map((item, index) => (
            <article
              className={`product-demo-step product-demo-step--${item.visual}${index % 2 === 1 ? " product-demo-step--reverse" : ""}`}
              key={item.step}
            >
              <div className="product-demo-copy">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <div className="product-demo-stage">
                <div className="product-demo-signal product-demo-signal--top">
                  <span>{item.signals[0][0]}</span>
                  <strong>{item.signals[0][1]}</strong>
                </div>
                <div className="product-demo-frame">
                  <div className="product-demo-browser-bar" aria-hidden="true">
                    <span className="product-demo-browser-dots">
                      <span />
                      <span />
                      <span />
                    </span>
                    <strong>{item.frameTitle}</strong>
                    <span>{item.frameUrl}</span>
                  </div>
                  <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
                </div>
                <div className="product-demo-signal product-demo-signal--bottom">
                  <span>{item.signals[1][0]}</span>
                  <strong>{item.signals[1][1]}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="product-demo-url-cta" aria-labelledby="product-demo-url-heading">
          <div className="product-demo-url-copy">
            <span className="section-kicker">Ready to see yours?</span>
            <h3 id="product-demo-url-heading">Put your website in. See the posts.</h3>
          </div>
          <div className="product-demo-url-action">
            <form
              className="product-demo-url-form"
              action="https://app.glowsocial.com/preview"
              method="get"
              data-analytics-event="steps_preview_submit"
              data-analytics-label="After step four preview form"
              data-analytics-location="after_steps"
            >
              <div className="product-demo-url-input-wrap">
                <svg className="product-demo-url-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <input
                  type="text"
                  name="url"
                  placeholder="yourbusiness.com"
                  autoComplete="off"
                  inputMode="url"
                  aria-label="Business website"
                  required
                />
                <button type="submit">
                  <span>See my posts</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>
            </form>
            <p>No login. No payment. See the posts first.</p>
          </div>
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
          From making posts yourself to reviewing what is ready.
        </h2>
        <div className="before-after-card">
          <div className="before-after-column before-after-column--before">
            <p className="section-kicker">Before</p>
            <h3>Doing social manually</h3>
          </div>
          <div className="before-after-column before-after-column--after">
            <p className="section-kicker">After</p>
            <h3>Glow Social keeping it handled</h3>
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
          <span className="section-kicker">See it before you pay</span>
          <h2 id="proof-heading">Your preview shows the actual month.</h2>
          <p>
            The first decision is simple: enter your website, see the posts,
            and decide whether they look like your business.
          </p>
        </div>
        <div className="proof-preview-card" aria-label="What a Glow Social preview includes">
          <div className="proof-preview-flow">
            <span>yourbusiness.com</span>
            <strong>20 posts ready to review</strong>
          </div>
          <div className="proof-preview-grid">
            <div>
              <span>Captions</span>
              <strong>Written from your site</strong>
            </div>
            <div>
              <span>Visuals</span>
              <strong>Generated for the post</strong>
            </div>
            <div>
              <span>Control</span>
              <strong>Approve, edit, or skip</strong>
            </div>
          </div>
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
              <span>Your website becomes</span>
              {" "}
              <span className="hero-for-line"><strong>a month</strong> of posts.</span>
            </h1>
            <p className="hero-sub">
              Drop in your URL. Get 20 posts ready to approve for social and Google Business. No prompts, no content calendar, no figuring out what to say.
            </p>
            <form
              className="hero-url-form"
              action="https://app.glowsocial.com/preview"
              method="get"
              id="hero-url-form"
              data-analytics-event="hero_preview_submit"
              data-analytics-label="Hero preview form"
              data-analytics-location="hero"
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
                  <span>See my posts</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </form>
            <HeroPreviewBridge />
            <p className="hero-url-hint">
              No login. No payment. See the posts first.
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
            <div><strong>No strategy</strong> homework</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
            <div><strong>Social + Google</strong> covered</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <div><strong>No contracts</strong> cancel anytime</div>
          </div>
          <a
            className="trust-stat trust-stat--grant"
            href="https://elevenlabs.io/startup-grants"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v4a5 5 0 0 1-10 0V4z" /><path d="M5 5H3v2a4 4 0 0 0 4 4" /><path d="M19 5h2v2a4 4 0 0 1-4 4" /></svg>
            <div><strong>ElevenLabs</strong> grant recipient</div>
          </a>
        </div>
      </section>

      <ChannelCoverage />
      <ProductDemoSection />
      <OutcomeSection />
      <CustomerProof />

      {/* ============ PRICING ============ */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Start with steady posting. Add more only when you need it.</h2>
          <p className="section-sub">Core keeps your posts going. Add review monitoring, carousels, video posts, and campaign support only when they are useful. {pricing.billingPolicy}</p>
          <p className="pricing-preview-note">Preview first if you want to see the posts before choosing a plan. No login or payment required.</p>
          <a
            href="https://app.glowsocial.com/preview"
            className="btn btn--primary pricing-preview-cta"
            data-analytics-event="pricing_preview_cta_click"
            data-analytics-label="Pricing preview first CTA"
            data-analytics-location="pricing"
          >
            See your own posts first
          </a>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Glo Core</h3>
              <p className="price-fit">Best for steady local presence</p>
              <div className="price"><span className="price-amount">{pricing.core.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>20 posts/month</strong> based on what your customers care about</li>
                <li><strong>Post topics</strong> pulled from your website</li>
                <li><strong>Google Business</strong> posts included</li>
                <li><strong>Simple control</strong> before posts go live</li>
              </ul>
              <a
                href="https://app.glowsocial.com/checkout?plan=core"
                className="btn btn--outline"
                id="pricing-core-cta"
                data-analytics-event="pricing_cta_click"
                data-analytics-label="Start with Core"
                data-analytics-location="pricing"
                data-analytics-plan="core"
              >
                START WITH CORE
              </a>
            </div>
            <div className="price-card price-card--featured">
              <span className="popular-badge">Most popular</span>
              <h3>Glo Pro</h3>
              <p className="price-fit">Best for richer social posts</p>
              <div className="price"><span className="price-amount">{pricing.pro.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li><strong>Carousel posts</strong> for richer stories</li>
                <li><strong>Video posts</strong> when a topic needs more than text</li>
                <li><strong>Posts for promos and events</strong></li>
                <li><strong>Google review monitoring</strong></li>
              </ul>
              <a
                href="https://app.glowsocial.com/checkout?plan=pro"
                className="btn btn--primary"
                id="pricing-pro-cta"
                data-analytics-event="pricing_cta_click"
                data-analytics-label="Start with Pro"
                data-analytics-location="pricing"
                data-analytics-plan="pro"
              >
                START WITH PRO
              </a>
            </div>
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <p className="price-fit">Best for busier seasons</p>
              <div className="price"><span className="price-amount">{pricing.unlimited.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>More posts</strong> for busier seasons</li>
                <li><strong>More room</strong> for launches, promos, and events</li>
                <li><strong>Campaign posts</strong> across your offers</li>
              </ul>
              <a
                href="https://app.glowsocial.com/checkout?plan=unlimited"
                className="btn btn--outline"
                id="pricing-unlimited-cta"
                data-analytics-event="pricing_cta_click"
                data-analytics-label="Start with Unlimited"
                data-analytics-location="pricing"
                data-analytics-plan="unlimited"
              >
                START WITH UNLIMITED
              </a>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterSection />

      {/* ============ FINAL CTA — Emotional close ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>See a month of posts<br />before you pay.</h2>
          <p>Enter your website and <BrandName /> will create posts for social and Google Business that are ready for you to approve.</p>
          <form
            className="final-preview-form"
            action="https://app.glowsocial.com/preview"
            method="get"
            data-analytics-event="final_preview_submit"
            data-analytics-label="Final preview form"
            data-analytics-location="final_cta"
          >
            <div className="final-preview-input-wrap">
              <input
                type="text"
                name="url"
                placeholder="yourbusiness.com"
                autoComplete="off"
                inputMode="url"
                aria-label="Business website"
                required
              />
              <button type="submit" id="final-cta">
                See my posts
              </button>
            </div>
          </form>
          <span className="final-preview-note">No login. No payment. See the posts first.</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Questions from business owners who want social media handled</h2>
          <div className="faq-list">
            <details className="faq-item"><summary><span className="faq-question">Will this get me more customers?</span></summary><p><BrandName /> is not a replacement for advertising. It helps your business look current when people already considering you check your profiles before they call, book, visit, or refer.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much does <BrandName /> cost?</span></summary><p>{pricing.summaryFull} {pricing.billingPolicy} You keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Can I see posts before I pay?</span></summary><p>Yes. Enter your website to generate a free preview first. You can review the actual posts before you create an account or choose a plan.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Do I need to connect accounts before the preview?</span></summary><p>No. The preview only needs your website. You connect social accounts later, after you have seen the posts and decided you want approved posts published.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Can I cancel anytime?</span></summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much do I have to do?</span></summary><p>Give us your website, review the posts, approve what fits, and connect your social accounts. After that, approved posts go out on schedule.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How does <BrandName /> know what to post?</span></summary><p>We use your website plus our own marketing process shaped by 20+ years of experience to identify what customers care about, why they should trust you, and what makes you different.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How is this different from hiring an agency or using a scheduler?</span></summary><p>A scheduler gives you another empty calendar to fill. An agency can help, but usually costs more and takes more onboarding. <BrandName /> sits in the middle: your website goes in, 20 posts come back for review, and approved posts go out on schedule without a contract.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Can I edit before anything posts?</span></summary><p>Yes. You stay in control. Edit the caption, swap the image, skip anything that does not fit, or remove it before it goes live. You always have the final say on what gets published.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Does <BrandName /> post to Google Business Profile?</span></summary><p>Yes. <BrandName /> publishes to Google Business Profile alongside your regular social content, so the profile customers check does not go quiet.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Who is <BrandName /> best for?</span></summary><p><BrandName /> is for business owners who know social media matters but do not want to become content creators, learn another tool, hire an agency, or keep remembering to post.</p></details>
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
