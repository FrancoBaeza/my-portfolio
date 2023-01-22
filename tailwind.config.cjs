/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-secondary": "#F1962E",
        "base-primary": "#C7F8FF",
        "base-bg": "#164E63",
      },
      fontFamily: {
        mono: ["Mono", "monospace"],
        markPro: ["Regular", "sans-serif"],
        markProBold: ["Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
