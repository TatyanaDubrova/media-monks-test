import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: 'Muli, sans-serif',
    },
    palette: {
        primary: {
            main: '#00ABFA', //do not change
            dark: '#0077C1', //do not change
        },
        secondary: {
            main: '#f9f9f9', // do not change
        },
    },
    overrides: {
        MuiTypography: {
            body1: {
                fontSize: '14px'
            }
        },
        MuiFormControlLabel: {
            label: {
                textTransform: 'capitalize',
                fontSize: 14,
                fontFamily: 'Muli, sans-serif',
            },
        },
    }
});
