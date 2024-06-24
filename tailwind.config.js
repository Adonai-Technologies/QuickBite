/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
	  extend: {
		color:{
			'primary':'#FF6366',
			'primaryLight':'#FFA5A9',
			'primaryDark':'#FF3A44',
			'gray':'#f6f6f6',
			'grayLight':'#f0f0f0',
			'grayDark':'#9e9e9e',
			
		}
	  },
	},
	plugins: [],
  }