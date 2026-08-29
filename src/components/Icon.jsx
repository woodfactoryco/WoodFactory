/* One of the symbols in <IconSprite />: mail | phone | instagram | facebook.
   Colour and size come from CSS (.ic / .ic-sm) via currentColor. */
export default function Icon({ name, className = 'ic' }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#ic-${name}`} />
    </svg>
  )
}
