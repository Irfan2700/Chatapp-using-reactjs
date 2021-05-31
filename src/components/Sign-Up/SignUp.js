import React from 'react';
import './SignUp.scss';
import {Card, Button, In, AppBar, Toolbar, IconButton, Typography, Container, CardContent} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

function SignUp (props) {

    // const Container = {
    //     backgroundColor: 'yellow',
    //     width: '100%'
    // }

    return(

        <>
        <AppBar>
            <Toolbar>
                {/* <IconButton>
                    <MenuIcon />
                </IconButton> */}

                <Typography variant="h6" >
                     <Link to="/">AppName</Link>
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth='sm' >

                <Card xs={12} className="card">
                    <CardContent className="">
                        
                    </CardContent>
                </Card>

        </Container>

        </>        
       
    )

}

export default SignUp;