import Link from "next/link";
import Image from "next/image";
import { getPricing } from "../pricing-config";
import "./about.css";

export const metadata = {
  title: "About Glow Social",
  description: "Glow Social keeps local businesses looking active, current, and trustworthy online with done-for-you social media posting.",
};

export default function About() {
  const pricing = getPricing();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://glowsocial.com/about/#person",
            "name": "Kathleen Celmins",
            "url": "https://glowsocial.com/about",
            "image": "https://glowsocial.com/images/kathleen-celmins-founder.jpg",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "@id": "https://glowsocial.com/#organization",
              "name": "Glow Social",
              "url": "https://glowsocial.com"
            },
            "sameAs": [
              "https://www.linkedin.com/in/kathleencelmins/",
              "https://thewellpaidexpert.com/about/"
            ]
          }),
        }}
      />
      <section className="blog-hero">
        <div className="container">
          <h1>About Glow Social</h1>
          <p>We keep local businesses looking active, current, and trustworthy online.</p>
        </div>
      </section>

      <article className="blog-post">
        <div className="blog-post-content">
          <section className="about-proof" aria-label="Glow Social at a glance">
            <div>
              <strong>20</strong>
              <span>finished posts every month</span>
            </div>
            <div>
              <strong>$99</strong>
              <span>starting monthly price</span>
            </div>
            <div>
              <strong>5 min</strong>
              <span>to start a preview</span>
            </div>
            <div>
              <strong>15+</strong>
              <span>years in digital marketing</span>
            </div>
          </section>

          <section className="about-intro">
            <p className="founder-label">Why We Exist</p>
            <h2>Your profiles should not make your business look abandoned.</h2>
            <p>
              Customers check your Google listing, reviews, Facebook page, and
              Instagram before they call. When those places look stale, trust
              drops before you ever get a chance to explain.
            </p>
            <p>
              Glow Social exists for the owners who are already doing the real
              work: fixing roofs, cutting hair, treating patients, running
              payroll, serving tables, training clients, and taking care of
              customers. You should not have to become a content creator just to
              look open, active, and worth calling.
            </p>
          </section>

          <section className="founder-section">
            <div className="founder-photo-wrap">
              <Image
                src="/images/kathleen-celmins-founder.jpg"
                alt="Kathleen Celmins, founder of Glow Social, smiling at her desk"
                width={400}
                height={530}
                className="founder-photo"
                priority
              />
            </div>
            <div className="founder-text">
              <p className="founder-label">Meet the Founder</p>
              <h2>Hi, I&apos;m Kathleen.</h2>
              <p>
                I&apos;ve spent 15+ years in digital marketing, helping businesses of all
                sizes grow their online presence.
              </p>
              <p>
                But at a <a href="https://www.localfirstaz.com" target="_blank" rel="noopener noreferrer">local first</a> conference in 2024, I saw something that stuck
                with me: <strong>local business owners who were incredible at their
                craft but completely invisible online.</strong>
              </p>
              <p>
                The roofer who&apos;d been in business 20 years — losing jobs to a franchise
                with better social media. The wedding photographer whose stunning work
                nobody could find. The coach with transformational results and zero
                online presence.
              </p>
              <p>
                They didn&apos;t need another tool to learn. They needed someone to
                just <em>do it</em> for them.
              </p>
              <p className="founder-punchline">So I built Glow Social.</p>
            </div>
          </section>

          <h2>What We Do</h2>
          <p>
            Glow Social turns a business website into 20 posts ready to
            approve, then publishes approved posts across the places customers
            check.
          </p>
          <p>
            We read your website, learn your brand voice, and create custom
            posts that sound like your business on its clearest day. No
            templates. No generic filler. No hours spent staring at a blank
            screen wondering what to post.
          </p>
          <p>
            Pro adds carousel posts, video posts, campaign support, review
            monitoring, and analytics for businesses with more going on.
          </p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>Enter your website URL</strong> — We read your site and prepare posts from your real business</li>
            <li><strong>See the posts first</strong> — Review what is ready before you choose a plan</li>
            <li><strong>Approve what fits</strong> — Connect the profiles you want kept active after you say yes</li>
          </ol>
          <p>Starting a preview takes a few minutes. Your first posts come before the commitment.</p>

          <section className="about-difference">
            <p className="founder-label">What Makes Us Different</p>
            <h2>Built for local trust, not internet fame.</h2>
            <div className="about-difference-grid">
              <div>
                <h3>Google Business is part of the storefront.</h3>
                <p>
                  For local businesses, Google often matters more than another
                  social feed. We treat Google Business Profile visibility as a
                  core part of the job.
                </p>
              </div>
              <div>
                <h3>Reviews matter as much as posts.</h3>
                <p>
                  A current profile and a strong review presence work together.
                  Pro includes Google Review monitoring so reputation is not an
                  afterthought.
                </p>
              </div>
              <div>
                <h3>Consistency beats virality.</h3>
                <p>
                  Most local businesses do not need to go viral. They need to
                  look open, reliable, and easy to trust every time a customer
                  checks them out.
                </p>
              </div>
              <div>
                <h3>You stay in control.</h3>
                <p>
                  Review before posts go live, edit what needs editing, or let
                  the system run when you are comfortable.
                </p>
              </div>
            </div>
          </section>

          <section className="about-not">
            <p className="founder-label">What We Do Not Do</p>
            <ul>
              <li>We do not make you become an influencer.</li>
              <li>We do not hand you another complicated tool to manage.</li>
              <li>We do not chase trends that have nothing to do with your customers.</li>
              <li>We do not fill your feed with generic filler just to say something posted.</li>
            </ul>
          </section>

          <h2>Who We Serve</h2>
          <p>
            We&apos;re built for the businesses that make a town worth living in:
            restaurants, salons, contractors, dentists, gyms, law firms,
            boutiques, and every other local business that&apos;s too busy serving
            customers to post on Instagram.
          </p>
          <p>
            If you live where you work and your success makes your community
            better — you&apos;re who we built this for.
          </p>
          <p>
            Visibility shouldn&apos;t be a luxury only corporations can afford.{" "}
            <Link href="/manifesto">Read our manifesto</Link>.
          </p>

          <div className="about-cta">
            <p className="about-cta-price">{pricing.summaryFull} {pricing.billingPolicy}</p>
            <a href="https://app.glowsocial.com/preview" className="btn btn--primary btn--lg">
              See my posts
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
