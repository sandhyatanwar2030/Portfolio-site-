import './Projects.css'

const projects = [
  {
    id: 'reco',
    size: 'large',
    title: 'Recommendation System with Counterfactual Evaluation',
    description:
      "Built an implicit-feedback matrix factorization recommender on biased interaction logs, then evaluated it with IPS, SNIPS and Doubly Robust counterfactual estimators \u2014 the step that separates a model that looks good on paper from one that would actually hold up in an A/B test.",
    metric: 'Naive evaluation overstated performance by 23 points \u2014 counterfactual methods closed that to within 2.',
    tags: [
      { label: 'Python', color: 'var(--cobalt)' },
      { label: 'Causal Inference', color: 'var(--raspberry)' },
      { label: 'Simulated A/B Test', color: 'var(--amber)' },
    ],
    link: 'https://github.com/sandhyatanwar2030',
  },
  {
    id: 'llm',
    size: 'medium',
    title: 'LLM Text Summarization & QA System',
    description:
      'Fine-tuned BART and T5 for abstractive summarization and DistilBERT for extractive question-answering, then built a Streamlit app that puts the local models head-to-head with the Gemini API.',
    metric: 'Compared cost, latency and quality to show when a local model beats an API call.',
    tags: [
      { label: 'NLP', color: 'var(--mint)' },
      { label: 'Transformers', color: 'var(--cobalt)' },
      { label: 'Streamlit', color: 'var(--amber)' },
    ],
    link: 'https://github.com/sandhyatanwar2030',
  },
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
    link: 'https://github.com/sandhyatanwar2030',
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
    link: 'https://github.com/sandhyatanwar2030',
  },
  {
    id: 'road',
    size: 'small',
    title: 'Road Accident Analytics',
    description:
      'Reshaped a 307-column government accident dataset into a usable form, engineered a fatality-rate metric, and surfaced a few counter-intuitive patterns in where accidents turn fatal.',
    tags: [
      { label: 'EDA', color: 'var(--mint)' },
      { label: 'Power BI', color: 'var(--amber)' },
    ],
    link: 'https://github.com/sandhyatanwar2030',
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
