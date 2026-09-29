import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../../i18n/LocaleContext'
import './Navbar.css'

const MOBILE_BREAKPOINT = '(max-width: 900px)'

function getResolvedLength(variable) {
  const probe = document.createElement('div')
  probe.style.cssText = `position:absolute;visibility:hidden;pointer-events:none;top:var(${variable})`
  document.body.appendChild(probe)
  const value = parseFloat(getComputedStyle(probe).top)
  document.body.removeChild(probe)
  return value
}

function LangSwitch({ className = '' }) {
  const { locale, setLocale, ui } = useLocale()

  return (
    <div
      className={`navbar__lang ${className}`.trim()}
      role="group"
      aria-label={ui.nav.langSwitch}
    >
      <button
        type="button"
        className={`navbar__lang-btn${locale === 'es' ? ' navbar__lang-btn--active' : ''}`}
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
      >
        ES
      </button>
      <button
        type="button"
        className={`navbar__lang-btn${locale === 'en' ? ' navbar__lang-btn--active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}

export function Navbar() {
  const { ui } = useLocale()
  const headerRef = useRef(null)
  const metricsRef = useRef({ initial: 0, docked: 0 })
  const isDockedRef = useRef(false)
  const [isDocked, setIsDocked] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: ui.nav.home, href: '#inicio' },
    { label: ui.nav.projects, href: '#proyectos' },
    { label: ui.nav.experience, href: '#experiencia' },
    { label: ui.nav.skills, href: '#skills' },
    { label: ui.nav.contact, href: '#contacto' },
  ]

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT)

    const updateMetrics = () => {
      metricsRef.current = {
        initial: getResolvedLength('--nav-top-initial'),
        docked: getResolvedLength('--nav-top-scrolled'),
      }
    }

    const handleScroll = () => {
      if (mediaQuery.matches) {
        header.style.top = ''
        if (isDockedRef.current) {
          isDockedRef.current = false
          setIsDocked(false)
        }
        return
      }

      const { initial, docked } = metricsRef.current
      const scrollOffset = initial - docked
      const nextTop = Math.max(docked, initial - window.scrollY)

      header.style.top = `${nextTop}px`

      const nextDocked = window.scrollY >= scrollOffset
      if (nextDocked !== isDockedRef.current) {
        isDockedRef.current = nextDocked
        setIsDocked(nextDocked)
      }
    }

    const handleLayoutChange = () => {
      if (!mediaQuery.matches) updateMetrics()
      handleScroll()
    }

    updateMetrics()
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleLayoutChange)
    mediaQuery.addEventListener('change', handleLayoutChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleLayoutChange)
      mediaQuery.removeEventListener('change', handleLayoutChange)
      header.style.top = ''
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT)
    const handleResize = (event) => {
      if (!event.matches) setIsMenuOpen(false)
    }

    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.documentElement.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      ref={headerRef}
      className={`navbar ${isDocked ? 'navbar--docked' : ''} ${isMenuOpen ? 'navbar--open' : ''}`}
    >
      <button
        type="button"
        className={`navbar__backdrop ${isMenuOpen ? 'navbar__backdrop--visible' : ''}`}
        aria-label={ui.nav.closeMenuBackdrop}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <div className="navbar__shell">
        <nav
          className="navbar__bubble glass-surface"
          aria-label={ui.nav.aria}
        >
          <div className="navbar__bar">
            <a className="navbar__brand" href="#inicio" onClick={closeMenu}>
              portfolio
            </a>

            <button
              type="button"
              className="navbar__toggle"
              aria-expanded={isMenuOpen}
              aria-controls="navbar-menu-mobile"
              aria-label={isMenuOpen ? ui.nav.closeMenu : ui.nav.openMenu}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="navbar__toggle-icon" aria-hidden="true" />
            </button>

            <LangSwitch className="navbar__lang--mobile" />
          </div>

          <div
            id="navbar-menu-mobile"
            className="navbar__menu-collapse"
            aria-hidden={!isMenuOpen}
            {...(!isMenuOpen ? { inert: true } : {})}
          >
            <div className="navbar__menu-inner">
              <ul className="navbar__list navbar__list--mobile">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a className="navbar__link" href={href} onClick={closeMenu}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul id="navbar-menu" className="navbar__list navbar__list--desktop">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a className="navbar__link" href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <LangSwitch className="navbar__lang--desktop" />
        </nav>
      </div>
    </header>
  )
}
