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

## Deploying to GitHub Pages

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which runs the Vite build on GitHub's runners (they have Node, this machine
does not) and publishes `dist/` to Pages.

First-time setup:

1. Create an empty repo at <https://github.com/new>. Do **not** add a README,
   licence or .gitignore — this folder already has a commit.
2. Connect and push:

   ```bash
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source** and pick
   **GitHub Actions**.
4. Watch the **Actions** tab. The finished run prints the live URL, which will
   be `https://<your-user>.github.io/<your-repo>/`.

After that, every `git push` to `main` redeploys. The repo name does not need
to be hardcoded anywhere — `vite.config.js` reads it from the environment at
build time and sets `base` accordingly.

## Adding photos to the gallery

1. Put the image file in `public/assets/`.
2. Add one line to [`src/data/gallery.js`](src/data/gallery.js):

   ```js
   { src: '/assets/kitchen-01.jpg', caption: 'מטבח אלון מלא', wide: false },
   ```

   `wide: true` makes a photo span two columns. Keep the leading `/assets/`
   — `asset()` rewrites it for whatever sub-path the site is served from.
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

There is exactly one copy of the site: the React app in `src/`. The old plain
HTML/CSS/JS version was removed once React went live — it looked identical, so
edits kept going into it by mistake and silently doing nothing. It is still in
git history (`git show acac0fe:legacy-static/index.html`) if it is ever needed.

## Source files

`Images/` and `Logo files/` are the originals as supplied — the brand archives
include Illustrator, EPS, PDF, PSD and SVG. `public/assets/logo-lockup.svg`,
`logo-mark.svg` and `favicon.svg` were cut from
`Logo files/extracted/Vector/SVG/`.
