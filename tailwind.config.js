/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B0B0B",
          secondary: "#111827",
          light: "#F8FAFC",
          accent: "#38BDF8",
          teal: "#14B8A6",
          gray: "#D1D5DB",
          gold: "#F59E0B",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Oswald", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 30px rgba(56,189,248,0.45)",
        card: "0 15px 40px rgba(0,0,0,0.35)",
      },

      backgroundImage: {
        heroGradient:
          "linear-gradient(135deg,#0B0B0B 0%,#111827 40%,#0F172A 100%)",
        accentGradient:
          "linear-gradient(90deg,#38BDF8,#14B8A6)",
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        pulseSlow: "pulse 3s infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
    },
  },

  plugins: [],
};
