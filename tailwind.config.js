/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans:  ['Manrope', 'system-ui', 'sans-serif'],
        mono:  ['DM Mono', 'monospace'],
      },
      colors: {
        bg:      '#0a0a0b',
        bg2:     '#111113',
        bg3:     '#1a1a1e',
        accent:  '#c8f55a',
        accent2: '#4af5c8',
        accent3: '#f5a44a',
        text:    '#e8e6e0',
        muted:   '#7a7875',
      },
    },
  },
  plugins: [],
}
