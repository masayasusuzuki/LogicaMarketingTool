/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tiktok: {
          pink: '#fe2c55',
          black: '#121212',
          gray: '#8e8e93',
        }
      }
    },
  },
  plugins: [],
} 