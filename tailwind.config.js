

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'phone': {'max': '767px'},
      'tablet': {'max': '1024px'},
    },
    extend: {
      colors: {
        lightblue: '#00B3E3',
        darkblue: '#002f6d',
      },
      backgroundImage: (theme) => ({
        dunes: "url('/images/home/new-home-banner.jpg')",
      }),
    },
  },
 
  plugins: [],
}
