/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSizeP:{
pl:'18px'
    },
    
  
    extend: {
      colors:{
        softblue:'hsl(215, 51%, 70%)',
        cyan:'hsl(178, 100%, 50%)',
        veryDarkBlue1:'hsl(217, 54%, 11%)',
        veryDarkBlue2:' hsl(216, 50%, 16%)',
        veryDarkBlue3:' hsl(215, 32%, 27%)',
        white:'hsl(0, 0%, 100%)'

      },
    backgroundImage:{
'eye-img':'url(/src/image/icon-view.svg)'
    }
    },
  },
  plugins: [],
}








// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch









// - Very dark blue (main BG): 
// - Very dark blue (card BG):
// - Very dark blue (line):
