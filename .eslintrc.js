module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    browser: true,
    webextensions: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
