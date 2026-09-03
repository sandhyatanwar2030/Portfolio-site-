import './Nav.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="nav">
      <a
        className="nav__mark"
        href="#top"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        ST
      </a>
      <nav className="nav__links">
        {sections.map((s) => (
          <button key={s.id} className="nav__link" onClick={() => scrollTo(s.id)}>
            {s.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
