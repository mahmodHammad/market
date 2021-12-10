import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "./components/Gridlist"
import IconButton from '@material-ui/core/IconButton';
import { Link ,useLocation } from "react-router-dom";

// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Product from "./components/Product"
import axios from "axios"

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

export default function Projec(props) {
  const { addToCart,toggleDrawer ,cartData ,activeMarket} = props
  const [products,setproducts]  = useState([ ])
  const [title,settitle]  = useState("")
 
  const id = useLocation().search.split("=")[1]
  useEffect(() => {
    axios.get(`https://dd61-45-243-66-42.ngrok.io/api/store/${id}`,{headers:{"auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxYjM3N2RhYjcyNzZkYTM2ZDE1MGJhMSIsInVzZXJuYW1lIjoia2lyb2xvcyIsImVtYWlsIjoia0BrMC5jbyIsImJhbGFuY2UiOjAsImVhcm5pbmdzIjowLCJsb2NhdGlvbiI6IkVhc3QifSwiaWF0IjoxNjM5MTUxOTAwLCJleHAiOjE2NzA3MDk1MDB9.Z5I5rRU000DycaYTlZHSq3PMbujCF6sBPCco43t8KD0"}})
  .then(function (response) {
    const prod = response.data.store[0].inventory
    const username = response.data.store[0].username
    settitle(username)
    setproducts(prod)
    console.log("response",response) 
  })
},[])

  console.log("useLocation",useLocation())
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
        <Container  className = {classes.body}>
          <Typography className={classes.header} variant="h5" justifyContent="center" align="center">
          {/* {activeMarket} */}
          {title}
          </Typography>

          <Grid container spacing={6}>
            {products.map(product=> 
            <Grid item xs={4} className={classes.product} >
              <Product product={product} addToCart={addToCart} sellerID={id}/>
            </Grid>
            )}
          </Grid>
        </Container>
    </div>
  );
}