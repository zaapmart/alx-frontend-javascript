/** @type {import('eslint').Linter.FlatConfig} */
const config = [
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
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/prefer-to-have-length': 'warn',
    },
  },
];

// Use CommonJS export
module.exports = config;
