module.exports = {
  content: [
      "./pages/**/*.{js, jsx, ts, tsx}",
      "./Layouts/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
      extend: {},
      minHeight: {
          '1': '10px',
          '2': '20px',
          '3': '30px',
          '4': '40px',
          '5': '50px',
          '6': '60px',
          'screen': '100vh',
      },
      backgroundSize: {
              'auto': 'auto',
              'cover': 'cover',
              'contain': 'contain',
              '50%': '50%',
              '16': '4rem',
          }
  },
  plugins: [],
  darkMode: 'class',
}
