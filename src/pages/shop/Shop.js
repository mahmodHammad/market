import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "./components/Gridlist"
import IconButton from '@material-ui/core/IconButton';

// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Navbar from "../../Navbar/Navbar"

const useStyles = makeStyles(theme => ({
  root: {
    // padding: 10,
    background:"#080808",
    paddingTop: 100,
    minHeight:"100vh"
    // textAlign: "center"
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
        <Navbar
        cartData={cartData}
          isDarkMode={true}
          // draweOpen={draweOpen}
          // toggleDrawer={toggleDrawer}
          draweOpen={()=>console.log("")}
          toggleDrawer={toggleDrawer}
        />
        <Container maxWidth="xs" className = {classes.body}>
          {products.map(product=><div className={classes.product}>
            <GridList tileData={product.images}/>
              <Typography className={classes.info} variant="body2" >
                {product.description}
              </Typography>

          <div className={classes.productAction}>
            <Typography className={classes.price} variant="body2" >
                  ${product.price/100}.00
            </Typography>

            <IconButton
              className={`${classes.cartbtn} ${classes.btnParent}`}
              fontSize="small"
              size="small"
              color="primary"
              variant="outlined"
              onClick={()=>addToCart( product)}
            >
             <AddShoppingCartIcon className={classes.addToshop} fontSize="small"/>
            </IconButton> 
            <Button
              className={classes.cartbtn}
              fontSize="small"
              size="small"
              color="primary"
              variant="outlined"
              startIcon={<AddShoppingCartIcon />}
              onClick={()=>addToCart( product,true)}
            >
              & checkout
            </Button> 
          
            </div>

          </div>)}
        
        </Container>
    </div>
  );
}