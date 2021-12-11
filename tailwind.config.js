/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */

const config = {
  purge: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};

module.exports = config;
