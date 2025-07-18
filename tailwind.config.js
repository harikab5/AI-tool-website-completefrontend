/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your original theme
        background: "#121212",
        text: "#ffffff",
        buttonPurple: "#D8B4FE",
        primaryGrey: "#5A6F73",

      
        brand: {
          light: '#D9FEE6',
          DEFAULT: '#34c38f',
          dark: '#2aa884',
        },
        section1: '#f4f7fa',
        section2: '#ffffff',
        section3: '#eef7f0',
        section4: '#f3f8f4',
      },
    },
  },
  plugins: [],
};
