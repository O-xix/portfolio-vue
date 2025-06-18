module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-standard',
    '@vue/eslint-config-prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
