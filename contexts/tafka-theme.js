import { base } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

const theme = deepMerge(base, {
  global: {
    colors: {
      brand: '#3b5266',
    },
    font: {
      family: 'Abel',
    },
  },
  anchor: {
    color: { dark: 'accent-1', light: 'neutral-3' },
    fontWeight: 400,
    textDecoration: 'underline',
  },
  button: {},
  formField: {
    extend: () => 'label { font-family: SourceCodePro; margin-left: 0; };',
  },
  heading: {
    font: {
      family: 'SourceCodePro',
    },
  },
  paragraph: {
    extend: () => 'max-width: unset;',
  },
})

export default theme
