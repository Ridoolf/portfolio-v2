import { useState } from 'react'
import { useLocale } from '../../i18n/LocaleContext'
import './Hero.css'

const CV_PATH = '/cv/lucas-ridolfi-cv.pdf'
const CV_FILENAME = 'Lucas-Ridolfi-CV.pdf'
const PROFILE_IMAGE = '/perfil.png'

function DownloadIcon() {
  return (
    <svg
      className="hero__btn-icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 2v7.5M8 9.5 5.5 7M8 9.5 10.5 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12.5h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeroProfileImage({ alt }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="hero__image-placeholder" aria-hidden="true">
        <span className="hero__image-initials">LR</span>
      </div>
    )
  }

  return (
    <img
      className="hero__image"
      src={PROFILE_IMAGE}
      alt={alt}
      width={280}
      height={280}
      onError={() => setHasError(true)}
    />
  )
}

export function Hero() {
  const { ui } = useLocale()
  const { hero } = ui

  return (
    <section id="inicio" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__heading">
            <p className="hero__greeting">{hero.greeting}</p>
            <h1 className="hero__name">{hero.name}</h1>
            <p className="hero__role">{hero.role}</p>
            <p className="hero__tagline">{hero.tagline}</p>
          </div>
          <div className="hero__description">
            <p>
              {hero.descriptionLead}{' '}
              <span className="hero__description-highlight">
                {hero.descriptionStack}
              </span>
              {hero.descriptionRest}
            </p>
            <p>{hero.descriptionSecond}</p>
          </div>

          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#proyectos">
              {hero.ctaProjects}
            </a>
            <a
              className="hero__btn hero__btn--secondary glass-surface--soft"
              href="#contacto"
            >
              {hero.ctaContact}
            </a>
            <a
              className="hero__btn hero__btn--tertiary"
              href={CV_PATH}
              download={CV_FILENAME}
              aria-label={hero.ctaCvAria}
            >
              <DownloadIcon />
              {hero.ctaCv}
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <HeroProfileImage alt={hero.profileAlt} />
        </div>
      </div>
    </section>
  )
}
