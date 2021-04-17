const plugin = require('tailwindcss/plugin');
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
        skill: '#F7F7FB',
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
      zIndex: {
        '-99': '-99',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.bg-hero': {
          'background-image': 'url(/bg-hero.png)',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
        },
        '.shadow-card': {
          'box-shadow': '0px 15px 30px rgba(0, 0, 0, 0.1)',
        },
      };
      addUtilities(utilities);
    }),
  ],
};
