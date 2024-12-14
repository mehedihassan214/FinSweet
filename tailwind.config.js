import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:'1277px'
      },
      fontFamily:{
        pop: ["Poppins", "sans-serif"]
      },
      colors: {
        'border_rgb': 'rgba(244, 246, 252, 0.20)',
        'banner_para': 'rgb(255, 255, 255, 0.7 )',
        'work_para': 'rgb(40 41 56 0.7)'
      },
      backgroundColor:{
        'custom_gradiant':"rgba(28, 30, 83, 0.884)" 
      }
    },
  },
  plugins: [],
}