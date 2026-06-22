import Link from "next/link";
import { getAllQuestions } from "@/lib/posts";

const featuredSlugs = [
  "what-is-the-easiest-way-for-a-small-business-to-post-consistently",
  "how-do-i-turn-my-website-into-social-media-posts",
  "is-a-social-media-scheduler-enough-for-a-small-business",
  "what-should-i-post-when-my-business-has-nothing-new",
  "should-i-use-ai-or-hire-a-social-media-manager",
  "what-makes-local-business-social-media-look-trustworthy",
];

const topicGroups = [
  {
    title: "AI Search & AEO",
    description: "Practical answers about ChatGPT, Perplexity, AI search, and local visibility.",
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
      "freelance-social-media-manager-rates-2026",
      "cheapest-social-media-scheduler",
      "free-social-media-scheduler",
      "how-much-time-social-media-marketing-small-business",
      "social-media-management-pricing-2026",
      "most-affordable-social-media-management-small-business",
      "is-a-social-media-scheduler-enough-for-a-small-business",
      "should-i-use-ai-or-hire-a-social-media-manager",
      "best-cheap-social-media-management-option",
      "is-done-for-you-social-media-worth-it",
      "is-hiring-social-media-manager-worth-it",
      "how-to-measure-social-media-roi-local-business",
    ],
  },
  {
    title: "Schedulers & Platform Limits",
    description: "Current answers for owners comparing tools, plan limits, and platform constraints.",
    slugs: [
      "free-social-media-scheduler",
      "cheapest-social-media-scheduler",
      "later-vs-buffer-small-business",
      "does-later-have-a-free-plan-2026",
      "buffer-free-plan-limits-2026",
      "later-pricing-social-sets-2026",
      "best-social-media-tools-under-50-month",
      "best-plann-alternative-local-business",
      "vista-social-vs-glow-social",
      "best-time-to-post-social-media-2026",
      "best-hootsuite-alternative-small-business",
      "hootsuite-vs-buffer-small-business",
      "canva-vs-buffer-small-business",
      "metricool-vs-buffer-small-business",
      "metricool-vs-hootsuite-small-business",
      "planoly-vs-later-small-business",
      "canva-social-media-scheduler-small-business",
      "best-metricool-alternative-local-business",
      "social-media-caption-character-limits-2026",
      "instagram-caption-character-limit-2026",
      "facebook-caption-length",
      "tiktok-caption-length-2026",
      "tiktok-bio-character-limit-2026",
      "what-social-media-tool-creates-posts-for-you",
      "should-i-use-buffer-or-done-for-you-social-media",
      "is-a-social-media-scheduler-enough-for-a-small-business",
    ],
  },
  {
    title: "Google Business Profile & Local Visibility",
    description: "Answers about GBP posting, local social proof, and which platforms deserve attention first.",
    slugs: [
      "best-google-business-profile-posting-tool-local-business",
      "google-business-profile-vs-instagram-facebook-local-business",
      "how-often-post-google-business-profile",
      "what-to-post-google-business-profile",
      "is-google-business-profile-posting-worth-it",
      "do-social-media-posts-help-local-seo",
      "what-platforms-should-local-business-be-on",
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
      "how-do-i-turn-my-website-into-social-media-posts",
      "what-should-i-post-when-my-business-has-nothing-new",
      "what-is-the-easiest-way-for-a-small-business-to-post-consistently",
      "what-makes-local-business-social-media-look-trustworthy",
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
    "Quick Answer"
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
  description: "Plain answers to practical social media questions for small business owners.",
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
            Plain answers for small business owners trying to stay visible without turning social media into another job.
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
              <h2>Start with these questions</h2>
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
              <h2>All answers</h2>
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
