module.exports = {
  content: ["./src/content/website-showcases/maisonEmber.ts"],
  theme: {
    extend: {
      colors: {
        base: "#0a0a0a",
        surface: "#121212",
        surfaceLighter: "#1a1a1a",
        ember: "#c45a1d",
        emberLight: "#e07a3e",
        textPrimary: "#f5f5f5",
        textSecondary: "#a3a3a3",
        textMuted: "#666666",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/website-showcases/assets/maison-ember/hero.jpg')",
        "private-dining": "url('/website-showcases/assets/maison-ember/private-dining.jpg')",
      },
    },
  },
  plugins: [],
};
