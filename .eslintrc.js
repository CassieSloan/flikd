module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended',
    'plugin:sort/recommended',
    'next/core-web-vitals'
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsdoc', 'sort'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    // ★ 🎀 jsdoc 🎀 ★
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
        },
        publicOnly: {
          esm: true,
          cjs: true,
          window: true,
        },
      },
    ],
    'jsdoc/require-param': 'off', //ts handles
    'jsdoc/require-param-type': 'off', //ts handles
    'jsdoc/require-returns': 'off', //ts handles
    'jsdoc/require-description': 'error',
    'jsdoc/require-description-complete-sentence': 'error',
    // ★ 🎀 typescript 🎀 ★
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off', //ts handles
    '@typescript-eslint/explicit-module-boundary-types': 'off', //ts handles
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': true,
        'ts-ignore': true,
        'ts-nocheck': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: ['memberLike', 'parameter'],
        format: null,
      },
    ],
    // ★ 🎀 code style 🎀 ★
    "prettier/prettier": ["error"],
    'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 0 }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-case-declarations': 'error',
    'no-fallthrough': 'error',
    'prefer-rest-params': 'error',
    'no-useless-escape': 'error',
    'eqeqeq': 'error',
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'eol-last': ["error", "always"],
    'no-trailing-spaces': "error",
    'no-irregular-whitespace': "error",
    // ★ 🎀 imports 🎀 ★
    "import/newline-after-import": ["error", { "count": 1, "considerComments": true }],
    'import/namespace': ['error', { allowComputed: true }],
    'import/named': 'error',
    'import/default': 'error',
    'import/no-named-as-default': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    // ★ 🎀 sort 🎀 ★
    'sort/imports': 'warn',
    'sort/import-members': 'warn',
    'sort/export-members': 'warn',
    'sort/object-properties': 'warn',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
