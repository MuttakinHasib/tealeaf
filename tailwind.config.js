module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: {
          50: "#f4f5f6",
          100: "#eaebed",
          200: "#caccd2",
          300: "#aaadb7",
          400: "#6a7081",
          500: "#2a324b",
          600: "#262d44",
          700: "#202638",
          800: "#191e2d",
          900: "#151925",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
