import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Glow Social",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://glowsocial.com",
  },
};

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "var(--accent-dark)" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Page Not Found</h2>
      <p style={{ maxWidth: "500px", marginBottom: "2rem", color: "var(--text-muted)" }}>
        Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or consolidated into a stronger guide.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/" className="btn btn--primary">
          Back to Home
        </Link>
        <Link href="/pricing" className="btn btn--outline">
          View Pricing
        </Link>
      </div>
    </div>
  );
}
