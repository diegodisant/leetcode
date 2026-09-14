import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'warn',
  },
  plugins: ['typescript'],
  rules: {
    'no-var': 'error',
    'no-alert': 'error',
    'max-lines': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    'import/extensions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
  },
  ignorePatterns: [
    'coverage/**',
    'node_modules/**',
  ],
});
