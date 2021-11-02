import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea"
import Typography from "@mui/material/Typography";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function MenuItems(props) {
  return (
    <>
      <Card sx={{ width: "400px", margin:"20px 20px" }}>
        <CardActionArea onClick={() => {props.handleClick(props)}}>
        {/* <img src={props.img} alt='null' /> */}
        <CardContent>
          <Typography variant="h6" sx={{ display:"flex", flexDirection:"row" }}>
            {props.name}
            <KeyboardArrowRightIcon sx={{ paddingTop:"5px"}} />
          </Typography>
          <Typography paragraph="true">{props.description}</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default MenuItems;
