import './Skills.css'

const groups = [
  {
    label: 'Programming & Databases',
    color: 'var(--cobalt)',
    items: ['SQL', 'Python', 'SQLite'],
  },
  {
    label: 'Data Analytics & Visualization',
    color: 'var(--raspberry)',
    items: [
      'Excel',
      'Pivot Tables',
      'Power Query',
      'Power Pivot',
      'DAX',
      'Solver',
      'Google Sheets',
      'Power BI',
      'Dashboarding',
      'Cohort & Funnel Analysis',
      'EDA',
      'Data Cleaning',
    ],
  },
  {
    label: 'Statistics & Machine Learning',
    color: 'var(--amber)',
    items: ['Pandas', 'NumPy', 'SciPy', 'scikit-learn', 'XGBoost', 'Prophet'],
  },
  {
    label: 'Tools & Platforms',
    color: 'var(--mint)',
    items: ['Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'Streamlit'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <h2 className="skills__heading">What I work with</h2>
        <div className="skills__groups">
          {groups.map((g) => (
            <div className="skills__group" key={g.label}>
              <p className="skills__group-label">
                <span className="skills__group-dot" style={{ background: g.color }} />
                {g.label}
              </p>
              <div className="skills__pills">
                {g.items.map((item) => (
                  <span className="skills__pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
