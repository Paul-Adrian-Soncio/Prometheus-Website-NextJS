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
      height: {
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "60vh": "60vh",
        "80vh": "80vh",
        "300px": "300px",
        "250px": "250px",
        "200px": "200px",
        "150px": "150px",
        "100px": "100px",
        "50px": "50px",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      gridTemplaterows: {
        'layout': 'repeat(2, 1fr)',
      },
      gridTemplatecolumns: {
        'layout': '2fr 1fr',
      },
      colors: {
        'prometheus-gold': '#877562',
        'prometheus-gray': '#6f6f6f',
      },
      spacing: {
        'full': '100%',
        '2/3' : '66.666667%',
      },
      zIndex: {
        '-10': '-10',
      },
      screens: {
        'max-xl': {'max': '1279px'},
        'max-md': {'max': '767px'},
        'max-sm': {'max': '639px'},
        '4xl': '2000px',
        '3xl': '1980px',
      },
      maxWidth: {
        '4k': '2560px',
      },
      lineHeight: {
        '20': '5rem',
      }
    },
  },
  plugins: [],
}