import { createMuiTheme } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4383cc',
            main: '#1565c0',
            dark: '#0e4686',
        },
        secondary: {
            light: '#83c3f7',
            main: '#64b5f6',
            dark: '#467eac',
        },
        background: {
            paper: '#fff',
            default: grey[200],
        },
    },
});

export default theme;