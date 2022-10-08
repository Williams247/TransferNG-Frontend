/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          none: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          "2xl": "1200px",
        },
        padding: "4rem",
      },
    },
  },
  plugins: [],
}
