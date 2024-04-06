/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // myblack: "#130f0f",
        // mytheme: "#082be7",
        myblack: "#ffffff",
        // mytheme: "#28e98c",
        mytheme: "#3E8DE3",
        mygrey: "#D9D9D9",
        // mygrey: "#D9D9D9",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
