/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#ffbe0b',
        mydark :'#202020',
        bglight :'#f8f9fa',
      },
      screens:{
        '2xl' : '1320px'
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        goyang: "goyang 1s ease-in-out infinite",
        "scrollup": "scrollup 2s ease-in-out infinite",
        "naik-turun": "naikTurun 1s ease-in-out",
      },
      keyframes: {
        goyang: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%,70%": { transform: "translateY(-15px)" },
          "70%": { transform: "translateY(15px)" },
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
      },
    },
  },
  plugins: [],
}

