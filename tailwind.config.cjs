/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#FFFFFF",
          secondary: "#F8FAFC",
          light: "#FFFFFF",
          accent: "#38BDF8",
          teal: "#14B8A6",
          gray: "#6B7280",
          gold: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(56,189,248,0.25)",
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        heroGradient: "linear-gradient(135deg,#FFFFFF 0%,#F8FAFC 50%,#E5E7EB 100%)",
        accentGradient: "linear-gradient(90deg,#38BDF8,#14B8A6)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulseSlow: "pulse 3s infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
}
