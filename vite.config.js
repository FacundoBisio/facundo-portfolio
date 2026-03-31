import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwind()],

  build: {
    // rolldown-vite usa OXC como transpilador nativo — NO poner 'esbuild'
    // porque esbuild no está instalado y rolldown ya no lo necesita.
    // Dejar vacío usa el default de rolldown (oxc), que es más rápido.
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // manualChunks como función (requerido por rolldown-vite)
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
          if (id.includes('node_modules/lenis')) {
            return 'vendor-lenis'
          }
        },
      },
    },
  },

  assetsInlineLimit: 4096,
})
