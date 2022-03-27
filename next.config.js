/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

const withTM = require('next-transpile-modules')([
  '@mui/material',
  "@mui/system"
]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias= {
      ...config.resolve.alias,
      '@mui/styled-engine' : "@mui/styled-engine-sc",
    };
    return config;
  }
})
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
