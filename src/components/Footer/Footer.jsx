import './Footer.css'
import { siteLinks } from '../../config/siteLinks'
import { useLocale } from '../../i18n/LocaleContext'

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
  const { ui } = useLocale()
  const copy = ui.footer
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__start">
          <p className="footer__copy">{copy.rights(year)}</p>

          <p className="footer__service">
            {copy.creator}{' '}
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

        <nav aria-label={copy.socialAria}>
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
