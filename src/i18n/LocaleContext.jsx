import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { buildProjects, splitProjects } from './buildContent'
import { en } from './locales/en'
import { es } from './locales/es'

const STORAGE_KEY = 'portfolio-locale'

const messages = { es, en }

const LocaleContext = createContext(null)

function readStoredLocale() {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'es'
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(readStoredLocale)

  const setLocale = (next) => {
    const value = next === 'en' ? 'en' : 'es'
    setLocaleState(value)
    window.localStorage.setItem(STORAGE_KEY, value)
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(() => {
    const bundle = messages[locale]
    const projects = buildProjects(bundle.projectCopy)
    const { featuredProjects, otherProjects } = splitProjects(projects)

    return {
      locale,
      setLocale,
      ui: bundle.ui,
      projects,
      featuredProjects,
      otherProjects,
      experiences: bundle.experience,
      tuEspacioOnline: bundle.tuEspacioOnline,
    }
  }, [locale])

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
