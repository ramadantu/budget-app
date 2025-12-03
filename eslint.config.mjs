import { defineConfig, globalIgnores } from 'eslint/config'

import defaultProjectConfig from '@budget-app/eslint-config/default.js'

export default defineConfig([
  ...defaultProjectConfig,
  globalIgnores([
    '**/node_modules/',
    '**/build/',

    '**/.next/',

    '**/*.css',
    '**/*.json',

    'apps/web/next.config.js',
    'apps/web/next.redirects.js',
    'apps/web/next-env.d.ts',
  ]),
])
