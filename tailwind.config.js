/** @type {import('tailwindcss').Config} */

import tailwindColors from './src/config/tailwindColors';



module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,mdx}',
    './src/components/**/*.{js,jsx,,mdx}',
    './src/app/**/*.{js,jsx,,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: tailwindColors,
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '0px',
      },
    },
    extend: {
      backgroundImage: {
        'hero-banner': "url('/images/hero-banner.svg')",
        'hero-banner-mobile': "url('/images/hero-banner-mobile.svg')",
        'primary-gradient': 'linear-gradient(259.9deg, #00BABA -6.71%, #002437 161.27%)',
        'shadow-gradient': 'linear-gradient(70deg,rgba(23, 164, 162, 0.814) 20%,rgba(45, 254, 244, 0.109) 110%)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        progress: {
          '0%': {
            transform: 'scaleX(0) translateY(2.5px)',
          },
          '100%': {
            transform: 'scaleX(1) translateY(2.5px)'
          }
        }

      },
      animation: {
        'fade-in': 'fadeIn 0.3s linear forwards',
        'progress': 'progress forwards 2s linear'
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '992px',
          },
          '@screen xl': {
            maxWidth: '1184px',
          },
        }
      })
    }
  ],
}
