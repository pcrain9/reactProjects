import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from './Header.module.css';

function Header(props) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">hello, food</Typography>
        <Link className={classes.link} to='/menu' >Start your order</Link>
        <span>
          <Badge badgeContent={props.itemQuantity} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </span>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
