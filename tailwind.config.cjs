/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-secondary": "#F1962E",
        "400-secondary": "#C57200",
        
        "base-bg": "#164E63",
        "900-primary": "#E3FFEE",
        "800-primary": "#DCFFF1",
        "700-primary": "#D5FFF6",
        "600-primary": "#CEFFFD",
        "base-primary": "#C7F8FF",
        "400-primary": "#ADCFDF",
        "300-primary": "#94A8BF",
        "200-primary": "#7B849F",
        "100-primary": "#626280",
      },
      fontFamily: {
        mono: ["Mono", "monospace"],
        markPro: ["Regular", "sans-serif"],
        markProBold: ["Bold", "sans-serif"],
      },
      backgroundImage: {
        "turnera" : "url('/projectPhotos/turnera.png')",
      },
    },
  },
  plugins: [],
};
