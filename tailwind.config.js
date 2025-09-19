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
          background: '#121212',
          text: '#E0E0E0',
          accent: '#BB86FC',
          card: '#1E1E1E',
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
      fontSize: {
        xxs: ['0.65rem', { lineHeight: '0.8rem' }], // Custom extra-extra-small size
      },
    },
  },
  plugins: [],
}