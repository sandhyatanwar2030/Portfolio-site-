import './Contact.css'

const links = [
  { label: 'Email', value: 'sandhyatanwar2030@gmail.com', href: 'mailto:sandhyatanwar2030@gmail.com' },
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
          Driven by a passion for understanding the "why" behind the numbers. I leverage statistical modeling and causal inference to help companies measure true impact and optimize product strategies. Open to full-time opportunities and networking with fellow data peers.
          Reach out at:
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
