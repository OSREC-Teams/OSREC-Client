const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'import/no-named-as-default': 0,
  },
  settings: {
    'import/resolver': {
      node: { moduleDirectory: ['node_modules', 'src/'] },
    },
  },
};
