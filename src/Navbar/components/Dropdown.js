import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Slide from "@material-ui/core/Slide";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { SettingsInputComponentOutlined } from "@material-ui/icons";


const useStyles = makeStyles(theme => ({
  dropdown: {
    position: "fixed",
    top: 70,
    width: "155px",
    right: 15
  }
}));

export default function CustomizedMenus() {
  const [Open, setOpen] = useState(false);
  const [guard, setGuard] = useState(null);
 
  const handleClick = event => {
  console.log(" handleClick",Open)

    // setGuard(true)
    // the clickAwayLister overrride it so i had to use settimeout to make it happens after the clickAway
    const oldState = Open

        setOpen(!oldState)

        // setTimeout(()=>setGuard(false),10000)
   
  };

 

const handleClickaway = (e)=>{
  console.log("TTT",e.target.tagName)
if(e.target.tagName==="CANVAS"){

      setOpen(false)

}
 
}
  const classes = useStyles();

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        <MenuIcon color="primary" fontSize="small" />
      </IconButton>

      <ClickAwayListener touchEvent="onTouchEnd" onClickAway={handleClickaway}>

  <Slide   direction="left" in={Open} mountOnEnter >

          <Paper   className={classes.dropdown}>
            <Button
              size="small"
              color="primary"
              onClick={()=> setOpen(false)}
              fullWidth
              component={Link}
              to={{
                pathname: "/shop",
                state: {
                  scrollTo: "projects"
                }
              }}
            >
              Shop
            </Button>
            <Divider />
          </Paper>
          </Slide>

    </ClickAwayListener>
    </div>

  );
}
