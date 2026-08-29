/* Build a URL for a file in public/assets/.
 *
 * On GitHub Pages the site is served from a sub-path (/<repo>/), not the
 * domain root. Vite rewrites absolute paths it finds in index.html, but it
 * cannot rewrite plain strings inside components — so anything referenced
 * from JSX has to go through here.
 *
 *   asset('/assets/hero.jpg')  ->  '/assets/hero.jpg'            (dev)
 *                              ->  '/woodfactory/assets/hero.jpg' (Pages)
 */
export function asset(path) {
  return import.meta.env.BASE_URL + String(path).replace(/^\/+/, '')
}
