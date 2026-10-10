import './About.css'

const stats = [
  { value: '81%', label: 'B.Tech aggregate' },
  { value: '2027', label: 'Graduating' },
  { value: '3', label: 'Portfolio projects' },
  { value: '3', label: 'BI dashboards built' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__text">
          <h2 className="about__heading">Driven by Data. Focused on Impact.</h2>
          <p className="about__body">
            I'm a final-year Computer Engineering student at The Technological Institute of Textiles & Sciences, Bhiwani, with a strong interest in data analytics and intelligent, data-driven solutions. I enjoy working with Python, SQL, and Power BI to explore datasets, uncover meaningful patterns, and turn raw data into actionable insights. I'm continuously strengthening my technical skills through hands-on projects and specialized training in data science, with a focus on solving real-world problems through analytical thinking and technology.
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
