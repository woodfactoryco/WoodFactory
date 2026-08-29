# WoodFactory — landing page

React + Vite. Hebrew, RTL. Monochrome palette taken from the brand vector.

## Running it

Node.js is **not currently installed on this machine** — install it first from
<https://nodejs.org> (the LTS build), then reopen the terminal and:

```bash
npm install
npm run dev
```

That serves the site at <http://localhost:5173>. `npm run build` writes a
deployable copy to `dist/`, and `npm run preview` serves that build locally.

## Adding photos to the gallery

1. Put the image file in `public/assets/`.
2. Add one line to [`src/data/gallery.js`](src/data/gallery.js):

   ```js
   { src: '/assets/kitchen-01.jpg', caption: 'מטבח אלון מלא', wide: false },
   ```

   `wide: true` makes a photo span two columns.
3. Save — the page reloads itself while `npm run dev` is running.

`EMPTY_SLOTS` in the same file controls how many dashed "תמונה בקרוב"
placeholders show. Set it to `0` once there are enough real photos.

## Changing contact details

All four (email, phone, Instagram, Facebook) live in one place:
[`src/data/contacts.js`](src/data/contacts.js). Both the contact cards and the
footer links are generated from it, so editing there updates both.

## Layout

```
index.html              Vite entry — <head>, fonts, #root
public/assets/          images, logo SVGs, favicon (served at /assets/…)
src/
  main.jsx              mounts <App>
  App.jsx               page composition + lightbox state
  index.css             all styling; design tokens at the top
  data/
    gallery.js          the photo list
    contacts.js         email / phone / Instagram / Facebook
  components/
    Nav  Hero  Craft  Gallery  Lightbox  Contact  Footer
    Logo.jsx            brand lockup, inlined from the supplied vector
    IconSprite.jsx      the four platform icons (Feather, MIT)
    Icon.jsx            <Icon name="mail" /> → <use href="#ic-mail" />
```

`legacy-static/` is the plain HTML/CSS/JS version this was ported from. It runs
with no toolchain (`py -m http.server 5173` from inside that folder) and can be
deleted once the React version is running.

## Source files

`Images/` and `Logo files/` are the originals as supplied — the brand archives
include Illustrator, EPS, PDF, PSD and SVG. `public/assets/logo-lockup.svg`,
`logo-mark.svg` and `favicon.svg` were cut from
`Logo files/extracted/Vector/SVG/`.
