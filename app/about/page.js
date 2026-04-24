import Link from "next/link";
import Image from "next/image";
import "./about.css";

export const metadata = {
  title: "About Glow Social",
  description: "Glow Social is done-for-you social media for local businesses. We exist to keep Main Street visible.",
};

export default function About() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>About Glow Social</h1>
          <p>The marketing department local businesses deserve — but could never afford. Until now.</p>
        </div>
      </section>

      <article className="blog-post">
        <div className="blog-post-content">

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
              <h2>Hi, I'm Kathleen.</h2>
              <p>
                I've spent 15+ years in digital marketing, helping businesses of all
                sizes grow their online presence.
              </p>
              <p>
                But at a <a href="https://www.localfirstaz.com" target="_blank" rel="noopener noreferrer">local first</a> conference in 2024, I saw something that stuck
                with me: <strong>local business owners who were incredible at their
                craft but completely invisible online.</strong>
              </p>
              <p>
                The roofer who'd been in business 20 years — losing jobs to a franchise
                with better social media. The wedding photographer whose stunning work
                nobody could find. The coach with transformational results and zero
                online presence.
              </p>
              <p>
                They didn't need another tool to learn. They needed someone to
                just <em>do it</em> for them.
              </p>
              <p className="founder-punchline">So I built Glow Social.</p>
            </div>
          </section>

          <h2>For the Locals</h2>
          <p>
            Glow Social exists because the best businesses in your town are
            invisible online — and the worst ones have marketing departments.
          </p>
          <p>
            We watched local business owners try to keep up with social media.
            They'd post for a few weeks, get busy serving customers, and their
            pages would go dark. Meanwhile, the chain across the street posted
            daily because they have someone whose entire job is content.
          </p>
          <p>
            That's not a fair fight. So we built something to fix it.
          </p>

          <h2>What We Do</h2>
          <p>
            Glow Social creates and publishes social media content for local
            businesses — automatically. We read your website, learn your brand
            voice, and create custom posts that sound like you wrote them on
            your best day.
          </p>
          <p>
            No templates. No generic content. No hours spent creating posts.
            Just consistent, professional social media presence for $49/month.
          </p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>Enter your website URL</strong> — We read up to 11 pages to learn your brand</li>
            <li><strong>Connect your platforms</strong> — Facebook, Instagram, LinkedIn, Google Business Profile, TikTok, and more</li>
            <li><strong>Review and publish</strong> — Approve your posts with 3 taps</li>
          </ol>
          <p>Setup takes 5 minutes. Your first posts are ready the same day.</p>

          <h2>Who We Serve</h2>
          <p>
            We're built for the businesses that make a town worth living in:
            restaurants, salons, contractors, dentists, gyms, law firms,
            boutiques, and every other local business that's too busy serving
            customers to post on Instagram.
          </p>
          <p>
            If you live where you work and your success makes your community
            better — you're who we built this for.
          </p>

          <h2>What We Believe</h2>
          <p>Visibility shouldn't be a luxury only corporations can afford.</p>
          <p>
            A business shouldn't lose customers because the owner was too busy
            actually serving customers to post on social media.
          </p>
          <p>
            Read our full <Link href="/manifesto">manifesto</Link>.
          </p>

          <h2>Get Started</h2>
          <p>
            $49/month. No contracts. Cancel anytime. Setup takes 5 minutes.
          </p>
          <p>
            <a href="https://app.glowsocial.com/">Start your Glow Social account →</a>
          </p>
        </div>
      </article>
    </>
  );
}
