import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import classes from "./LoginModal.module.css";

function LoginModal() {
  return (
    <Grid
      container
      component={Card}
      direction="column"
      justifyContent="center"
      sx={{ minHeight: "250px", justifyContent: "space-evenly" }}
    >
      <Grid item component="form">
        <Grid
          item
          component={Card}
          raised
          sx={{
            height: "75vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            margin: "auto",
            alignItems:"center",
            width:"25%"
          }}
        >
          <Grid item>
            <TextField
              variant="filled"
              required="true"
              autoFocus
              placeholder="username"
              size="small"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="filled"
              required="true"
              autoFocus
              placeholder="email"
              size="small"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="filled"
              required="true"
              size="small"
              placeholder="password"
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="filled"
              required="true"
              size="small"
              placeholder="confirm password"
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
  );
}

export default LoginModal;
