import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Slide from "@material-ui/core/Slide";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";


const useStyles = makeStyles(theme => ({
  dropdown: {
    position: "fixed",
    top: 70,
    width: "155px",
    right: 15
  }
}));

export default function CustomizedMenus({toggleDrawer}) {
  const [Open, setOpen] = useState(false);

  const handleClick = event => {
    // the clickAwayLister overrride it so i had to use settimeout to make it happens after the clickAway
    setTimeout(() => setOpen(!Open), 50);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openCart = ()=>{
    handleClose()
    toggleDrawer(true)
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

      <ClickAwayListener touchEvent="onTouchStart" onClickAway={handleClose}>

    

  <Slide direction="left" in={Open} mountOnEnter unmountOnExit>

          <Paper  className={classes.dropdown}>
            <Button
              size="small"
              color="primary"
              onClick={openCart}
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
