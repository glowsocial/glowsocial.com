'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const SLIDES = [
  {
    step: 'Reading your website',
    headline: "We use your website so you don't have to prompt anything",
    description: "Right now we're reading your services, tone, proof, and customer language. That gives Glow Social enough context to make posts that feel like your business.",
  },
  {
    step: 'Finding what matters',
    headline: 'Useful posts, not generic calendar filler',
    description: "We look for the services, questions, proof, and local context customers actually care about, then turn those into posts.",
  },
  {
    step: 'Writing your posts',
    headline: 'Posts ready to approve',
    description: 'You get a batch of posts for social and Google Business. Review what is ready, edit what needs your voice, and skip anything that does not fit.',
  },
  {
    step: 'Preparing images',
    headline: 'Images matched to the post',
    description: 'Each post gets a visual matched to the topic and your business context. No separate design tool required.',
  },
  {
    step: 'Almost ready',
    headline: 'You keep final say',
    description: 'The preview shows what is ready. If you subscribe, Glow Social keeps creating posts and publishes what you approve.',
  },
]

const SLIDE_DURATION = 11000

function formatDate(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) +
    ' · ' +
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
}

export default function PreviewClient() {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [phase, setPhase] = useState('form') // form | loading | results | error
  const [slideIndex, setSlideIndex] = useState(0)
  const [businessName, setBusinessName] = useState('')
  const [posts, setPosts] = useState([])
  const [intelligence, setIntelligence] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [copiedId, setCopiedId] = useState(null)
  const resultsRef = useRef(null)

  // Restore from sessionStorage on mount so back-nav works
  useEffect(() => {
    try {
      const cached = sessionStorage.getItem('glow-preview-results')
      if (cached) {
        const data = JSON.parse(cached)
        if (data.posts?.length > 0) {
          setBusinessName(data.businessName || '')
          setPosts(data.posts)
          setIntelligence(data.intelligence || null)
          setPhase('results')
        }
      }
    } catch {}
  }, [])

  // Slideshow timer
  useEffect(() => {
    if (phase !== 'loading') return
    const t = setInterval(() => setSlideIndex(p => (p + 1) % SLIDES.length), SLIDE_DURATION)
    return () => clearInterval(t)
  }, [phase])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!url.trim() || !email.trim() || !email.includes('@')) return

    setPhase('loading')
    setSlideIndex(0)
    setErrorMsg('')

    try {
      const res = await fetch('/api/preview/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim(), email: email.trim(), vertical: 'generic' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      // Sequence posts on Mon/Wed/Fri
      let finalPosts = (data.posts || []).slice(0, 12)
      finalPosts = finalPosts.map((post, i) => {
        const now = new Date()
        const daysUntilMonday = (8 - now.getDay()) % 7 || 7
        const start = new Date(now)
        start.setDate(now.getDate() + daysUntilMonday)
        const dayOffsets = [0, 2, 4]
        const weekOffset = Math.floor(i / 3)
        const dayInWeek = i % 3
        const postDate = new Date(start)
        postDate.setDate(start.getDate() + weekOffset * 7 + dayOffsets[dayInWeek])
        postDate.setHours(10 + dayInWeek * 2, 0, 0, 0)
        return { ...post, scheduled_for: postDate.toISOString() }
      })

      setBusinessName(data.businessName || '')
      setPosts(finalPosts)
      setIntelligence(data.intelligence)
      setPhase('results')

      try {
        sessionStorage.setItem('glow-preview-results', JSON.stringify({
          businessName: data.businessName,
          posts: finalPosts,
          intelligence: data.intelligence,
        }))
      } catch {}

      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300)

      // Progressive image loading
      ;(async () => {
        for (let i = 0; i < finalPosts.length; i++) {
          const post = finalPosts[i]
          if (post.image_url) continue
          try {
            const imgRes = await fetch('/api/preview/image', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                caption: post.long_caption,
                businessName: data.businessName || '',
                businessType: data.intelligence?.services?.[0] || 'local business',
                website: url.trim(),
                index: i,
              }),
            })
            const imgData = await imgRes.json()
            if (imgData.url) {
              setPosts(prev => prev.map(p => p.id === post.id ? { ...p, image_url: imgData.url } : p))
              try {
                const stored = JSON.parse(sessionStorage.getItem('glow-preview-results') || '{}')
                if (stored.posts) {
                  stored.posts = stored.posts.map(p => p.id === post.id ? { ...p, image_url: imgData.url } : p)
                  sessionStorage.setItem('glow-preview-results', JSON.stringify(stored))
                }
              } catch {}
            }
          } catch {}
        }
      })()
    } catch (err) {
      setErrorMsg(err.message || 'Generation failed. Please try again.')
      setPhase('error')
    }
  }

  const handleCopy = useCallback(async (postId, text) => {
    try { await navigator.clipboard.writeText(text) } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopiedId(postId)
    setTimeout(() => setCopiedId(null), 2000)
  }, [])

  const handleReset = () => {
    try { sessionStorage.removeItem('glow-preview-results') } catch {}
    setPhase('form')
    setPosts([])
    setBusinessName('')
    setIntelligence(null)
    setErrorMsg('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ─── FORM ──────────────────────────────────────────────────
  if (phase === 'form' || phase === 'error') {
    return (
      <div className="preview-page">
        <section className="preview-hero">
          <div className="container preview-hero-inner">
            <div className="preview-content">
              <div className="preview-badge">Free preview — No card, no login</div>
              <h1 className="preview-hl">
                Your website becomes posts ready to approve
              </h1>
              <p className="preview-sub">
                Drop your website below. Glow Social turns it into posts for social and Google Business, with no prompts, no content calendar, and no account connections up front.
              </p>
              <div className="preview-features">
                {[
                  ['No prompts to write', 'Your website gives us the context, so you do not have to figure out what to ask for.'],
                  ['Posts ready to review', 'See captions and images before you choose a plan or connect social accounts.'],
                  ['Social + Google Business', 'The preview shows the kind of steady visibility Glow Social can keep going for you.'],
                ].map(([title, desc]) => (
                  <div key={title} className="preview-feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span><strong>{title}:</strong> {desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="preview-form-wrapper">
              <div className="preview-card">
                <h2>See my posts</h2>
                <p>Enter your website and email. We will create a preview batch before you choose a plan.</p>
                <form onSubmit={handleSubmit} className="preview-form">
                  <div className="form-group">
                    <label htmlFor="preview-url">Your Website URL</label>
                    <input
                      id="preview-url"
                      type="text"
                      value={url}
                      onChange={e => setUrl(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preview-email">Your Email Address</label>
                    <input
                      id="preview-email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@yourbusiness.com"
                      required
                      className="form-input"
                    />
                  </div>
                  {errorMsg && (
                    <div className="preview-error">{errorMsg}</div>
                  )}
                  <button type="submit" className="btn btn--primary btn--lg preview-btn">
                    {phase === 'error' ? 'Try Again' : 'See my posts'}
                  </button>
                  <p className="privacy-note">No login, card, or social account connection required.</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="preview-proof">
          <div className="container">
            <div className="proof-banner">
              <p>
                <strong>Stop guessing what to post.</strong> We read your website and write a preview batch of social media content — in your voice, for your customers, in about 60 seconds.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // ─── LOADING ──────────────────────────────────────────────
  if (phase === 'loading') {
    const slide = SLIDES[slideIndex]
    return (
      <div className="preview-loading">
        <div className="preview-loading-inner">
          <div className="preview-loading-step">{slide.step}</div>
          <h2 className="preview-loading-hl">{slide.headline}</h2>
          <p className="preview-loading-desc">{slide.description}</p>
          <div className="preview-slide-dots">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className={`preview-slide-dot${i === slideIndex ? ' active' : i < slideIndex ? ' past' : ''}`}
              />
            ))}
          </div>
          <div className="preview-progress-bar">
            <div
              className="preview-progress-fill"
              style={{ width: `${((slideIndex + 1) / SLIDES.length) * 100}%`, transition: `width ${SLIDE_DURATION}ms linear` }}
            />
          </div>
          <p className="preview-progress-label">Preparing posts for review...</p>
        </div>
      </div>
    )
  }

  // ─── RESULTS ──────────────────────────────────────────────
  return (
    <div className="preview-results-page" ref={resultsRef}>
      {/* Results header */}
      <div className="preview-results-header">
        <div className="container">
          <div className="preview-results-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {posts.length} posts ready
          </div>
          <h2 className="preview-results-hl">
            {businessName ? `Here are posts ready for ${businessName}` : "Here are posts ready to review"}
          </h2>
          <p className="preview-results-sub">Every caption is yours to keep. If you subscribe, this becomes your approval workflow.</p>

          {intelligence && (intelligence.services?.length > 0 || intelligence.geo?.length > 0) && (
            <div className="preview-intelligence">
              <strong>From your website</strong> we identified a {intelligence.tone || 'professional'} tone
              {intelligence.services?.length > 0 && <>, services like {intelligence.services.slice(0, 3).join(', ')}</>}
              {intelligence.geo?.length > 0 && <>, serving {intelligence.geo.join(', ')}</>}
              . Every post below was written with this context.
            </div>
          )}
        </div>
      </div>

      {/* Posts grid */}
      <div className="container">
        <div className="preview-posts-grid">
          {posts.map((post) => {
            const caption = post.long_caption || ''
            const isCopied = copiedId === post.id
            return (
              <article key={post.id} className="preview-post-card">
                {/* Image */}
                <div className="preview-post-img">
                  {post.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.image_url} alt="Post image" />
                  ) : (
                    <div className="preview-post-img-placeholder">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Generating image...</span>
                    </div>
                  )}
                </div>

                {/* Date */}
                <div className="preview-post-date">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(post.scheduled_for)}
                </div>

                {/* Caption */}
                <div className="preview-post-caption">{caption}</div>

                {/* Copy button */}
                <div className="preview-post-footer">
                  <button
                    onClick={() => handleCopy(post.id, caption)}
                    className={`preview-copy-btn${isCopied ? ' copied' : ''}`}
                  >
                    {isCopied ? (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        Copy caption
                      </>
                    )}
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="preview-cta-block">
          <h3>Want this handled every month?</h3>
          <p>Glow Social turns your website into posts for social and Google Business, then publishes what you approve. Core starts at $99/mo, cancel anytime.</p>
          <div className="preview-cta-actions">
            <a href="https://app.glowsocial.com/pricing" className="btn btn--primary btn--lg">
              Start with Core - $99/mo
            </a>
            <button onClick={handleReset} className="preview-restart-btn">
              Try a different website
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
