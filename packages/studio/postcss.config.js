/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-nested-ancestors'),
    require('postcss-simple-vars'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
};