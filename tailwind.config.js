import { Flowbite } from "flowbite-react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    

  },
  plugins: [
    Flowbite.plugin(),
  ],
}
