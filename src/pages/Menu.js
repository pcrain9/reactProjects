import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import MENU from "../MENU";
import MenuItems from "../components/MenuItems";
import BackdropModal from "../components/BackdropModal";
import ModalMenu from "../components/ModalMenu";
import classes from "./Menu.module.css";


function Menu(props) {
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

  function addToCartHandler(itemInfo) {
    props.onItemAddedToCart(itemInfo);
  }

  return (
    <>
      {itemClicked ? (
        <>
          {ReactDOM.createPortal(
            <BackdropModal onModalWasClicked={modalClickedHandler} />,
            document.getElementById("background")
          )}
          {ReactDOM.createPortal(
            <ModalMenu
              id={menuItem.id}
              name={menuItem.name}
              cost={menuItem.cost}
              description={menuItem.description}
              onClose={modalClickedHandler}
              onItemAddedToCart={addToCartHandler}
            />,
            document.getElementById("modalHandler")
          )}
        </>
      ) : null}
      <Container
        sx={{
          fontFamily: "roboto",
          color: "#0288d1",
          backgroundColor: "white",
          width:"50%",
          borderBottom:"1px solid black"
        }}
      >
          <Typography paragraph={true}>popular items</Typography>
        
      </Container>
      <div className={classes.menu_container}>
        {MENU.map((item) => {
          return (
            <MenuItems
              key={item.id}
              id={item.id}
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
