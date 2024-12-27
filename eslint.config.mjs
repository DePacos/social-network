import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import("eslint").Linter.FlatConfig[]} */

export default tseslint.config(
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['node_modules/', 'dist'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      perfectionist: eslintPluginPerfectionist,
      prettier: eslintPluginPrettier,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      import: eslintPluginImport,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...eslintPluginPrettier.configs.recommended.rules,

      'prefer-const': 'error',
      'react/void-dom-elements-no-children': ['error'],
      'react/jsx-curly-brace-presence': [
        'error',
        { children: 'ignore', propElementValues: 'always', props: 'always' },
      ],
      'react/jsx-boolean-value': ['error'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
        {
          blankLine: 'any',
          next: ['const', 'let', 'var'],
          prev: ['const', 'let', 'var'],
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'import/extensions': [
        'error',
        { css: 'always', json: 'always', scss: 'always', svg: 'always' },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {
              react: 'react',
            },
            value: {
              react: ['react', 'react-*'],
            },
          },
          groups: [
            'type',
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            'side-effect',
            'style',
          ],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'alphabetical',
        },
      ],
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['src'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
)
