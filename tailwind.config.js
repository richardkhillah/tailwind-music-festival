/** @type {import('tailwindcss').Config} */
module.exports = {
  // Set up the files to watch. If we build a larger
  //  project, we will need to add each path.
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)"
          },
          "50%": {
            transform: "scaleY(1.5)"
          }
        }
      },
      // "wavey" - references keyframe definition above, 
      // "1000ms" - duration for one iteration of animation
      // "linear" - type of animation 
      // "infinite" - number of times to run keyframe
      animation: {
        wavey: "wavey 1000ms linear infinite",
      }
    }
  },
  plugins: [
    require("./plugins/openVarient"),
    require("./plugins/animationDelay"),
  ],
};
