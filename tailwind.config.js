// module.exports = {
//   content: [ "./src/**/*.{js,jsx,ts,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         backgroundColor:{
           skin:{
             fill:'var(--color-fill)',
             darkblue: 'var(--color-darkblue)'
           }
         },
         textColor:{
           skin:{
             base : 'var(--color-text-base)'
           }
         }
       },
     
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('@tailwindcss/forms')
     ],
   } 