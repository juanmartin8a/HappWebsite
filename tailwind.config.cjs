/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      'main': ['Inter', 'sans-serif'],
    },
    fontSize: {
      'xxxs': ['0.5rem', {
        lineHeight: '0.5rem'
      }],
      '5xl': ['3rem', {
        lineHeight: '1'
      }],
    },
    extend: {
      keyframes: {
        happfacefade: {
          '0%':   {opacity: '1'},
          '35%': {opacity: '1'},
          '50%': {opacity: '0'},
          '85%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        soonfade: {
          '0%':   {opacity: '0'},
          '35%': {opacity: '0'},
          '50%': {opacity: '1'},
          '85%': {opacity: '1'},
          '100%': {opacity: '0'},
        },
      },
      animation: {
        happfacefade: 'happfacefade 6s ease-in-out infinite',
        soonfade: 'soonfade 6s ease-in-out infinite',
      },
    }
  }
}
