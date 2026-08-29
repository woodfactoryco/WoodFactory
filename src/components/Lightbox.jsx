import { useEffect } from 'react'

import { asset } from '../lib/asset.js'

export default function Lightbox({ photo, onClose }) {
  const isOpen = Boolean(photo)

  // Esc to close, and stop the page behind from scrolling while open
  useEffect(() => {
    if (!isOpen) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const caption = photo.caption || ''

  return (
    <div
      className="lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button className="lb-close" onClick={onClose} aria-label="סגירה">✕</button>
      <img src={asset(photo.src)} alt={caption} />
      <p className="lb-cap">{caption}</p>
    </div>
  )
}
