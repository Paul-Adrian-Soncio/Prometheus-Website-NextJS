module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Techovier Bold', 'sans-serif'],
        'visby': ['Visby CF', 'sans-serif'],
        'demi-bold': ['Visby CF Demi-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}