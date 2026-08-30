import { asset } from '../lib/asset.js'

/* Copy lives here rather than in src/data — it is two paragraphs that only
   this section uses. To put the owners' names on the page, fill in NAMES
   below; leave it empty and the caption stays generic. */
const NAMES = ''   // e.g. 'דניאל ואנה'

/* Set QUOTE to null and the block disappears. */
const QUOTE = {
  text:
    'ב-WoodFactory אנחנו מאמינים בליווי אישי ובוחרים יחד עם הלקוחות את ' +
    'המדרגה והפרקט שהכי מאפיינים אותם. מוזמנים להגיע אלינו, לשבת לכוס קפה, ' +
    'לבחור איזה סוג מדרגה ופרקט הכי יתאימו לכם ואנחנו נדאג לשאר!',
  name: "זאנ'ה גלדישב",
  role: 'בעלים, WoodFactory',
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <figure className="about-img" data-reveal>
          <img
            src={asset('/assets/founders.jpg')}
            alt="הבעלים של WoodFactory"
            loading="lazy"
          />
          <figcaption>{NAMES || 'הבעלים של WoodFactory'}</figcaption>
        </figure>

        <div className="about-text" data-reveal style={{ '--d': '90ms' }}>
          <p className="eyebrow">מי אנחנו</p>
          <h2>נגריית בוטיק ותצוגה</h2>

          <p>
            WoodFactory הינה נגריית בוטיק בחולון אשר מתמחה בייצור מדרגות עץ מכל סוגי הפרקט והעץ. אולג וזאנ'ה, הבעלים, מביאים אליכם לבית שנים רבות של ניסיון ייחודי ביותר בהכנת
            מדרגות.          
          </p>
          <p>

            אולג הינו בעל מקצוע אשר רכש את כישוריו באחד מבתי הספר הטובים לנגרות ברוסיה, ומביא פתרונות חדשניים למדרגות אשר מעניקים להן עמידות ארוכת שנים.

          </p>
          <p>
            מדרגות עץ הן לב העשייה שלנו, אבל חשוב להדגיש שאנחנו מתעסקים גם בהתקנת פרקטים מכל הסוגים וברמה הכי גבוהה שיש.
          </p>
      

          {QUOTE && (
            <blockquote className="quote">
              <p>{QUOTE.text}</p>
              <cite>
                <span className="quote-name">{QUOTE.name}</span>
                {QUOTE.role && <span className="quote-role">{QUOTE.role}</span>}
              </cite>
            </blockquote>
          )}

          <a className="btn" href="#contact">דברו איתנו</a>
        </div>
      </div>
    </section>
  )
}
