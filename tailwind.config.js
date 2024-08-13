/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollbarWidth: {
        thin: 'thin',
        none: 'none',
      },
      scrollbarColor: {
        DEFAULT: 'rgba(107, 114, 128, 0.5) rgba(229, 231, 235, 0.5)',
      },
    },
  },
  plugins: [],
}
