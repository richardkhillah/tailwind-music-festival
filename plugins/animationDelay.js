const plugin = require("tailwindcss/plugin")

// Use of matchUtiilities allows class naming like: animation-delay-100 and animation-delay-[150ms]
const animationDelay = plugin(
    function({ matchUtilities, theme }) {
        matchUtilities(
            {
                // Dynamic utility class:
                // define the class-name we want to use. value is the dynamic quality
                "animation-delay": (value) => {
                    return { animationDelay: value, };
                }
            }, 
            {
                values: theme("animationDelay"),
            }
        );
    },
    // Default classes. Need to destructure theme (e.g., ", theme")
    {
        theme: {
            animationDelay: {
                // default utility classes for animation delay
                100: "100ms",
                200: "200ms",
                300: "300ms",
                400: "400ms",
                500: "500ms",
                600: "600ms",
                700: "700ms",
                800: "800ms",
                900: "900ms",
                1000: "1000ms",
            },
        },
    }
);

module.exports = animationDelay;