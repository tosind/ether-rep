
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF4D00',
          pink: '#FF007A',
          purple: '#9000FF',
          blue: '#0057FF',
          cyan: '#00C2FF'
        },
        background: {
          dark: '#090a11',
          surface: '#121421'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #FF4D00, #FF007A, #9000FF, #0057FF, #00C2FF)',
        'brand-gradient-vertical': 'linear-gradient(to bottom, #FF4D00, #9000FF, #0057FF)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)'
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    }
  },
  plugins: [],
}
