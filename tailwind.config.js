/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",        // page base
        panel: "#101010",      // raised surface
        surface: "#161616",    // cards
        hairline: "#242424",   // borders
        muted: "#8A8A8A",      // secondary text
        lime: "#CCFF00",       // primary accent
        limeDim: "#A8D400",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        shell: "1440px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.15" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        menuItemUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        menuItemRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
        fadeIn: "fadeIn 0.6s ease-out both",
        scaleIn: "scaleIn 0.6s ease-out both",
        slideInLeft: "slideInLeft 0.6s ease-out both",
        slideUp: "slideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
        slideInRight: "slideInRight 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
        menuItemUp: "menuItemUp 0.4s ease-out both",
        menuItemRight: "menuItemRight 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
