import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MarketItem from "./components/MarketItem"
import axios from "axios"

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

export default function Sucess() {
    const [orders,setOrders]  = useState([])
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
    axios.get("https://nodejsserv.terraform.live/dashboard/orders").then(o=>  console.log("HIHIHIH",o)
        ).catch(e=>console.log("ERR",e))
  });

  const getData = (OrderID)=>{
    console.log("Get data of",OrderID)
  }

  return (
    <div className={classes.root}>
        <Container>
          <div className={classes.header}>
              <Typography className={classes.headerItem}> Hello: Mahmoud </Typography>
              <Typography className={classes.headerItem}> Current Credit: 50$ </Typography>
              <Button variant="contained"> Your Dashboard </Button> 
          </div>
          <Typography variant="h5" justifyContent="center" align="center">
            Avilable markets
          </Typography>
          <div className={classes.marketsContiner}>
             <Grid container spacing={2}>
              <Grid item xs={3}>
                <MarketItem/>
              </Grid>
              <Grid item xs={3}>
                <MarketItem/>
              </Grid>
              <Grid item xs={3}>
                <MarketItem/>
              </Grid>
              <Grid item xs={3}>
                <MarketItem/>
              </Grid>
              <Grid item xs={3}>
                <MarketItem/>
              </Grid>
            </Grid>
          </div>
        </Container>
    </div>
  );
}