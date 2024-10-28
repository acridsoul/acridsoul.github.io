/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		fontFamily: {
		  custom: ['Mirage', 'sans-serif'],
		  two: ['Clock', 'sans-serif'],
		},
	  },
	},
	plugins: [require("@tailwindcss/typography")],
  };
  