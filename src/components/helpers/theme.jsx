"use client"
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#FF2D16",
      main:"#2B271E",
    },
    secondary: {
      main: "#FAE507",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F9F3B6",
      paper: "#FFFFFF",
    },
    olive: {
      main: "#C7B70B",
    },
    black: {
      main: "#2B271E",
    },
    paleBlue: {
      main: "#CCDBEE",
      contrastText: "#000000",
    },
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#fff",
          // '&.Mui-disabled': {
          //     background: grey[100],
          // }
        },
      },
    },
    MuiPaper: {
        styleOverrides:{
            root: {
            background: '#FFF'
            }
        }
    },
  },

  typography: {
    fontFamily: 'Montserrat',
    h1: {
        fontWeight: 600,
        fontSize: '3rem',
        lineHeight: 1.5,
        fontFamily: 'Montserrat, sans-serif',
    },
    h2: {
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: 1.5,
        fontFamily: 'Montserrat, sans-serif',
    },
    h3: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.5,
        fontFamily: 'Montserrat, sans-serif',
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.5,
        fontFamily: 'Montserrat, sans-serif',
    },
    h5: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.5,
        fontFamily: 'Montserrat, sans-serif',
    },
    h6: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: 1.5,
        fontFamily: 'Montserrat, sans-serif',
    },
    body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        fontFamily: 'Montserrat, sans-serif',
    },
    body2: {
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.6,
        fontFamily: 'Montserrat, sans-serif',
    },
    subtitle1: {
        fontWeight: 500,
        fontSize: '4em',
        lineHeight: 1.75,
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: 0
    },
    subtitle2: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.75,
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: 0
    },
    subtitle3: {
        fontWeight:'bold',
        fontSize: '1.1rem',
        lineHeight: 1.75,
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: 0
    },
    subtitle2lg: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.75,
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: 0
    },
    caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.6,
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: 0
    },
    overline: {
        fontWeight: 600,
        fontSize: '0.75rem',
        lineHeight: 2.46,
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '1px',
        textTransform: 'uppercase'
    },
    button: {
        textTransform: "none"
    }
}
});
