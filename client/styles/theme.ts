import { createTheme } from '@mui/material/styles';
import { PALLETE_COLORS } from './default';

// A custom theme for this app
const theme = createTheme({
    palette: {
        ...PALLETE_COLORS,
    },
    typography: {
        fontFamily: ["'Inter'", 'sans-serif'].join(','),
    },
    breakpoints: {
        values: {
            xs: 600,
            sm: 900,
            md: 1360,
            lg: 1440,
            xl: 1900,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    textTransform: 'none',
                },
                contained: {
                    textTransform: 'none',
                },
                outlined: {
                    textTransform: 'none',
                },
            },
        },
    },
});

export default theme;
