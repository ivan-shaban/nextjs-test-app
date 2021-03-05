import { createMuiTheme } from '@material-ui/core/styles'
import {
    indigo,
    pink,
} from '@material-ui/core/colors'

// Configure Material UI theme
export const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        type: 'light',
    },
});

