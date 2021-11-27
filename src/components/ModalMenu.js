import React, { useState } from "react";
import { useDispatch } from "react-redux";
import menuActions from "./store/handle-cart-slice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

import classes from "./ModalMenu.module.css";
import CloseIcon from "@mui/icons-material/Close";

const ModalMenu = (props) => {
  const dispatch = useDispatch();
  const [itemAmount, setItemAmount] = useState(0);
  function handleCartAction(plusMinus) {
    const currentAmount = itemAmount;
    if (plusMinus === "+") {
      setItemAmount(currentAmount + 1);
    } else {
      if (currentAmount === 0) {
        return;
      }
      setItemAmount(currentAmount - 1);
    }
  }

  function addToCartHandler() {
    const currentAmount = itemAmount;

    if (currentAmount === 0) {
      return;
    }

    const item = {
      id: props.id,
      name: props.name,
      cost: Number(props.cost),
      quantity: itemAmount,
    };
    dispatch(menuActions.actions.addItem(item));
    props.onClose();
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
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "500px",
            width: "450px",
            margin: "auto",
            overflow: "scroll",
          }}
        >
          <span className={classes.close_icon} onClick={props.onClose}>
            <CloseIcon />
          </span>
          <Typography variant="h2">{props.name}</Typography>
          <Typography paragraph={true}>{props.description}</Typography>
          <Typography variant="h6">Preferences</Typography>
          <TextField placeholder="foo"></TextField>
          <Card sx={{ marginTop: "100px", height: "100px", width: "500px" }}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                width: "80%",
                alignItems: "center",
              }}
            >
              <Badge
                onClick={handleCartAction}
                sx={{
                  borderRadius:"50%",
                  backgroundColor:'white',
                  cursor: "pointer",
                }}
              >
                <Typography variant="h5" sx={{ margin: "auto" }}>
                  -
                </Typography>
              </Badge>
              <Badge
                onClick={handleCartAction}
                sx={{
                  width: "50px",
                  color: "red",
                }}
              >
                <TextField size="small" value={itemAmount}></TextField>
              </Badge>
              
              <Badge
                onClick={() => {
                  handleCartAction("+");
                }}
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <Typography variant="h5" sx={{ margin: "auto" }}>
                  +
                </Typography></Badge>
              <Button
                size="medium"
                variant="contained"
                onClick={addToCartHandler}
              >
                add to cart - ${props.cost}
              </Button>
            </Container>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModalMenu;
