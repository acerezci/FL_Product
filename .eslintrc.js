module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['server/**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'newline-before-return': 'error',
    'object-curly-newline': 'off',
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 'off',
    'max-len': ['error', { code: 140 }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsForRegex: ['^state'] }],
    'react/prop-types': 0,
    'no-param-reassign': 0,
    // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // 'jsx-a11y/click-events-have-key-events': 'off',
    'operator-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
