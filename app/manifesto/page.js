import Link from "next/link";

export const metadata = {
  title: "Manifesto — Glow Social",
  description: "The game is rigged against locally owned businesses. We're here to change that. Glow Social exists to keep Main Street visible.",
};

export default function Manifesto() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Manifesto</h1>
        </div>
      </section>
      <article className="blog-post">
        <div className="blog-post-content">

          <h2>There Are Two Types of Businesses in Your Town</h2>
          <p>One type lives here.</p>
          <p>
            The owner coaches Little League. Sponsors the school fundraiser.
            Knows the regulars by name. Has been on the same corner for fifteen
            years.
          </p>
          <p>The other type was deployed here.</p>
          <p>
            Private equity bought a building. Corporate sent a manager. The
            marketing budget was approved in a conference room 2,000 miles away.
          </p>
          <p><strong>Guess which one looks more professional online?</strong></p>

          <hr />

          <h2>The Game Is Rigged</h2>
          <p>
            The chain posts daily. Not because they care more — because they have
            people whose entire job is to post.
          </p>
          <p>
            The local business posts whenever the owner has five free minutes.
            Which is never.
          </p>
          <p>The chain has a content calendar approved by committee.</p>
          <p>
            The local business has guilt, a phone full of unsorted photos, and a
            login they can't remember.
          </p>
          <p>Same customer. Same search bar. Same split-second decision.</p>
          <p>One looks alive. One looks abandoned.</p>
          <p><strong>The customer picks the one that showed up.</strong></p>

          <hr />

          <h2>This Is Not a Fair Fight</h2>
          <p>
            We're watching local businesses lose — not because they got worse,
            but because the algorithm rewards whoever posts most.
          </p>
          <p>
            The family restaurant with the secret recipe? Losing walk-ins to
            Applebee's.
          </p>
          <p>
            The gym where the trainers remember your name? Hemorrhaging members
            to Planet Fitness.
          </p>
          <p>
            The salon that's been there for three generations? Looking less
            professional than the Great Clips that opened last month.
          </p>
          <p>
            <strong>Not because the chains are better. Because they're louder.</strong>
          </p>

          <hr />

          <h2>We Believe This Is Wrong</h2>
          <p>Visibility shouldn't be a luxury only corporations can afford.</p>
          <p>
            A business shouldn't lose customers because the owner was too busy{" "}
            <em>actually serving customers</em> to post on Instagram.
          </p>
          <p>
            A 20-year track record shouldn't get beaten by a chain with a 20-day
            social media calendar.
          </p>
          <p>
            The person who lives here, works here, and reinvests here shouldn't
            lose to someone extracting money to send somewhere else.
          </p>

          <hr />

          <h2>We're Here for the Locals</h2>
          <p>The ones who live in the zip code where they work.</p>
          <p>The ones who actually know their customers.</p>
          <p>
            The ones who don't have a "social media team" because they ARE the
            team — plus the accountant, the janitor, the customer service rep,
            and the person who fixes the toilet when it breaks.
          </p>
          <p>
            The ones whose success makes the community better, not just a balance
            sheet in another state.
          </p>
          <p><strong>That's who Glow Social exists for.</strong></p>

          <hr />

          <h2>What We Actually Do</h2>
          <p>
            We make local businesses look as active online as the chains —
            without the work, the hiring headaches, or the corporate budget.
          </p>
          <p>Not so you can become an influencer.</p>
          <p>Not so you can go viral.</p>
          <p>Just so you can show up. Consistently. Like they do.</p>
          <p>
            So when someone new to town searches "best [your thing] near me,"
            you look just as alive as the chain with the marketing department.
          </p>
          <p>
            So visibility stops being about resources and starts being about
            showing up.
          </p>

          <hr />

          <h2>Who We're Not For</h2>
          <p>We're not for private equity.</p>
          <p>
            We're not for out-of-state corporations cosplaying as local
            businesses.
          </p>
          <p>
            We're not for anyone whose business model depends on extracting
            value from communities they don't live in.
          </p>
          <p>If you're here to squeeze out the little guy, find another tool.</p>

          <hr />

          <h2>The Mission</h2>
          <p><strong>Keep Main Street visible.</strong></p>
          <p>
            We believe local businesses are what make a town worth living in.
          </p>
          <p>
            We believe the people who live where they work shouldn't lose to the
            people who don't.
          </p>
          <p>We believe visibility is a utility, not a luxury.</p>
          <p>
            And we're going to do everything we can to make sure the locals
            don't disappear.
          </p>

          <hr />

          <p><em>Glow Social. For the locals.</em></p>

          <div className="post-cta-box" style={{ marginTop: '3rem' }}>
            <h3>The Proof is in the Data</h3>
            <p>
              We analyzed over 100,000 posts from local businesses to see what really works. 
              The results might surprise you.
            </p>
            <Link href="/research" className="btn btn--primary">
              Read Our Original Research
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
