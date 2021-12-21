module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "992px",
        xl: "1240px"
      },
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "16px",
        lg: "0",
        xl: "0"
      }
    },
    extend: {
      colors: {
        'aa-gray-50': '#FAFAFA',
        'aa-gray-100': '#F5F5F5',
        'aa-gray-200': '#E5E5E5',
        'aa-gray-300': '#D4D4D4',
        'aa-gray-400': '#A3A3A3',
        'aa-gray-500': '#737373',
        'aa-gray-600': '#525252',
        'aa-gray-700': '#404040',
        'aa-gray-800': '#262626',
        'aa-gray-900': '#171717',
        'aa-purple-50': '#E7D8FF',
        'aa-purple-400': '#AB8CF7',
        'aa-purple-500': '#8A64EA',
        'aa-purple-600': '#7045DE',
        'aa-green-500': '#10B981',
        'aa-red-500': '#EF4444',
        'aa-yellow-400': '#FBBF24',
        'aa-red': '#A22E2E',
      },
      spacing: {
        'aa-1/4': '23.79%',
        'aa-1/4-gap': '1.6129%',
      },
      fontFamily: {
        sans: ["Spoqa Han Sans Neo", "sans-serif"],
        serif: ["Noto Serif KR", "serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
