import nextPlugin from '@next/eslint-plugin-next';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  {
    ignores: [
      '.next/**',
      '.yarn/**',
      'node_modules/**',
      'coverage/**',
      'dist/**',
      'out/**',
      'public/**',
      '*.js',
      '*.cjs',
      '*.mjs',
      '*.ts',
      '*.jsx',
      '*.tsx',
    ],
  },
  {
    files: ['app/**/*.{js.jsx}', 'src/**/*.{js.jsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: ['app/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
    },
  },
]);
