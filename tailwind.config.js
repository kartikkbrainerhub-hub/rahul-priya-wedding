/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          maroon: {
            light: '#E8C5C8',
            DEFAULT: '#800020',
            deep: '#5B0612',
            darkest: '#3B020A',
          },
          gold: {
            light: '#F3E5AB',
            DEFAULT: '#D4AF37',
            dark: '#AA7C11',
            muted: '#C5A880',
          },
          cream: {
            light: '#FDFBF7',
            DEFAULT: '#F5EFEB',
            dark: '#EFE8E2',
          },
          blush: {
            DEFAULT: '#FFF0F2',
            accent: '#FADADD',
          },
          charcoal: {
            DEFAULT: '#1C1917',
            dark: '#141210',
          }
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 15s ease-in-out infinite',
        'float-medium': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
