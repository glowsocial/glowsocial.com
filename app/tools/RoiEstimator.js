"use client";

import { useMemo, useState } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function RoiEstimator() {
  const [avgSale, setAvgSale] = useState(350);
  const [grossMargin, setGrossMargin] = useState(55);
  const [closeRate, setCloseRate] = useState(35);
  const [influencedLeads, setInfluencedLeads] = useState(4);
  const [monthlyCost, setMonthlyCost] = useState(99);

  const result = useMemo(() => {
    const profitPerCustomer = avgSale * (grossMargin / 100);
    const customers = influencedLeads * (closeRate / 100);
    const monthlyProfit = customers * profitPerCustomer;
    const net = monthlyProfit - monthlyCost;
    const roi = monthlyCost > 0 ? (net / monthlyCost) * 100 : 0;
    const breakEvenCustomers = profitPerCustomer > 0 ? monthlyCost / profitPerCustomer : 0;
    const breakEvenLeads = closeRate > 0 ? breakEvenCustomers / (closeRate / 100) : 0;

    return {
      profitPerCustomer,
      customers,
      monthlyProfit,
      net,
      roi,
      breakEvenLeads,
    };
  }, [avgSale, closeRate, grossMargin, influencedLeads, monthlyCost]);

  return (
    <div className="calculator-layout">
      <section className="calculator-panel" aria-labelledby="roi-inputs">
        <h2 id="roi-inputs">Inputs</h2>

        <div className="calculator-control">
          <label htmlFor="avg-sale">Average sale value</label>
          <input
            id="avg-sale"
            type="number"
            min="0"
            value={avgSale}
            onChange={(event) => setAvgSale(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="gross-margin">Gross margin: {grossMargin}%</label>
          <input
            id="gross-margin"
            type="range"
            min="10"
            max="95"
            value={grossMargin}
            onChange={(event) => setGrossMargin(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="close-rate">Lead close rate: {closeRate}%</label>
          <input
            id="close-rate"
            type="range"
            min="5"
            max="90"
            value={closeRate}
            onChange={(event) => setCloseRate(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="influenced-leads">Leads influenced per month</label>
          <input
            id="influenced-leads"
            type="number"
            min="0"
            value={influencedLeads}
            onChange={(event) => setInfluencedLeads(Number(event.target.value))}
          />
        </div>

        <div className="calculator-control">
          <label htmlFor="monthly-cost">Monthly social media cost</label>
          <input
            id="monthly-cost"
            type="number"
            min="0"
            value={monthlyCost}
            onChange={(event) => setMonthlyCost(Number(event.target.value))}
          />
        </div>
      </section>

      <section className="calculator-results" aria-live="polite">
        <h2>Estimated Return</h2>
        <div className="result-number">{Math.round(result.roi)}%</div>
        <p className="result-caption">
          Estimated monthly net: {currency.format(result.net)} from{" "}
          {result.customers.toFixed(1)} influenced customers.
        </p>

        <table className="calculator-table">
          <tbody>
            <tr>
              <td>Profit per new customer</td>
              <td>{currency.format(result.profitPerCustomer)}</td>
            </tr>
            <tr>
              <td>Monthly gross profit influenced</td>
              <td>{currency.format(result.monthlyProfit)}</td>
            </tr>
            <tr>
              <td>Break-even influenced leads</td>
              <td>{result.breakEvenLeads.toFixed(1)}</td>
            </tr>
          </tbody>
        </table>

        <ul className="recommendation-list">
          <li>
            For local businesses, social media often influences recognition
            before the customer searches, calls, or asks for a referral.
          </li>
          <li>
            If one extra customer covers the month, consistency is usually a
            better target than virality.
          </li>
        </ul>
      </section>
    </div>
  );
}
