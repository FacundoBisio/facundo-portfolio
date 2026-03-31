import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import { UIProvider } from './context/UIContext'
import GlobalUI from './components/ui/GlobalUI'
import './index.css'

// Lazy load all sections below the fold
const About      = lazy(() => import('./components/sections/About'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Projects   = lazy(() => import('./components/sections/Projects'))
const Skills     = lazy(() => import('./components/sections/Skills'))
const Education  = lazy(() => import('./components/sections/Education'))
const Contact    = lazy(() => import('./components/sections/Contact'))

const SectionLoader = () => (
  <div style={{
    width: '100%',
    height: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '0.5px solid var(--line)',
  }}>
    <div style={{
      width: 28,
      height: 28,
      borderRadius: '50%',
      border: '1.5px solid rgba(255,255,255,0.08)',
      borderTopColor: 'var(--accent)',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
)

function App() {
  return (
    <UIProvider>
      <Layout>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </Layout>
      <GlobalUI />
    </UIProvider>
  )
}

export default App
