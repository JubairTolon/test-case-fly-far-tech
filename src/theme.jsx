import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#e30086',
            light: '#ec008c',
            dark: '#85004f',
            contrastText: '#85004f',
        },
        secondary: {
            main: '#ff3baf',
            light: '#ffeaf7',
            dark: '#333333'
        },
    },
});

export default theme;