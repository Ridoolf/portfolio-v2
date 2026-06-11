import './Footer.css'
import { siteLinks } from '../../config/siteLinks'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Ridoolf',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lucasridolfi/',
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__start">
          <p className="footer__copy">
            © {year} Lucas Ridolfi. Todos los derechos reservados.
          </p>

          <p className="footer__service">
            Creador de{' '}
            <a
              className="footer__service-link"
              href={siteLinks.tuEspacioOnline.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteLinks.tuEspacioOnline.name}
            </a>
          </p>
        </div>

        <nav aria-label="Redes sociales">
          <ul className="footer__list">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  className="footer__link"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
