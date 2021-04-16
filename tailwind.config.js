module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
        mono: ['IBM Plex Mono', 'ui-monospace'],
      },
      colors: {
        green: {
          50: '#fffefa',
          100: '#fffce6',
          200: '#fef8be',
          300: '#fef49a',
          400: '#fdee68',
          500: '#fce727',
          600: '#e7d103',
          700: '#c4b103',
          800: '#a19102',
          900: '#655b01',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
