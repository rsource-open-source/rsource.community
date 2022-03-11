module.exports = {
  content: ["./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        slate: {
          1000: "#0b101e",
          1100: "#070a13",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
