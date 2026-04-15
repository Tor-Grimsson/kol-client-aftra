const modules = import.meta.glob('./svg/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const icons = {}
for (const [path, raw] of Object.entries(modules)) {
  const name = path.replace('./svg/', '').replace('.svg', '')
  icons[name] = raw
}

export default function Icon({ name, size = 24, className = '' }) {
  const raw = icons[name]
  if (!raw) {
    console.warn(`Icon "${name}" not found. Available: ${Object.keys(icons).join(', ')}`)
    return null
  }

  const svg = raw
    .replace(/width="[^"]*"/, `width="${size}"`)
    .replace(/height="[^"]*"/, `height="${size}"`)
    .replace(/#232230/g, 'currentColor')
    .replace(/#3F3D56/g, 'currentColor')

  return (
    <span
      className={`inline-flex shrink-0 ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

export { icons }
