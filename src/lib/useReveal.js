import { useEffect } from 'react'

/* Fades elements marked [data-reveal] in as they scroll into view.
 *
 * The hidden state lives inside a prefers-reduced-motion:no-preference block
 * in the CSS, so if someone asks for less motion the content is simply always
 * visible — it never depends on JavaScript running to become readable. Same if
 * IntersectionObserver is missing: everything is shown immediately. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!els.length) return

    const reveal = (el) => el.classList.add('is-in')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const pending = new Set(els)
    const take = (el) => {
      reveal(el)
      pending.delete(el)
      io.unobserve(el)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && take(entry.target))
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    els.forEach((el) => io.observe(el))

    // A fast flick — the normal way people scroll a phone — can carry an
    // element past the viewport between two frames. The observer then never
    // sees it intersect and it stays hidden for good, which is how the whole
    // gallery once vanished on mobile. So also sweep on scroll: anything that
    // has reached the fold gets revealed whether or not the observer caught it.
    let queued = false
    const sweep = () => {
      queued = false
      for (const el of [...pending]) {
        if (el.getBoundingClientRect().top < window.innerHeight) take(el)
      }
      if (!pending.size) detach()
    }
    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(sweep)
    }
    const detach = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    sweep()

    return () => {
      io.disconnect()
      detach()
    }
  }, [])
}
