import Image from "next/image";
import Link from "next/link";
import "./rescue-clinic.css";

export const metadata = {
  title: "Social Media Rescue Clinic",
  description:
    "A free in-person workshop for chambers, coworking spaces, and local business groups. Kathleen Celmins helps business owners fix the online trust gaps customers notice first.",
  alternates: {
    canonical: "/social-media-rescue-clinic",
  },
  openGraph: {
    title: "Social Media Rescue Clinic | Glow Social",
    description:
      "Bring Kathleen Celmins to your local business group for a practical, phone-in-hand workshop that helps members stop looking inactive online.",
    url: "https://glowsocial.com/social-media-rescue-clinic",
    images: [
      {
        url: "https://glowsocial.com/images/kathleen-celmins-founder.jpg",
        width: 768,
        height: 1024,
        alt: "Kathleen Celmins, founder of Glow Social",
      },
    ],
  },
};

const outcomes = [
  {
    eyebrow: "A real diagnosis",
    title: "Find the trust leaks customers notice first",
    body:
      "Attendees score their own Google Business Profile, Facebook page, Instagram, LinkedIn, and website handoff while they are in the room.",
  },
  {
    eyebrow: "A platform priority",
    title: "Pick the first place to fix",
    body:
      "They leave knowing whether their next move is Google, Facebook, Instagram, LinkedIn, or basic profile cleanup.",
  },
  {
    eyebrow: "A content plan",
    title: "Draft a simple 12-post rescue calendar",
    body:
      "No influencer theatrics. Just useful posts that make your business look active, helpful, and current.",
  },
  {
    eyebrow: "A follow-through tool",
    title: "Use the free setup kit after the session",
    body:
      "The workshop points people to glowsocial.com/setup so they can create or clean up multiple profiles without starting from a blank page.",
  },
];

const platformNotes = [
  {
    name: "Google Business Profile",
    note:
      "The secret weapon. It catches people with local buying intent, not just people killing time in a feed.",
  },
  {
    name: "Facebook",
    note:
      "Still where local customers check hours, events, reviews, and whether your business looks alive.",
  },
  {
    name: "Instagram",
    note:
      "Visual proof for restaurants, salons, fitness studios, shops, home services, and anyone whose work can be seen.",
  },
  {
    name: "LinkedIn",
    note:
      "A credibility layer for professional services, B2B, real estate, finance, consulting, and community leaders.",
  },
  {
    name: "TikTok, YouTube, Pinterest, and more",
    note:
      "Not every platform deserves equal effort. The session helps people choose the next useful one without spreading themselves thin.",
  },
];

const hostFit = [
  "Chambers of commerce and Main Street groups",
  "Coworking spaces and entrepreneur communities",
  "Libraries, city programs, and small business resource partners",
  "Local associations, vendor groups, and networking events",
];

const faq = [
  {
    q: "Is this a pitch?",
    a:
      "No. Glow Social is a natural next step for people who want help after the workshop, but the session stands on its own. Attendees leave with useful work done either way.",
  },
  {
    q: "How long is the workshop?",
    a:
      "The core session is 45 to 60 minutes. It can also expand to 75 minutes when the group wants live hot seats or more Q&A.",
  },
  {
    q: "What should attendees bring?",
    a:
      "A phone or laptop, their website URL, and access to at least one current social profile. They do not need to be advanced marketers.",
  },
  {
    q: "Is there a speaker fee?",
    a:
      "For aligned local business groups, there is no speaker fee. The goal is to give members a genuinely useful session and help Kathleen meet more business owners who need this work.",
  },
];

const workshopSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Social Media Rescue Clinic",
  description:
    "A free in-person workshop that helps local business owners diagnose and fix the online trust gaps customers notice first.",
  provider: {
    "@type": "Organization",
    name: "Glow Social",
    url: "https://glowsocial.com",
  },
  instructor: {
    "@type": "Person",
    name: "Kathleen Celmins",
    url: "https://glowsocial.com/about",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Local business owners and small business groups",
  },
};

export default function SocialMediaRescueClinic() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workshopSchema) }}
      />

      <section className="rescue-hero">
        <div className="rescue-hero-grid" aria-hidden="true" />
        <div className="container rescue-hero-inner">
          <div className="rescue-hero-copy-block">
            <p className="rescue-kicker">Free in-person workshop for local business groups</p>
            <h1>Social Media Rescue Clinic</h1>
            <p className="rescue-hero-sub">
              Help your members stop looking inactive online in one practical hour.
            </p>
            <p className="rescue-hero-copy">
              Kathleen Celmins, founder of Glow Social, leads a phone-in-hand session where local
              business owners diagnose their profiles, find the platform that matters most, and
              leave with a simple rescue plan they can use immediately.
            </p>
            <div className="rescue-hero-actions">
              <a
                href="mailto:hello@glowsocial.com?subject=Social%20Media%20Rescue%20Clinic%20for%20our%20group"
                className="btn btn--primary btn--lg"
              >
                Invite Kathleen to Speak
              </a>
              <Link href="/lets-meet" className="btn btn--white-outline btn--lg">
                Book a Quick Call
              </Link>
            </div>
          </div>
          <div className="rescue-hero-portrait">
            <Image
              src="/images/kathleen-celmins-founder.jpg"
              alt="Kathleen Celmins, founder of Glow Social"
              width={320}
              height={426}
              priority
              className="rescue-hero-portrait-image"
            />
            <div className="rescue-hero-portrait-caption">
              <strong>Kathleen Celmins</strong>
              <span>Founder of Glow Social</span>
            </div>
          </div>
        </div>
      </section>

      <section className="rescue-proof-strip">
        <div className="container rescue-proof-grid">
          <div>
            <strong>45-60 min</strong>
            <span>in-person format</span>
          </div>
          <div>
            <strong>No speaker fee</strong>
            <span>for aligned local groups</span>
          </div>
          <div>
            <strong>Phone-in-hand</strong>
            <span>not theory-heavy</span>
          </div>
          <div>
            <strong>Clear next step</strong>
            <span>glowsocial.com/setup</span>
          </div>
        </div>
      </section>

      <section className="rescue-intro">
        <div className="container rescue-intro-grid">
          <div>
            <p className="section-badge">What It Solves</p>
            <h2>Your members are good at their work. Their profiles may not show it.</h2>
          </div>
          <div className="rescue-intro-copy">
            <p>
              Most local business owners do not need another inspirational talk about posting
              more. They need someone to help them see what a customer sees: old bios, missing
              links, neglected Google posts, unclear photos, and social pages that make a good
              business look abandoned.
            </p>
            <p>
              The Social Media Rescue Clinic gives them a way back in. It is practical, kind,
              and specific enough that people leave thinking, &ldquo;I can fix this today.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="rescue-outcomes">
        <div className="container">
          <p className="section-badge">What Attendees Leave With</p>
          <h2>Useful work gets done in the room.</h2>
          <div className="rescue-card-grid">
            {outcomes.map((outcome) => (
              <article className="rescue-card" key={outcome.title}>
                <p>{outcome.eyebrow}</p>
                <h3>{outcome.title}</h3>
                <span>{outcome.body}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rescue-platforms">
        <div className="container rescue-platform-layout">
          <div className="rescue-platform-lead">
            <p className="section-badge">The Platform Reset</p>
            <h2>Google Business Profile is the secret.</h2>
            <p>
              The top social platforms matter, but Google Business Profile is where local buying
              intent shows up first. The workshop helps attendees stop treating every platform
              like the same chore and start matching their effort to where customers are actually
              looking.
            </p>
            <Link href="/setup" className="btn btn--primary">
              Try the Free Setup Kit
            </Link>
          </div>
          <div className="rescue-platform-list">
            {platformNotes.map((platform, index) => (
              <div className="rescue-platform-row" key={platform.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{platform.name}</h3>
                  <p>{platform.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rescue-tool">
        <div className="container rescue-tool-grid">
          <div className="rescue-tool-image-wrap">
            <Image
              src="/images/setup/slide-4.png"
              alt="Glow Social setup kit showing Google Business Profile guidance"
              width={1024}
              height={640}
              className="rescue-tool-image"
            />
          </div>
          <div>
            <p className="section-badge">Built-In Follow-Through</p>
            <h2>The workshop does not end with &ldquo;good luck.&rdquo;</h2>
            <p>
              Attendees can go to <strong>glowsocial.com/setup</strong> after the session to
              generate profile copy, see which platforms they still need, and keep cleaning up
              their presence without waiting for motivation to strike.
            </p>
            <p>
              That makes the session more valuable for the host, too: members leave with a
              tangible next step instead of a notebook full of vague intentions.
            </p>
          </div>
        </div>
      </section>

      <section className="rescue-hosts">
        <div className="container rescue-hosts-grid">
          <div>
            <p className="section-badge">Best Fit</p>
            <h2>Built for rooms full of busy local business owners.</h2>
            <p>
              This works especially well for groups whose members know social media matters but
              feel behind, inconsistent, or unsure which platform deserves attention first.
            </p>
          </div>
          <ul className="rescue-host-list">
            {hostFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rescue-organizer-kit">
        <div className="container">
          <p className="section-badge">Organizer Copy</p>
          <h2>Easy blurb to share with your members.</h2>
          <div className="rescue-copy-box">
            <p>
              Join Kathleen Celmins, founder of Glow Social, for a practical Social Media
              Rescue Clinic built for local business owners. Bring your phone or laptop and
              one social profile you want to improve. You will score your current online
              presence, find the platform that needs attention first, and leave with a simple
              plan to make your business look active, current, and trustworthy online.
            </p>
          </div>
        </div>
      </section>

      <section className="rescue-speaker">
        <div className="container rescue-speaker-grid">
          <Image
            src="/images/kathleen-celmins-founder.jpg"
            alt="Kathleen Celmins, founder of Glow Social"
            width={360}
            height={480}
            className="rescue-speaker-photo"
          />
          <div>
            <p className="section-badge">About the Speaker</p>
            <h2>Kathleen makes social media feel fixable.</h2>
            <p>
              Kathleen Celmins is the founder of Glow Social, a done-for-you social media
              platform for local businesses. She has spent 15+ years in digital marketing and
              built Glow Social for the owners who are excellent at their work but too busy to
              keep every profile active.
            </p>
            <p>
              Her workshops are direct, practical, and grounded in what customers actually
              check before they call, visit, book, or refer.
            </p>
          </div>
        </div>
      </section>

      <section className="rescue-faq">
        <div className="container">
          <p className="section-badge">Questions</p>
          <h2>What hosts usually ask.</h2>
          <div className="rescue-faq-grid">
            {faq.map((item) => (
              <article className="rescue-faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rescue-bottom-cta">
        <div className="container">
          <p className="section-badge">Bring the Clinic to Your Group</p>
          <h2>Give your members a workshop they can use before they leave the room.</h2>
          <p>
            Tell Kathleen about your group, expected audience size, and preferred date window.
            She will reply with format options and a simple host checklist.
          </p>
          <div className="rescue-bottom-actions">
            <a
              href="mailto:hello@glowsocial.com?subject=Social%20Media%20Rescue%20Clinic%20for%20our%20group"
              className="btn btn--primary btn--lg"
            >
              Email Kathleen
            </a>
            <Link href="/lets-meet" className="btn btn--white-outline btn--lg">
              Book a Quick Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
