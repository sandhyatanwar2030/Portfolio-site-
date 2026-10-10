import './Projects.css'

const projects = [

  {
  tags: [
    { label: "Excel", color: "red" },
    { label: "Power Pivot", color: "blue" },
    { label: "Solver", color: "yellow" },
  ],
  title: "SaaS Unit Economics & Scenario Planning Model",
  description:
    "Built an automated Excel model tracking MRR, churn rate and LTV/CAC across customer tiers, using Power Query for data prep and a Power Pivot data model with DAX measures for each tier.",
  highlight: "Solver + 2-way sensitivity tables simulating cash-runway impact across 5+ churn scenarios.",
  link: "https://github.com/sandhyatanwar2030/...", // or the file/repo link
}


  {
    id: 'upi',
    size: 'medium',
    title: 'UPI Transaction Volume Forecasting',
    description:
      "Forecasted UPI transaction volume by combining Google Trends search interest with NPCI's decade of official data \u2014 after ruling out a correlation that looked strong but disappeared once the trend was removed.",
    metric: 'Prophet model with multiplicative seasonality, 12.87% MAPE.',
    tags: [
      { label: 'Time Series', color: 'var(--raspberry)' },
      { label: 'Prophet', color: 'var(--cobalt)' },
      { label: 'Power BI', color: 'var(--amber)' },
    ],
    link: 'https://github.com/sandhyatanwar2030/upi-demand-sensing',
  },
  {
    id: 'titanic',
    size: 'small',
    title: 'Titanic Survival Prediction',
    description:
      'Compared Logistic Regression, Decision Trees, Random Forest and XGBoost on the classic survival problem, then broke the results down by passenger class in Power BI.',
    metric: '88.9% ROC-AUC.',
    tags: [
      { label: 'Classification', color: 'var(--cobalt)' },
      { label: 'XGBoost', color: 'var(--raspberry)' },
    ],
    link: 'https://github.com/sandhyatanwar2030/titanic-survival-prediction',
  },

]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <h2 className="projects__heading">What I've built</h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`project-card project-card--${p.size}`}
              key={p.id}
            >
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span className="project-card__tag" key={t.label}>
                    <span className="project-card__dot" style={{ background: t.color }} />
                    {t.label}
                  </span>
                ))}
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              {p.metric && <p className="project-card__metric">{p.metric}</p>}
              <span className="project-card__link">View code</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
