// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Mono, monospace',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    error: {
      main: '#f44336',
    },
    appointment: {
      main: '#efbd9b',
      dark: '#d6a788',
    },
    custom: {
      main: '#678d9a',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#678d9a',
          borderColor: '#678d9a',
        },
      },
    },
  },
});

export default theme;