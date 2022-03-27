module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#556EE6',
        "iconblue" : "#50B5FF",
        "blacktwo" : "#171725",
        "blackcom" : '#495057',
        "green" : "#34c38f",
        "ogreen": "rgba(52, 195, 143, 0.2)",
        "ksecondary": "#74788D"
      },
    },
  },
  plugins: [
    // require('tw-elements/dist/plugin')
  ],
}
