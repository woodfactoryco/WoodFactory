import Icon from './Icon.jsx'
import { CONTACTS } from '../data/contacts.js'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <h2>בואו נבנה משהו</h2>
        <p className="section-note">
          לקוחות פרטיים, אדריכלים ושיתופי פעולה עסקיים — מוזמנים לפנות.
        </p>
      </div>

      <div className="contact-grid">
        {CONTACTS.map((c) => (
          <a
            className="contact-card"
            key={c.icon}
            href={c.href}
            {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
          >
            <span className="contact-label">
              <Icon name={c.icon} />
              {c.label}
            </span>
            <span className="contact-value" dir={c.ltr ? 'ltr' : undefined}>
              {c.value}
            </span>
            <span className="arrow" aria-hidden="true">{c.external ? '↖' : '←'}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
