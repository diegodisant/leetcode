import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'warn',
  },
  plugins: ['typescript'],
  rules: {
    'import/extensions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
  },
});
