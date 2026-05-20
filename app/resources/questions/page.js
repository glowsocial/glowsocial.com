import Link from "next/link";
import { getAllQuestions } from "@/lib/posts";

export const metadata = {
  title: "Social Media & Marketing Q&A",
  description: "Direct, expert answers to your questions about automated social media content, scheduling, brand voice, and AI-powered marketing.",
};

export default function QuestionsPage() {
  const questions = getAllQuestions();

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Social Media & Marketing Q&A</h1>
          <p>
            Direct, liftable answers to the questions small business owners ask about automated social media.
          </p>
        </div>
      </section>

      <div className="container">
        {questions.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <h2 style={{ textTransform: "none", letterSpacing: 0 }}>Questions coming soon</h2>
            <p style={{ color: "var(--text-muted)", marginTop: 12 }}>
              We are compiling our answer database. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="blog-grid" style={{ marginTop: "40px" }}>
            {questions.map((question) => {
              const metaParts = [
                question.readingTime,
                "Answer Block"
              ].filter(Boolean);

              return (
                <Link
                  key={question.slug}
                  href={`/resources/questions/${question.slug}`}
                  className="blog-card"
                >
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      {metaParts.join(" · ")}
                    </div>
                    <h3>{question.title}</h3>
                    {question.description && <p>{question.description}</p>}
                    <span className="read-more">View Answer →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
