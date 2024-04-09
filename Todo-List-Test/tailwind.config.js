/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary : "#0D0714",
        secondary : "#1D1825",
        rectangle : "#15101C",
        rectangleFont: "#15101C",
      }
    },
  },
  plugins: [],
}

