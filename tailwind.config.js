import flowbite from "flowbite-react/tailwind";
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        'sm-xl': { min: '640px', max: '1536px' },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    daisyui,
  ],
  daisyui: {
    base:false,
    themes: ["light"],  
  },
}
