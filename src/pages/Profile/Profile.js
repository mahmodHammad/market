import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Item from "./components/Item"

// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({

  root: {
    // padding: 10,
    paddingTop: 40,
    minHeight:"100vh"
    // textAlign: "center"
  },
  header:{
    border:"1px solid #444",
    marginTop:"30px",
    marginBottom:"60px",
    borderRadius:7,
    background:"#191919",
    padding:"10px 20px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%"

  },
  headerItem:{
    // background:"#222",
  },
  headerTitle:{
    marginBottom:40
  },

}));

export default function Projec({ addToCart,products,toggleDrawer ,cartData}) {
  const classes = useStyles();

  const [YourProducts,setYourProducts]  = useState([
    {
        name:"first porduct",
        price:500,
        description:"this is the description of the product",
        isMine:true,
    }, {
        name:"sec porduct",
        price:300,
        description:"this is the description of the product",
        isMine:true,
    }, {
        name:"other porduct",
        price:900,
        description:"this is the description of the product",
        isMine:true,
    }
])
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container  className = {classes.body}>
        <div className={classes.header}>
              <Typography className={classes.headerItem}> Current Credit: $50 </Typography>
         <div>
              <Button size="small" style={{marginRight:20}} component={Link} to="/profile" variant="outlined"> Deposit credit </Button> 
              <Button size="small" component={Link} to="/profile" variant="outlined"> Your Dashboard </Button> 
        </div>
       
          </div>
          <Typography className={classes.headerTitle} variant="h5" justifyContent="center" align="center">
            Your Products
          </Typography>
 
        <Grid container spacing={6}>
            {YourProducts.map(product=>  <Grid item xs={4} className={classes.product} >
                <Item product={product}/>
            </Grid>
            )}
         </Grid>    
        </Container>
    </div>
  );
}