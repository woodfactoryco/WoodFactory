import { asset } from '../lib/asset.js'

/* Copy lives here rather than in src/data — it is two paragraphs that only
   this section uses. To put the owners' names on the page, fill in NAMES
   below; leave it empty and the caption stays generic. */
const NAMES = ''   // e.g. 'דניאל ואנה'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <figure className="about-img">
          <img
            src={asset('/assets/founders.jpg')}
            alt="הבעלים של WoodFactory"
            loading="lazy"
          />
          <figcaption>{NAMES || 'הבעלים של WoodFactory'}</figcaption>
        </figure>

        <div className="about-text">
          <p className="eyebrow">מי אנחנו</p>
          <h2>נגרייה קטנה, עבודה אישית</h2>

          <p>
            WoodFactory היא נגרייה קטנה שמתכננת, מייצרת ומתקינה בעצמה.
            מהמדידה הראשונה בבית שלכם ועד הגימור האחרון — הכול עובר דרך
            הידיים שלנו, בלי קבלני משנה ובלי מסירת אחריות באמצע.
          </p>
          <p>
            מדרגות עץ הן הלב של מה שאנחנו עושים, ולצידן פרקטים וחיפויי
            קירות. אנחנו עובדים בבתים פרטיים ובדירות, לבד או יחד עם
            אדריכלים ומעצבים.
          </p>

          <a className="btn" href="#contact">דברו איתנו</a>
        </div>
      </div>
    </section>
  )
}
