/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        exa_blue: {
          light: "#302D82",
          DEFAULT: "#120D47",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
