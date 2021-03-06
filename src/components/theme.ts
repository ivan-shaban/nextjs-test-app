import { createMuiTheme } from '@material-ui/core/styles'
import {
    blue,
    pink,
} from '@material-ui/core/colors'

// Configure Material UI theme
export const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        type: 'light',
    },
});

