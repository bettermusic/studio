/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      theme: {
        extend: {
            colors: {
                stone: colors.stone,
                sky: colors.sky,
                neutral: colors.neutral,
                gray: colors.gray,
                darkgray: colors.darkgray,
                slate: colors.slate,
            }
        }
    }
    },
  },
  plugins: [],
}
