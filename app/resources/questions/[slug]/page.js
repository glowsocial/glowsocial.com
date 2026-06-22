import { notFound } from "next/navigation";
import { extractAnswerText, getAllQuestions, getQuestionBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import Link from "next/link";
import AuthorBio, { PersonJsonLd } from "@/app/components/AuthorBio";
import { getPricing } from "@/app/pricing-config";

export async function generateStaticParams() {
  const questions = getAllQuestions();
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const question = getQuestionBySlug(slug);
  if (!question) return { title: "Question Not Found" };

  return {
    title: question.title,
    description: question.description || `${question.title} — Glow Social Q&A`,
    alternates: {
      canonical: `/resources/questions/${slug}`,
    },
    openGraph: {
      title: question.title,
      description: question.description,
      type: "article",
      url: `https://glowsocial.com/resources/questions/${slug}`,
      siteName: "Glow Social",
      publishedTime: question.date,
      modifiedTime: question.updated || question.date,
    },
  };
}

function ArticleJsonLd({ title, description, date, updated, slug, body }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description || `${title} — Glow Social Q&A`,
    datePublished: date,
    dateModified: updated || date,
    author: {
      "@type": "Organization",
      name: "Glow Social",
      url: "https://glowsocial.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Glow Social",
      url: "https://glowsocial.com",
      logo: {
        "@type": "ImageObject",
        url: "https://glowsocial.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://glowsocial.com/resources/questions/${slug}`,
    },
    articleBody: body,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function QuestionFaqJsonLd({ question }) {
  const answer = extractAnswerText(question.content, question.description);
  if (!answer) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: question.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbJsonLd({ title, slug }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://glowsocial.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Questions",
        item: "https://glowsocial.com/resources/questions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title || slug,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function RelatedResources({ resources }) {
  if (!resources || resources.length === 0) return null;

  return (
    <nav className="question-related" aria-label="Related resources">
      <h2>Related Resources</h2>
      <div className="question-related-grid">
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            className="question-related-card"
          >
            <h3>{resource.title}</h3>
            {resource.description && <p>{resource.description}</p>}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default async function QuestionPage({ params }) {
  const { slug } = await params;
  const question = getQuestionBySlug(slug);
  if (!question) notFound();

  const pricing = getPricing();
  const contentHtml = markdownToHtml(question.content);

  return (
    <article className="blog-post">
      <ArticleJsonLd
        title={question.title}
        description={question.description}
        date={question.date}
        updated={question.updated}
        slug={slug}
        body={question.content}
      />
      <QuestionFaqJsonLd question={question} />
      <BreadcrumbJsonLd title={question.title} slug={slug} />
      <PersonJsonLd />
      
      <header className="blog-post-header">
        <Link
          href="/resources/questions"
          style={{
            fontSize: "0.85rem",
            color: "var(--accent-dark)",
            fontWeight: 600,
            display: "inline-block",
            marginBottom: 20,
          }}
        >
          ← Back to Q&A Hub
        </Link>
        <h1 style={{ textTransform: "none", letterSpacing: "normal" }}>{question.title}</h1>
        <div className="blog-post-meta">
          <span>Expert Answer</span>
          {question.readingTime && <span>{question.readingTime}</span>}
        </div>
      </header>

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <RelatedResources resources={question.relatedResources} />

      {/* Post-content CTA */}
      <div className="post-cta-box" style={{ marginTop: "60px" }}>
        <h3>Ready to stop worrying about social media?</h3>
        <p>
          Glow Social creates and publishes professional content for your
          business — so you can focus on what you do best.
        </p>
        <a
          href="https://app.glowsocial.com/"
          className="btn btn--primary"
        >
          Get Started — {pricing.startingAtShort}
        </a>
      </div>

      {/* Author Bio */}
      <AuthorBio />
    </article>
  );
}
