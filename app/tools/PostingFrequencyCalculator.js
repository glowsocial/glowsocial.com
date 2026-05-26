"use client";

import { useMemo, useState } from "react";

const profiles = {
  "home-services": {
    label: "Home services",
    baseline: 3,
    mix: ["job photos", "seasonal reminders", "reviews", "maintenance tips"],
  },
  "health-beauty": {
    label: "Health and beauty",
    baseline: 4,
    mix: ["before and afters", "education", "team posts", "reviews"],
  },
  "professional-services": {
    label: "Professional services",
    baseline: 3,
    mix: ["FAQs", "authority posts", "client wins", "deadline reminders"],
  },
  restaurants: {
    label: "Restaurants",
    baseline: 5,
    mix: ["menu features", "events", "reviews", "staff picks"],
  },
  retail: {
    label: "Retail",
    baseline: 4,
    mix: ["new arrivals", "gift ideas", "customer photos", "promos"],
  },
};

export default function PostingFrequencyCalculator() {
  const [industry, setIndustry] = useState("home-services");
  const [hours, setHours] = useState(2);
  const [platforms, setPlatforms] = useState(3);
  const [hasGbp, setHasGbp] = useState(true);

  const result = useMemo(() => {
    const profile = profiles[industry];
    const capacity = Math.max(1, Math.floor(hours * 1.5));
    const platformPressure = platforms >= 4 ? 1 : 0;
    const gbpBoost = hasGbp ? 0 : -1;
    const weekly = Math.max(
      2,
      Math.min(6, Math.min(profile.baseline + platformPressure + gbpBoost, capacity + 2))
    );
    const monthly = weekly * 4;

    return {
      profile,
      weekly,
      monthly,
      gbpPosts: hasGbp ? Math.max(1, Math.round(weekly / 2)) : 0,
      socialPosts: hasGbp ? weekly - Math.max(1, Math.round(weekly / 2)) : weekly,
    };
  }, [hasGbp, hours, industry, platforms]);

  return (
    <div className="calculator-layout">
      <section className="calculator-panel" aria-labelledby="frequency-inputs">
        <h2 id="frequency-inputs">Inputs</h2>

        <div className="calculator-control">
          <label htmlFor="industry">Business type</label>
          <select
            id="industry"
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
          >
            {Object.entries(profiles).map(([value, profile]) => (
              <option value={value} key={value}>
                {profile.label}
              </option>
            ))}
          </select>
        </div>

        <div className="calculator-control">
          <label htmlFor="frequency-hours">Hours available per week: {hours}</label>
          <input
            id="frequency-hours"
            type="range"
            min="0"
            max="8"
            value={hours}
            onChange={(event) => setHours(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="platform-count">Connected platforms: {platforms}</label>
          <input
            id="platform-count"
            type="range"
            min="1"
            max="6"
            value={platforms}
            onChange={(event) => setPlatforms(Number(event.target.value))}
          />
        </div>

        <label className="calculator-check">
          <input
            type="checkbox"
            checked={hasGbp}
            onChange={(event) => setHasGbp(event.target.checked)}
          />
          Include Google Business Profile
        </label>
      </section>

      <section className="calculator-results" aria-live="polite">
        <h2>Recommended Cadence</h2>
        <div className="result-number">{result.weekly}x/week</div>
        <p className="result-caption">
          Plan for about {result.monthly} posts per month across your active
          profiles.
        </p>

        <table className="calculator-table">
          <tbody>
            <tr>
              <td>Social feed posts</td>
              <td>{result.socialPosts} per week</td>
            </tr>
            <tr>
              <td>Google Business Profile posts</td>
              <td>{result.gbpPosts} per week</td>
            </tr>
            <tr>
              <td>Minimum viable cadence</td>
              <td>3 per week</td>
            </tr>
          </tbody>
        </table>

        <ul className="recommendation-list">
          {result.profile.mix.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
