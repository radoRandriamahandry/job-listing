module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        neutral: {
          bg: "hsl(180, 52%, 96%)",
          light: "hsl(180, 31%, 95%)",
          dark: "hsl(180, 8%, 52%)",
          darker: "hsl(180, 14%, 20%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
