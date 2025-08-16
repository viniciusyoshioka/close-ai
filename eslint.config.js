import { configs } from '@vinicius1313/eslint-config'


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: '.',
        projectService: {
          allowDefaultProject: [
            'babel.config.js',
            'eslint.config.js',
            'index.js',
            'metro.config.js',
          ],
        },
      },
    },
  },
]
