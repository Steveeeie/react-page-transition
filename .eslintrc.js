module.exports = {
  parser: 'babel-eslint',
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: ['jest', 'import', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/display-name': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'prettier/prettier': 'error'
  }
};
