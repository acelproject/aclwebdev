/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#ffbe0b",
        mydark: "#202020",
        bglight: "#f8f9fa",
        secDark: "#343a40",
      },
      fontFamily: {
        viga: ["Viga"],
      },
      screens: {
        "2xl": "1320px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        goyang: "goyang 1s ease-in-out",
        scrollup: "scrollup 1s ease-in-out infinite",
        "naik-turun": "naikTurun 1s ease-in-out",
        progress : "progress"
      },
      keyframes: {
        goyang: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%,70%": { transform: "translateY(10px)" },
          "70%": { transform: "translateY(-10px)" },
          "50%": { transform: "rotate(3deg)" },
        },
        scrollup: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%,70%": { transform: "translateY(5px)" },
          "70%": { transform: "translateY(-5px)" },
          "50%": { transform: "rotate(3deg)" },
        },
        naikTurun: {
          "0%": { transform: "translateY(-300px)" },
          "100%": { transform: "translateY(0)" },
        },
        progress: {
          '0%' : {transform: "scaleX(0)"},
          '100%' : {transform: "scaleX(1)"}
        }
      },
    },
  },
  plugins: [],
};
