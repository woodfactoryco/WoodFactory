/* ─────────────────────────────────────────────────────────────
   WOODFACTORY — גלריית העבודות
   זה הקובץ היחיד שצריך לערוך כדי להוסיף תמונות.

   1. שמרו את קובץ התמונה בתיקייה  public/assets/
   2. הוסיפו שורה ברשימה למטה:
        { src: "/assets/my-photo.jpg", caption: "תיאור קצר", wide: false },

      src     — הנתיב לתמונה (תמיד מתחיל ב-/assets/)
      caption — כיתוב קצר שמופיע על התמונה (אפשר להשאיר ריק)
      wide    — true פורש את התמונה על שתי עמודות

   3. שמרו. הדף מתעדכן לבד בזמן ש-npm run dev רץ.

   EMPTY_SLOTS קובע כמה ריבועי "תמונה בקרוב" מקווקווים יוצגו
   כל עוד הגלריה מתמלאת. אפשר לאפס ל-0 כשיש מספיק תמונות.
   ───────────────────────────────────────────────────────────── */

export const GALLERY = [
  {
    src: '/assets/hero-stairs.jpg',
    caption: 'מדרגות מעוצבות + פרקט אדרה',
    wide: true,
  },

  {
    src: '/assets/stairs2.jpg',
    caption: 'מדרגות עץ + קאנט',
    // portrait photo (1200x1600) — a wide slide is 8:5 and would crop it hard
    wide: false,
  },

  {
    src: '/assets/stairs3.jpg',
    caption: 'מדרגות + רום לבן',
    // portrait (1200x1600), same as stairs2 — keep it a single-width slide
    wide: false,
  },
  {
    src: '/assets/floating.jpeg',
    caption: 'מדרגות מרחפות',
    // portrait (1200x1600), same as stairs2 — keep it a single-width slide
    wide: false,
  }
  // ── להוסיף כאן תמונות נוספות ──
]

export const EMPTY_SLOTS = 0