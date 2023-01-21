/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Mono", "monospace"],
        markPro: ["Regular", "sans-serif"],
        markProBold: ["Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
