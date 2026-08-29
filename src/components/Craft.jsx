const SERVICES = [
  {
    title: 'מדרגות עץ',
    body: 'ישרות, מעוגלות או מרחפות. תכנון ומדידה מדויקים למילימטר, גימור בעבודת יד.',
    icon: (
      <path
        d="M36 34h-8v-8h-8v-8h-8v-8h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    ),
  },
  {
    title: 'פרקטים',
    body: 'אדרה, שברון או לוחות. התקנה, ליטוש וגימור בשמן — הכול אצלנו באתר.',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square">
        <path d="M4 26l8-10 8 10 8-10 8 10" />
        <path d="M4 34l8-10 8 10 8-10 8 10" />
        <path d="M4 18l8-10 8 10 8-10 8 10" />
      </g>
    ),
  },
  {
    title: 'חיפוי קירות ונגרות',
    body: 'חיפויי עץ לקירות, ארונות, דלתות ומטבחים שמתוכננים סביב החלל שלכם.',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square">
        <rect x="4" y="5" width="32" height="30" />
        <path d="M12 5v30M20 5v30M28 5v30" />
      </g>
    ),
  },
]

export default function Craft() {
  return (
    <section className="section" id="craft">
      <div className="section-head">
        <h2>מה אנחנו עושים</h2>
      </div>

      <div className="cards">
        {SERVICES.map((s) => (
          <article className="card" key={s.title}>
            <svg className="card-ico" viewBox="0 0 40 40" aria-hidden="true">
              {s.icon}
            </svg>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
