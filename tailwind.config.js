/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'klivio-blue': '#152237',          
        'klivio-grey': '#F5F5F5',          
        'klivio-green': '#44DD8A',         
        'klivio-cyan': '#15B7E2',          
        'klivio-yellow': '#FFC107',        
        'klivio-text-gray': '#5A6D88',     
        'klivio-dark-input': '#0F1E33',    
        'klivio-footer-dark': '#1A2536',   
        'klivio-star-unchecked': '#FFC700', 
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },

      spacing: {
        '105rem': '105rem', 
        '28rem': '28rem', 
        '31.25rem': '31.25rem',
      },

      backgroundImage: {
        'linear-to-r': 'linear-gradient(90.01deg, var(--tw-gradient-stops))',
        'linear-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      },
      // Breakpoints
      screens: {
        'md': '48rem', 
        'lg': '64rem', 
        'xl': '80rem', 
      }
    },
  },
  plugins: [],
}