import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography} from '@material-ui/core'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/common/actions";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        height: 60,
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        flex: 1,
        padding: '0 24px',
        color: theme.palette.secondary.main,
    }
}));

export default function Footer() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.email);
    return (
        <Grid container className={classes.root} alignItems="center">
            <Grid item container className={classes.content} justify="space-between">
                <Grid item>
                    <Typography variant="body1" gutterBottom>{'Copyright Tetiana Dubrova'} </Typography>
                </Grid>
                <Grid item>
                    {email ?
                        <Link href="#" color="secondary" variant="body2"
                              onClick={() => {
                                  dispatch(logout())
                              }}>
                            {"Sign Out"}
                        </Link> : null}
                </Grid>
            </Grid>
        </Grid>
    )
}
