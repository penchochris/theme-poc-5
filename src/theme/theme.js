import { createTheme, colors } from "@mui/material"

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 24px",
        },
      },
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${colors.blue[500]}`,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${colors.red[500]}`,
          },
        },
      ],
    }
  },
  palette: {
    banana: {
      dark: colors.amber[900],
      main: colors.amber[700],
      light: colors.amber[500],
    },
    primary: {
      dark: colors.blue[900],
      main: colors.blue[700],
      light: colors.blue[500],
    },
    secondary: {
      dark: colors.deepPurple[900],
      main: colors.deepPurple[500],
      light: colors.deepPurple[300],
    },
    success: {
      dark: colors.green[700],
      main: colors.green[500],
      light: colors.green[300],
    },
    info: {
      dark: colors.lightBlue[700],
      main: colors.lightBlue[500],
      light: colors.lightBlue[300],
    },
    warning: {
      dark: colors.amber[700],
      main: colors.amber[500],
      light: colors.amber[300],
    },
    error: {
      dark: colors.red[700],
      main: colors.red[500],
      light: colors.red[300],
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.142rem",
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.165rem",
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.2rem",
      letterSpacing: 0,
    },
    h4: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.11rem",
      letterSpacing: 0,
    },
    h5: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.125rem",
      letterSpacing: 0,
    },
    h6: undefined,
    body1: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.285rem",
      letterSpacing: 0,
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1.33rem",
      letterSpacing: 0,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.125rem",
      lineHeight: "1.2rem",
      letterSpacing: 0,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.25rem",
      letterSpacing: 0,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.786rem",
      lineHeight: "1.27rem",
      letterSpacing: 0,
    },
    overline: {
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: "1.33rem",
      letterSpacing: 0,
    },
    lime: {
      color: colors.lime[900],
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.285rem",
      letterSpacing: 0,
    },
  },
});