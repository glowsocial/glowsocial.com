import { notFound } from "next/navigation";
import "./preview.css";

const nicheData = {
  "real-estate": {
    name: "Real Estate Agents",
    headline: "See posts ready to approve for your real estate business",
    problem: "Between showings, closings, and client calls, social media always gets pushed to tomorrow. Start with posts made from your actual business before you choose a plan.",
  },
  "roofing": {
    name: "Roofing Companies",
    headline: "See posts ready to approve for your roofing business",
    problem: "You're booking jobs and managing crews, not sitting at a desk designing posts. Glow Social turns your website into useful content you can review before anything publishes.",
  },
  "hvac": {
    name: "HVAC Companies",
    headline: "See posts ready to approve for your HVAC business",
    problem: "When it is 100 degrees out, people need the HVAC company they already trust. See posts built from your services, proof, and local context before you connect accounts.",
  },
  "dentist": {
    name: "Dentists",
    headline: "See posts ready to approve for your dental practice",
    problem: "You're treating patients, not learning another marketing tool. Glow Social prepares trust-building posts from your website so you can approve what fits.",
  },
  "landscaping": {
    name: "Landscaping Companies",
    headline: "See posts ready to approve for your landscaping business",
    problem: "Your work speaks for itself, but only if people see it. Start with posts made from your services and local proof, then decide what should go live.",
  },
  "plumbing": {
    name: "Plumbers",
    headline: "See posts ready to approve for your plumbing business",
    problem: "When a pipe bursts, people call the plumber they remember. Glow Social helps keep your business visible without asking you to manage a posting calendar.",
  },
  "accountant": {
    name: "Accountants & CPAs",
    headline: "See posts ready to approve for your accounting firm",
    problem: "Tax season is already enough. Glow Social turns your expertise and website into professional posts you can review when you have a minute.",
  },
  "cleaning": {
    name: "Cleaning Companies",
    headline: "See posts ready to approve for your cleaning business",
    problem: "You handle the cleanups. Glow Social handles the first draft of your online visibility with posts made from your real business details.",
  },
  "auto-repair": {
    name: "Auto Repair Shops",
    headline: "See posts ready to approve for your auto repair shop",
    problem: "You're under the hood, not trying to think of Instagram captions. See posts built from your services and customer trust signals before you choose a plan.",
  },
  "salon": {
    name: "Salons & Spas",
    headline: "See posts ready to approve for your salon",
    problem: "Your clients leave looking polished. Your online presence should feel current too, without asking you to become the social media person.",
  }
};

export async function generateStaticParams() {
  return Object.keys(nicheData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const niche = nicheData[slug];
  
  if (!niche) return { title: "Free Social Media Preview | Glow Social" };

  return {
    title: `See Posts Ready to Approve for ${niche.name}`,
    description: `Enter your website and email to see posts ready to approve for your ${niche.name.toLowerCase()} business. Free preview, no login required.`,
    alternates: {
      canonical: `/preview/${slug}`,
    },
    openGraph: {
      title: `See Posts Ready to Approve for ${niche.name}`,
      description: `See posts made from your website for your ${niche.name.toLowerCase()} business. Free, no login required.`,
      url: `https://glowsocial.com/preview/${slug}`,
      type: "website",
    },
  };
}

export default async function PreviewLandingPage({ params }) {
  const { slug } = await params;
  const niche = nicheData[slug];

  if (!niche) {
    notFound();
  }

  const previewNicheSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `Free Social Media Preview for ${niche.name}`,
    "alternateName": "Glow Social Preview Tool",
    "description": `Enter your website and email address to see posts ready to approve for your ${niche.name.toLowerCase()} business.`,
    "url": `https://glowsocial.com/preview/${slug}`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Organization",
      "name": "Glow Social",
      "url": "https://glowsocial.com"
    },
    "featureList": [
      `Posts ready to approve for ${niche.name}`,
      "Images matched to each post",
      "Website-based brand voice analysis",
      "No content calendar or prompts required",
      "No login or social account connection required"
    ]
  };

  return (
    <div className="preview-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(previewNicheSchema) }}
      />
      <section className="preview-hero">
        <div className="container preview-hero-inner">
          <div className="preview-content">
            <div className="preview-badge">Free preview for {niche.name}</div>
            <h1 className="preview-hl">{niche.headline}</h1>
            <p className="preview-sub">{niche.problem}</p>
            
            <div className="preview-features">
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon"><polyline points="20 6 9 17 4 12" /></svg>
                <span><strong>Reads your actual website:</strong> Your services, tone, proof, and customer language give Glow Social the context.</span>
              </div>
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon"><polyline points="20 6 9 17 4 12" /></svg>
                <span><strong>Images matched to the post:</strong> Each preview post includes a visual matched to your business context.</span>
              </div>
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon"><polyline points="20 6 9 17 4 12" /></svg>
                <span><strong>Ready before you connect:</strong> See posts first, then decide what profiles you want Glow Social to keep active.</span>
              </div>
            </div>
          </div>
          
          <div className="preview-form-wrapper">
            <div className="preview-card">
              <h2>See my posts</h2>
              <p>Enter your website and email. We will create preview posts before you choose a plan.</p>
              
              {/* Form submits to /preview/{slug}?url=...&email=... which the Next.js
                  rewrite proxies through to app.glowsocial.com/preview/{slug}.
                  The app reads url + email from search params and auto-starts generation. */}
              <form action={`/preview/${slug}`} method="GET" className="preview-form">
                <div className="form-group">
                  <label htmlFor="url">Your Website URL</label>
                  <input type="url" id="url" name="url" placeholder="https://yourwebsite.com" required className="form-input" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input type="email" id="email" name="email" placeholder="you@yourbusiness.com" required className="form-input" />
                </div>

                <button type="submit" className="btn btn--primary btn--lg preview-btn">
                  See my posts
                </button>
                <p className="privacy-note">No login, card, or social account connection required.</p>
              </form>
            </div>
          </div>

        </div>
      </section>
      
      {/* Social Proof Strip */}
      <section className="preview-proof">
        <div className="container">
          <div className="proof-banner">
            <p><strong>Stop guessing what to post.</strong> We turn your website into posts you can review before anything publishes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
