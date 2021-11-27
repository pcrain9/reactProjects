import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function LoginModal(props) {
  //handle redirect behavior
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  const handleUserLoggedin = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    props.userDidLogin();
    setSuccessfulLogin(true);
  };

  return (
    <>
      {!successfulLogin ? (
        <Grid
          container
          component={Card}
          direction="column"
          justifyContent="center"
          sx={{ minHeight: "275px", justifyContent: "space-evenly" }}
        >
          <Grid item component="form" onSubmit={handleUserLoggedin}>
            <Grid
              item
              component={Card}
              raised
              sx={{
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                margin: "auto",
                alignItems: "center",
                width: "25%",
              }}
            >
              <Grid item>
                <TextField
                  variant="filled"
                  required={true}
                  autoFocus
                  placeholder="username"
                  size="small"
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  variant="filled"
                  required={true}
                  size="small"
                  placeholder="password"
                ></TextField>
              </Grid>
              <Grid item>
                <Button variant="contained" type="submit">
                  submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <>
          <Redirect to="/menu" />
        </>
      )}
    </>
  );
}

export default LoginModal;
