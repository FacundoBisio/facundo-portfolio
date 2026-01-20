import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Toast({ open, message, onClose }) {
  useEffect(() => {
    if (!open) return
    const t = setTimeout(onClose, 2200)
    return () => clearTimeout(t)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-200 rounded-xl bg-neutral-900 border text-brand border-brand px-4 py-2 text-sm"
        >
          {message}   
        </motion.div>
      )}
    </AnimatePresence>
  )
}
