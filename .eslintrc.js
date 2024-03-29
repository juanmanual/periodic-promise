module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest": true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
  },
};
