import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import menuActions from "./store/handle-cart-slice";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import classes from "./ModalMenu.module.css";
import CloseIcon from "@mui/icons-material/Close";

const ModalCartOrder = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.menuSlice.mealItems);
  console.log(cartItems);
  function removeItemHandler(item) {
    dispatch(menuActions.actions.removeItem(item));
  }
  return (
    <Card
      sx={{
        margin: "100px 500px",
        height: "500px",
        width: "500px",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 10,
      }}
    >
      <span className={classes.close_icon} onClick={props.onClose}>
        <CloseIcon />
      </span>
      {cartItems.length === 0 ? null : (
        <Grid container>
          <Typography
            variant="h5"
            sx={{ width: "35%", borderBottom: "1px solid black" }}
            gutterBottom
          >
            Summary
          </Typography>
          {cartItems.map((item) => {
            return (
              <Grid item xs={12} container key={item.id}>
                <Grid item xs={4} textAlign="end">
                  <Typography key={item.id} variant="h6">
                    {item.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ marginTop: "0" }}>
                  <Typography variant="h6">&nbsp;{item.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <span className={classes.close_icon}>
                    <CloseIcon
                      onClick={() => {
                        removeItemHandler(item);
                      }}
                    />
                  </span>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      )}
      {cartItems.length === 0 ? (
        <Container alignItems="center" sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Typography textAlign="center" variant="h2">Nothing in cart...yet!</Typography>
          <Button onClick={props.onClose} size="large">
            Back to menu
          </Button>
        </Container>
      ) : (
        <Card sx={{ marginTop: "100px", height: "100px", width: "500px" }}>
          <Button
            size="medium"
            variant="contained"
            sx={{ marginLeft: "50px" }}
            /* onClick={addToCartHandler} */
          >
            Place your order - ${props.cost}
          </Button>
        </Card>
      )}
    </Card>
  );
};

export default ModalCartOrder;
