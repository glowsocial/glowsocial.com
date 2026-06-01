import "./native-wireframe.css";

export const metadata = {
  title: "Native.no Homepage Wireframe",
  description: "A structural wireframe of the native.no home page adapted for Glow Social planning.",
  robots: {
    index: false,
    follow: false,
  },
};

const socialCards = [
  ["fb", "Local Bakery", "Customer review post", "photo"],
  ["ig", "Studio Brand", "Product feature post", "portrait"],
  ["in", "Recruiting Firm", "Thought leadership post", "graphic"],
  ["fb", "Home Service", "Seasonal reminder post", "photo"],
  ["ig", "Wellness Studio", "Offer reminder post", "scenic"],
];

const channels = ["Facebook", "Instagram", "LinkedIn", "X", "TikTok", "Pinterest", "Reddit", "Bluesky"];

const processSteps = [
  {
    number: "1",
    eyebrow: "Add your website",
    title: "Add your website.",
    body:
      "You add your website. Glow researches your business, your industry, and your competitors. The rest runs on autopilot.",
    visual: "setup",
  },
  {
    number: "2",
    eyebrow: "Analysis and content",
    title: "We do the work.",
    body:
      "While you wait, Glow builds a tailored content plan and generates posts for each of your channels.",
    visual: "analysis",
  },
  {
    number: "3",
    eyebrow: "Automatic publishing",
    title: "You approve. We publish.",
    body:
      "Glow drafts the posts. You approve what fits, skip what does not, and publishing runs after approval.",
    visual: "approval",
  },
  {
    number: "4",
    eyebrow: "Refine",
    title: "Tell Glow what to change. It does it.",
    body:
      "Almost love the post, but not quite? Describe the change in plain words and get new copy and image variants.",
    visual: "refine",
  },
];

const comparisonRows = [
  ["Monthly cost", "$79", "$1.5-5K+", "$4.5-6K"],
  ["Time to start up", "2 minutes", "2-4 weeks", "2-3 months"],
  ["Administration", "None", "Meetings, emails, approvals", "Follow-up, 1:1, HR"],
  ["Binding", "None", "3-6 months", "Notice period"],
];

const faqs = [
  "Do I need to be good at creating content to use this?",
  "Will the content actually sound like my brand?",
  "Will this work if I do not have a big following yet?",
  "What kind of content does Glow create?",
  "Is my data secure?",
  "Will this actually help my business?",
  "Can I use this for my whole company?",
];

const guideCards = [
  ["Referral launch", "Insights", "May 19, 2026"],
  ["Analytics launch", "Insights", "May 18, 2026"],
  ["Four-week product recap", "Company", "May 14, 2026"],
];

function BrandMark({ small = false }) {
  return (
    <div className={small ? "nw-brand nw-brand-small" : "nw-brand"}>
      <span className="nw-brand-star" aria-hidden="true">
        *
      </span>
      <span>Glow</span>
    </div>
  );
}

function HeroCard({ card, index }) {
  const [icon, name, title, variant] = card;

  return (
    <article className={`nw-social-card nw-social-card-${index}`}>
      <div className="nw-social-card-top">
        <span className={`nw-social-icon nw-social-icon-${icon}`}>{icon}</span>
        <div>
          <strong>{name}</strong>
          <small>2h</small>
        </div>
        <span className="nw-status-dot" />
      </div>
      <p>{title}</p>
      <div className={`nw-card-media nw-card-media-${variant}`} />
      <div className="nw-social-actions">
        <span>Like</span>
        <span>Comment</span>
        <span>Share</span>
      </div>
    </article>
  );
}

function SetupVisual() {
  return (
    <div className="nw-step-visual nw-setup-visual">
      <div className="nw-node nw-node-left">Industry</div>
      <div className="nw-node nw-node-right">Voice</div>
      <div className="nw-node nw-node-center">
        <strong>You are in</strong>
        <span>Starting the analysis</span>
      </div>
      <span className="nw-connector nw-connector-one" />
      <span className="nw-connector nw-connector-two" />
      <span className="nw-connector nw-connector-three" />
      <div className="nw-url-card">yourcompany.com</div>
    </div>
  );
}

function AnalysisVisual() {
  return (
    <div className="nw-step-visual nw-analysis-visual">
      <aside>
        {["Reading the site", "Extracting brand DNA", "Mapping competitors", "Profiling audience", "Drafting content plan"].map(
          (item) => (
            <div key={item} className="nw-check-row">
              <span />
              {item}
            </div>
          ),
        )}
      </aside>
      <div className="nw-browser-frame">
        <div className="nw-browser-bar">
          <span />
          <span />
          <span />
          <p>client-site.com</p>
        </div>
        <div className="nw-hero-photo-placeholder">
          <strong>Business Name</strong>
          <span>Positioning summary</span>
        </div>
        <div className="nw-analysis-grid">
          <div>
            <b>Brand</b>
            <p>Voice notes and palette</p>
          </div>
          <div>
            <b>Competitors</b>
            <p>Three market references</p>
          </div>
          <div>
            <b>Audience</b>
            <p>Segments and pain points</p>
          </div>
          <div>
            <b>This week</b>
            <p>Content plan cards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApprovalVisual() {
  return (
    <div className="nw-step-visual nw-approval-visual">
      <div className="nw-approval-stage">
        <article className="nw-approval-card">
          <div className="nw-approval-image" />
          <div className="nw-approval-copy">
            <small>Facebook / AI suggestion</small>
            <h3>Post headline preview</h3>
            <p>Short caption preview with platform-specific copy.</p>
          </div>
        </article>
        <div className="nw-approval-controls">
          <button type="button">x</button>
          <span>12 in queue</span>
          <button type="button">check</button>
        </div>
      </div>
      <aside className="nw-recent-rail">
        <div>
          <strong>Recent</strong>
          <span>2</span>
        </div>
        <p>Skipped post title</p>
        <p>Approved post title</p>
      </aside>
    </div>
  );
}

function RefineVisual() {
  return (
    <div className="nw-refine-layout">
      <article className="nw-refine-post">
        <div className="nw-refine-image" />
        <div className="nw-refine-caption">
          <small>Instagram / Today</small>
          <h3>Caption headline</h3>
          <p>Draft caption text continues here.</p>
        </div>
      </article>
      <div className="nw-refine-chat">
        <header>
          <span className="nw-chat-icon">*</span>
          <div>
            <strong>Refine</strong>
            <small>Glow AI</small>
          </div>
        </header>
        <div className="nw-chat-body">
          <p className="nw-chat-bubble nw-chat-bubble-right">Make the photo more dramatic</p>
          <div className="nw-variation-row">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="nw-chat-bubble nw-chat-bubble-right">Rewrite the caption with more warmth</p>
          <p className="nw-chat-bubble">Try this version.</p>
        </div>
        <footer>
          <span>Rewrite the caption with more warmth</span>
          <button type="button">go</button>
        </footer>
      </div>
    </div>
  );
}

function StepVisual({ type }) {
  if (type === "setup") return <SetupVisual />;
  if (type === "analysis") return <AnalysisVisual />;
  if (type === "approval") return <ApprovalVisual />;
  return <RefineVisual />;
}

function ProcessStep({ step }) {
  return (
    <section className="nw-process-step">
      <div className="nw-section-shell">
        <div className="nw-step-copy">
          <p className="nw-eyebrow">
            {step.number}. {step.eyebrow}
          </p>
          <h2>{step.title}</h2>
          <p>{step.body}</p>
          <div className="nw-step-actions">
            <a href="#login">Log in</a>
            <a href="#start">Get started</a>
          </div>
        </div>
        <StepVisual type={step.visual} />
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="nw-pricing-section" id="pricing">
      <div className="nw-pricing-bg" aria-hidden="true" />
      <div className="nw-section-shell">
        <div className="nw-pricing-heading">
          <p className="nw-eyebrow">Pricing</p>
          <h2>One plan for autopilot.</h2>
          <p>Pick the AI allowance that matches your growth ambition.</p>
        </div>
        <div className="nw-toggle">
          <span>Monthly</span>
          <strong>Yearly</strong>
          <em>-40%</em>
        </div>
        <div className="nw-plan-grid">
          <article className="nw-plan-card nw-plan-card-featured">
            <span className="nw-plan-badge">Best for growth</span>
            <p>A whole month of content, ready for approval.</p>
            <div className="nw-price"><small>$</small>47</div>
            <span>per month, billed yearly</span>
            <a href="#posts">See your own posts</a>
            <h3>What you get</h3>
            <ul>
              <li>50+ posts a month, ready for approval</li>
              <li>Tailored to your tone and industry</li>
              <li>All your channels in one workflow</li>
              <li>Auto-publishing once approved</li>
              <li>Analytics on what is working</li>
            </ul>
          </article>
          <article className="nw-plan-card">
            <span className="nw-plan-badge">For teams scaling</span>
            <p>Higher AI allowance and priority support for multiple brands.</p>
            <div className="nw-price"><small>$</small>149</div>
            <span>per month, billed yearly</span>
            <a href="#max">Get started with Max</a>
            <h3>Everything in Pro, plus</h3>
            <ul>
              <li>5x AI usage</li>
              <li>Priority support</li>
              <li>Early access to new features</li>
            </ul>
          </article>
        </div>
        <div className="nw-channel-strip">
          <p>All these channels can be connected to every brand</p>
          <div>
            {channels.map((channel) => (
              <span key={channel}>{channel}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const before = [
    "You create all content yourself",
    "You plan and schedule every post manually",
    "You need to master every platform algorithm",
    "Requires a dedicated marketing hire or agency",
    "High cost with unpredictable results",
    "Time-consuming and pulls focus from your business",
  ];
  const after = [
    "AI creates tailored content for your brand",
    "Automatic scheduling and posting across platforms",
    "Platform-optimized content for maximum reach",
    "No need for a marketing team or agency",
    "One affordable price, consistent results",
    "Runs on autopilot while you focus on the business",
  ];

  return (
    <section className="nw-before-after">
      <div className="nw-section-shell">
        <h2>
          <span>Traditional marketing is a full-time job</span>
          Glow does it for you
        </h2>
        <div className="nw-compare-card">
          <div>
            <p className="nw-eyebrow">Before</p>
            <h3>Traditional social media</h3>
            <ul>
              {before.map((item) => (
                <li key={item}>
                  <span>x</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <span className="nw-vs">vs</span>
          <div>
            <p className="nw-eyebrow">After</p>
            <BrandMark small />
            <ul>
              {after.map((item) => (
                <li key={item}>
                  <span>ok</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="nw-testimonial-section" id="proof">
      <div className="nw-section-shell">
        <div className="nw-testimonial-heading">
          <h2>Loved by small- to medium size enterprises</h2>
          <p>Get more done with less, without taking our word for it.</p>
        </div>
        <div className="nw-testimonial-layout">
          <div className="nw-person-stack">
            <div className="nw-person-photo" />
            <span />
            <span />
          </div>
          <blockquote>
            <span className="nw-quote-mark">&quot;</span>
            <p>
              With Glow, we get professional social media content without taking time away from
              what really matters.
            </p>
            <p>Simple, effective, and easy to recommend to other local businesses.</p>
            <footer>
              <span className="nw-avatar" />
              <div>
                <strong>Customer Name</strong>
                <small>Owner at Local Business</small>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="nw-slider-controls">
          <span />
          <button className="nw-slider-prev" type="button" aria-label="Previous testimonial" />
          <button className="nw-slider-next" type="button" aria-label="Next testimonial" />
        </div>
      </div>
    </section>
  );
}

function CostComparisonSection() {
  return (
    <section className="nw-cost-section">
      <div className="nw-cost-card">
        <h2>All your marketing, on autopilot</h2>
        <p>See how Glow compares to the alternatives</p>
        <div className="nw-cost-table">
          <div className="nw-cost-head">
            <span />
            <strong>Glow</strong>
            <strong>Agency</strong>
            <strong>Employee</strong>
          </div>
          {comparisonRows.map((row) => (
            <div className="nw-cost-row" key={row[0]}>
              {row.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
        <small>Pricing notes and assumptions sit below the comparison table.</small>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="nw-faq-section">
      <div className="nw-section-shell">
        <div className="nw-section-heading">
          <h2>Frequently asked questions</h2>
          <p>In case anything is still unclear.</p>
        </div>
        <div className="nw-faq-list">
          {faqs.map((faq) => (
            <details key={faq}>
              <summary>
                {faq}
                <span>v</span>
              </summary>
              <p>
                Yes. Glow researches your business context, drafts the content, and keeps you in
                control before anything publishes.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuidesSection() {
  return (
    <section className="nw-guides-section">
      <div className="nw-section-shell">
        <div className="nw-guides-head">
          <div>
            <h2>Guides to take over the business world</h2>
            <p>Read more about growing with autonomous AI social media agents.</p>
          </div>
          <a href="#articles">More articles</a>
        </div>
        <div className="nw-guide-grid">
          {guideCards.map(([title, tag, date], index) => (
            <article key={title} className={index > 0 ? "nw-guide-muted" : ""}>
              <div className={`nw-guide-image nw-guide-image-${index}`} />
              <h3>{title}</h3>
              <p>
                <span>{tag}</span>
                {date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PageFooter() {
  return (
    <footer className="nw-footer">
      <div className="nw-section-shell">
        <div className="nw-final-cta">
          <div>
            <h2>Take control of your social media</h2>
            <a href="#start">Get started</a>
          </div>
          <div className="nw-final-illustration" />
        </div>
        <div className="nw-footer-grid">
          <div>
            <BrandMark />
            <p>Your social media on autopilot.</p>
            <div className="nw-social-links">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div>
            <h3>Product</h3>
            <a href="#roadmap">Roadmap</a>
            <a href="#changelog">Changelog</a>
            <a href="#status">Status</a>
            <a href="#guides">Guides</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#partners">Partnerships</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>
          <form>
            <h3>Newsletter</h3>
            <label>
              <span>Email</span>
              <input type="email" placeholder="hello@example.com" />
            </label>
            <button type="button">Submit</button>
          </form>
        </div>
        <p className="nw-footer-bottom">Glow Social wireframe. Source structure observed from native.no.</p>
      </div>
    </footer>
  );
}

export default function NativeWireframePage() {
  return (
    <div className="native-wireframe-page">
      <header className="nw-hero" id="top">
        <div className="nw-scenic-bg" aria-hidden="true">
          <span className="nw-mountain nw-mountain-left" />
          <span className="nw-mountain nw-mountain-right" />
          <span className="nw-waterline" />
        </div>
        <nav className="nw-nav" aria-label="Wireframe navigation">
          <BrandMark />
          <div className="nw-nav-links">
            <a href="#how">How it works</a>
            <a href="#proof">Who we are</a>
            <a href="#pricing">What it costs</a>
            <a href="#contact">Get in touch</a>
          </div>
          <div className="nw-nav-actions">
            <a href="#login">Log in</a>
            <a href="#start">Get started</a>
            <button type="button" aria-label="Language selector" />
          </div>
        </nav>
        <div className="nw-hero-center">
          <div className="nw-floating-thumb" aria-hidden="true" />
          <h1>
            <span>Social media</span>
            <em>for local businesses</em>
          </h1>
          <p>Get more customers on autopilot.</p>
          <form className="nw-url-form">
            <label>
              <span>Website URL</span>
              <input type="url" placeholder="yourcompany.com" />
            </label>
            <button type="button">Generate {"->"}</button>
          </form>
          <small>Drop your URL and generate a month of draft posts.</small>
        </div>
        <div className="nw-card-rail" aria-label="Generated post examples">
          {socialCards.map((card, index) => (
            <HeroCard card={card} index={index} key={`${card[1]}-${index}`} />
          ))}
        </div>
      </header>

      <section className="nw-trust-strip">
        <p>As seen in</p>
        <div>
          <span>Press logo</span>
          <span>Press logo</span>
          <span>Press logo</span>
        </div>
      </section>

      <section className="nw-video-bridge">
        <div className="nw-video-frame">
          <span className="nw-play-button" aria-hidden="true" />
          <h2>How to use Glow</h2>
          <p>With the product team</p>
        </div>
      </section>

      <section className="nw-how-heading" id="how">
        <h2>This is how it works</h2>
        <p>See how the workflow fits into four steps.</p>
      </section>

      {processSteps.map((step) => (
        <ProcessStep key={step.number} step={step} />
      ))}

      <PricingSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <CostComparisonSection />
      <FaqSection />
      <GuidesSection />
      <PageFooter />
    </div>
  );
}
