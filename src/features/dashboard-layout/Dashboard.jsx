import React from 'react'
import {makeStyles} from '@material-ui/core/styles/index'
import {Grid} from '@material-ui/core/index'
import Header from '../../components/header'
import Footer from '../../components/footer'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        overflow: 'hidden',
    },
    wrapper: {
        flex: 1,
    },
    contentWrapper: {
        height: '100%',
        width: '100%',
    }
}));

export default function Dashboard({children}) {
    const classes = useStyles();
    return (
        <Grid id="test" className={classes.root} container justify="center" direction="column">
            <Header/>
            <Grid className={classes.wrapper} justify="center" item container>
                <Grid className={classes.contentWrapper} item>
                    {children}
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}
