/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  // Language options including global variables
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
  },
  // Airbnb base configuration directly included
  {
    files: ['**/*.js'],
    rules: {
      // Include Airbnb base rules manually (you may want to refer to Airbnb's rules)
      // Here's a basic example of some common rules:
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  },
  // Jest configuration directly included
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    rules: {
      // Example Jest rules (adjust as necessary)
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/prefer-to-have-length': 'warn',
    },
  },
];

module.exports = config;

