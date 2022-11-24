/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-nested-ancestors'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
};