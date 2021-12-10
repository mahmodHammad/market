import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MarketItem from "./components/MarketItem"
import axios from "axios"
import { Link } from "react-router-dom";
// const axios = require('axios').default;

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
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
  marketsContiner:{
    marginTop:40
  }
}));

export default function Sucess({creadit,SetactiveMarket,name}) {
    const [markets,setmarkets]  = useState([])
  const classes = useStyles();
  useEffect(() => {
    axios.get('https://dd61-45-243-66-42.ngrok.io/api/stores',{headers:{"auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxYjM3N2RhYjcyNzZkYTM2ZDE1MGJhMSIsInVzZXJuYW1lIjoia2lyb2xvcyIsImVtYWlsIjoia0BrMC5jbyIsImJhbGFuY2UiOjAsImVhcm5pbmdzIjowLCJsb2NhdGlvbiI6IkVhc3QifSwiaWF0IjoxNjM5MTUxOTAwLCJleHAiOjE2NzA3MDk1MDB9.Z5I5rRU000DycaYTlZHSq3PMbujCF6sBPCco43t8KD0"}})
  .then(function (response) {
    const stores= response.data.stores
    setmarkets(stores)
  })

  });

  const getData = (OrderID)=>{
    console.log("Get data of",OrderID)
  }

  return (
    <div className={classes.root}>
        <Container>
          <div className={classes.header}>
              <Typography className={classes.headerItem}> Hello: {name} </Typography>
              <Typography className={classes.headerItem}> Current Credit: ${creadit} </Typography>
              <Button component={Link} to="/profile" variant="contained"> Your Dashboard </Button> 
          </div>
          <Typography variant="h5" justifyContent="center" align="center">
            Avilable markets
          </Typography>
          <div className={classes.marketsContiner}>
             <Grid container spacing={2}>
              {markets.map(m=> <Grid item xs={3}>
                <MarketItem SetactiveMarket={SetactiveMarket} market = {m}/>
              </Grid>)}
             
              
            </Grid>
          </div>
        </Container>
    </div>
  );
}