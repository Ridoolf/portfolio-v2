import { experiences } from '../../data/experience'
import './Experience.css'

function ExperienceCard({ entry }) {
  const hasHighlights = Boolean(entry.highlights?.length)

  return (
    <article className="experience__card">
      <header className="experience__header">
        <h3 className="experience__role">{entry.role}</h3>
        <p className="experience__company">{entry.company}</p>

        <time className="experience__period" dateTime={entry.periodDateTime}>
          {entry.period}
        </time>
      </header>

      {(entry.description || hasHighlights) && (
        <div className="experience__body">
          {entry.description && (
            <p className="experience__description">{entry.description}</p>
          )}

          {hasHighlights && (
            <ul className="experience__highlights">
              {entry.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  )
}

export function Experience() {
  return (
    <section id="experiencia" className="experience section-shell">
      <div className="experience__container">
        <h2 className="section-title">Experiencia</h2>

        <div className="experience__grid">
          {experiences.map((entry) => (
            <ExperienceCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
