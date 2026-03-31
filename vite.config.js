import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwind()],

  build: {
    // Minificación agresiva
    minify: 'esbuild',

    // Subir el límite de warning de chunk (Framer Motion es grande)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Chunk splitting manual: separa vendors pesados del bundle principal
        // → el browser puede cachear framer-motion por separado
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-lenis':  ['lenis'],
        },
      },
    },

    // Genera reporte de tamaños en consola al buildear
    reportCompressedSize: true,
  },

  // Evita que Vite procese assets grandes como datos inline (< 4KB → inline, resto → file)
  assetsInlineLimit: 4096,
})
