module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-standard',
    '.eslintrc-auto-import.json',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': 'off',
    // https://eslint.org/docs/latest/rules/no-unused-vars#options
    '@typescript-eslint/no-unused-vars': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'comma-dangle': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline',
      },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        allow: ['methods'],
      },
    ],
    'vue/block-spacing': 'warn',
    'vue/camelcase': 'error',
    'vue/eqeqeq': 'error',
    'vue/match-component-file-name': 'error',
    'vue/component-name-in-template-casing': 'warn',
    'vue/no-unused-components':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  parserOptions: {
    ecmaVersion: 13,
  },
}
