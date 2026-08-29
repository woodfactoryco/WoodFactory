import { GALLERY, EMPTY_SLOTS } from '../data/gallery.js'
import { asset } from '../lib/asset.js'

export default function Gallery({ onOpen }) {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <h2>עבודות נבחרות</h2>
        <p className="section-note">חדר התצוגה שלנו. לחצו על תמונה כדי להגדיל.</p>
      </div>

      <div className="gallery">
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
