/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class'
  ,
  theme: {
    extend: {
      fontFamily: {
        'Heebo': ['Heebo', 'sans-serif'],
      }
      ,
      colors: {
        primary: '#FF6464',
        secondary: '#65d2f3',
        dark: '#21243D',
        light: '#8695A4',
      },
      keyframes: {
        'from-right': {
          '0%': {
            transform: 'translateX(50%)',
          },
          '50%': {
            transform: 'translateX(-10%)',
          },
          '100%': {
            transform: 'translateX(0)',
          }
        },
        'from-left': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '50%': {
            transform: 'translateX(10%)',
          },
          '100%': {
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'from-right': 'from-right 0.5s ease-in-out forwards',
        'from-left': 'from-left 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}