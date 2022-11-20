/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'primary_light': '#6750A4',
      'onPrimary_light': 'white',
      'primaryContainer_light': '#EADDFF',
      'onPrimaryContainer_light': '#21005D',
      'primary_dark': '#D0BCFF',
      'onPrimary_dark': '#381E72',
      'primaryContainer_dark': '#4F378B',
      'onPrimaryContainer_dark': '#EADDFF',

      'secondary_light': '#625B71',
      'onSecondary_light': '#fffff',
      'secondaryContainer_light': '#E8DEF8',
      'onSecondaryContainer_light': '#1D192B',
      'secondary_dark': '#CCC2DC',
      'onSecondary_dark': '#332D41',
      'secondaryContainer_dark': '#4A4458',
      'onSecondaryContainer_dark': '#E8DEF8',

      'bg_light': '#FFFBFE',
      'onBg_light': '#1C1B1F',
      'bgContainer_light': '#FFFBFE',
      'onBgContainer_light': '#1C1B1F',
      'bg_dark': '#1C1B1F',
      'onBg_dark': '#E6E1E5',
      'bgContainer_dark': '#1C1B1F',
      'onBgContainer_dark': '#E6E1E5',
      
      'surface0-light': '#FFFBFE',
      'surface01-light': '#F7F2F9',
      'surface02-light': '#F3EDF7',
      'surface03-light': '#EEE8F4',
      'surface04-light': '#EDE6F3',
      'surface05-light': '#EAE3F1',

      'surface0-dark': '#1C1B1F',
      'surface01-dark': '#25232A',
      'surface02-dark': '#2A2831',
      'surface03-dark': '#302D38',
      'surface04-dark': '#322E3A',
      'surface05-dark': '#35323E',
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ],
}