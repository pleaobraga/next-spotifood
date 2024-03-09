/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      'gray-100': '#ffffff3b',
      'gray-200': '#505050',
      'gray-300': '#424242',
      'gray-400': '#404040',
      'gray-800': '#303030',
      black: '#000000',
      green: '#4caf50',
      red: '#ff7043',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
