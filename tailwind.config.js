/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["PT Sans Caption", "sans-serif"],
      serif: ["Rubik", "serif"],
    },
    extend: {
      colors: {
        main: "#EFEDED",
        green: "#02B8B3",
        gray: "#BBBABA",
        "useritem-gray": "#B6B6B6",
        "button-cancel": "#D4D4D4",
        "button-delete": "#F26969",
        "button-save": "#0281B8",
        "button-update": "#02B8B3",
        "button-new": "#CFDE6F",
        "input-gray": "#E3E3E3",
        "input-placeholder": "#B7B7B7",
      },
      boxShadow: {
        "user-item": "0px 0px 10px rgba(2, 184, 151, 0.25)",
        "user-form": "0px 0px 6px rgba(2, 184, 151, 0.25)",
      },
    },
  },
  plugins: [],
};
