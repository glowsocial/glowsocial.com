"use client";

import { useMemo, useState } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function CostComparisonCalculator({ focus = "management" }) {
  const [hours, setHours] = useState(8);
  const [hourlyValue, setHourlyValue] = useState(75);
  const [freelancerCost, setFreelancerCost] = useState(500);
  const [agencyCost, setAgencyCost] = useState(2000);
  const [posts, setPosts] = useState(12);

  const results = useMemo(() => {
    const diy = hours * hourlyValue;
    const glow = posts > 20 ? 299 : posts > 12 ? 149 : 99;
    const rows = [
      { label: "DIY time", value: diy },
      { label: "Freelancer", value: freelancerCost },
      { label: "Agency", value: agencyCost },
      { label: "Glow Social", value: glow, glow: true },
    ];
    const max = Math.max(...rows.map((row) => row.value), 1);
    const cheapestAlternative = Math.min(diy, freelancerCost, agencyCost);
    return {
      diy,
      glow,
      rows: rows.map((row) => ({
        ...row,
        width: Math.max(4, Math.round((row.value / max) * 100)),
      })),
      savings: Math.max(0, cheapestAlternative - glow),
      yearlySavings: Math.max(0, (cheapestAlternative - glow) * 12),
      costPerPost: glow / Math.max(posts, 1),
    };
  }, [agencyCost, freelancerCost, hourlyValue, hours, posts]);

  return (
    <div className="calculator-layout">
      <section className="calculator-panel" aria-labelledby="calculator-inputs">
        <h2 id="calculator-inputs">Inputs</h2>

        <div className="calculator-control">
          <label htmlFor="hours">DIY hours per month: {hours}</label>
          <input
            id="hours"
            type="range"
            min="1"
            max="30"
            value={hours}
            onChange={(event) => setHours(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="hourly-value">Your hourly value</label>
          <input
            id="hourly-value"
            type="number"
            min="0"
            value={hourlyValue}
            onChange={(event) => setHourlyValue(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="freelancer-cost">Freelancer monthly quote</label>
          <input
            id="freelancer-cost"
            type="number"
            min="0"
            value={freelancerCost}
            onChange={(event) => setFreelancerCost(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="agency-cost">Agency monthly quote</label>
          <input
            id="agency-cost"
            type="number"
            min="0"
            value={agencyCost}
            onChange={(event) => setAgencyCost(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="posts">Posts needed per month</label>
          <select
            id="posts"
            value={posts}
            onChange={(event) => setPosts(Number(event.target.value))}
          >
            <option value="12">12 posts</option>
            <option value="20">20 posts</option>
            <option value="30">30+ posts</option>
          </select>
        </div>
      </section>

      <section className="calculator-results" aria-live="polite">
        <h2>{focus === "diy" ? "DIY vs Outsourcing" : "Monthly Cost"}</h2>
        <div className="result-number">{currency.format(results.savings)}</div>
        <p className="result-caption">
          Estimated monthly savings versus the cheapest non-Glow option. Annual
          savings: {currency.format(results.yearlySavings)}.
        </p>

        <table className="calculator-table">
          <thead>
            <tr>
              <th>Option</th>
              <th>Monthly cost</th>
            </tr>
          </thead>
          <tbody>
            {results.rows.map((row) => (
              <tr key={row.label}>
                <td>{row.label}</td>
                <td>{currency.format(row.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="result-bars">
          {results.rows.map((row) => (
            <div
              className={`result-bar-row${row.glow ? " is-glow" : ""}`}
              key={row.label}
            >
              <span>{row.label}</span>
              <div className="result-bar">
                <span style={{ width: `${row.width}%` }} />
              </div>
              <strong>{currency.format(row.value)}</strong>
            </div>
          ))}
        </div>

        <ul className="recommendation-list">
          <li>
            Glow Social cost per planned post:{" "}
            <strong>{currency.format(results.costPerPost)}</strong>.
          </li>
          <li>
            DIY is most expensive when content work replaces billable work,
            sales calls, or customer service.
          </li>
        </ul>
      </section>
    </div>
  );
}
