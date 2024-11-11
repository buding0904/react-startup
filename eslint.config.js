import tsEslint from 'typescript-eslint'
import react from 'eslint-plugin-react'

export default [
  ...tsEslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        WxLogin: 'readonly',
        _global: 'readonly',
        _db: 'readonly',
        _app: 'readonly',
        _store: 'readonly',
        _message: 'readonly',
        _t: 'readonly',
        _openDialog: 'readonly',
        _confirm: 'readonly',
        _openInputDialog: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'never'],
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'object-curly-spacing': ['error', 'always'],

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
    // ... others are omitted for brevity
  },
]
