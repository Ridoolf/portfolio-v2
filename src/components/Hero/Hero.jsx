import './Hero.css'

const CV_PATH = '/cv/lucas-ridolfi-cv.pdf'
const CV_FILENAME = 'Lucas-Ridolfi-CV.pdf'

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

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__heading">
            <p className="hero__greeting">Hola, soy</p>
            <h1 className="hero__name">Lucas Ridolfi</h1>
            <p className="hero__role">Full Stack Developer</p>
          </div>
          <p className="hero__description">
            Especializado en <span className="hero__description-highlight">ReactJS</span>, desarrollo páginas web enfocadas en la experiencia del usuario. <br />
            Actualmente estudio Python en "BA Tech" y sigo formándome mientras trabajo en proyectos freelance.
          </p>

          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#proyectos">
              Ver proyectos
            </a>
            <a
              className="hero__btn hero__btn--secondary glass-surface--soft"
              href="#contacto"
            >
              Contáctame
            </a>
            <a
              className="hero__btn hero__btn--tertiary"
              href={CV_PATH}
              download={CV_FILENAME}
              aria-label="Descargar curriculum vitae en PDF"
            >
              <DownloadIcon />
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__image-placeholder" aria-hidden="true">
            <span className="hero__image-initials">LR</span>
          </div>
        </div>
      </div>
    </section>
  )
}
