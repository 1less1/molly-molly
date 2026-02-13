/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(0vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(120vh) rotate(360deg)', opacity: '0' },
        }
      },
      animation: {
        'float-slow': 'fall 10s linear infinite',
        'float-medium': 'fall 7s linear infinite',
        'float-fast': 'fall 4s linear infinite',
      }
    },
  },
  plugins: [],
}