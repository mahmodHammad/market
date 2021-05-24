import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios"

const useStyles = makeStyles(theme => ({
    root:{}
}));

export default function Sucess() {
    const [orders,setOrders]  = useState([])
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
    axios.get("http://161.35.99.4:5000/dashboard/orders").then(o=>  console.log("HIHIHIH",o)
        ).catch(e=>console.log("ERR",e))
  });

  const getData = (OrderID)=>{
    console.log("Get data of",OrderID)
  }

  return (
    <div className={classes.root}>
        <Container>
            <h1>The Dashboard</h1>
     {orders.map(o=><div>
         <p>OrderID: {o.OrderID}</p>
         <Button
            //   className={classes.cartbtn}
              fontSize="small"
              size="small"
              color="primary"
              variant="outlined"
              onClick={getData}
            >
             getOrders
            </Button> 

     </div>)}
           
        </Container>
    </div>
  );
}