import { useCallback, useEffect, useRef, useState } from 'react'

import { GALLERY, EMPTY_SLOTS } from '../data/gallery.js'
import { asset } from '../lib/asset.js'

export default function Gallery({ onOpen }) {
  const railRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  // In RTL a scroller runs 0 -> negative, in LTR 0 -> positive.
  // Comparing the absolute value keeps one set of maths for both.
  const sync = useCallback(() => {
    const el = railRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const pos = Math.abs(el.scrollLeft)
    setCanPrev(pos > 1)
    setCanNext(pos < max - 1)
  }, [])

  useEffect(() => {
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [sync])

  // dir: -1 back towards the first photo, +1 onwards
  const nudge = (dir) => {
    const el = railRef.current
    if (!el) return
    const first = el.firstElementChild
    const gap = parseFloat(getComputedStyle(el).columnGap) || 14
    const stride = first ? first.getBoundingClientRect().width + gap : 300
    const rtl = getComputedStyle(el).direction === 'rtl'
    const delta = (rtl ? -dir : dir) * stride

    const before = el.scrollLeft
    el.scrollBy({ left: delta, behavior: 'smooth' })

    // Some embedded browsers — the in-app ones in Instagram and Facebook
    // among them — accept a smooth scroll and then never animate it, leaving
    // the rail stuck. If nothing has moved a few frames later, jump instead.
    window.setTimeout(() => {
      if (el.scrollLeft === before) el.scrollLeft = before + delta
    }, 120)
  }

  return (
    <section className="section" id="work">
      <div className="section-head gallery-head">
        <div>
          <h2>עבודות נבחרות</h2>
          <p className="section-note">
            חדר התצוגה שלנו. החליקו הצידה, ולחצו על תמונה כדי להגדיל.
          </p>
        </div>

        <div className="rail-nav">
          <button
            className="rail-btn"
            onClick={() => nudge(-1)}
            disabled={!canPrev}
            aria-label="הקודם"
          >
            →
          </button>
          <button
            className="rail-btn"
            onClick={() => nudge(1)}
            disabled={!canNext}
            aria-label="הבא"
          >
            ←
          </button>
        </div>
      </div>

      <div
        className="rail"
        ref={railRef}
        onScroll={sync}
        tabIndex={0}
        role="region"
        aria-label="גלריית עבודות"
      >
        {GALLERY.map((photo) => (
          <figure
            key={photo.src}
            className={photo.wide ? 'shot wide' : 'shot'}
            tabIndex={0}
            onClick={() => onOpen(photo)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onOpen(photo)
              }
            }}
          >
            <img
              src={asset(photo.src)}
              alt={photo.caption || 'פרויקט של WoodFactory'}
              loading="lazy"
              onLoad={sync}
            />
            {photo.caption && <figcaption>{photo.caption}</figcaption>}
          </figure>
        ))}

        {Array.from({ length: EMPTY_SLOTS }, (_, i) => (
          <div className="slot" key={`slot-${i}`}>
            <span>✦</span>
            תמונה בקרוב
          </div>
        ))}
      </div>
    </section>
  )
}
