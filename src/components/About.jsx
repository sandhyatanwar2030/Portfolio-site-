import './About.css'

const stats = [
  { value: '81%', label: 'B.Tech aggregate' },
  { value: '2027', label: 'Graduating' },
  { value: '5', label: 'Portfolio projects' },
  { value: '3', label: 'BI dashboards built' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__text">
          <h2 className="about__heading">From shipping pages to shipping predictions</h2>
          <p className="about__body">
            I started out in web development, then moved into data science because I wanted
            to work on the decisions behind a product, not just its interface. I'm a
            final-year Computer Science student at The Technological Institute of Textiles
            &amp; Sciences, Bhiwani, and I'm currently deepening my SQL, Python and Power BI
            through a dedicated data science training program.
          </p>
          <p className="about__body">
            My projects lean toward the parts of data science that are easy to skip as a
            beginner: checking whether a correlation actually holds up, evaluating a model
            honestly instead of trusting the metric that looks best, and shipping something
            a user can actually open, not just a notebook.
          </p>
        </div>

        <div className="about__stats">
          {stats.map((s) => (
            <div className="about__stat" key={s.label}>
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
