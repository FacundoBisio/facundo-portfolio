import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwind()],

  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,
    reportCompressedSize: true,

    rollupOptions: {
      output: {
        // rolldown-vite (el bundler que usa este proyecto) requiere manualChunks
        // como FUNCIÓN, no como objeto plano. La función recibe el id del módulo
        // y devuelve el nombre del chunk al que debe pertenecer, o undefined
        // para dejar que rolldown decida por su cuenta.
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
