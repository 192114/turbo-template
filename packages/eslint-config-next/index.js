module.exports = {
  extends: ['next', 'turbo'],
  plugins: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
