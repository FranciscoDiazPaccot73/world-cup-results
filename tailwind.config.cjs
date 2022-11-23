const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    fontSize: true,
  },
};