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
      }
    },
  },
  plugins: [],
}

