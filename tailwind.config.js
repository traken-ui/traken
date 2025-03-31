import trakenPlugin from './src/plugin/traken-plugin.js';


// @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './dist/**/*.{js,jsx,ts,tsx}',

  
    './node_modules/@traken/react/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [
    trakenPlugin
  ],
};
