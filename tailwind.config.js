/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        "primary-dark": "#0284c7",
        secondary: "#a8d5ff",
        "dark-bg": "#0f172a",
        "darker-bg": "#020617",
        "light-text": "#f1f5f9",
        "muted-text": "#cbd5e1",
      },
    },
  },
  plugins: [],
}
