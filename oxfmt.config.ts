import { defineConfig } from 'oxfmt';

export default defineConfig({
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  objectWrap: 'preserve',
  endOfLine: 'lf',
  arrowParens: 'always',
  sortImports: true,
  sortPackageJson: true,
  ignorePatterns: [
    'coverage/**',
    'node_modules/**',
  ],
});
