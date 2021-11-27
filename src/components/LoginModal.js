import React from 'react';
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import classes from "./LoginModal.module.css"

function LoginModal() {
    return (
        <Container maxWidth='lg' sx={{ height:"500px", position: "absolute", zIndex:"10", }}>
            <Card alignItems="center" sx={{ height:"75%", width:"75%", margin:"auto", }}>
                <Grid container direction="column" > <form className={classes.loginForm}>
                    <Grid item xs={2}><TextField placeholder="username"></TextField></Grid>
                <Grid item><TextField placeholder="password"></TextField></Grid>
                <Grid item><Button type="submit">submit</Button></Grid></form>
                </Grid>
            </Card>
        </Container>
    )
}

export default LoginModal;
