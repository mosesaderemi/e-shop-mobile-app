/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            poppins: ["Poppins-Regular"],
            "poppins-bold": ["Poppins-Bold"],
            "poppins-semibold": ["Poppins-SemiBold"],
            "poppins-medium": ["Poppins-Medium"],
            railway: ["Railway"],
            "railway-bold": ["Railway-Bold"],
            // fallback for android
            inter: ["Inter-Regular"],
            "inter-bold": ["Inter-Bold"],
            "inter-semibold": ["Inter-SemiBold"],
            "inter-medium": ["Inter-Medium"],
        },
    },
  },
  plugins: [],
}