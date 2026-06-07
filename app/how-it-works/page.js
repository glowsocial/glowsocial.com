import Link from "next/link";
import { getPricing } from "../pricing-config";
import "./page.css";

export const metadata = {
  title: "How Glow Social Works",
  description:
    "Drop in your website, see posts ready to approve, then choose the plan and profiles you want Glow Social to keep active.",
};

const setupItems = [
  "Your website URL",
  "Your email",
  "A few minutes to review posts",
  "Social accounts later, after you see value",
];

const steps = [
  {
    number: "01",
    eyebrow: "Website in",
    title: "Start with your URL, not a blank content calendar.",
    body: "Glow Social uses your site to understand what you do, how you talk about it, and what customers need to hear. No prompts or strategy homework required.",
    preview: "work",
  },
  {
    number: "02",
    eyebrow: "Posts ready",
    title: "You see a month of posts before social media becomes another chore.",
    body: "Review what is ready, edit anything that needs your voice, and skip anything that does not fit. The first win is seeing usable posts.",
    preview: "review",
  },
  {
    number: "03",
    eyebrow: "Choose a plan",
    title: "Pick the amount of help you want after the preview.",
    body: "Core keeps steady posting going. Pro adds carousels, video, campaigns, and review monitoring. Unlimited gives busy businesses more room.",
    preview: "plan",
  },
  {
    number: "04",
    eyebrow: "Secure checkout",
    title: "Checkout collects only what is needed to keep the work moving.",
    body: "Stripe handles payment securely. Your business details and website stay connected so Glow Social can keep preparing posts each month.",
    preview: "checkout",
  },
  {
    number: "05",
    eyebrow: "Connect when ready",
    title: "Nothing publishes until you approve it.",
    body: "Connect only the profiles you want kept active. Glow Social handles the posting rhythm after you approve what should go live.",
    preview: "account",
  },
];

function JsonLd({ pricing }) {
  const questions = [
    {
      name: "How does Glow Social work?",
      text: "Enter your website, review posts created from your business context, choose a plan if it is a fit, then approve the posts you want Glow Social to publish.",
    },
    {
      name: "What does Glow Social need to get started?",
      text: "Glow Social needs your website URL and email to create a preview. Payment details and social account connections come later if you choose a plan.",
    },
    {
      name: "Do I have to connect social accounts before seeing drafts?",
      text: "No. Glow Social prepares preview posts first. You can connect social profiles after you see what is ready to review.",
    },
    {
      name: "Does Glow Social publish without approval?",
      text: "No. You review and approve posts before anything can go live.",
    },
    {
      name: "How much does Glow Social cost?",
      text: `${pricing.summaryFull} ${pricing.billingPolicy}`,
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: questions.map((question) => ({
            "@type": "Question",
            name: question.name,
            acceptedAnswer: {
              "@type": "Answer",
              text: question.text,
            },
          })),
        }),
      }}
    />
  );
}

function ScreenFrame({ label, children }) {
  return (
    <div className="walkthrough-screen">
      <div className="walkthrough-screen-bar">
        <div className="walkthrough-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>{label}</p>
      </div>
      <div className="walkthrough-screen-body">{children}</div>
    </div>
  );
}

function PlanPreview({ pricing }) {
  const plans = [
    {
      name: pricing.core.name,
      price: pricing.core.display,
      detail: "20 posts per month",
      href: "https://app.glowsocial.com/checkout?plan=core",
    },
    {
      name: pricing.pro.name,
      price: pricing.pro.display,
      detail: "Carousels, video, plus review monitoring",
      href: "https://app.glowsocial.com/checkout?plan=pro",
      featured: true,
    },
    {
      name: pricing.unlimited.name,
      price: pricing.unlimited.display,
      detail: "More room for requests",
      href: "https://app.glowsocial.com/checkout?plan=unlimited",
    },
  ];

  return (
    <ScreenFrame label="glowsocial.com/pricing">
      <div className="screen-title">
        <span>Pricing</span>
        <h3>Start with what you need</h3>
      </div>
      <div className="mini-plan-list">
        {plans.map((plan) => (
          <a
            key={plan.name}
            href={plan.href}
            className={plan.featured ? "mini-plan mini-plan-featured" : "mini-plan"}
          >
            <div>
              <strong>{plan.name}</strong>
              <p>{plan.detail}</p>
            </div>
            <span>{plan.price}</span>
          </a>
        ))}
      </div>
    </ScreenFrame>
  );
}

function CheckoutPreview({ pricing }) {
  return (
    <ScreenFrame label="checkout.glowsocial.com">
      <div className="checkout-preview">
        <div className="checkout-summary">
          <strong>{pricing.pro.name}</strong>
          <span>{pricing.pro.display}/month - Cancel anytime</span>
        </div>
        <label>
          <span>Business name</span>
          <div>Desert Bloom Salon</div>
        </label>
        <label>
          <span>Website URL</span>
          <div>https://desertbloom.example</div>
        </label>
        <label>
          <span>Card information</span>
          <div className="placeholder-text">Card number - MM / YY - CVC</div>
        </label>
        <div className="checkout-button">Subscribe</div>
      </div>
    </ScreenFrame>
  );
}

function AccountPreview() {
  return (
    <ScreenFrame label="Payment successful">
      <div className="account-preview">
        <div className="checkmark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Connect only what you want kept active.</h3>
        <p>After you see the posts, connect the profiles you want Glow Social to publish to.</p>
        <div className="email-chip">
          <span>Final say stays with you</span>
          <strong>Approve before publish</strong>
        </div>
        <div className="account-button account-button-outline" />
        <div className="account-button" />
      </div>
    </ScreenFrame>
  );
}

function WorkPreview() {
  const items = [
    ["Reviewing your website", "done"],
    ["Matching your brand style", "active"],
    ["Balancing your first batch", "active"],
    ["Drafting your first posts", "upcoming"],
  ];

  return (
    <ScreenFrame label="Workspace setup">
      <div className="work-preview">
        <div>
          <span className="preview-eyebrow">Work started</span>
          <h3>Your first posts are getting drafted now.</h3>
          <p>You can close this tab. We will email you when everything is ready to review.</p>
        </div>
        <div className="progress-list">
          {items.map(([item, status]) => (
            <div className="progress-row" key={item}>
              <span className={`progress-dot progress-${status}`} />
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </ScreenFrame>
  );
}

function ReviewPreview() {
  const posts = [
    "How to keep color-treated hair bright in summer",
    "Three signs your skin needs a calmer routine",
    "A quick reminder before your next appointment",
  ];

  return (
    <ScreenFrame label="Review drafts">
      <div className="review-preview">
        <div className="review-header">
          <div>
            <span>Action Required</span>
            <h3>First drafts</h3>
          </div>
          <div className="review-pill">Review</div>
        </div>
        <div className="draft-list">
          {posts.map((post) => (
            <div className="draft-card" key={post}>
              <span>Ready to review</span>
              <strong>{post}</strong>
              <div className="draft-actions" aria-hidden="true">
                <i />
                <i />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScreenFrame>
  );
}

function Preview({ type, pricing }) {
  if (type === "checkout") return <CheckoutPreview pricing={pricing} />;
  if (type === "account") return <AccountPreview />;
  if (type === "work") return <WorkPreview />;
  if (type === "review") return <ReviewPreview />;
  return <PlanPreview pricing={pricing} />;
}

export default function HowItWorks() {
  const pricing = getPricing();

  return (
    <>
      <JsonLd pricing={pricing} />

      <section className="walkthrough-hero">
        <div className="container walkthrough-hero-grid">
          <div>
            <span className="walkthrough-badge">How it works</span>
            <h1>Your website becomes posts ready to approve.</h1>
            <p>
              The short version: drop in your URL, see posts made from your actual business, choose a plan only when it feels useful, and approve what should go live.
            </p>
            <p>
              {pricing.summaryFull} {pricing.billingPolicy}
            </p>
            <div className="walkthrough-ctas">
              <a href="https://app.glowsocial.com/preview" className="btn btn--primary btn--lg">
                See my posts
              </a>
              <Link href="#steps" className="btn btn--outline btn--lg">
                View steps
              </Link>
            </div>
          </div>
          <WorkPreview />
        </div>
      </section>

      <section className="setup-strip">
        <div className="container setup-grid">
          {setupItems.map((item, index) => (
            <div className="setup-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="walkthrough-steps" id="steps">
        <div className="container">
          <div className="walkthrough-section-heading">
            <span className="walkthrough-badge">Step by step</span>
            <h2>From website to posts ready for review.</h2>
            <p>
              No long intake form. No platform-connection pressure before you see value. Just enough information for Glow Social to start doing the work.
            </p>
          </div>

          <div className="walkthrough-step-list">
            {steps.map((step, index) => (
              <article className={index % 2 === 1 ? "walkthrough-step reverse" : "walkthrough-step"} key={step.number}>
                <div className="walkthrough-step-copy">
                  <span>{step.number} - {step.eyebrow}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <Preview type={step.preview} pricing={pricing} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approval-callout">
        <div className="container approval-grid">
          <div>
            <span className="walkthrough-badge">The important part</span>
            <h2>You keep final say without becoming the social media person.</h2>
            <p>
              Glow Social prepares the drafts and keeps the workflow moving. You stay in control of approvals, edits, and which profiles are connected.
            </p>
          </div>
          <a href="https://app.glowsocial.com/preview" className="btn btn--primary btn--lg">
            See my posts
          </a>
        </div>
      </section>
    </>
  );
}
