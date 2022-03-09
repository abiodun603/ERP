/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
}
module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});

module.exports = withPlugins([withCSS, withFonts, withImages]);

module.exports = nextConfig
