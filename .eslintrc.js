module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'prettier',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'node_modules',
    '**/*Mock*.js',
    'HTML',
    'build',
    'coverage',
    '.storybook',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'sonarjs'],
  root: true,
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
      },
    ],
    // disable trailing comma error for Eslint. Let prettier/prettier rules handle this.
    'comma-dangle': [
      'error',
      {
        arrays: 'ignore',
        objects: 'ignore',
        imports: 'ignore',
        exports: 'ignore',
        functions: 'ignore',
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { consistent: true },
      },
    ],
    'import/extensions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'operator-linebreak': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    'react/no-unused-prop-types': 0,
    'react/forbid-prop-types': [1, { forbid: ['any'] }],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/destructuring-assignment': 0,
    'no-underscore-dangle': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // turning of eslint no-shadow and turning on for typescript
    // because of an error with no-shadow and enums
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@common', './src/Common']],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
