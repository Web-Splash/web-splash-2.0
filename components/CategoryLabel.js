import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    Tailwind: 'lightblue',
    Netflix: 'red',
    SVG_Animation: 'yellow',
    Google: 'green',
    HTML_CSS_JavaScript: 'orange',
    HTML_CSS: 'blue',
    Clone: 'purple',
    Animation: 'coffee',
    Logo_Design: 'pink',
  }

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
