import Section from '../ui/Section'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../../utils/animations'

const items = [
  {
    role: 'Fullstack Developer',
    company: 'ONG Downisup Córdoba',
    period: 'Mar 2024 - Dec 2024',
    bullets: [
      'Built patient management system with appointment scheduling and institutional website.',
      'React + Tailwind CSS frontend with REST API integration and real-time data sync.',
      'Implemented accessible UI/UX following WCAG guidelines and responsive design.',
      'Error boundary handling and optimistic UI updates for enhanced user experience.'
    ]
  },
  {
    role: 'Pasante',
    company: 'Kunan S.A.',
    period: 'Jul 2024 - Oct 2024',
    bullets: [
      'Collaborated in Agile/Scrum teams supporting web development projects.',
      'Optimized application performance and implemented responsive design patterns.',
      'Contributed to CI/CD pipeline improvements and deployment workflows.'
    ]
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'Confituras Palmelita (España)',
    period: 'Sep 2025 - Present',
    bullets: [
      'Developed multi-language e-commerce site with HTML5/CSS3 and Vanilla JavaScript.',
      'Implemented international SEO with hreflang tags and multi-domain routing strategy.',
      'Schema.org structured data (LocalBusiness, Product) for enhanced SERP visibility.',
      'Core Web Vitals optimization using fetchpriority="high" for critical assets.'
    ]
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'EUSA Partners (España)',
    period: 'Mar 2025 - Aug 2025',
    bullets: [
      'Designed premium "Founder Applications" platform with Tailwind CSS and PHP backend.',
      'Optimistic UI implementation for instant form feedback and improved UX.',
      'Technical SEO with JSON-LD/Open Graph integration achieving high search rankings.',
      'Managed full deployment cycle including FTP uploads, DNS configuration, and WebP optimization.'
    ]
  }
]

export default function Experience() {
  return (
    <Section id="experiencia">
      <spam className="text-blue-500 mb-8">Experience</spam>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-4"
      >
        {items.map(item => (
          <motion.div 
            key={item.company} 
            variants={fadeInUp}
            className="group"
          >
            <div className="sweep-border sweep-hover rounded-2xl">
            <div className="card p-5 rounded-2xl transition-transform duration-300 group-hover:-translate-y-1">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{item.role} · {item.company}</h3>
                  <p className="muted text-sm">{item.period}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-neutral-300">
                {item.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
