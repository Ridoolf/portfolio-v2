import { useState } from 'react'
import { tuEspacioOnlineShowcase } from '../../data/tuEspacioOnline'
import './TuEspacioOnline.css'

function ShowcaseImage({ image, initials, title }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="teo__image-placeholder" aria-hidden="true">
        <span className="teo__image-initials">{initials}</span>
      </div>
    )
  }

  return (
    <img
      className="teo__image"
      src={image}
      alt={`Captura del hero de ${title}`}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  )
}

export function TuEspacioOnline() {
  const { title, eyebrow, year, description, stack, image, initials, links } =
    tuEspacioOnlineShowcase

  return (
    <section id="tu-espacio-online" className="teo section-shell">
      <div className="teo__container">
        <header className="teo__header">
          <p className="teo__eyebrow">{eyebrow}</p>
          <div className="teo__title-row">
            <h2 className="teo__title">{title}</h2>
            <span className="teo__year">{year}</span>
          </div>
        </header>

        <article className="teo__spotlight glass-surface--strong">
          <div className="teo__media">
            <ShowcaseImage image={image} initials={initials} title={title} />
          </div>

          <div className="teo__body">
            <p className="teo__description">{description}</p>

            <ul className="teo__stack" aria-label="Tecnologías utilizadas">
              {stack.map((tech) => (
                <li key={tech} className="teo__tag">
                  {tech}
                </li>
              ))}
            </ul>

            {links.demo && (
              <a
                className="teo__cta"
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver sitio de ${title} (se abre en nueva pestaña)`}
              >
                Ver sitio
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}
