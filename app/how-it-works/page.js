import Link from "next/link";
import { getPricing } from "../pricing-config";
import "./page.css";

export const metadata = {
  title: "How Glow Social Works",
  description:
    "See what happens after checkout: choose a plan, share your business details, create your account, and review your first Glow Social drafts before anything publishes.",
};

const setupItems = [
  "Your business name",
  "Your website, if you have one",
  "The email you want to use for your account",
  "A payment card for secure Stripe checkout",
];

const steps = [
  {
    number: "01",
    eyebrow: "Choose a plan",
    title: "Pick the monthly package that fits how much you want posted.",
    body: "Start with Core, Pro, or Unlimited. You can cancel anytime, and the plan you choose tells Glow Social how many drafts to prepare each month.",
    preview: "plan",
  },
  {
    number: "02",
    eyebrow: "Secure checkout",
    title: "Stripe collects payment plus the two details needed to start.",
    body: "Checkout asks for your business name and an optional website URL. That gives Glow Social enough context to begin without sending you through a long intake form.",
    preview: "checkout",
  },
  {
    number: "03",
    eyebrow: "Create your login",
    title: "After payment, set up the account you will use to review drafts.",
    body: "Use Google or create a password. Your subscription details stay connected so your workspace can be prepared in the background.",
    preview: "account",
  },
  {
    number: "04",
    eyebrow: "Work starts",
    title: "Your first batch gets prepared while you get on with your day.",
    body: "The setup page shows that your website is being reviewed, your brand style is being matched, and your first drafts are being prepared.",
    preview: "work",
  },
  {
    number: "05",
    eyebrow: "Review drafts",
    title: "Nothing publishes until you approve it.",
    body: "When the drafts are ready, open the app, review each post, edit anything you want, and connect the profiles you want kept active.",
    preview: "review",
  },
];

function JsonLd({ pricing }) {
  const questions = [
    {
      name: "How does Glow Social checkout work?",
      text: "Choose a plan, complete secure Stripe checkout, enter your business name and optional website URL, then create your Glow Social account.",
    },
    {
      name: "What does Glow Social need to get started?",
      text: "Glow Social needs your business name, your email, payment details, and your website URL if you have one.",
    },
    {
      name: "Do I have to connect social accounts before seeing drafts?",
      text: "No. Glow Social prepares the first drafts first. You can connect social profiles after you see what is ready to review.",
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
      detail: "12 posts per month",
      href: "https://app.glowsocial.com/checkout?plan=core",
    },
    {
      name: pricing.pro.name,
      price: pricing.pro.display,
      detail: "More posts, plus review monitoring",
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
        <h3>Choose your plan</h3>
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
        <h3>You are in. One last step.</h3>
        <p>Set a password or use Google so you can come back to review your drafts.</p>
        <div className="email-chip">
          <span>Your email</span>
          <strong>owner@desertbloom.example</strong>
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
            <span className="walkthrough-badge">Checkout walkthrough</span>
            <h1>See what happens after you choose Glow Social.</h1>
            <p>
              The short version: choose a plan, complete secure checkout, create your login, and let Glow Social prepare your first drafts for review.
            </p>
            <p>
              {pricing.summaryFull} {pricing.billingPolicy}
            </p>
            <div className="walkthrough-ctas">
              <a href="https://app.glowsocial.com/checkout?plan=core" className="btn btn--primary btn--lg">
                Start with {pricing.core.display}
              </a>
              <Link href="#steps" className="btn btn--outline btn--lg">
                View steps
              </Link>
            </div>
          </div>
          <CheckoutPreview pricing={pricing} />
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
            <h2>From checkout to first drafts.</h2>
            <p>
              No long intake form. No platform-connection pressure before you see value. Just enough setup for Glow Social to start preparing posts.
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
            <h2>You review every post before anything goes live.</h2>
            <p>
              Glow Social prepares the drafts and keeps the workflow moving. You stay in control of approvals, edits, and which profiles are connected.
            </p>
          </div>
          <a href="https://app.glowsocial.com/checkout?plan=core" className="btn btn--primary btn--lg">
            Start checkout
          </a>
        </div>
      </section>
    </>
  );
}
