import './Skills.css'

const groups = [
  {
    label: 'Languages & querying',
    color: 'var(--cobalt)',
    items: ['Python', 'SQL'],
  },
  {
    label: 'Data & machine learning',
    color: 'var(--raspberry)',
    items: ['Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Prophet'],
  },
  {
    label: 'NLP & LLMs',
    color: 'var(--mint)',
    items: ['Hugging Face Transformers', 'BART', 'T5', 'DistilBERT', 'Gemini API'],
  },
  {
    label: 'Visualization & delivery',
    color: 'var(--amber)',
    items: ['Power BI', 'Streamlit', 'Gradio'],
  },
  {
    label: 'Tools',
    color: 'var(--cobalt)',
    items: ['Git', 'GitHub'],
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
