import Link from "next/link";
import { getAllQuestions } from "@/lib/posts";

const featuredSlugs = [
  "how-can-small-business-show-up-in-chatgpt",
  "how-can-local-business-show-up-in-ai-search",
  "best-cheap-social-media-management-option",
  "is-done-for-you-social-media-worth-it",
  "how-many-social-media-posts-per-month",
  "how-to-measure-social-media-roi-local-business",
];

const topicGroups = [
  {
    title: "AI Search & AEO",
    description: "Answer-ready pages about ChatGPT, Perplexity, AI search, and local visibility.",
    slugs: [
      "how-can-small-business-show-up-in-chatgpt",
      "how-can-local-business-show-up-in-ai-search",
      "what-is-answer-engine-optimization",
      "do-social-media-posts-help-local-seo",
    ],
  },
  {
    title: "Costs & ROI",
    description: "Decision pages for owners comparing DIY, software, freelancers, agencies, and done-for-you options.",
    slugs: [
      "best-cheap-social-media-management-option",
      "is-done-for-you-social-media-worth-it",
      "is-hiring-social-media-manager-worth-it",
      "how-to-measure-social-media-roi-local-business",
    ],
  },
  {
    title: "Industry Service Guides",
    description: "Best-fit social media service guidance by local business type.",
    slugs: [
      "best-social-media-service-for-plumbers",
      "best-social-media-service-for-dentists",
      "best-social-media-service-for-restaurants",
      "best-social-media-service-for-salons",
      "best-social-media-service-for-roofers",
      "best-social-media-service-for-med-spas",
    ],
  },
  {
    title: "What To Post",
    description: "Tactical post ideas and content mixes for local businesses.",
    slugs: [
      "what-should-a-plumber-post",
      "what-should-a-dentist-post",
      "what-should-a-restaurant-post",
      "what-should-a-salon-post",
      "what-should-a-roofer-post",
      "what-should-a-med-spa-post",
    ],
  },
];

function QuestionCard({ question, className = "blog-card" }) {
  const metaParts = [
    question.readingTime,
    "Answer Block"
  ].filter(Boolean);

  return (
    <Link
      key={question.slug}
      href={`/resources/questions/${question.slug}`}
      className={className}
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
}

export const metadata = {
  title: "Social Media & Marketing Q&A",
  description: "Direct, expert answers to your questions about automated social media content, scheduling, brand voice, and AI-powered marketing.",
};

export default function QuestionsPage() {
  const questions = getAllQuestions();
  const questionsBySlug = new Map(questions.map((question) => [question.slug, question]));
  const featuredQuestions = featuredSlugs
    .map((slug) => questionsBySlug.get(slug))
    .filter(Boolean);

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
          <>
            <section className="question-hub-section">
              <div className="section-kicker">Start Here</div>
              <h2>High-intent answer pages</h2>
              <div className="blog-grid question-featured-grid">
                {featuredQuestions.map((question) => (
                  <QuestionCard key={question.slug} question={question} />
                ))}
              </div>
            </section>

            <section className="question-hub-section">
              <div className="section-kicker">Browse By Topic</div>
              <div className="question-topic-grid">
                {topicGroups.map((group) => (
                  <article className="question-topic-card" key={group.title}>
                    <h2>{group.title}</h2>
                    <p>{group.description}</p>
                    <ul>
                      {group.slugs.map((slug) => {
                        const question = questionsBySlug.get(slug);
                        if (!question) return null;

                        return (
                          <li key={slug}>
                            <Link href={`/resources/questions/${slug}`}>
                              {question.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="question-hub-section">
              <div className="section-kicker">Full Library</div>
              <h2>All Q&A answers</h2>
              <div className="blog-grid">
                {questions.map((question) => (
                  <QuestionCard key={question.slug} question={question} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}
