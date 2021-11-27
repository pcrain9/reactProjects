import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./Header.module.css";
import LoginModal from "./LoginModal";
import BackdropModal from "./BackdropModal";

function Header(props) {
  const cartItemQuantity = useSelector(
    (state) => state.menuSlice.mealItems.length
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  function onClose() {
    setShowLoginModal(false);
    setShowSignupModal(false);
  }

  return (
    <>
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Container><Link className={classes.link} to="/">hello, food</Link></Container>
        <Container><Link className={classes.link} to="/menu">
          Start your order
        </Link></Container>
        {isLoggedIn ? <Container sx={{width:"10%"}}>
          <Badge
            sx={{ cursor: "pointer" }}
            onClick={props.userClickedCart}
            badgeContent={cartItemQuantity}
            color="warning"
          >
            <ShoppingCartIcon />
          </Badge>
        </Container> : 
        <Container sx={{ display:"flex", justifyContent:"space-between", width:"30%"}}><Button variant="contained" size='small' color="warning" onClick={() => {setShowLoginModal(true)}}>Login</Button>
        <Button variant="contained" size="small" color="secondary" onClick={() => {setShowSignupModal(true)}}>Sign up</Button></Container>
        }
      </Toolbar>
    </AppBar>
    {showLoginModal ? ReactDOM.createPortal(<LoginModal onClose={() => {onClose()}} />, document.getElementById("modalHandler")) : null}
    {showLoginModal || showSignupModal ? ReactDOM.createPortal(<BackdropModal onModalWasClicked={() => {onClose()}}/>, document.getElementById("background")) : null}
    </>
  );
}

export default Header;
