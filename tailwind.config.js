/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        segoe: ['"Segoe UI"', 'sans-serif'],
      },
      keyframes: {
        rotateIn: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        rotateIn: 'rotateIn 0.3s ease-in-out forwards',
        rotateOut: 'rotateOut 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
