import { previewUrl } from "../../lib/marketing-links";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Glow Social's done-for-you social media posting for business owners who do not want another marketing tool to manage.",
};

const faqs = [
  {
    question: "What is Glow Social?",
    answer:
      "Glow Social turns your website into posts ready to approve for social channels and Google Business Profile. It is built for business owners who know social media matters but do not want to become content creators, learn another tool, or keep remembering to post.",
  },
  {
    question: "How does it work?",
    answer:
      "You enter your website and email to see preview posts first. Glow Social reads your site, drafts posts from your business context, and shows you what is ready. If you choose a plan, you connect the profiles you want kept active, approve what fits, and Glow Social publishes approved posts on schedule.",
  },
  {
    question: "Do I need to connect social accounts before seeing posts?",
    answer:
      "No. You can see preview posts before connecting social accounts, creating a full account, or choosing a plan. Connections come later, after you know the posts are a fit.",
  },
  {
    question: "What platforms do you post to?",
    answer:
      "Glow Social supports the major platforms local businesses use, including Facebook, Instagram, LinkedIn, Google Business Profile, TikTok, Pinterest, and more. You only connect the platforms that matter for your business.",
  },
  {
    question: "Will the posts sound like me?",
    answer:
      "Yes. Glow Social uses your actual website to understand your services, tone, proof, and customer language. You can review, edit, skip, or hold posts before anything publishes.",
  },
  {
    question: "Can I see posts before I pay?",
    answer:
      "Yes. The preview shows posts prepared from your real website before you create a full account, connect profiles, or choose a paid plan.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Plans start at $99/month. There are no contracts, no setup fees, and you can cancel anytime. You can also preview posts before choosing a paid plan.",
  },
  {
    question: "Can I cancel or pause anytime?",
    answer:
      "Yes. Plans are month-to-month, and you can cancel from your dashboard. You can also pause when you need a breather, then come back without starting over.",
  },
  {
    question: "Do I need to approve posts before they publish?",
    answer:
      "Yes. You review and approve posts before they go live. You can edit captions, skip posts that do not fit, and choose which profiles are connected.",
  },
  {
    question: "How many posts do I get per month?",
    answer:
      "The Core plan includes 20 posts per month. Posts are distributed across your connected platforms to maintain consistent visibility.",
  },
  {
    question: "Do you create the graphics too?",
    answer:
      "Yes. Posts include graphics or images matched to the post and your business context, so you do not need a separate design tool.",
  },
  {
    question: "Do you post to Google Business Profile?",
    answer:
      "Yes. Google Business Profile posting is included in every Glow Social plan at no extra cost.",
  },
  {
    question: "What about Google Reviews?",
    answer:
      "Google Review monitoring is included in Glo Pro and Glo Unlimited plans. You will see new reviews in your dashboard and can respond to them directly.",
  },
  {
    question: "How is this different from Buffer or Hootsuite?",
    answer:
      "Buffer and Hootsuite are schedulers. They help you publish content you already made. Glow Social creates the posts from your business context, gives you final say, and publishes what you approve.",
  },
  {
    question: "How is this different from an AI content tool?",
    answer:
      "Most AI content tools still make you prompt, choose ideas, copy text around, and manage a calendar. Glow Social is for people who do not want to be builders. Your website goes in, posts come back, and approved posts go out.",
  },
  {
    question: "How is this different from hiring a social media manager?",
    answer:
      "A freelancer or agency can be helpful, but usually costs more and adds onboarding, meetings, and back-and-forth. Glow Social handles the smaller job many owners actually need: steady posts prepared, reviewed, and sent without another person to manage.",
  },
  {
    question: "What businesses is Glow Social best for?",
    answer:
      "Glow Social is best for local and service businesses with a real website, a Google Business Profile, and an owner who wants social media handled without doing the work themselves.",
  },
  {
    question: "Still have questions?",
    answer:
      "Visit the Help Center or email support@glowsocial.com.",
  },
];

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <section className="blog-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">
          {faqs.map((faq) => (
            <section key={faq.question}>
              <h2>{faq.question}</h2>
              <p>
                {faq.question === "Still have questions?" ? (
                  <>
                    Visit our <a href="https://app.glowsocial.com/help">Help Center</a> or email us at support@glowsocial.com.
                  </>
                ) : (
                  faq.answer
                )}
              </p>
            </section>
          ))}
          <div className="post-cta-box">
            <h3>See the posts before you decide.</h3>
            <p>
              Enter your website and Glow Social will show posts ready to review before you connect accounts or choose a plan.
            </p>
            <a
              href={previewUrl("faq_page", "faq_bottom")}
              className="btn btn--primary"
              data-analytics-category="faq"
              data-analytics-event="faq_preview_cta_click"
              data-analytics-label="FAQ bottom preview CTA"
              data-analytics-location="faq_bottom"
            >
              See my posts
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
