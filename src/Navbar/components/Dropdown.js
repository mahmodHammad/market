import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import AccountTreeIcon from "@material-ui/icons/AccountTree";

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

  const handleClick = event => {
    // the clickAwayLister overrride it so i had to use settimeout to make it happens after the clickAway
    setTimeout(() => setOpen(!Open), 50);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <MenuIcon color="primary" />
      </IconButton>

      <ClickAwayListener touchEvent="onTouchStart" onClickAway={handleClose}>
        <Grow in={Open}>
          <Paper variant="outlined" className={classes.dropdown}>
            <Button
              size="large"
              color="secondary"
              onClick={handleClose}
              startIcon={<AccountTreeIcon />}
              fullWidth
              component={Link}
              to={{
                pathname: "/",
                state: {
                  scrollTo: "projects"
                }
              }}
            >
              Projects
            </Button>
            <Divider />
            {/* <Button
              fullWidth
              size="large"
              color="secondary"
              onClick={handleClose}
              startIcon={<Mail />}
              component={Link}
              to={{
                pathname: "/",
                state: {
                  scrollTo: "contact"
                }
              }}
            >
              Contacts
            </Button> */}
          </Paper>
        </Grow>
      </ClickAwayListener>
    </div>
  );
}
