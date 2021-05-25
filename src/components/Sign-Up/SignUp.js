import React from 'react';
import {Card, Button, In, AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

function SignUp (props) {

    return(

        <AppBar>
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" >
                     <Link to="/">AppName</Link>
                </Typography>
            </Toolbar>
        </AppBar>
       
    )

}

export default SignUp;