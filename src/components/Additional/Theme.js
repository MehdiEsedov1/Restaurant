import { green } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: green[500]
        },
    },
});

export default responsiveFontSizes(theme);