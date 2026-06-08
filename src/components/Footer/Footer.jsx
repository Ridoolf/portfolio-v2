import './Footer.css'

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
        <p className="footer__copy">
          © {year} Lucas Ridolfi. Todos los derechos reservados.
        </p>

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
