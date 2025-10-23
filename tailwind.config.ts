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
      // === NEW STUFF STARTS HERE ===
      backgroundImage: {
        // We define our looping gradient here so we can reuse it
        'tonr-gradient':
          'linear-gradient(to right, #22d3ee, #ec4899, #facc15, #ec4899, #22d3ee)',
      },
      // We define the animation keyframes
      keyframes: {
        moveGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      // We define a utility class to use the animation
      animation: {
        'gradient-pulse': 'moveGradient 4s ease infinite',
      },
      // === NEW STUFF ENDS HERE ===
    },
  },
  plugins: [],
}
export default config
