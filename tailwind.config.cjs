/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'title': '60px'
			},
			padding: {
				'55p': '55px'
			}
		},
		fontFamily: {
		  courier: ['Courier', 'monospace'],
		  /* Add more font families if needed */
		}
	},
	plugins: [],
}
