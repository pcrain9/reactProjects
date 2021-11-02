import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import CloseIcon from '@mui/icons-material/Close';
import MENU from "../MENU";
import MenuItems from "../components/MenuItems";
import classes from "./Menu.module.css";
import { Button, CardContent } from "@mui/material";

const BackdropModal = (props) => {
  return (
    <div
      style={{
        height:"1000px",
        width:"2000px",
        margin:'auto',
        position: "absolute",
        zIndex:5,
        backgroundColor: "rgba(0, 0, 0, .5)",
        display: "flex",
      }} onClick={props.onModalWasClicked}
    ></div>
  );
};

const ModalMenu = (props) => {
  return(
    <Card sx={{margin:'100px 500px', height:'500px', width:'500px', backgroundColor:'white', position:'absolute', zIndex:10}}>
      <CardContent sx={{ display:'flex', justifyContent:'space-evenly', flexDirection:'column'}}>
        <span className={classes.close_icon} onClick={props.onClose}><CloseIcon /></span>
        <Typography variant='h2'>{props.name}</Typography>
        <Typography paragraph="true">{props.description}</Typography>
        <Typography variant="h6">Preferences</Typography>
        <TextField placeholder='foo'></TextField>
        <Button /* onClick={AddToCartHandler} */ sx={{backgroundColor:'lightblue', marginTop:'10px', width:'300px', height:'50px'}}>add to cart</Button>
      </CardContent>
    </Card>
  )
}

function Menu() {
const [itemClicked, setItemClicked] = useState(false);
const [menuItem, setMenuItem] = useState();

//receive item information when user clicks
function itemClickedHandler(item) {
  setItemClicked(true);
  setMenuItem(item);
}

function modalClickedHandler() {
  setItemClicked(false);
}

  return (
    <>
      {itemClicked ? <>{ReactDOM.createPortal(
        <BackdropModal onModalWasClicked={modalClickedHandler} />,
        document.getElementById("background"))}
        {ReactDOM.createPortal(
          <ModalMenu name={menuItem.name} cost={menuItem.cost} description={menuItem.description} onClose={modalClickedHandler} />,
          document.getElementById("modalHandler")
      )} </>: null}
      <AppBar
        position="static"
        sx={{
          fontFamily: "roboto",
          color: "#0288d1",
          backgroundColor: "white",
          marginBottom: "10px",
        }}
      >
        <Toolbar>
          <Typography paragraph="true">popular items</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.menu_container}>
        {MENU.map((item) => {
          return (
            <MenuItems
              key={item.id}
              handleClick={itemClickedHandler}
              name={item.name}
              img={item.img}
              cost={item.cost}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default Menu;
