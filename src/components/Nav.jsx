import Logo from './Logo.jsx'

export default function Nav() {
  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="WoodFactory">
        <Logo />
      </a>

      <nav className="nav-links">
        <a href="#work">עבודות</a>
        <a href="#craft">מה אנחנו עושים</a>
        <a href="#about">מי אנחנו</a>

      </nav>

      <a className="btn btn-sm" href="#contact">דברו איתנו</a>
    </header>
  )
}
