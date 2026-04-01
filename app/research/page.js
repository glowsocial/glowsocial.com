export const metadata = {
  title: "State of Local Business Social Media 2026 | Glow Social Research",
  description:
    "Original research from Glow Social: how local businesses actually use social media in 2026. Platform engagement rates, posting frequency, and the surprising winner no one talks about.",
};

// Ranked color scale — position 0 = darkest, fades lighter down the list
const RANK_COLORS = [
  "#0a2540", "#1a3a5c", "#1e4d6b", "#1e637a",
  "#257a82", "#2e9080", "#3aaa7a", "#5ec498", "#8ddcba",
];

const engagementData = [
  { platform: "Pinterest", rate: 7.7, posts: 26 },
  { platform: "Threads", rate: 2.61, posts: 100 },
  { platform: "LinkedIn", rate: 2.24, posts: 249 },
  { platform: "Instagram", rate: 2.14, posts: 228 },
  { platform: "Facebook", rate: 2.01, posts: 258 },
  { platform: "Twitter / X", rate: 1.76, posts: 15 },
  { platform: "Google Business", rate: 1.38, posts: 100 },
];

const impressionsData = [
  { platform: "Twitter / X", impressions: 9345 },
  { platform: "Pinterest", impressions: 6878 },
  { platform: "Google Business", impressions: 4573 },
  { platform: "Instagram", impressions: 3047 },
  { platform: "Facebook", impressions: 2955 },
  { platform: "LinkedIn", impressions: 2704 },
  { platform: "Threads", impressions: 2170 },
];

const connectedData = [
  { platform: "Facebook", count: 14 },
  { platform: "Instagram", count: 11 },
  { platform: "LinkedIn", count: 7 },
  { platform: "Twitter / X", count: 6 },
  { platform: "Google Business", count: 5 },
  { platform: "Threads", count: 5 },
  { platform: "Pinterest", count: 4 },
  { platform: "YouTube", count: 3 },
  { platform: "TikTok", count: 1 },
];

const scheduleData = [
  { label: "3 days / week", pct: 78, count: 14 },
  { label: "2 days / week", pct: 11, count: 2 },
  { label: "Daily (7 days)", pct: 11, count: 2 },
];

const maxEngagement = Math.max(...engagementData.map((d) => d.rate));
const maxImpressions = Math.max(...impressionsData.map((d) => d.impressions));
const maxConnected = Math.max(...connectedData.map((d) => d.count));

export default function ResearchPage() {
  return (
    <>
      <style>{`
        .research-hero {
          background: #0a0f1e;
          color: #fff;
          padding: 5rem 1.5rem 3rem;
          text-align: center;
        }
        .research-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 100px;
          padding: 0.35rem 1rem;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #a8edca;
          margin-bottom: 1.5rem;
        }
        .research-badge-dot {
          width: 6px;
          height: 6px;
          background: #a8edca;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .research-hero h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .research-hero h1 span {
          color: #a8edca;
        }
        .research-hero-sub {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.65);
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        .research-meta {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
        }
        .research-meta strong {
          color: rgba(255,255,255,0.85);
        }

        .research-body {
          max-width: 860px;
          margin: 0 auto;
          padding: 3rem 1.5rem 5rem;
        }

        .finding-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin: 2rem 0 3.5rem;
        }
        .finding-card {
          background: #f8f9fc;
          border: 1px solid #e8ecf4;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
        }
        .finding-card .stat {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0a0f1e;
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .finding-card .stat span {
          color: #3a8a5e;
        }
        .finding-card .label {
          font-size: 0.82rem;
          color: #5a6480;
          line-height: 1.4;
        }

        .chart-section {
          margin-bottom: 3.5rem;
        }
        .chart-section h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0a0f1e;
          margin-bottom: 0.4rem;
        }
        .chart-section .chart-desc {
          font-size: 0.9rem;
          color: #5a6480;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .chart-insight {
          font-size: 0.85rem;
          background: #f0faf5;
          border-left: 3px solid #3a8a5e;
          padding: 0.75rem 1rem;
          border-radius: 0 8px 8px 0;
          color: #2a5a3e;
          margin-top: 1rem;
          line-height: 1.5;
        }

        .bar-chart {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .bar-row {
          display: grid;
          grid-template-columns: 140px 1fr 60px;
          align-items: center;
          gap: 0.75rem;
        }
        .bar-label {
          font-size: 0.82rem;
          color: #333;
          font-weight: 500;
          text-align: right;
          white-space: nowrap;
        }
        .bar-track {
          background: #f0f0f5;
          border-radius: 4px;
          height: 28px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 4px;
          animation: growBar 1s ease-out forwards;
          transform-origin: left;
        }
        @keyframes growBar {
          from { width: 0 !important; }
          to { }
        }
        .bar-value {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0a0f1e;
          white-space: nowrap;
        }
        .bar-row.highlight .bar-label {
          color: #0a0f1e;
          font-weight: 700;
        }
        .bar-row.highlight .bar-value {
          color: #3a8a5e;
        }

        .schedule-bars {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .schedule-row {
          display: grid;
          grid-template-columns: 150px 1fr 60px;
          align-items: center;
          gap: 0.75rem;
        }

        .methodology {
          background: #f8f9fc;
          border: 1px solid #e8ecf4;
          border-radius: 12px;
          padding: 1.5rem;
          margin-top: 4rem;
          font-size: 0.83rem;
          color: #5a6480;
          line-height: 1.7;
        }
        .methodology strong {
          color: #0a0f1e;
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .research-cta {
          text-align: center;
          background: #0a0f1e;
          color: white;
          padding: 3rem 1.5rem;
          border-radius: 16px;
          margin-top: 3rem;
        }
        .research-cta h2 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
        }
        .research-cta p {
          color: rgba(255,255,255,0.65);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        .btn-research {
          display: inline-block;
          background: #a8edca;
          color: #0a0f1e;
          font-weight: 700;
          padding: 0.85rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.95rem;
          transition: opacity 0.2s;
        }
        .btn-research:hover { opacity: 0.9; }

        @media (max-width: 600px) {
          .bar-row { grid-template-columns: 100px 1fr 50px; }
          .schedule-row { grid-template-columns: 120px 1fr 50px; }
          .bar-label { font-size: 0.75rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="research-hero">
        <div className="research-badge">
          <span className="research-badge-dot" />
          Original Platform Data · April 2026
        </div>
        <h1>
          State of Local Business
          <br />
          <span>Social Media 2026</span>
        </h1>
        <p className="research-hero-sub">
          We analyzed anonymized, aggregated data from local businesses using
          Glow Social. Here's what's actually working — and what's surprising.
        </p>
        <div className="research-meta">
          <span><strong>April 2026</strong> · Publication date</span>
          <span><strong>16</strong> local businesses · study population</span>
          <span><strong>918+</strong> posts analyzed</span>
          <span><strong>9</strong> platforms tracked</span>
        </div>
      </section>

      <div className="research-body">

        {/* KEY FINDINGS */}
        <div className="finding-strip">
          <div className="finding-card">
            <div className="stat">3.5<span>×</span></div>
            <div className="label">average social platforms connected per local business</div>
          </div>
          <div className="finding-card">
            <div className="stat">78<span>%</span></div>
            <div className="label">of local businesses post 3 days per week</div>
          </div>
          <div className="finding-card">
            <div className="stat">53.7</div>
            <div className="label">average posts generated per business since joining</div>
          </div>
          <div className="finding-card">
            <div className="stat">7.7<span>%</span></div>
            <div className="label">average engagement rate on Pinterest — the top platform</div>
          </div>
        </div>

        {/* CHART 1: ENGAGEMENT RATE */}
        <div className="chart-section">
          <h2>Platform Engagement Rate</h2>
          <p className="chart-desc">
            Average engagement rate (likes + comments + shares ÷ impressions) across all
            posts with measurable data. Higher is better. Minimum 15 posts per platform to qualify.
          </p>
          <div className="bar-chart">
            {engagementData.map((d, i) => (
              <div key={d.platform} className={`bar-row ${i === 0 ? "highlight" : ""}`}>
                <span className="bar-label">{d.platform}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${(d.rate / maxEngagement) * 100}%`,
                      background: RANK_COLORS[i] || RANK_COLORS[RANK_COLORS.length - 1],
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                </div>
                <span className="bar-value">{d.rate.toFixed(2)}%</span>
              </div>
            ))}
          </div>
          <div className="chart-insight">
            💡 <strong>Pinterest dominates.</strong> At 7.7%, Pinterest's engagement rate is
            3× higher than any other platform we track — and most local businesses aren't using it.
            Facebook, the most-connected platform, ranks 5th.
          </div>
        </div>

        {/* CHART 2: AVERAGE IMPRESSIONS */}
        <div className="chart-section">
          <h2>Average Impressions Per Post</h2>
          <p className="chart-desc">
            How many people see each post on average, by platform. Impressions measure reach —
            how many eyeballs your content actually gets.
          </p>
          <div className="bar-chart">
            {impressionsData.map((d, i) => (
              <div key={d.platform} className="bar-row">
                <span className="bar-label">{d.platform}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${(d.impressions / maxImpressions) * 100}%`,
                      background: RANK_COLORS[i] || RANK_COLORS[RANK_COLORS.length - 1],
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                </div>
                <span className="bar-value">{d.impressions.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="chart-insight">
            💡 <strong>Google Business Profile is underrated.</strong> GBP posts average 4,573
            impressions — higher than Instagram or Facebook — because they reach people actively
            searching for your type of business on Google Maps. Most social tools don't post
            to GBP at all.
          </div>
        </div>

        {/* CHART 3: PLATFORM CONNECTIONS */}
        <div className="chart-section">
          <h2>Which Platforms Local Businesses Connect</h2>
          <p className="chart-desc">
            Number of businesses with each platform connected in Glow Social. Reflects
            where businesses believe they need to be present.
          </p>
          <div className="bar-chart">
            {connectedData.map((d, i) => (
              <div key={d.platform} className="bar-row">
                <span className="bar-label">{d.platform}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${(d.count / maxConnected) * 100}%`,
                      background: RANK_COLORS[i] || RANK_COLORS[RANK_COLORS.length - 1],
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                </div>
                <span className="bar-value">{d.count}</span>
              </div>
            ))}
          </div>
          <div className="chart-insight">
            💡 <strong>The intent-engagement gap.</strong> Facebook is the most-connected
            platform (14 businesses) but ranks 5th in engagement rate. Pinterest is 4th in
            connections but 1st in engagement. Local businesses are still defaulting to
            Facebook out of habit, not data.
          </div>
        </div>

        {/* CHART 4: POSTING FREQUENCY */}
        <div className="chart-section">
          <h2>How Often Local Businesses Post</h2>
          <p className="chart-desc">
            Distribution of posting frequency settings across all active Glow Social accounts.
          </p>
          <div className="schedule-bars">
            {scheduleData.map((d, i) => (
              <div key={d.label} className="schedule-row">
                <span className="bar-label" style={{ textAlign: "right", fontSize: "0.82rem", color: "#333", fontWeight: 500 }}>
                  {d.label}
                </span>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${d.pct}%`,
                      background: RANK_COLORS[i] || RANK_COLORS[RANK_COLORS.length - 1],
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
                <span className="bar-value">{d.pct}%</span>
              </div>
            ))}
          </div>
          <div className="chart-insight">
            💡 <strong>3 days/week is the sweet spot.</strong> 78% of local businesses on
            Glow Social post 3 days per week — consistent enough to maintain presence without
            overwhelming followers. Only 11% post daily.
          </div>
        </div>

        {/* METHODOLOGY */}
        <div className="methodology">
          <strong>Methodology & Disclosure</strong>
          This report is based on anonymized, aggregated data from{" "}
          <strong>16 local businesses</strong> using the Glow Social platform as of April 2026.
          All data is aggregate — no individual business, user, or account is identified.
          Engagement rate is calculated as total engagements (likes + comments + shares + saves)
          divided by total impressions, averaged across posts with at least 1 impression recorded.
          Platforms with fewer than 15 posts in the dataset are noted but may have less reliable
          averages. This dataset will be updated quarterly as the platform grows.
          <br /><br />
          Data collected under Glow Social's{" "}
          <a href="/privacy" style={{ color: "#3a8a5e" }}>Privacy Policy</a>, which explicitly
          covers anonymized aggregate research use.
        </div>

        {/* CTA */}
        <div className="research-cta">
          <h2>Put This Data to Work for Your Business</h2>
          <p>
            Glow Social automatically posts to the platforms where local businesses
            actually see results — including Pinterest and Google Business Profile.
          </p>
          <a href="https://app.glowsocial.com/" className="btn-research">
            Get Started — $49/mo
          </a>
        </div>

      </div>
    </>
  );
}
