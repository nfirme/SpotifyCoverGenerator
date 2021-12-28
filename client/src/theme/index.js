import { createTheme } from '@mui/material/styles';

const green = {
  50: '#EAFAF1',
  100: '#C5F2D8',
  200: '#9FEABF',
  300: '#7AE1A5',
  400: '#54D98C',
  500: '#2FD073',
  600: '#25A75C',
  700: '#1C7D45',
  800: '#13532E',
  900: '#092A17',
};

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: 'clamp(3.75rem, 4.6vw + 2.9rem, 5.75rem);',
      fontWeight: 900,
      letterSpacing: -4,
      lineHeight: 0.9
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw + 1.3rem, 3rem);',
      fontWeight: 700,
      letterSpacing: -2,
      lineHeight: 1.1
    },
    subtitle1: {
      color: green[50],
      fontWeight: 500,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      ...green,
    },
  },
});

export default theme;
