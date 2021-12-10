import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "./components/Gridlist"
import IconButton from '@material-ui/core/IconButton';

// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Product from "./components/Product"
const useStyles = makeStyles(theme => ({

  root: {
    // padding: 10,
    paddingTop: 40,
    minHeight:"100vh"
    // textAlign: "center"
  },
  header:{
    marginBottom:40
  },
  img: {
    width: "100%",
    textAlign: "center",
    margin: "auto",
    borderRadius: 5
  },
  info:{
    color: theme.palette.body2,
    marginTop:20,
    fontSize: "0.75rem"
  },

  product:{
    marginBottom:6
  },
  productAction:{
    display:"flex",
    // justifyContent: "space-between",
    alignItems: "center"
  },
  price:{
    fontSize:"1.1rem",
    flexGrow: 1,
    textAlign: "center",
    marginLeft:-10
  },
  cartbtn: {
    textDecoration: "none",
    // color: "#fff",
    // padding: "2px 11px",
    borderRadius: 4,
    height: 39,
    margin: "16px 2px",
    textShadow:"1px 1px 2px #0002",

    "&:hover": {
      textDecoration: "none"
    },
    // float:"right"
  },
  addToshop:{
    fontSize:19
  },
  btnParent:{
    border: "1px solid rgba(224, 224, 224, 0.5)",
    // height: 20,
    // borderColor:"inherit",
    padding: "7px 12px",
  },
  body:{
    // paddingTop:120
  },
  "@media (min1-width: 600px)": {
    body:{paddingTop:45},
    // nav:{marginBottom:100}
  }
}));

export default function Projec({ addToCart,products,toggleDrawer ,cartData}) {
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container  className = {classes.body}>
          <Typography className={classes.header} variant="h5" justifyContent="center" align="center">
            Sigma market
          </Typography>

          <Grid container spacing={6}>
            {products.map(product=> 
            <Grid item xs={4} className={classes.product} >
              <Product product={product} addToCart={addToCart}/>
            </Grid>
            )}
          </Grid>
        </Container>
    </div>
  );
}