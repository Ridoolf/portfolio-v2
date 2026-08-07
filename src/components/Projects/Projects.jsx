import { useCallback, useEffect, useId, useState } from 'react'
import { featuredProjects, otherProjects } from '../../data/projects'
import { Timeline } from '../Timeline/Timeline'
import { TimelineItem } from '../Timeline/TimelineItem'
import './Projects.css'

const MOBILE_BREAKPOINT = 768

function useIsMobile(onBreakpointChange) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches
      : false,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const handleChange = (event) => {
      setIsMobile(event.matches)
      onBreakpointChange?.()
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [onBreakpointChange])

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

function ProjectVideo({ video, image, initials, title }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <ProjectImage image={image} initials={initials} title={title} />
    )
  }

  return (
    <video
      className="projects__video"
      src={video}
      poster={image}
      controls
      playsInline
      preload="metadata"
      aria-label={`Recorrido en video de ${title}`}
      onError={() => setHasError(true)}
    />
  )
}

function ProjectMedia({ project }) {
  if (project.video) {
    return (
      <ProjectVideo
        video={project.video}
        image={project.image}
        initials={project.initials}
        title={project.title}
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

function ProjectCard({ project, isMobile, isExpanded, onToggle }) {
  const panelId = useId()
  const isOpen = !isMobile || isExpanded
  const isCollapsed = isMobile && !isOpen
  const clientGroup = project.clientGroup
  const hasLinks = project.links?.demo || project.links?.repo

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
        onClick={() => isMobile && onToggle(project.id)}
      >
        <div className="projects__header">
          <h3 className="projects__title">{project.title}</h3>
          <div className="projects__meta">
            {project.kind && (
              <span className="projects__kind">{project.kind}</span>
            )}
            <span className="projects__year">{project.year}</span>
          </div>
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
          {clientGroup && (
            <p className="projects__client">
              <span className="projects__client-label">{clientGroup.client}</span>
              {clientGroup.relatedProjectId && (
                <>
                  <span className="projects__client-sep" aria-hidden="true">
                    ·
                  </span>
                  <a
                    className="projects__client-link"
                    href={`#proyecto-${clientGroup.relatedProjectId}`}
                  >
                    Ver {clientGroup.relatedLabel}
                  </a>
                </>
              )}
            </p>
          )}

          <p className="projects__description">{project.description}</p>

          <ul className="projects__stack" aria-label="Tecnologías utilizadas">
            {project.stack.map((tech) => (
              <li key={tech} className="projects__tag">
                {tech}
              </li>
            ))}
          </ul>

          {project.privateProject && (
            <p className="projects__private-note">Sistema privado del cliente</p>
          )}

          {hasLinks && (
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
                  className="projects__link projects__link--secondary glass-surface--soft"
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

function ProjectTimeline({
  projectList,
  startIndex,
  isMobile,
  expandedId,
  onToggle,
}) {
  return projectList.map((project, index) => {
    const previousProject = projectList[index - 1]
    const isPaired =
      Boolean(project.clientGroup?.client) &&
      previousProject?.clientGroup?.client === project.clientGroup.client

    return (
      <TimelineItem
        key={project.id}
        id={`proyecto-${project.id}`}
        index={startIndex + index}
        paired={isPaired}
        media={<ProjectMedia project={project} />}
      >
        <ProjectCard
          project={project}
          isMobile={isMobile}
          isExpanded={expandedId === project.id}
          onToggle={onToggle}
        />
      </TimelineItem>
    )
  })
}

export function Projects() {
  const [expandedId, setExpandedId] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const resetExpanded = useCallback(() => setExpandedId(null), [])
  const isMobile = useIsMobile(resetExpanded)
  const hasMore = otherProjects.length > 0

  const handleToggle = (projectId) => {
    setExpandedId((current) => (current === projectId ? null : projectId))
  }

  const handleShowAllToggle = () => {
    setShowAll((current) => {
      if (current) setExpandedId(null)
      return !current
    })
  }

  return (
    <section id="proyectos" className="projects section-shell">
      <div className="projects__container">
        <h2 className="section-title">Proyectos</h2>

        <Timeline>
          <ProjectTimeline
            projectList={featuredProjects}
            startIndex={0}
            isMobile={isMobile}
            expandedId={expandedId}
            onToggle={handleToggle}
          />
        </Timeline>

        {hasMore && (
          <>
            <button
              type="button"
              className="projects__show-all glass-surface--soft"
              aria-expanded={showAll}
              aria-controls="projects-more"
              onClick={handleShowAllToggle}
            >
              {showAll
                ? 'Ver menos'
                : `Ver todos los proyectos (${otherProjects.length})`}
            </button>

            <div
              id="projects-more"
              className={`projects__more${showAll ? ' projects__more--open' : ''}`}
              hidden={!showAll}
            >
              <div className="projects__more-inner">
                <Timeline>
                  <ProjectTimeline
                    projectList={otherProjects}
                    startIndex={featuredProjects.length}
                    isMobile={isMobile}
                    expandedId={expandedId}
                    onToggle={handleToggle}
                  />
                </Timeline>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
