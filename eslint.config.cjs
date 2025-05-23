/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-commonjs */
const { fixupConfigRules, fixupPluginRules } = require('@eslint/compat')
const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const typescriptEslint = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')
const { defineConfig, globalIgnores } = require('eslint/config')
const cypress = require('eslint-plugin-cypress')
const _import = require('eslint-plugin-import')
const yml = require('eslint-plugin-yml')
const globals = require('globals')
const parser = require('yaml-eslint-parser')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = defineConfig([
  {
    
    ignores: ['.gitignore', '.github/', '.vuepress/public/', '**/*md', '**/*.json', '**/build/', 'cypress/reports/', 'cypress/screenshots/', 'LICENSE', 'node_modules/'],

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },

    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:@eslint-community/eslint-comments/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:security/recommended-legacy',
      ),
    ),

    plugins: {
      cypress,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
    },

    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },

    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      camelcase: 'error',
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'never'],
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        {
          allowWholeFile: true,
        },
      ],
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/no-pause': 'error',
      'import/export': 'error',
      'import/no-deprecated': 'error',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-unused-modules': 'warn',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      'import/no-amd': 'error',
      'import/no-commonjs': 'error',
      'import/no-import-module-exports': 'error',
      'import/no-nodejs-modules': 'off',
      'import/unambiguous': 'off',
      'import/default': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-cycle': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-internal-modules': 'off',
      'import/no-relative-packages': 'error',
      'import/no-relative-parent-imports': [
        'error',
        {
          ignore: ['#[src,root,components,pages,assets,layouts,stores,plugins,context,types]/*'],
        },
      ],
      'import/no-self-import': 'error',
      'import/no-unresolved': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/consistent-type-specifier-style': 'error',
      'import/exports-last': 'off',
      'import/extensions': [
        'error',
        'never',
      ],
      'import/first': 'error',
      'import/group-exports': 'off',
      'import/newline-after-import': 'error',
      'import/no-anonymous-default-export': 'off',
      'import/no-default-export': 'off',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'error',

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          distinctGroup: true,
        },
      ],
      'import/prefer-default-export': 'off',
      // "promise/catch-or-return": "error",
      // "promise/no-return-wrap": "error",
      // "promise/param-names": "error",
      // "promise/always-return": "error",
      // "promise/no-native": "off",
      // "promise/no-nesting": "warn",
      // "promise/no-promise-in-callback": "warn",
      // "promise/no-callback-in-promise": "warn",
      // "promise/avoid-new": "warn",
      // "promise/no-new-statics": "error",
      // "promise/no-return-in-finally": "warn",
      // "promise/valid-params": "warn",
      // "promise/prefer-await-to-callbacks": "error",
      // "promise/no-multiple-resolved": "error",
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', '**/tsconfig.json'],
        parser: '@typescript-eslint/parser',
      },
    },

    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },

    extends: fixupConfigRules(
      compat.extends(
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
      ),
    ),

    rules: {
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          ignoreVoid: true,
        },
      ],

      'no-void': [
        'error',
        {
          allowAsStatement: true,
        },
      ],
    },
  },
  {
    files: ['**/*.yaml', '**/*.yml'],

    languageOptions: {
      parser: parser,
    },

    plugins: {
      yml,
    },

    extends: compat.extends('plugin:yml/prettier'),
  },
  globalIgnores([
    '.gitignore',
    '.github/',
    '.vuepress/public/',
    '**/*md',
    '**/*.json',
    '**/build/',
    'cypress/reports/',
    'cypress/screenshots/',
    'LICENSE',
    'node_modules/',
  ]),
])
