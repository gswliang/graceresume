module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        flip: {
          "0%,80%": {
            transform: "rotateY(360deg)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        flip: "flip 1s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Lato", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
