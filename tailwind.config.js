/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',

      'background': '#fdfdf6',
      'on-background': '#1a1c18',
      'background-dark': '#1a1c18',
      'on-background-dark': '#e3e3dc',

      'surface-0': '#fdfdf6',
      'on-surface': '#1a1c18',
      'surface-0-dark': '#1a1c18',
      'on-surface-dark': '#e3e3dc',

      'surface-1':' #f0f3e8',
      'surface-2': '#ebefe2',
      'surface-3':' #e5eadc',
      'surface-4': '#e3e9da',
      'surface-5': '#dfe6d5',
      'surface-1-dark':' #232820',
      'surface-2-dark': '#272e23',
      'surface-3-dark':' #2b3326',
      'surface-4-dark': '#2c3527',
      'surface-5-dark': '#2f3929',

      'surface-variant': '#dfe4d6',
      'on-surface-variant': '#43493e',
      'surface-variant-dark': '#43493e',
      'on-surface-variant-dark': '#c4c8bb',

      'inverse-surface': '#2f312c',
      'inverse-on-surface': '#f1f1ea',

      'primary': '#386a20',
      'primary-20': '#0c3900',
      'primary-30': '#205107',
      'primary-80': '#9cd67d',
      'on-primary': '#fff',
      'primary-dark': '#9cd67d',
      'primary-20-dark': '#0c3900',
      'primary-30-dark': '#205107',
      'primary-80-dark': '#9cd67d',
      'on-primary-dark': '#0c3900',
      
      'primary-container': '#b8f397',
      'on-primary-container': '#042100',
      'primary-container-dark': '#205107',
      'on-primary-container-dark': '#b8f397',

      'secondary': '#55624c',
      'on-secondary': '#fff',
      'secondary-dark': '#bdcbb0',
      'on-secondary-dark': '#273420',

      'secondary-container': '#d9e7cb',
      'on-secondary-container': '#131f0d',
      'secondary-container-dark': '#3e4a36',
      'on-secondary-container-dark': '#d9e7cb',

      'tertiary-container': '#bbebeb',
      'on-tertiary-container': '#002021',
      'tertiary-container-dark': '#1e4e4e',
      'on-tertiary-container-dark': '#bbebeb',

      'utility-error': '#ba1b1b',
      'utility-on-error': '#fff',
      'utility-outline': '#74796e',
      'utility-error-dark': '#ffb4a9',
      'utility-on-error-dark': '#680003',
      'utility-outline-dark': '#8d9286'
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}