import "../tools.css";
import PostingFrequencyCalculator from "../PostingFrequencyCalculator";

export const metadata = {
  title: "Posting Frequency Calculator for Local Businesses",
  description:
    "Calculate a realistic social media posting frequency for your local business based on industry, platforms, and available time.",
  alternates: {
    canonical: "/tools/posting-frequency-calculator",
  },
};

export default function PostingFrequencyCalculatorPage() {
  return (
    <>
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <h1>Posting Frequency Calculator</h1>
          <p>
            Find the minimum useful cadence for staying visible without turning
            social media into a second job.
          </p>
        </div>
      </section>
      <main className="tools-shell">
        <PostingFrequencyCalculator />
      </main>
    </>
  );
}
