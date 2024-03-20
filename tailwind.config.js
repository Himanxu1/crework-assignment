/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'amber-500': '#FAAF3D',
      },
      fontFamily: {
        'red-hat-display': ['Red Hat Display', 'sans-serif'],
      },
      gradientColorStops: theme => ({
        'rgba-250-175-62': 'rgba(250, 175, 62, 1)',
      }),
    },
  },
  plugins: [],
}

