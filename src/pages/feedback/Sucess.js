import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root:{}
}));

export default function Sucess() {
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container>
    <h1>The order is placed sucessfuly</h1>
    <h1>The order is placed sucessfuly</h1>
    <h1>The order is placed sucessfuly</h1>
    <h1>The order is placed sucessfuly</h1>
    <h1>The order is placed sucessfuly</h1>
        
        </Container>
    </div>
  );
}