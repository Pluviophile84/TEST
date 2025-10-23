import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Our "Toner" Palette
        tonr: {
          cyan: '#22d3ee',
          pink: '#ec4899',
          yellow: '#facc15',
        },
        // Our Dark Background
        dark: {
          900: '#111111',
          950: '#0a0a0a',
        },
        // Our Text Colors
        light: {
          100: '#f8fafc', // slate-50
          200: '#e2e8f0', // slate-200
          400: '#94a3b8', // slate-400
        },
      },
    },
  },
  plugins: [],
}
export default config
