module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: {
          light: '#0F3460',
          medium: '#242B3D',
          DEFAULT: '#16213E',
          dark: '#1A1A2E'
        },
        accent: '#E94560',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
