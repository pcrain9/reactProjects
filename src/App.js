import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactDOM from 'react-dom';
import Card from "@mui/material/Card";
import { Route, Switch } from "react-router-dom";

import BackdropModal from './components/BackdropModal';
import LoginModal from './pages/LoginModal';
import Signup from './pages/Signup';
import ModalCartOrder from './components/ModalCartOrder';
import utensils from "./components/Fork_&_knife.png";
import Header from "./components/Header";
import Menu from './pages/Menu';
import classes from "./App.module.css";

function App() {
  const [userClickedCart, setUserClickedCart] = useState(false);
  const [loggedIn, setUserLoggedIn] = useState(false);

  const cartItemQuantity = useSelector(
    (state) => state.menuSlice.mealItems.length
  );

  function userOpenedCartHandler() {
    if(cartItemQuantity === 0) return;
    setUserClickedCart(true);
  }
  
  function userClosedCartHandler() {
    setUserClickedCart(false);
  }

  function handleUserLoggedIn() {
    setUserLoggedIn(true);
  }

  return (
    <>
      <Header userLoggedin={loggedIn} userClickedCart={userOpenedCartHandler}/>
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
        <Route exact path ="/login">
          <LoginModal userDidLogin={handleUserLoggedIn} />
        </Route>
        <Route exact path ="/signup">
          <Signup />
        </Route>
      </Switch>
      {userClickedCart ? (
        <>
          {ReactDOM.createPortal(
            <BackdropModal onModalWasClicked={userClosedCartHandler} />,
            document.getElementById("background")
          )}
          {ReactDOM.createPortal(
            <ModalCartOrder
              
              onClose={userClosedCartHandler}
            />,
            document.getElementById("modalHandler")
          )}
        </>
      ) : null}
    </>
  );
}

export default App;
