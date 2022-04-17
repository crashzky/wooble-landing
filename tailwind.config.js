module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./sections/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'tt-travels': ['TT Travels'],
			},
			fontSize: {
				'4.5xl': '46px',
			},
			colors: {
				'primary': '#8166EF',
				'black': '#242424',
				'gray': '#C5C5C5',
			},
			padding: {
				'18': '70px',
				'30': '120px',
			},
			boxShadow: {
				'main': '5px 5px 25px rgba(194, 194, 194, 0.15);',
			},
		},
	},
	plugins: [],
};
