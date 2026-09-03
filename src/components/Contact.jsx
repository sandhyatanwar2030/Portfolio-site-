import './Contact.css'

const links = [
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { label: 'GitHub', value: 'github.com/sandhyatanwar2030', href: 'https://github.com/sandhyatanwar2030' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sandhya-tanwar-a6127b36a',
    href: 'https://www.linkedin.com/in/sandhya-tanwar-a6127b36a/',
  },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <h2 className="contact__heading">Let's talk data</h2>
        <p className="contact__body">
          I'm looking for a first data science or analyst role. If you're hiring, or just
          want to talk about counterfactual evaluation, reach out.
        </p>
        <div className="contact__links">
          {links.map((l) => (
            <a className="contact__link" href={l.href} key={l.label}>
              <span className="contact__link-label">{l.label}</span>
              <span className="contact__link-value">{l.value}</span>
            </a>
          ))}
        </div>
      </div>
      <p className="contact__footer">Built by Sandhya Tanwar.</p>
    </section>
  )
}
