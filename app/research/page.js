import Link from "next/link";


export const metadata = {
  title: "Glow Social Research & Data Hub",
  description: "Original research, data, and social media marketing statistics for local service businesses.",
};

export default function ResearchHub() {
  return (
    <>
      <div className="hero">
        <h1 className="hero-title">Glow Social Research</h1>
        <p className="hero-subtitle">
          Original data and insights into how local businesses are actually using social media—and what drives real engagement.
        </p>
      </div>

      <div style={{ maxWidth: "800px", margin: "4rem auto", padding: "0 2rem", minHeight: "50vh" }}>
        
        {/* REPORT CARD */}
        <article style={{ padding: "2rem", background: "var(--light-bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
          <div style={{ fontSize: "0.85rem", color: "var(--navy)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>
            Data Report • April 2026
          </div>
          <h2 style={{ marginTop: 0, fontSize: "1.75rem", lineHeight: "1.3" }}>
            <Link href="/research/local-business-social-media-statistics" style={{ color: "var(--navy)", textDecoration: "none" }}>
              Local Business Social Media Statistics & Engagement Data
            </Link>
          </h2>
          <p style={{ color: "var(--text)", lineHeight: "1.6", fontSize: "1.05rem" }}>
            We analyzed engagement rates across 4 major platforms for 16 local businesses. Discover why Pinterest is undervalued, why daily posting is a massive competitive moat, and how the 6 psychological hooks dictate your organic reach.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/research/local-business-social-media-statistics" className="btn-research" style={{ display: "inline-block" }}>
              Read the Full Report →
            </Link>
          </div>
        </article>

      </div>
    </>
  );
}
