import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import CartItem from "./CartItem"
// import { TimeToLeaveRounded } from '@material-ui/icons';j
import Button from "@material-ui/core/Button";
import Adder from "./Adder"
const useStyles = makeStyles((theme) => ({
  root: {
    width: 380,
  },
  title:{
    color: theme.palette.txt.title,

  },
  inline: {
    display: 'inline',
    color: theme.palette.txt.body,
  },
  avLarge:{
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight:15,
    borderRadius: 5
  },
  listItemStyle:{
      paddingTop:20,
      paddingBottom:20,
    // background:"#f00"
  },
  dividerStyle:{
      background:"#fff3",
  },
  price:{
    top: "30%",
    transform: "translateY(0)"
  },
  totlaCost:{
    color:"#f00"
  }
}));

export default function Cart({increaseQuantitly,cartData,toggleDrawer}) {
  const classes = useStyles();
  const GetTotalCost  = ()=>{
    let totalCost = 0
    cartData.forEach(item=>{
      totalCost += item.price*item.quan
    })
    return totalCost
  }

  return (
    <List className={classes.root}>
      {cartData.map((d,index)=><React.Fragment> 
          <CartItem increaseQuantitly={increaseQuantitly} productID={d.id} img={d.avatar} title={d.title} quantity={d.quan} price={d.price} />
          {index !==cartData.length-1?<Divider  component="li" className={classes.dividerStyle}/>:null
      }
      </React.Fragment>
    )}
        <Typography className={classes.totlaCost}>
        Total Cost: {GetTotalCost()}
      </Typography>

      <Button
      className={classes.button}
      fontSize="large"
      color="secondary"
      variant="outlined"
      // startIcon={<OpenInNewIcon />}
      onClick={()=>{
        console.log("CLICKKKCKCKED")
        toggleDrawer( false)}
      }
      >
      Checkout
      </Button> 
      <Button
      className={classes.button}
      fontSize="large"
      color="secondary"
      variant="outlined"
      // startIcon={<OpenInNewIcon />}
      onClick={()=>{
        console.log("CLICKKKCKCKED")
        toggleDrawer( false)}
      }
      >
      Close
      </Button> 

    </List>
  );
}
