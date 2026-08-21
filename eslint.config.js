import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier/flat';

export default [
  {
    ignores: ['build/**', 'dist/**', 'coverage/**'],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.webextensions,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Props are documented by the components themselves; this is a 5-component app.
      'react/prop-types': 'off',
    },
  },
  {
    files: ['**/*.test.{js,jsx}', 'src/setupTests.js'],
    languageOptions: {
      globals: globals.vitest,
    },
  },
  {
    files: ['*.config.js', 'commitlint.config.js', '.release-it.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  prettier,
];
