/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'fucsia': 'var(--fucsia)',
				'violet': 'var(--violet)',
			},
			boxShadow: {
				'black': '0 0 .625em #000',
				'gray': '0 0 .625em #ccc',
				'card': '1.5em 1.5em 3em #270213, -1.5em -1.5em 3em #040e26'
			},
			dropShadow: {
				'x': '0 0 .625em #c4c4c4',
			},
		},
	},
	plugins: [],
}
