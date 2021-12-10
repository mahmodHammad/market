import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => ({
    product:{
        // padding:10,
        // borderRadius: "4px",
        // background:"#191919",
        // border:"1px solid #555",
        // margin:6
      },
 
  root: {
    // padding: 10,
    background:"#080808",
    // paddingTop: 100,
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

  productAction:{ 
      background:"#191919"
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

export default function Projec({ addToCart,product}) {
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
          <Card className={classes.product} variant="outlined">
<CardContent>
    <Typography variant="h6"  align="center"  >
      {product.title}
      </Typography>
      <Typography className={classes.info} variant="body2" >
        {product.description}
      </Typography>
      </CardContent>
        <div className={classes.productAction}>
      <CardActions>
            <Typography className={classes.price} variant="body2" >
                ${product.price}
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
     </CardActions>
    </div>
    </Card>

  );
}