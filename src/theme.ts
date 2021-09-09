import { createTheme } from '@mui/material';

/**
 * @description Extending the material thmee with custom properties
 */
type CanvasTheme = {

};
declare module '@mui/material/styles' {
  interface Theme {
    canvas: CanvasTheme
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    canvas?: Partial<CanvasTheme>
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#e50914',
    },
  },
});

export default theme;
