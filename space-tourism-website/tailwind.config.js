/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./pages/**/*.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      // fontFamily: {
      //   barlow: ['"Barlow"', "sans-serif"],
      //   barlowCondensed: ['"Barlow Condensed"', "sans-serif"],
      //   bellefair: ['"Bellefair"', "serif"],
      // },
    },
  },
  plugins: [],
};
