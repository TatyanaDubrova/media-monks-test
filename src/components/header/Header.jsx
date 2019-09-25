import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {useSelector} from "react-redux"

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        height: 88,
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        flex: 1,
        padding: '0 24px',
        color: theme.palette.secondary.main,
    }
}));

export default function Header(){
    const classes = useStyles();
    const email = useSelector(state => state.auth.email);
    return (
        <Grid container className={classes.root} justify="center" alignItems="center">
            <Grid item container className={classes.content} justify="center">
                <Typography variant="h4" gutterBottom>{email ? `${email}, welcome to our site!` : ''} </Typography>
            </Grid>
        </Grid>
    )
}
