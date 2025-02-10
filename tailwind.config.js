const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
