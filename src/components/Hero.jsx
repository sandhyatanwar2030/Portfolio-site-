import { useEffect, useMemo, useRef } from 'react'
import './Hero.css'

// Deterministic pseudo-random so the scatter is stable across renders
function seeded(seed) {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

const COLORS = ['var(--raspberry)', 'var(--cobalt)', 'var(--amber)', 'var(--mint)']

export default function Hero() {
  const fieldRef = useRef(null)

  const dots = useMemo(() => {
    const rand = seeded(42)
    return Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: 2 + rand() * 5,
      color: COLORS[i % COLORS.length],
      depth: 0.3 + rand() * 0.7,
    }))
  }, [])

  useEffect(() => {
    const field = fieldRef.current
    if (!field) return
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const px = (e.clientX / innerWidth - 0.5) * 2
      const py = (e.clientY / innerHeight - 0.5) * 2
      field.style.setProperty('--px', px.toFixed(3))
      field.style.setProperty('--py', py.toFixed(3))
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__field" ref={fieldRef} aria-hidden="true">
        {dots.map((d) => (
          <span
            key={d.id}
            className="hero__dot"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: `${d.size}px`,
              height: `${d.size}px`,
              background: d.color,
              '--depth': d.depth,
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        <p className="hero__role">Data Scientist</p>
        <h1 className="hero__headline">
          I build models that explain themselves, not just predict.
        </h1>
        <p className="hero__sub">
          Final-year Computer Science student who moved from building websites to building
          the systems that decide what those websites show. Currently sharpening SQL, Python
          and Power BI, and looking for a first data science role at a product company.
        </p>
        <div className="hero__actions">
          <a
            className="hero__cta hero__cta--primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            See the projects
          </a>
          <a className="hero__cta hero__cta--secondary" href="/resume.pdf" download>
            Download resume
          </a>
        </div>
      </div>
    </section>
  )
}
