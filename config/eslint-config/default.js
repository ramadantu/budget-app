import tseslint from 'typescript-eslint'
import problems from 'eslint-config-problems'
import react from 'eslint-plugin-react'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'
import reactHooks from 'eslint-plugin-react-hooks'
import sonarjs from 'eslint-plugin-sonarjs'

import sonarRules from './sonar.js'
import { rules as importRules, overrides as importOverrides } from './import.js'

const FILES = ['**/*.{js,jsx,ts,tsx}']

const config = [
  problems,
  ...tseslint.config({
    files: FILES,
    extends: [tseslint.configs.recommended],
    plugins: {
      prettier,
      sonarjs,
      import: importPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      'import/internal-regex': '^@budget-app/',
      'import/ignore': ['node_modules'],
      'import/resolver': {
        node: { extensions: ['.ts', '.tsx'] },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': ['warn', { fixToUnknown: true }],
      '@typescript-eslint/no-use-before-define': 1,
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/ban-ts-comment': 1,
      ...importRules,
      'no-useless-constructor': 0,
      strict: 0,
      'no-use-before-define': 0,
      'no-unused-vars': 0,
      'no-undef': 'off',
      'no-console': 0,

      'array-callback-return': ['error', { allowImplicit: true }],
      'no-promise-executor-return': 0,

      ...prettier.configs.recommended.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto' }],

      ...sonarRules,
    },
  }),
  ...importOverrides,
  // --------------
  {
    files: FILES,
    ...react.configs.flat.recommended,
    plugins: {
      ...react.configs.flat.recommended.plugins,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': 'off',
      'react-hooks/rules-of-hooks': 1,
      'react/display-name': 0,
      'react/prop-types': 0,
    },
  },
]

export default config
