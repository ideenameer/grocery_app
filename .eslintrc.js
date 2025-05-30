module.exports = {
    root: true,
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-native/all',
      'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  