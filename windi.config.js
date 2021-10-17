import formsPlugin from 'windicss/plugin/forms'
module.exports = {
  extract: {
    include: ['./**/*.html'],
  },
  darkMode:'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          'DEFAULT': '1rem',
          'sm': '2rem',
          'lg': '3rem',
          'xl': '4rem',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain'
    },
  },
  variants: {
    extend: {}
  },
  plugins: [formsPlugin]
}
