import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    background: {
        color: '#222223',
        backgroundColor: '#ffffff',
        margin: '20px'
    }
  }));

function Header(){
    const classes = useStyles()
    return (
        <div>
            <AppBar elevation='0' align="center" position="static" className={classes.background}>
                <Typography align='center' variant="h5" color="inherit">
                    HiBykes
                </Typography>
            </AppBar>
        </div>
    )
}

export default Header;