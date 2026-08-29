import { asset } from '../lib/asset.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">נגריית בוטיק · ישראל</p>

        <h1>
          הופכים כל חלל
          <br />
          <em>ליוקרתי ומדויק.</em>
        </h1>

        <p className="lede">
          בנייה והתקנה של מדרגות עץ, פרקטים וחיפוי קירות.
          מתכננים, מייצרים ומתקינים בעצמנו — גימור ברמה גבוהה,
          עבודה מקצועית ונקייה.
        </p>

        <div className="hero-actions">
          <a className="btn" href="#work">לעבודות שלנו</a>
          <a className="btn btn-ghost" href="#contact">לפרויקט חדש</a>
        </div>
      </div>

      <figure className="hero-img">
        <img
          src={asset('/assets/hero-stairs.jpg')}
          alt="מדרגות עץ מעוצבות בגוון כתום עם פרקט אדרה"
        />
        <figcaption>מדרגות מעוצבות + פרקט אדרה — דירה</figcaption>
      </figure>
    </section>
  )
}
