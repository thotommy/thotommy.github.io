/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'title': '60px'
			},
			padding: {
				'105p': '105px'
			},
			minHeight: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
			},
			colors: {
				accentPurple: '#bc8add',
				accentGreen: '#94af6f',
				accentBlue: '#67a7c1',
				accentYellow: '#bf9956'
			},
		},
		fontFamily: {
		  courier: ['Courier', 'monospace'],
		  /* Add more font families if needed */
		}
	},
	plugins: [],
}
