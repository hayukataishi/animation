/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
			},
            colors: {
                // シンプルでモダンなパレット
                base: '#f8f9fa',
                surface: '#ffffff',
                primary: '#2d3436',
                secondary: '#636e72',
                accent: '#0984e3',
            }
		},
	},
	plugins: [],
}
