const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      flowbite: {
        carousel: {
          scrollContainer: {
            base: "flex h-full snap-mandatory overflow-x-scroll scroll-smooth rounded-none", // Custom styles
            snap: "snap-x lg:snap-none rounded-none", // Example modification
          },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
