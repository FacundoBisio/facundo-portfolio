import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import GlobalUI from './components/ui/GlobalUI'
import { UIProvider } from './context/UIContext'
import './index.css'

// Lazy Load heavy components
const About = lazy(() => import('./components/sections/About'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Contact = lazy(() => import('./components/sections/Contact'))

// Loading Fallback
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
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
          <Contact />
        </Suspense>
      </Layout>
      <GlobalUI />
    </UIProvider>
  )
}

export default App
