/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        hover:
          "linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #FFA84E 100%)",
      },
      colors: {
        "#172339": "#172339",
        "#49566D": "#49566D",
        "#F3EDE7": "#F3EDE7",
        "#FAF8F6": "#FAF8F6",
        "#A060FF": "#A060FF",
        "#CB30E3": "#CB30E3",
        "#FFA84E": "#FFA84E",
      },
    },
  },
  plugins: [],
};
