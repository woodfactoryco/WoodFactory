import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { CONTACTS } from '../data/contacts.js'

export default function Footer() {
  return (
    <footer className="footer">
      <Logo className="logo-lockup logo-lockup-lg" />

      <p className="footer-note">מדרגות עץ, פרקטים וחיפוי קירות — ישראל</p>

      <div className="footer-links">
        {CONTACTS.map((c) => (
          <a
            key={c.icon}
            href={c.href}
            {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
          >
            <Icon name={c.icon} className="ic ic-sm" />
            {c.short}
          </a>
        ))}
      </div>

      <p className="copy" dir="ltr">© {new Date().getFullYear()} WoodFactory</p>
    </footer>
  )
}
