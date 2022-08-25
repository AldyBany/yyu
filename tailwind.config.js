/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat':'Montserrat'
      },
      colors:{
        // 'blue':'#111D4A',
        'blue':'#003253',
        "orange":'#ee8123',
        'white':'#E6E8E6',
        'black':'#231F20',
        'gray':'#7C7C7C'
      }
    },
  },
   variants: {
textColor: ['responsive', 'hover', 'focus', 'group-hover'],
 },
  plugins: [],
}
