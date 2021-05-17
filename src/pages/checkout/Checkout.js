import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CartItem from "./components/Cart"
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    // padding: 10,
    paddingTop: 110,
    color: theme.palette.txt.body,

    // textAlign: "center"
  },
  button:{
      margin:20,
    float:"right"
    }
}));


export default function Projec({ cartData }) {
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container>
            {/* <Button
              className={classes.button}
              component={Link}
              href="#"
              target="_blank"
              fontSize="large"
              color="primary"
              variant="contained"
            //   startIcon={<OpenInNewIcon />}
            >
              Checkout
            </Button> */}
        </Container>
    </div>
  );
}