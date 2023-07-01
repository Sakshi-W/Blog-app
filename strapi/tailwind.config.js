/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "beige-dark": "#f5f5eb",
      },
      colors: {
        brown: {
          dark: '#4A2C20',
        },
        orange: {
          dark: "#9a3412",
        },
      },
    },
  },
  plugins: [],
}
