import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
]

const MOBILE_BREAKPOINT = '(max-width: 900px)'
const MENU_MOTION_MS = 300

function getResolvedLength(variable) {
  const probe = document.createElement('div')
  probe.style.cssText = `position:absolute;visibility:hidden;pointer-events:none;top:var(${variable})`
  document.body.appendChild(probe)
  const value = parseFloat(getComputedStyle(probe).top)
  document.body.removeChild(probe)
  return value
}

export function Navbar() {
  const headerRef = useRef(null)
  const metricsRef = useRef({ initial: 0, docked: 0 })
  const scrollUnlockTimerRef = useRef(null)
  const [isDocked, setIsDocked] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        setIsDocked(false)
        return
      }

      const { initial, docked } = metricsRef.current
      const scrollOffset = initial - docked
      const nextTop = Math.max(docked, initial - window.scrollY)

      header.style.top = `${nextTop}px`
      setIsDocked(window.scrollY >= scrollOffset)
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

    if (scrollUnlockTimerRef.current !== null) {
      window.clearTimeout(scrollUnlockTimerRef.current)
      scrollUnlockTimerRef.current = null
    }

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.dataset.scrollLock = String(scrollY)

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      const lockedScrollY = Number(document.body.dataset.scrollLock || '0')

      scrollUnlockTimerRef.current = window.setTimeout(() => {
        const html = document.documentElement
        const previousScrollBehavior = html.style.scrollBehavior

        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        delete document.body.dataset.scrollLock

        html.style.scrollBehavior = 'auto'
        window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'instant' })
        html.style.scrollBehavior = previousScrollBehavior

        scrollUnlockTimerRef.current = null
      }, MENU_MOTION_MS)

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
        aria-label="Cerrar menú"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <div className="navbar__shell">
        <nav
          className="navbar__bubble glass-surface"
          aria-label="Navegación principal"
        >
          <a className="navbar__brand" href="#inicio" onClick={closeMenu}>
            portfolio
          </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="navbar__toggle-icon" aria-hidden="true" />
          </button>

          <ul id="navbar-menu" className="navbar__list navbar__list--desktop">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a className="navbar__link" href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`navbar__panel glass-surface--strong${isMenuOpen ? ' navbar__panel--open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="navbar__list navbar__list--mobile">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a className="navbar__link" href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
