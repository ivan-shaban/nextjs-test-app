import { createMuiTheme } from '@material-ui/core/styles'
import {
    blue,
    pink,
} from '@material-ui/core/colors'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    readonly offsets: {
        readonly buttonBorderOffset: number;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
      readonly offsets?: {
          readonly buttonBorderOffset?: number;
    };
  }
}

// Configure Material UI theme
export const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        type: 'light',
    },
    offsets: { buttonBorderOffset: 20 },
});

