import Link from "next/link";
import { getAllLocalPages } from "@/lib/posts";

export const metadata = {
  title: "Social Media Management By City",
  description:
    "Find done-for-you social media management for your industry in your city. Glow Social serves local businesses across the US.",
};

export default function LocalIndexPage() {
  const pages = getAllLocalPages();

  // Group by city
  const byCity = {};
  for (const page of pages) {
    const city = page.city || "Other";
    if (!byCity[city]) byCity[city] = [];
    byCity[city].push(page);
  }

  const cities = Object.keys(byCity).sort();

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Social Media Management Near You</h1>
          <p>
            Done-for-you social media for local businesses in cities across the
            US. Find your industry below.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: 80 }}>
        {cities.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <h2 style={{ textTransform: "none", letterSpacing: 0 }}>Local pages coming soon</h2>
          </div>
        ) : (
          cities.map((city) => (
            <div key={city} style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  borderBottom: "2px solid var(--accent)",
                  paddingBottom: 8,
                  marginBottom: 16,
                }}
              >
                {city}
              </h2>
              <div className="blog-grid">
                {byCity[city].map((page) => (
                  <Link
                    key={page.slug}
                    href={`/local/${page.slug}`}
                    className="blog-card"
                  >
                    <div className="blog-card-body">
                      <h3 style={{ fontSize: "1rem" }}>{page.title}</h3>
                      <span className="read-more">Learn more →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
