import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { TuEspacioOnline } from './components/TuEspacioOnline/TuEspacioOnline'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { useLocale } from './i18n/LocaleContext'

function App() {
  const { ui } = useLocale()

  return (
    <>
      <a className="skip-link" href="#inicio">
        {ui.skipLink}
      </a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TuEspacioOnline />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
