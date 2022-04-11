module.exports = {
  mode: 'jit',
  purge: [
      './*.html'
  ],
  content: [],
  theme: {
    colors: {
        'old-gold': '#AAA173',
        'old-black': '#3C4045',
        'white': '#ffffff',
        'black': '#000000',
        'gray-1':'#e4e4e4'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
