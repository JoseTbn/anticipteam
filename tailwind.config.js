// module.exports = {
//   content: [ "./src/**/*.{js,jsx,ts,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
  // tailwind.config.js

  const colors = require('tailwindcss/colors')


  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         backgroundImage:{
texture: `url('./assets/sub_text_img.png')`
         },
         colors: {
          'warm-gray': colors.warmGray,
          teal: colors.teal,
        },
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
         },
         opacity: {
          '90': '.90',
        },
        keyframes: {
          scrollX: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          }
        },
        animation: {
          scrollX: 'scrollX 30s linear infinite'
        },
       },
       screens:{
        '2xlx': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xlx': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lgx': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'mdx': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'smx': {'max': '639px'},
        // => @media (max-width: 639px) { ... 

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'smmd': {'min': '640px', 'max': '767px'},
        'mdlg': {'min': '768px', 'max': '1023px'},
        'lgxl': {'min': '1024px', 'max': '1279px'},
        'xl2l': {'min': '1280px', 'max': '1535px'},
        
       }
     
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('@tailwindcss/forms')
     ],
   } 