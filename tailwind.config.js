/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        italian: {
          green: '#008C45',
          white: '#FFFFFF',
          red: '#CD212A',
        },
        cream: '#FFF8F0',
        darkGreen: '#006837',
        foreground: '#1a1a1a', // Added: Define foreground color for text-foreground utility
        background: '#FFFFFF', // Added: Define background color
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}