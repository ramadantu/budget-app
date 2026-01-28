const PACKAGES_WITH_NESTED_IMPORTS = [
  'prisma',
  'next',
  'dotenv',
  'next-auth',
  'react-datepicker',
].map((m) => `${m}/**`)

const MODULE_CONTAINERS = [
  '.eslint',
  'images',
  'modules',
  'controllers',
  'db',
  'styles',
  'css',
  'routes',
  'pages',
  'components',
  'context',
  'layouts',
  'utils',
  'icons',
  'eslint-config',
].map((c) => `**/${c}/*`)

const parentImportOrder = [...new Array(15)]
  .map((_, i) => ({
    // ../** ../../**
    pattern: `${[...new Array(i + 1)].map(() => '..').join('/')}/**`,
    group: 'parent',
    position: 'before',
  }))
  .reverse()

const importOrderConfig = {
  groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
  'newlines-between': 'always',
  pathGroups: [
    ...parentImportOrder,
    {
      pattern: 'react',
      group: 'builtin',
      position: 'before',
    },
  ],
  pathGroupsExcludedImportTypes: ['react'],
}

export const overrides = [
  {
    files: ['next.config.js'],
    rules: {
      'import/no-commonjs': 0,
    },
  },
]

export const rules = {
  'import/no-unresolved': 0,
  'import/named': 1,
  'import/default': 2,
  'import/namespace': 2,

  'import/no-absolute-path': 2,
  'import/no-dynamic-require': 2,
  'import/no-internal-modules': [
    'error',
    {
      allow: [...MODULE_CONTAINERS, ...PACKAGES_WITH_NESTED_IMPORTS],
    },
  ],
  'import/no-webpack-loader-syntax': 2,
  'import/no-self-import': 2,
  'import/no-cycle': 1,
  'import/no-useless-path-segments': [
    'error',
    {
      noUselessIndex: true,
      commonjs: true,
    },
  ],

  'import/no-relative-parent-imports': 0,
  'import/no-relative-packages': 0,

  'import/export': 1,
  'import/no-extraneous-dependencies': 2,

  'import/unambiguous': 1,
  'import/no-commonjs': 1,

  'import/first': 2,
  'import/order': ['error', importOrderConfig],
  'import/newline-after-import': 1,
  'import/prefer-default-export': 0,
}
