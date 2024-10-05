module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true // Enables Node.js global variables and Node.js scoping
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module' // Change this to "module" for ES module support
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-console': 'off', // Optional: Allows console statements
    'no-unused-vars': 'warn' // Optional: Warns for unused variables
  }
}
