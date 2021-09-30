const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: [
    'index.html',
    '*.js*',
  ],
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
    }
  },
}
