/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    extend: {
      colors: { 
        coral: {
          '50':  '#fcfbf8',
          '100': '#faefe1',
          '200': '#f5d3c3',
          '300': '#e8a994',
          '400': '#de7c67',
          '500': '#cb5945',
          '600': '#b03f2f',
          '700': '#8a2f24',
          '800': '#61211a',
          '900': '#3d1510',
        },
        darkgreen: {
          '50':  '#fdfcfa',
          '100': '#fbf0e7',
          '200': '#f8d1cd',
          '300': '#eda5a2',
          '400': '#e87576',
          '500': '#da5153',
          '600': '#c23738',
          '700': '#9b292a',
          '800': '#6f1d1d',
          '900': '#451210',
        },
        beaver: {
          '50':  '#faf9f7',
          '100': '#f4eeeb',
          '200': '#e7d8d5',
          '300': '#ccb3ae',
          '400': '#af8a84',
          '500': '#936961',
          '600': '#794e47',
          '700': '#5d3b37',
          '800': '#402927',
          '900': '#291a19',
        },
        gray: {
          '50':  '#f8f9f8',
          '100': '#ecf0f3',
          '200': '#d6dee6',
          '300': '#adbcc7',
          '400': '#7c95a2',
          '500': '#60747f',
          '600': '#4d5962',
          '700': '#3c434a',
          '800': '#292d34',
          '900': '#191c21',
        },
        silver: {
          '50':  '#f7f9f8',
          '100': '#ebf1f3',
          '200': '#d2e0e5',
          '300': '#a5bfc6',
          '400': '#70999f',
          '500': '#54777a',
          '600': '#445d5d',
          '700': '#354547',
          '800': '#252f32',
          '900': '#161c20',
        }
      }
    },
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('group-focus-within', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.group:focus-within .${e(`group-focus-within${separator}${className}`)}`
        })
      })
    })
  ]
}
