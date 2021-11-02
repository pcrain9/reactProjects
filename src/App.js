import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Route, Switch } from "react-router-dom";

import utensils from "./components/Fork_&_knife.png";
import Header from "./components/Header";
import Menu from './pages/Menu';
import classes from "./App.module.css";

function App() {

  return (
    <>
      <Header />

      <div className={classes.image_container}>
        <Card
          sx={{
            height: "100px",
            width: "100px",
            position: "static",
            display: "flex",
            justifyContent: "center",
            marginBottom:'10px'
          }}
        >
          <img className={classes.image} src={utensils} alt="null" />
        </Card>
      </div>
      <Switch>
        <Route exact path='/menu'>
          <Menu />
        </Route>
      </Switch>
    </>
  );
}

export default App;
