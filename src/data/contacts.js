/* ─────────────────────────────────────────────────────────────
   WOODFACTORY — פרטי קשר
   מקום אחד לעדכון. משמש גם את הכרטיסים בסעיף "בואו נבנה משהו"
   וגם את הקישורים בתחתית העמוד.

   icon     — mail | phone | instagram | facebook (מתוך IconSprite)
   label    — הכותרת הקטנה על הכרטיס
   short    — הטקסט בתחתית העמוד
   value    — מה שמוצג בגדול על הכרטיס
   ltr      — true לטקסט לטיני/מספרי שצריך להיקרא משמאל לימין
   external — true פותח בלשונית חדשה
   ───────────────────────────────────────────────────────────── */

export const CONTACTS = [
  {
    icon: 'mail',
    label: 'אימייל · שיתופי פעולה',
    short: 'אימייל',
    value: 'woodfactoryco@gmail.com',
    href: 'mailto:woodfactoryco@gmail.com',
    ltr: true,
  },
  {
    icon: 'phone',
    label: 'התקשרו אלינו',
    short: 'טלפון',
    value: '052-642-0506',
    href: 'tel:+972526420506',
    ltr: true,
  },
  {
    icon: 'whatsapp',
    label: 'וואטסאפ',
    short: 'וואטסאפ',
    value: '052-642-0506',
    // wa.me wants the number bare: country code, no +, no separators.
    // The prefilled text just saves the customer typing an opener.
    href:
      'https://wa.me/972526420506?text=' +
      encodeURIComponent('היי, הגעתי מהאתר ואשמח לקבל פרטים'),
    ltr: true,
    external: true,
  },
  {
    icon: 'facebook',
    label: 'פייסבוק',
    short: 'פייסבוק',
    value: 'Wood Factory',
    href: 'https://www.facebook.com/woodstairpro',
    external: true,
  },
  {
    icon: 'instagram',
    label: 'אינסטגרם',
    short: 'אינסטגרם',
    value: '@wood_factory_israel',
    href: 'https://www.instagram.com/wood_factory_israel/',
    ltr: true,
    external: true,
  },
]
