/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#000000',
          text: '#ffffff',
          accent: '#00ff99',
          card: '#1c1c22',
        },
        light: {
          background: '#f0f2f5',
          text: '#333333',
          accent: '#1a73e8',
          card: '#ffffff',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}