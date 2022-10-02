const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Open Sans Condensed"'],
        'text': ['"Open Sans"']
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0, top:'-30px' },
          '100%': { opacity: 1, top:'0px' }
        },
        fadeout: {
          '0%': { opacity: 1, top:'0px' },
          '100%': { opacity: 0, top:'-30px' }
        }
      },
      animation: {
        'fadein': 'fadein 0.1s ease-in-out',
        'fadeout': 'fadeout 0.1s ease-in-out'
      }
    }

  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover']
    }
  },
  plugins: [
    iOSHeight
  ]
}