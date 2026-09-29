import { useLocale } from '../../i18n/LocaleContext'
import './Experience.css'

const LINKEDIN_URL = 'https://www.linkedin.com/in/lucasridolfi/'

function LinkedInIcon() {
  return (
    <svg
      className="experience__linkedin-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.062 2.062 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  )
}

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
  const { ui, experiences } = useLocale()
  const copy = ui.experience

  return (
    <section id="experiencia" className="experience section-shell">
      <div className="experience__container">
        <h2 className="section-title">{copy.title}</h2>

        <div className="experience__grid">
          {experiences.map((entry) => (
            <ExperienceCard key={entry.id} entry={entry} />
          ))}
        </div>

        <p className="experience__linkedin-note">
          <a
            className="experience__linkedin-link"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.linkedinAria}
          >
            <span>{copy.linkedinNote}</span>
            <LinkedInIcon />
          </a>
        </p>
      </div>
    </section>
  )
}
