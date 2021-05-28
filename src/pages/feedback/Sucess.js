import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../Navbar/Navbar"
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root:{
    background:"#080808",
    },
    body:{
      justifyContent:"center",
      display:"flex",
      flexDirection:"column",
      textAlign:"center",
      alignItems:"center",
      height:"100vh",
      padding:30
    },
    info:{
      margin:"30px 0",
    }
}));

export default function Sucess() {
  const classes = useStyles();
  useEffect(() => { 
  });

  return (
    <div className={classes.root}>
        <Navbar
        isHomePage={true}
        // cartData={cartData}
          isDarkMode={true}
          // draweOpen={draweOpen}
          // toggleDrawer={toggleDrawer}
          draweOpen={()=>console.log("")}
          // toggleDrawer={toggleDrawer}
        />
      <Container maxWidth="xs" className = {classes.body}>
        <Typography className={classes.info} variant="body1">
        The order has been placed successfully.
              </Typography>

              <Button
              // className={classes.cartbtn}
              fullWidth
              className={classes.button}
              color="primary"
              variant="outlined"
              component={Link}
                to={{
                  pathname: "/"
                }}
            >
              return home
            </Button> 
          
        </Container>
    </div>
  );
}