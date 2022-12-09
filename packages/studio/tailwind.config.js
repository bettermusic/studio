/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    colors: {
      white : 'var(--bm-color-white)',
      black : 'var(--bm-color-black)',
      primary: 'var(--bm-color-primary)',
      gray: {
        50: 'var(--bm-gray-50)',
        100: 'var(--bm-gray-100)',
        200: 'var(--bm-gray-200)',
        300: 'var(--bm-gray-300)',
        400: 'var(--bm-gray-400)',
        500: 'var(--bm-gray-500)',
        600: 'var(--bm-gray-600)',
        700: 'var(--bm-gray-700)',
        800: 'var(--bm-gray-800)',
        900: 'var(--bm-gray-900)',
      },
      blue: {
        50: 'var(--bm-blue-50)',
        100: 'var(--bm-blue-100)',
        200: 'var(--bm-blue-200)',
        300: 'var(--bm-blue-300)',
        400: 'var(--bm-blue-400)',
        500: 'var(--bm-blue-500)',
        600: 'var(--bm-blue-600)',
        700: 'var(--bm-blue-700)',
        800: 'var(--bm-blue-800)',
        900: 'var(--bm-blue-900)',
      },
      indigo: {
        50: 'var(--bm-indigo-50)',
        100: 'var(--bm-indigo-100)',
        200: 'var(--bm-indigo-200)',
        300: 'var(--bm-indigo-300)',
        400: 'var(--bm-indigo-400)',
        500: 'var(--bm-indigo-500)',
        600: 'var(--bm-indigo-600)',
        700: 'var(--bm-indigo-700)',
        800: 'var(--bm-indigo-800)',
        900: 'var(--bm-indigo-900)',
      },
      violet: {
        50: 'var(--bm-violet-50)',
        100: 'var(--bm-violet-100)',
        200: 'var(--bm-violet-200)',
        300: 'var(--bm-violet-300)',
        400: 'var(--bm-violet-400)',
        500: 'var(--bm-violet-500)',
        600: 'var(--bm-violet-600)',
        700: 'var(--bm-violet-700)',
        800: 'var(--bm-violet-800)',
        900: 'var(--bm-violet-900)',
      },
      purple: {
        50: 'var(--bm-purple-50)',
        100: 'var(--bm-purple-100)',
        200: 'var(--bm-purple-200)',
        300: 'var(--bm-purple-300)',
        400: 'var(--bm-purple-400)',
        500: 'var(--bm-purple-500)',
        600: 'var(--bm-purple-600)',
        700: 'var(--bm-purple-700)',
        800: 'var(--bm-purple-800)',
        900: 'var(--bm-purple-900)',
      },
      red: {
        50: 'var(--bm-red-50)',
        100: 'var(--bm-red-100)',
        200: 'var(--bm-red-200)',
        300: 'var(--bm-red-300)',
        400: 'var(--bm-red-400)',
        500: 'var(--bm-red-500)',
        600: 'var(--bm-red-600)',
        700: 'var(--bm-red-700)',
        800: 'var(--bm-red-800)',
        900: 'var(--bm-red-900)',
      },
      orange: {
        50: 'var(--bm-orange-50)',
        100: 'var(--bm-orange-100)',
        200: 'var(--bm-orange-200)',
        300: 'var(--bm-orange-300)',
        400: 'var(--bm-orange-400)',
        500: 'var(--bm-orange-500)',
        600: 'var(--bm-orange-600)',
        700: 'var(--bm-orange-700)',
        800: 'var(--bm-orange-800)',
        900: 'var(--bm-orange-900)',
      },
      yellow: {
        50: 'var(--bm-yellow-50)',
        100: 'var(--bm-yellow-100)',
        200: 'var(--bm-yellow-200)',
        300: 'var(--bm-yellow-300)',
        400: 'var(--bm-yellow-400)',
        500: 'var(--bm-yellow-500)',
        600: 'var(--bm-yellow-600)',
        700: 'var(--bm-yellow-700)',
        800: 'var(--bm-yellow-800)',
        900: 'var(--bm-yellow-900)',
      },
      lime: {
        50: 'var(--bm-lime-50)',
        100: 'var(--bm-lime-100)',
        200: 'var(--bm-lime-200)',
        300: 'var(--bm-lime-300)',
        400: 'var(--bm-lime-400)',
        500: 'var(--bm-lime-500)',
        600: 'var(--bm-lime-600)',
        700: 'var(--bm-lime-700)',
        800: 'var(--bm-lime-800)',
        900: 'var(--bm-lime-900)',
      },
      green: {
        50: 'var(--bm-green-50)',
        100: 'var(--bm-green-100)',
        200: 'var(--bm-green-200)',
        300: 'var(--bm-green-300)',
        400: 'var(--bm-green-400)',
        500: 'var(--bm-green-500)',
        600: 'var(--bm-green-600)',
        700: 'var(--bm-green-700)',
        800: 'var(--bm-green-800)',
        900: 'var(--bm-green-900)',
      },
      teal: {
        50: 'var(--bm-teal-50)',
        100: 'var(--bm-teal-100)',
        200: 'var(--bm-teal-200)',
        300: 'var(--bm-teal-300)',
        400: 'var(--bm-teal-400)',
        500: 'var(--bm-teal-500)',
        600: 'var(--bm-teal-600)',
        700: 'var(--bm-teal-700)',
        800: 'var(--bm-teal-800)',
        900: 'var(--bm-teal-900)',
      },
      cyan: {
        50: 'var(--bm-cyan-50)',
        100: 'var(--bm-cyan-100)',
        200: 'var(--bm-cyan-200)',
        300: 'var(--bm-cyan-300)',
        400: 'var(--bm-cyan-400)',
        500: 'var(--bm-cyan-500)',
        600: 'var(--bm-cyan-600)',
        700: 'var(--bm-cyan-700)',
        800: 'var(--bm-cyan-800)',
        900: 'var(--bm-cyan-900)',
      },
    }
  },
  plugins: [],
}
