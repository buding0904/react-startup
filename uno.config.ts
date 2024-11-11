import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {},
  preflights: [
    {
      getCSS: ({ theme }) => {
        const generateColorVariables = (obj, prefix = '') => {
          let cssVariables = ''
          for (const [key, value] of Object.entries(obj)) {
            if (key === 'DEFAULT') {
              cssVariables += `  --${prefix}: ${value};\n`
            } else if (typeof value === 'string') {
              cssVariables += `  --${prefix}-${key}: ${value};\n`
            } else if (typeof value === 'object') {
              cssVariables += generateColorVariables(value, `${prefix}${key}`)
            }
          }
          return cssVariables
        }

        return `:root {\n${generateColorVariables(theme.colors)}}`
      },
    },
  ],
})
