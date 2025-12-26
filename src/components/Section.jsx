import { motion } from 'framer-motion'

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  )
}
