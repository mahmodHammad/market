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
import Drawer from "../../Navbar/components/Drawer"

const useStyles = makeStyles(theme => ({
  root: {
    // padding: 10,
    background:"#080808",
    paddingTop: 100,
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
    marginBottom:40
  },
  productAction:{
    display:"flex",
    // justifyContent: "space-between",
    alignItems: "center"
  },
  price:{
    fontSize:"1.1rem",
    flexGrow: 1,
    textAlign: "center"
  },
  cartbtn: {
    textDecoration: "none",
    // color: "#fff",
    padding: "4px 11px",
    borderRadius: 4,
    margin: "22px 5px",
    textShadow:"1px 1px 2px #0002",

    "&:hover": {
      textDecoration: "none"
    },
    // float:"right"
  },
  addToshop:{
  },
  btnParent:{
    border: "1px solid rgba(224, 224, 224, 0.5)",
    // borderColor:"inherit",
    padding: "5px 11px",
  }
}));

export default function Projec({ addToCart,products,toggleDrawer }) {
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container>
          {products.map(product=><div className={classes.product}>
            <GridList tileData={product.images}/>
              <Typography className={classes.info} variant="body2" >
                {product.description}
              </Typography>

          <div className={classes.productAction}>
            <Typography className={classes.price} variant="body2" >
                  $16.00
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
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              onClick={()=>addToCart( product)}
            >
              & checkout
            </Button> 
          
            </div>

          </div>)}
        
        </Container>
    </div>
  );
}