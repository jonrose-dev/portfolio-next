/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Inconsolata', 'sans-serif'],
    },
    extend: {
      colors: {
        stop: 'rgb(255,87,80)',
        slow: 'rgb(255,191,46)',
        go: 'rgb(44,207,66)',
        blue: 'rgb(0,122,204)',
        black: 'rgb(43,43,43)',
        green: 'rgb(44,207,66)',
      },
      boxShadow: {
        emulator: '0px 0px 26px 3px rgba(0,0,0,0.2)',
      },
      keyframes: {
        appear: {
          '0%': {
            transform: 'scale(0)'
          },
          '80%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        blink: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          }
        },
        down: {
          '0%': {
            opacity: 0,
            bottom: '40px'
        },
        '100%': {
            opacity: 1,
            bottom: '10px'
        }
        }
      }
    },
  },
  plugins: [],
}
