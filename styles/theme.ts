import { theme, DefaultTheme } from '@chakra-ui/core'

const breakpoints = ["360px", "768px", "1024px", "1440px"];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '4px',
  },
  fontSizes: {
    ...theme.fontSizes,
    '5xl': '40px',
    '6xl': '60px'
  },
  colors: {
    ...theme.colors,
    orange: {
      ...theme.colors.orange,
      500: "#FBA442"
    }
  },
  breakpoints
}

export default customTheme