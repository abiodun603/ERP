module.exports = {
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0051FF',
        primaryx: 'rgba(0, 81, 255, 0.1)',
        primaryxx: 'rgba(0, 81, 255, 0.2)',
        primarygradient: "linear-gradient(108.96deg, #0051FF 0%, #729EFC 88.62%)",
        kwhite: '#FFFFFF',
        iconblue: '#50B5FF',
        blacktext: '#151515',
        black3: '#8895A7',
        green: '#34c38f',
        ogreen: 'rgba(52, 195, 143, 0.2)',
        ksecondary: '#74788D',
        ksmallbutton: '#EAEAEA',
        kblackCom: '#5F6B7A',
        kwarning: '#F46A6A',
        kred: '#EE174B',
        linkgray: '#B8C4CE',
      },
      fontSize: {
        h3: '18px',

        body4: '13px',
        body5: '15px',
      },
      boxShadow: {
        light: '0px 10px 20px rgba(18, 38, 63, 0.0313726)',
        contact: '0px 5.15592px 19.3347px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        blog: '11.57px',
        radius: '20px',
      },
      backgroundImage: {
        'blog': "url('/assets/image/blog.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
