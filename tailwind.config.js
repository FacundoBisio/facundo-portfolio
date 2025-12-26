/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0ea5e9', dim: '#0b84bb' }
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(14,165,233,0.35)'
      },
      fontFamily: {
        sans: ['Inter','system-ui','Avenir','Helvetica','Arial','sans-serif']
      }
    }
  },
  plugins: [],
}
