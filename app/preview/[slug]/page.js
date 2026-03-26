import { notFound } from "next/navigation";
import "./preview.css";

const nicheData = {
  "real-estate": {
    name: "Real Estate Agents",
    headline: "See what a month of done-for-you social media looks like for your real estate business",
    problem: "The market isn't waiting, and neither should you. Between showings, closings, and client calls, social media always gets pushed to tomorrow.",
  },
  "roofing": {
    name: "Roofing Companies",
    headline: "See what a month of done-for-you social media looks like for your roofing business",
    problem: "You're booking jobs and managing crews, not sitting at a desk designing Canva templates. We'll show potential customers you're the most trusted roofer in town.",
  },
  "hvac": {
    name: "HVAC Companies",
    headline: "See what a month of done-for-you social media looks like for your HVAC business",
    problem: "When it's 100 degrees out, nobody cares about your latest blog post. They care if you answer the phone. We keep your social presence hot so you can keep the AC running.",
  },
  "dentist": {
    name: "Dentists",
    headline: "See what a month of done-for-you social media looks like for your dental practice",
    problem: "You're treating patients, not learning TikTok trends. Keep your chairs full by building trust with your local community online—without lifting a finger.",
  },
  "landscaping": {
    name: "Landscaping Companies",
    headline: "See what a month of done-for-you social media looks like for your landscaping business",
    problem: "Your work speaks for itself, but only if people see it. Stop worrying about remembering to take before-and-after photos and let us build your local authority.",
  },
  "plumbing": {
    name: "Plumbers",
    headline: "See what a month of done-for-you social media looks like for your plumbing business",
    problem: "When a pipe bursts, people call the plumber they remember. We make sure you're the one they see every day on their local feeds.",
  },
  "accountant": {
    name: "Accountants & CPAs",
    headline: "See what a month of done-for-you social media looks like for your accounting firm",
    problem: "Tax season is crazy enough. We translate your financial expertise into engaging, professional posts so you look like the ultimate local authority.",
  },
  "cleaning": {
    name: "Cleaning Companies",
    headline: "See what a month of done-for-you social media looks like for your cleaning business",
    problem: "You make houses shine, we'll make your social media shine. Build local trust and get more recurring clients without worrying about what to post.",
  },
  "auto-repair": {
    name: "Auto Repair Shops",
    headline: "See what a month of done-for-you social media looks like for your auto repair shop",
    problem: "You're under the hood, not on Instagram. We help you build trust with local drivers so you're their first call when the check engine light comes on.",
  },
  "salon": {
    name: "Salons & Spas",
    headline: "See what a month of done-for-you social media looks like for your salon",
    problem: "Your clients leave looking beautiful, but your social pages are a mess. We ensure your online presence is as polished as your services.",
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
    title: `Free Social Media Posts for ${niche.name} | Glow Social Preview`,
    description: `Drop your website and instantly see 12 custom social media posts generated specifically for your ${niche.name.toLowerCase()} business.`,
    alternates: {
      canonical: `/preview/${slug}`,
    },
  };
}

export default async function PreviewLandingPage({ params }) {
  const { slug } = await params;
  const niche = nicheData[slug];

  if (!niche) {
    notFound();
  }

  return (
    <div className="preview-page">
      <section className="preview-hero">
        <div className="container preview-hero-inner">
          <div className="preview-content">
            <div className="preview-badge">Free Tool for {niche.name}</div>
            <h1 className="preview-hl">{niche.headline}</h1>
            <p className="preview-sub">{niche.problem}</p>
            
            <div className="preview-features">
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon"><polyline points="20 6 9 17 4 12" /></svg>
                <span><strong>Reads your actual website:</strong> We scan your services, tone, and unique value to write posts that sound like you.</span>
              </div>
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon"><polyline points="20 6 9 17 4 12" /></svg>
                <span><strong>AI images for every post:</strong> Custom photorealistic images tailored to {niche.name.toLowerCase()}.</span>
              </div>
              <div className="preview-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon"><polyline points="20 6 9 17 4 12" /></svg>
                <span><strong>Scheduled and ready to go:</strong> A full month of content on a Mon/Wed/Fri schedule.</span>
              </div>
            </div>
          </div>
          
          <div className="preview-form-wrapper">
            <div className="preview-card">
              <h2>Get your free preview</h2>
              <p>12 posts, custom images, and a content calendar — in 60 seconds.</p>
              
              <form action={`https://app.glowsocial.com/preview/${slug}`} method="GET" className="preview-form">
                <div className="form-group">
                  <label htmlFor="url">Your Website URL</label>
                  <input type="url" id="url" name="url" placeholder="https://yourwebsite.com" required className="form-input" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input type="email" id="email" name="email" placeholder="you@yourbusiness.com" required className="form-input" />
                </div>

                <button type="submit" className="btn btn--primary btn--lg preview-btn">
                  Generate My Posts
                </button>
                <p className="privacy-note">Results are generated instantly. No login required.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof Strip */}
      <section className="preview-proof">
        <div className="container">
          <div className="proof-banner">
            <p><strong>Stop guessing what to post.</strong> Our AI-powered agency builds your entire social calendar based on your actual business data.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
