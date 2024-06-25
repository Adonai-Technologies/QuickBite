/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
	  extend: {
		color:{
			primary:"#ff8c52",
			grey1:"#43484d",
			grey2:"#5e6977",
			grey3:"#86939e",
			grey4:"#bdc6cf",
			grey5:"#e1e8ee",
			grey6:"#fafbfc",
			grey7:"#ffffff",
			CardComponent:"#86939e",
			Cardbackground:"white",
			statusbar:"#ff8c52",
		}
	  },
	},
	plugins: [],
  }