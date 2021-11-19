module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['16px', '24px'],
        xl: ['16px', '24px'],
      },
      colors: {
        'aa-gray-50': '#FAFAFA',
        'aa-gray-100': '#F5F5F5',
        'aa-gray-200': '#E5E5E5',
        'aa-gray-300': '#D4D4D4',
        'aa-purple-50': '#E7D8FF',
        'aa-purple-500': '#8A64EA',
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
  plugins: [],
}
