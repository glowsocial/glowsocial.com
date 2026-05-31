import HomeJsonLd from "./HomeJsonLd";
import { getPricing } from "../pricing-config";
import StickyMobileCta from "./StickyMobileCta";
import "../home.css";

function BrandName() {
  return <span className="brand-nowrap">Glow Social</span>;
}

function HeroSocialShowcase() {
  return (
    <div className="hero-showcase" aria-label="Published post previews created by Glow Social">
      <article className="showcase-card showcase-card--linkedin">
        <div className="showcase-card-top">
          <span className="showcase-platform">in</span>
          <div>
            <strong>Hudson Mercer</strong>
            <span>1h</span>
          </div>
        </div>
        <p>Client reminder: appointment slots are open for the end of the month. Book early if you need a morning time.</p>
        <div className="showcase-card-art showcase-card-art--text">
          <strong>Open appointments</strong>
          <span>Now booking this month</span>
        </div>
      </article>

      <article className="showcase-card showcase-card--instagram">
        <div className="showcase-card-top">
          <span className="showcase-platform showcase-platform--ig">ig</span>
          <div>
            <strong>morningroutinecafe</strong>
            <span>Phoenix, AZ</span>
          </div>
        </div>
        <div className="showcase-card-art showcase-card-art--photo" aria-hidden="true"></div>
        <p>Fresh bread, warm coffee, and a front door that is open when you need a softer start.</p>
      </article>

      <article className="showcase-card showcase-card--google">
        <div className="showcase-card-top">
          <span className="showcase-platform showcase-platform--google">G</span>
          <div>
            <strong>Google Business Profile</strong>
            <span>Posted today</span>
          </div>
        </div>
        <p>Fresh activity where local customers check before they call, visit, or book.</p>
        <div className="showcase-card-art showcase-card-art--gbp">
          <strong>Open today</strong>
          <span>Directions | Call | Website</span>
        </div>
      </article>
    </div>
  );
}

export default function HomePageContent() {
  const pricing = getPricing();

  return (
    <>
      <HomeJsonLd />

      {/* ============ HERO — Local product promise ============ */}
      <section className="hero">
        <div className="container hero-stage">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              Local business social media, handled
            </span>
            <h1>
              <span>Social media for</span>
              <span className="hero-audience" aria-hidden="true">
                <span className="hero-audience-track">
                  <span>cafes.</span>
                  <span>salons.</span>
                  <span>contractors.</span>
                  <span>clinics.</span>
                  <span>realtors.</span>
                  <span>local shops.</span>
                  <span>cafes.</span>
                </span>
              </span>
              <span className="visually-hidden">local businesses.</span>
            </h1>
            <p className="hero-sub">
              Paste your website. <BrandName /> turns it into finished posts for Instagram, Facebook, LinkedIn, and Google Business Profile.
            </p>
            <p className="hero-desc">
              No content calendar to maintain. No generic captions. No quiet profiles making people wonder if you are still open.
            </p>
            <form
              className="hero-url-form"
              action="https://app.glowsocial.com/preview"
              method="get"
              id="hero-url-form"
            >
              <div className="hero-url-input-wrap">
                <svg className="hero-url-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <input
                  type="text"
                  name="url"
                  placeholder="yourwebsite.com"
                  className="hero-url-input"
                  autoComplete="off"
                  inputMode="url"
                  id="hero-url-input"
                  required
                />
                <button type="submit" className="hero-url-btn" id="hero-url-submit">
                  SEE WHAT WE&apos;D POST
                </button>
              </div>
            </form>
            <p className="hero-url-hint">
              Free preview first. We&apos;ll ask for your email before showing the draft. No payment required.
            </p>
            <div className="hero-actions">
              <a href="#pricing" className="btn btn--outline" id="hero-cta-secondary">
                See plans
              </a>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Posts created for you</span>
              </div>
              <div className="hero-proof-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="9 11 12 14 22 4"/></svg>
                <span>Google Business included</span>
              </div>
              <div className="hero-proof-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Approve before publish</span>
              </div>
            </div>
          </div>
          <HeroSocialShowcase />
        </div>
      </section>

      {/* ============ TRUST BAR — Specificity builds trust ============ */}
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            <div><strong>Active</strong> every week</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            <div><strong>Your voice</strong> from your site</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
            <div><strong>Social + Google</strong> covered</div>
          </div>
          <div className="trust-stat">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            <div><strong>No contracts</strong> cancel anytime</div>
          </div>
        </div>
      </section>

      {/* ============ WORKFLOW — Product in four steps ============ */}
      <section className="workflow" id="how">
        <div className="container">
          <h2>From your website to posts customers can see.</h2>
          <p className="section-sub">
            <BrandName /> turns the business you already built into finished social content, then keeps it moving on the channels that matter locally.
          </p>

          <div className="workflow-grid">
            <div className="workflow-card">
              <div className="workflow-num">1</div>
              <h3>Add your website</h3>
              <p>We pull in services, offers, location details, and the way your business already talks.</p>
            </div>
            <div className="workflow-card">
              <div className="workflow-num">2</div>
              <h3>Review real drafts</h3>
              <p>Captions and graphics are prepared for you, so you are reacting to finished work instead of a blank screen.</p>
            </div>
            <div className="workflow-card">
              <div className="workflow-num">3</div>
              <h3>Approve or adjust</h3>
              <p>Skip, edit, or approve posts before they go live. The system learns what sounds right for your business.</p>
            </div>
            <div className="workflow-card">
              <div className="workflow-num">4</div>
              <h3>Stay visible</h3>
              <p><BrandName /> publishes across your social profiles and Google Business Profile on a steady rhythm.</p>
            </div>
          </div>

          <div className="workflow-channels" aria-label="Supported visibility channels">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Threads</span>
            <span>Google Business Profile</span>
          </div>

          <div className="section-cta">
            <a href="https://app.glowsocial.com/preview" className="btn btn--primary" id="workflow-cta">See what we&apos;d post</a>
          </div>
        </div>
      </section>

      {/* ============ GBP + REVIEWS ============ */}
      <section className="gbp-reviews" id="gbp">
        <div className="container">
          <h2>Built for where local trust gets checked.</h2>
          <p className="section-sub"><BrandName /> keeps the places customers already look from going quiet.</p>
          <div className="gbp-grid">
            <div className="gbp-pillar">
              <div className="gbp-pillar-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 11 12 14 22 4"/></svg>
                <h3>Google Business Profile posts</h3>
              </div>
              <p className="gbp-pillar-desc"><BrandName /> publishes directly to Google Business Profile, so your listing shows fresh activity where local customers search.</p>
              <ul className="gbp-pillar-list">
                <li>Posts created for your business</li>
                <li>Matches your brand voice and services</li>
                <li>Published alongside your regular social content</li>
              </ul>
            </div>
            <div className="gbp-pillar">
              <div className="gbp-pillar-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <h3>Google review monitoring</h3>
              </div>
              <p className="gbp-pillar-desc">When monitoring is connected, new reviews show up in your <BrandName /> dashboard so reputation does not become another blind spot.</p>
              <ul className="gbp-pillar-list">
                <li>Instant alerts when new reviews arrive</li>
                <li>Respond without hunting through accounts</li>
                <li>Included with Pro and Unlimited</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ============ THE PROBLEM ============ */}
      <section className="brain-problem" id="brain-problem">
        <div className="container">
          <h2>Your business is active.<br />The internet should show that.</h2>
          <p className="section-sub">
            Customers are not looking for a perfect content strategy. They are checking whether your business looks current, real, and worth contacting.
          </p>
          <div className="brain-grid">
            <div className="brain-card">
              <div className="brain-card-icon brain-card-icon--muted">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <h3>Without a system</h3>
              <p>The business is open, but quiet profiles can make it look like nothing is happening.</p>
              <div className="brain-card-verdict">They wonder: <strong>&ldquo;Are they still active?&rdquo;</strong></div>
            </div>
            <div className="brain-card brain-card--after">
              <div className="brain-card-icon brain-card-icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>With <BrandName /></h3>
              <p>Your profiles keep showing signs of life while you stay focused on the actual business.</p>
              <div className="brain-card-verdict brain-card-verdict--good">They see: <strong>&ldquo;This business is active and professional.&rdquo;</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTION — What Glow Social handles ============ */}
      <section className="features" id="features">
        <div className="container">
          <h2>What <BrandName /> gives you</h2>
          <p className="section-sub">A steady online presence that feels like your business, without adding social media to your week.</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></div>
              <div><h3>A current presence</h3><p>Your pages keep showing signs of life, even during weeks when you are busy serving customers.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg></div>
              <div><h3>Your voice</h3><p><BrandName /> learns how your business sounds, so posts do not read like generic marketing filler.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></div>
              <div><h3>Finished posts</h3><p>Captions and graphics are prepared together, so you are not starting from a blank screen.</p></div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></div>
              <div><h3>Published for you</h3><p><BrandName /> sets the rhythm and publishes to the places customers check, including Google Business Profile.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL TICKER ============ */}
      <section className="testimonial-ticker" id="testimonials" aria-label="Customer testimonials">
        <div className="ticker-track">
          <div className="ticker-slide">
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I love the carousels.&rdquo;</span>
              <span className="ticker-author">— Life Coach</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I forgot I even had social media. That&apos;s the point.&rdquo;</span>
              <span className="ticker-author">— Tax Preparer</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My clients think I hired a marketing team.&rdquo;</span>
              <span className="ticker-author">— Wellness Spa Owner</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I&apos;m getting traction on profiles I didn&apos;t even have before I signed up.&rdquo;</span>
              <span className="ticker-author">— Home Care Provider</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My Mondays are lighter now. It just shows up handled.&rdquo;</span>
              <span className="ticker-author">— Mortgage Broker</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;It just quietly works. That&apos;s all I wanted.&rdquo;</span>
              <span className="ticker-author">— Real Estate Agent</span>
            </div>
            <div className="ticker-dot" aria-hidden="true">✦</div>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="ticker-slide" aria-hidden="true">
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I love the carousels.&rdquo;</span>
              <span className="ticker-author">— Life Coach</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I forgot I even had social media. That&apos;s the point.&rdquo;</span>
              <span className="ticker-author">— Tax Preparer</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My clients think I hired a marketing team.&rdquo;</span>
              <span className="ticker-author">— Wellness Spa Owner</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;I&apos;m getting traction on profiles I didn&apos;t even have before I signed up.&rdquo;</span>
              <span className="ticker-author">— Home Care Provider</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;My Mondays are lighter now. It just shows up handled.&rdquo;</span>
              <span className="ticker-author">— Mortgage Broker</span>
            </div>
            <div className="ticker-dot">✦</div>
            <div className="ticker-quote">
              <span className="ticker-text">&ldquo;It just quietly works. That&apos;s all I wanted.&rdquo;</span>
              <span className="ticker-author">— Real Estate Agent</span>
            </div>
            <div className="ticker-dot">✦</div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Choose how handled you want it.</h2>
          <p className="section-sub">Start with the level of presence you want. Add review monitoring and more formats only when they are useful. {pricing.billingPolicy}</p>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Glo Core</h3>
              <div className="price"><span className="price-amount">{pricing.core.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li><strong>Steady posting</strong> for your core presence</li>
                <li><strong>Brand-matched voice</strong> from your website</li>
                <li><strong>Google Business</strong> visibility included</li>
                <li><strong>Simple control</strong> before posts go live</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=core" className="btn btn--outline" id="pricing-core-cta">START WITH CORE</a>
            </div>
            <div className="price-card price-card--featured">
              <span className="popular-badge">Most popular</span>
              <h3>Glo Pro</h3>
              <div className="price"><span className="price-amount">{pricing.pro.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Core, plus:</li>
                <li><strong>More posting coverage</strong> for stronger momentum</li>
                <li><strong>Carousel and video formats</strong></li>
                <li><strong>Campaign support</strong> for promos and events</li>
                <li><strong>Google review monitoring</strong></li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=pro" className="btn btn--primary" id="pricing-pro-cta">START WITH PRO</a>
            </div>
            <div className="price-card">
              <h3>Glo Unlimited</h3>
              <div className="price"><span className="price-amount">{pricing.unlimited.display}</span><span className="price-period">/month</span></div>
              <ul>
                <li>Everything in Pro, plus:</li>
                <li><strong>Always-on coverage</strong> for bigger seasons</li>
                <li><strong>No content ceiling</strong> when you have more to share</li>
                <li><strong>Full brand coverage</strong> across campaigns</li>
              </ul>
              <a href="https://app.glowsocial.com/checkout?plan=unlimited" className="btn btn--outline" id="pricing-unlimited-cta">START WITH UNLIMITED</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA — Emotional close ============ */}
      <section className="final-cta">
        <div className="container">
          <h2>Stay active online<br />without adding social media to your week.</h2>
          <p><BrandName /> keeps your business visible, current, and easy to trust where customers already check.<br />{pricing.summaryFull} {pricing.billingPolicy}</p>
          <a href="https://app.glowsocial.com/" className="btn btn--primary btn--lg btn--glow" id="final-cta">GET MY SOCIAL MEDIA HANDLED</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2>Questions from business owners who hate social media</h2>
          <div className="faq-list">
            <details className="faq-item"><summary><span className="faq-question">Will this get me more customers?</span></summary><p><BrandName /> is not a replacement for advertising. It helps your business look current when people already considering you check your profiles before they call, book, visit, or refer.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much does <BrandName /> cost?</span></summary><p>{pricing.summaryFull} {pricing.billingPolicy} You keep access through the end of your paid period.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Can I cancel anytime?</span></summary><p>Yes. No contracts, no commitments. Cancel anytime and keep access through the end of your paid period. We earn your business every month.</p></details>
            <details className="faq-item"><summary><span className="faq-question">How much do I have to do?</span></summary><p>Setup takes a few minutes. After that, <BrandName /> prepares and publishes the posts. You can check in before things go live, but you are not keeping a posting system alive or starting from scratch.</p></details>
            <details className="faq-item"><summary><span className="faq-question">What if something does not sound right?</span></summary><p>You stay in control. Flag it, skip it, or adjust direction before posts go live. <BrandName /> learns from your website and business details, but you always have the final say.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Does <BrandName /> post to Google Business Profile?</span></summary><p>Yes. <BrandName /> publishes to Google Business Profile alongside your regular social content, so the place local customers search does not go quiet.</p></details>
            <details className="faq-item"><summary><span className="faq-question">Who is <BrandName /> best for?</span></summary><p><BrandName /> is for business owners who know their online presence matters but do not want to become content creators, hire an agency, or keep remembering to post.</p></details>
          </div>
        </div>
      </section>

      {/* ============ BACKED BY ============ */}
      <div className="backed-by">
        <a href="https://elevenlabs.io/startup-grants" target="_blank" rel="noopener noreferrer">
          <img
            src="https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp"
            alt="ElevenLabs Startup Grant Recipient"
            width={250}
            height={50}
            loading="lazy"
            decoding="async"
            style={{ display: 'block' }}
          />
        </a>
      </div>

      {/* STICKY MOBILE CTA */}
      <StickyMobileCta />
    </>
  );
}
