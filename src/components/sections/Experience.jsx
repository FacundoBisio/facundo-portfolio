import Section from '../ui/Section'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../../utils/animations'

const items = [
  {
    role: 'Fullstack Developer',
    company: 'ONG Downisup Córdoba',
    period: 'Mar 2024 – Dic 2024',
    bullets: [
      'Gestión de pacientes y turnos; web institucional.',
      'Frontend con React + Tailwind; integración APIs REST.',
      'Sincronización casi en tiempo real y diseño accesible.'
    ]
  },
  {
    role: 'Pasante',
    company: 'Kunan S.A.',
    period: 'Jul 2024 – Oct 2024',
    bullets: [
      'Soporte a desarrollos web y flujos CI/CD.',
      'Buenas prácticas de performance y responsive.'
    ]
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'EUSA Partners (España)',
    period: 'Mar 2024 – Actualidad',
    bullets: [
      'Diseño e implementación de landings "Premium" con Tailwind v4.',
      'Optimistic UI y SEO Técnico (Open Graph, JSON-LD).',
      'Deploy FTP/DNS y gestión de dominios.'
    ]
  }
]

export default function Experience() {
  return (
    <Section id="experiencia">
      <h2 className="h2 mb-8">Experiencia</h2>
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
