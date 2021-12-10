import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import axios from "axios"
import CartItem from "./CartItem"
// import { TimeToLeaveRounded } from '@material-ui/icons';j
import Button from "@material-ui/core/Button";
import Adder from "./Adder"
import handleCheckout from "./Strip"

const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    background:"#060606",
    height:"100vh",
    padding:10,
  },
  cartitems:{
    overflow:"auto",
    height:"calc(100vh - 145px)"
  },
  title:{
    // color: theme.palette.txt.title,
  },
  button:{
    marginRight:10,
    marginTop:10
  },
  inline: {
    display: 'inline',
    // color: theme.palette.txt.body,
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
    color:theme.palette.body2
  },
lay:{
  padding:15,
  paddingBottom:20,
  position:"fixed",
  bottom:0,
  width: "100%",
},
btnbottom:{
  // display:"flex",
  // justifyContent:"space-between"
},
empty:{
  padding:20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
},emptyText:{
  padding:20
}
}));

export default function Cart({handleCheckout,removeItem,setsize,increaseQuantitly,cartData,toggleDrawer}) {
  const classes = useStyles();
  const GetTotalCost  = ()=>{
    let totalCost = 0
    cartData.forEach(item=>{
      totalCost += item.price*item.quan
    })
    return totalCost
  }
  
  // const formatforcheckout = ()=>{
  // const formatted =   cartData.map(c=>{
  //     const name = `${c.title} ${c.size}`  
  //     const data = {
  //       name,
  //       amount: c.price,
  //       images:[`https://terraform.live/${c.avatar}`], 
  //       quantity:c.quan
  //     }
  //     return data
  //   })
  //    return formatted
  // }

 
  
// console.table([{title:"heloo",age:12},{title:"ffheloo",age:122},{title:"hffeloo",age:12},])

  return (
    <div className = {classes.root}> 
    {cartData.length?<React.Fragment>
      <List >
        <div className={classes.cartitems}>
          {cartData.map((d,index)=><React.Fragment> 
              <CartItem removeItem={removeItem} size={d.size} setsize={setsize} increaseQuantitly={increaseQuantitly} productID={d.id} img={d.avatar} title={d.title} quantity={d.quan} price={d.price} />
              {index !==cartData.length-1?<Divider  component="li" className={classes.dividerStyle}/>:null
          }
          </React.Fragment>
        )}
        </div>
        </List>

      <div className={classes.lay}>
          <Typography className={classes.totlaCost}>
          Total Cost: ${GetTotalCost()}
        </Typography>

        <div className={classes.btnbottom}>
            <Button
            className={classes.button}
            size="small"
            color="primary"
            variant="outlined"
            onClick={()=>{
              toggleDrawer( false)}
            }
            >
            close
            </Button> 
            <Button
            className={classes.button}
            size="small"
            color="primary"
            variant="contained"
            // startIcon={<OpenInNewIcon />}
            onClick={()=>{
              toggleDrawer( false)
              // formatforcheckout()
              handleCheckout(cartData,GetTotalCost())
            }
          }
          >
            Checkout
          </Button> 
        </div>
      </div>
    </React.Fragment>:<div className={classes.empty}>    
    <Typography className={classes.emptyText}>
          cart empty!
        </Typography>

       <Button
       fullWidth
            className={classes.button}
            size="small"
            color="primary"
            variant="outlined"
            onClick={()=>{
              toggleDrawer( false)}
            }
            >
            Continue shopping
            </Button>  </div>}
    </div>
  );
}
