/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myblack: "#130f0f",
        mytheme: "#082be7",
        mygrey: "#D9D9D9",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
