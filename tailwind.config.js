/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#f1ecec',
        'light-green': '#5c9b84',
        'brown-dark': '#795142;',
        'brown-light': '#715950',
        'green': '#00A925',
        'red': '#A90000',
      },
      content: {
        'dots': "url('/src/assets/images/dots.svg')",
        'vertical-line': "url('/src/assets/images/vertical-line.svg')",
      },
      backgroundImage: {
        'bus': "url('/src/assets/images/bus.jpg')",
      },
      backgroundColor: {
        'brown-52': 'rgba(121, 81, 66, 0.52)',
      },
      minHeight: {
        '30rem': '30rem',
      },
      maxWidth: {
        '80p': '80%',
      },
      gridTemplateColumns: {
        'trip': '100px 1fr',
      },
      fontFamily: {
        'sans': ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
