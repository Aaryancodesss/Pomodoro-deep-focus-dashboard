/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1e1e1e',
        },
      }
    },
  },
  plugins: [],
}
