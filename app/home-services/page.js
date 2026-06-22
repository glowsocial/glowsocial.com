import Link from "next/link";
import { getPricing } from "../pricing-config";
import { previewUrl } from "../../lib/marketing-links";
import "../affordable-social-media-management/affordable.css";

const PAGE_URL = "https://glowsocial.com/home-services";

export const metadata = {
  title: "Social Media for Home Service Businesses | Glow Social",
  description:
    "Done-for-you social media for home service businesses. Glow Social creates posts from your website, includes Google Business Profile posting, and starts at $99/month.",
  alternates: {
    canonical: "/home-services",
  },
  openGraph: {
    title: "Social Media for Home Service Businesses | Glow Social",
    description:
      "See home service posts from your website first. Glow Social helps plumbers, HVAC companies, electricians, roofers, and contractors stay active without doing the writing themselves.",
    url: PAGE_URL,
    siteName: "Glow Social",
    type: "website",
    images: [
      {
        url: "https://glowsocial.com/images/og-image.png?v=handled-2026-06",
        width: 1200,
        height: 630,
        alt: "Glow Social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media for Home Service Businesses | Glow Social",
    description:
      "Done-for-you social media for home service businesses, with posts made from your website and ready to approve.",
    images: ["https://glowsocial.com/images/og-image.png?v=handled-2026-06"],
  },
};

function JsonLd({ pricing }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Social Media for Home Service Businesses",
      serviceType: "Done-for-you social media management for home service businesses",
      provider: {
        "@type": "Organization",
        name: "Glow Social",
        url: "https://glowsocial.com",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Home service businesses",
      },
      description:
        "Glow Social creates social media posts from home service business websites, lets owners approve the posts, and publishes approved content to connected channels including Google Business Profile.",
      offers: {
        "@type": "Offer",
        price: pricing.core.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: PAGE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What should home service businesses post on social media?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Home service businesses should post job photos, seasonal reminders, service FAQs, maintenance tips, reviews, team introductions, and local proof that helps homeowners trust the business before they call.",
          },
        },
        {
          "@type": "Question",
          name: "Do plumbers, HVAC companies, and electricians need social media?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Social media helps home service businesses look current and credible when homeowners search the business name, compare options, or validate a referral before booking.",
          },
        },
        {
          "@type": "Question",
          name: "How does Glow Social help home service businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Glow Social reads the business website, creates posts ready to review, includes graphics and Google Business Profile posting, and publishes approved posts so the owner does not have to write content from scratch every week.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://glowsocial.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Home Services",
          item: PAGE_URL,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomeServices() {
  const pricing = getPricing();
  const heroPreviewUrl = previewUrl("home_services_page", "home_services_hero");
  const finalPreviewUrl = previewUrl("home_services_page", "home_services_final");

  return (
    <div className="affordable-page">
      <JsonLd pricing={pricing} />

      <section className="affordable-hero">
        <div className="container affordable-hero-grid">
          <div className="affordable-hero-copy">
            <p className="affordable-eyebrow">For plumbers, HVAC, electricians, roofers, and contractors</p>
            <h1>Social media for home service businesses.</h1>
            <p className="affordable-lede">
              Glow Social turns your website into posts ready to approve so your
              business stays active online while your team stays focused on jobs,
              estimates, and service calls.
            </p>
            <div className="affordable-cta-row">
              <a href={heroPreviewUrl} className="btn btn--primary btn--lg">
                See posts from your website first
              </a>
              <Link href="/google-business-profile-posting-service" className="btn btn--white-outline btn--lg">
                See GBP posting support
              </Link>
            </div>
            <div className="affordable-proof-row" aria-label="Home service social media proof points">
              <span>{pricing.startingAtFull}</span>
              <span>20 posts/month</span>
              <span>Preview first</span>
              <span>Google Business Profile included</span>
            </div>
          </div>

          <div className="agency-alternative-visual" aria-label="Home service social media workflow">
            <div className="affordable-card">
              <h3>1. Website in</h3>
              <p>Services, service areas, FAQs, offers, and proof become source material.</p>
            </div>
            <div className="affordable-card">
              <h3>2. Posts ready</h3>
              <p>Glow Social creates posts you can review, edit, skip, or approve.</p>
            </div>
            <div className="affordable-card">
              <h3>3. Profiles stay active</h3>
              <p>Approved posts publish so homeowners see a current, credible business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-answer">
        <div className="container affordable-answer-box">
          <p>
            Social media for home service businesses works best when it builds
            trust before the call. Homeowners usually check your business after a
            search or referral, so active pages, recent proof, and clear service
            updates help them feel comfortable choosing you. Glow Social handles
            that with posts created from your website starting at {pricing.startingAtFull}.
          </p>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">Why This Matters</p>
          <h2>Homeowners often validate the business before they call.</h2>
          <p className="section-sub">
            In home services, social media is not mainly about entertainment. It
            is a trust layer. People check whether you look current, local, and
            legitimate before they book a repair, estimate, or installation.
          </p>

          <div className="affordable-card-grid">
            <div className="affordable-card">
              <h3>Search-name validation</h3>
              <p>When someone hears your name from a neighbor, they usually look you up before reaching out.</p>
            </div>
            <div className="affordable-card">
              <h3>Local proof</h3>
              <p>Recent posts, customer wins, and jobsite updates make the business feel active and real.</p>
            </div>
            <div className="affordable-card">
              <h3>Better conversion support</h3>
              <p>Good content answers practical questions and reduces doubt before a homeowner taps call.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-section affordable-section--alt">
        <div className="container">
          <p className="section-badge">What To Post</p>
          <h2>What home service businesses should post consistently.</h2>
          <div className="affordable-card-grid">
            <div className="affordable-card">
              <h3>Before-and-after jobs</h3>
              <p>Show the kind of work you actually do so homeowners can picture the outcome.</p>
            </div>
            <div className="affordable-card">
              <h3>Seasonal reminders</h3>
              <p>Maintenance tips, weather prep, and common issue reminders keep your business relevant year-round.</p>
            </div>
            <div className="affordable-card">
              <h3>Service FAQs</h3>
              <p>Turn common questions into short posts that explain repairs, timing, pricing context, or next steps.</p>
            </div>
            <div className="affordable-card">
              <h3>Reviews and proof</h3>
              <p>Customer feedback, certifications, and real project context make referrals easier to trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-section">
        <div className="container">
          <p className="section-badge">Why Glow Social Fits</p>
          <h2>You should not have to become a content creator to stay visible.</h2>
          <p className="section-sub">
            Most home service owners do not need an expensive agency or an empty
            scheduling tool. They need steady posting built from the business
            they already run.
          </p>

          <div className="affordable-feature-list">
            <div>
              <h3>Posts made from your website</h3>
              <p>Your services, promotions, service areas, reviews, and FAQs become source material.</p>
            </div>
            <div>
              <h3>Approval before publishing</h3>
              <p>Review what is created first instead of hoping a generic automation got it right.</p>
            </div>
            <div>
              <h3>Google Business Profile support</h3>
              <p>Keep your listing and social presence active together instead of treating them as separate jobs.</p>
            </div>
            <div>
              <h3>Affordable starting point</h3>
              <p>Plans start at {pricing.startingAtFull} with no contract required.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-section affordable-section--alt">
        <div className="container">
          <p className="section-badge">Related Pages</p>
          <h2>Useful next steps for home service owners.</h2>
          <div className="affordable-link-list">
            <Link href="/google-business-profile-posting-service">
              Google Business Profile posting service
            </Link>
            <Link href="/affordable-social-media-management">
              Affordable social media management under $100
            </Link>
            <Link href="/blog/best-social-media-posting-service-home-services">
              Best social media posting service for home services
            </Link>
            <Link href="/blog/social-media-home-services">
              Social media tips for home service businesses
            </Link>
          </div>
        </div>
      </section>

      <section className="affordable-faq">
        <div className="container">
          <p className="section-badge">FAQ</p>
          <h2>Common questions from home service businesses.</h2>
          <div className="affordable-faq-list">
            <div className="affordable-faq-item">
              <h3>Do home service businesses really need social media?</h3>
              <p>
                Yes. Many customers check your business online after a referral or
                search. Social media helps confirm that you are active,
                professional, and trustworthy before they contact you.
              </p>
            </div>
            <div className="affordable-faq-item">
              <h3>What platforms matter most?</h3>
              <p>
                For most home service businesses, Facebook, Instagram, and Google
                Business Profile matter more than chasing every platform. The
                goal is consistent local trust, not maximum channel count.
              </p>
            </div>
            <div className="affordable-faq-item">
              <h3>How does Glow Social make content for a contractor or trade business?</h3>
              <p>
                Glow Social reads the business website and turns service pages,
                FAQs, reviews, promotions, and proof into posts ready to review.
                You see the output first, then approve what should publish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="affordable-cta">
        <div className="container affordable-cta-box">
          <h2>See home service posts from your website before choosing a plan.</h2>
          <p>
            Preview the kind of posts Glow Social can create for your business,
            then decide if it fits.
          </p>
          <a href={finalPreviewUrl} className="btn btn--primary btn--lg">
            See my posts
          </a>
        </div>
      </section>
    </div>
  );
}
