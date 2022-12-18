/** @type {import('tailwindcss').Config} */
module.exports = {
  // Set up the files to watch. If we build a larger
  //  project, we will need to add each path.
  content: ["./src/**/*.{html,js}"],
  theme: {},
  plugins: [require("./plugins/openVarient")],
};
