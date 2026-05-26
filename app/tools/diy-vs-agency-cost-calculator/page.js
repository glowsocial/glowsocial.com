import "../tools.css";
import CostComparisonCalculator from "../CostComparisonCalculator";

export const metadata = {
  title: "DIY vs Agency Social Media Cost Calculator",
  description:
    "Compare DIY social media time cost against freelancer, agency, and Glow Social pricing for local businesses.",
  alternates: {
    canonical: "/tools/diy-vs-agency-cost-calculator",
  },
};

export default function DiyVsAgencyCostCalculatorPage() {
  return (
    <>
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>DIY vs Agency Social Media Cost Calculator</h1>
          <p>
            Put a dollar value on the hours you spend planning, writing,
            designing, scheduling, and second-guessing posts every month.
          </p>
        </div>
      </section>
      <main className="tools-shell">
        <CostComparisonCalculator focus="diy" />
      </main>
    </>
  );
}
