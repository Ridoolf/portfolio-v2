import { skills } from '../../data/skills'
import './Skills.css'

export function Skills() {
  return (
    <section id="skills" className="skills section-shell">
      <div className="skills__container">
        <h2 className="section-title">Skills</h2>

        <ul className="skills__grid">
          {skills.map(({ id, name, logo }) => (
            <li key={id} className="skills__item">
              <img className="skills__logo" src={logo} alt={`Logo de ${name}`} />
              <div className="skills__slot">
                <span className="skills__line" aria-hidden="true" />
                <h3 className="skills__name">{name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
