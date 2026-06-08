import { useEffect, useId, useState } from 'react'
import { projects } from '../../data/projects'
import { Timeline } from '../Timeline/Timeline'
import { TimelineItem } from '../Timeline/TimelineItem'
import './Projects.css'

const MOBILE_BREAKPOINT = 768

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches
      : false,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const handleChange = (event) => setIsMobile(event.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}

function ProjectImage({ image, initials, title }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="projects__image-placeholder" aria-hidden="true">
        <span className="projects__image-initials">{initials}</span>
      </div>
    )
  }

  return (
    <img
      className="projects__image"
      src={image}
      alt={`Captura de ${title}`}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  )
}

function ProjectMedia({ project }) {
  if (project.video) {
    return (
      <video
        className="projects__video"
        src={project.video}
        controls
        playsInline
        preload="metadata"
        aria-label={`Recorrido en video de ${project.title}`}
      />
    )
  }

  return (
    <ProjectImage
      image={project.image}
      initials={project.initials}
      title={project.title}
    />
  )
}

function ProjectCard({ project, isMobile }) {
  const [expandedOnMobile, setExpandedOnMobile] = useState(false)
  const panelId = useId()
  const isOpen = !isMobile || expandedOnMobile
  const isCollapsed = isMobile && !isOpen

  const toggleLabel = isOpen
    ? `Contraer ${project.title}`
    : `Expandir ${project.title}`

  return (
    <article className={`projects__card${isOpen ? ' projects__card--open' : ''}`}>
      <button
        type="button"
        className="projects__toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isMobile ? toggleLabel : undefined}
        onClick={() => isMobile && setExpandedOnMobile((open) => !open)}
      >
        <div className="projects__header">
          <h3 className="projects__title">{project.title}</h3>
          <span className="projects__year">{project.year}</span>
        </div>
        <span className="projects__chevron" aria-hidden="true" />
      </button>

      <div
        id={panelId}
        className="projects__panel"
        aria-hidden={isCollapsed}
        {...(isCollapsed ? { inert: true } : {})}
      >
        <div className="projects__panel-inner">
          <p className="projects__description">{project.description}</p>

          <ul className="projects__stack" aria-label="Tecnologías utilizadas">
            {project.stack.map((tech) => (
              <li key={tech} className="projects__tag">
                {tech}
              </li>
            ))}
          </ul>

          {(project.links?.demo || project.links?.repo) && (
            <div className="projects__links">
              {project.links.demo && (
                <a
                  className="projects__link projects__link--primary"
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver demo de ${project.title} (se abre en nueva pestaña)`}
                >
                  Ver demo
                </a>
              )}
              {project.links.repo && (
                <a
                  className="projects__link projects__link--secondary"
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${project.title} en GitHub (se abre en nueva pestaña)`}
                >
                  Código
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const isMobile = useIsMobile()

  return (
    <section id="proyectos" className="projects section-shell">
      <div className="projects__container">
        <h2 className="section-title">Proyectos</h2>

        <Timeline>
          {projects.map((project, index) => (
            <TimelineItem
              key={project.id}
              index={index}
              media={<ProjectMedia project={project} />}
            >
              <ProjectCard
                key={`${project.id}-${isMobile}`}
                project={project}
                isMobile={isMobile}
              />
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
