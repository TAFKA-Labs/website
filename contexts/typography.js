import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Source Code Pro',
    'Helvetica Neue',
    'Helvetica',
    'sans-serif',
  ],
  headerWeight: 'bolder',
  bodyFontFamily: ['Abel', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  bodyColor: 'currentColor',
  googleFonts: [
    {
      name: 'Abel',
      styles: ['400'],
    },
    {
      name: 'Source Code Pro',
      styles: ['400', '900'],
    },
  ],
})

export default typography
