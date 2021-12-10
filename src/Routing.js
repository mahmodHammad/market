import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Shop from "./pages/shop/Shop"
import Home from "./pages/home/Home"
import Checkout from "./pages/checkout/Checkout"
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Drawer from "./Navbar/components/Drawer"
import Button from '@material-ui/core/Button';
import "./App.css";
import Sucess from "./pages/feedback/Sucess"
import Dash from "./pages/Dash/Dash"
import Profile from "./pages/Profile/Profile"
import SignIn from "./pages/sign/SignIn"
import Signup from "./pages/sign/Signup"

import p1 from "./assets/p1.jpeg"
import Avatar from "./assets/avatar.jpeg"

const products = [
  {
    id:"prod1",
    title:"EM tee",
    price:40,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
  },
  {
    id:"prod12",
    title:"Hello tee",
    price:30,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
  },
  ]
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 90,
  },
  button:{
    margin:20,
    float:"right"
  }
}));

export default function Projec({ Cart,theme }) {
  const classes = useStyles();
  const [draweOpen, SetdraweOpen] = useState(false);
  const [creadit, setcreadit] = useState(40);
  const [cartData, SetcartData] = useState([
  ]);

  const removeItem = (id)=>{
    const newCart = cartData.filter(c=>c.id!==id)
    SetcartData(newCart)
  }

const setsize=(itemID,newsize)=>{
  const indd = cartData.findIndex(cd=>itemID===cd.id)
  if(indd !==-1){
    // EXISTED
    
   cartData[indd].size = newsize
   const old = [...cartData]
    SetcartData(old)
  }
}
 
  const toggleDrawer = ( open) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    SetdraweOpen( open );
  };

  const addToCart = (item,openDrawer)=>{
    const newItem = {...item}
    const found = cartData.findIndex(c=>c.id==item.id)
    if(found == -1){
      newItem.quan=1
      SetcartData([...cartData,newItem])
    }else{
      cartData[found].quan +=1
      SetcartData([...cartData])
    }
    // const uniqueID = Math.ceil(Math.random()*100000000)
    // newItem.id = uniqueID

    if(openDrawer){
      SetdraweOpen( true );
    }else{
      
    }
    // const indd = cartData.findIndex(cd=>id===cd.id)
    // if(indd !==-1){
    //   // EXISTED
    //  cartData[indd].quan +=1
    //   SetcartData(cartData)

    // }else{
    //   item.quan=1
    //   SetcartData([...cartData,item])
    // }
  }

  const increaseQuantitly = (itemID,sign=1)=>{
    const indd = cartData.findIndex(cd=>itemID===cd.id)
    if(indd !==-1){
      // EXISTED
      
     cartData[indd].quan += sign
     const old = [...cartData]
      SetcartData(old)
    }
  }

  const handleCheckout =(cartItems,totalCost)=>{
    console.log("cartItems",cartItems)
    console.log("totalCost",totalCost)
    if(creadit >= totalCost){
      onDeposit(-totalCost)
      SetcartData([])
      alert("Your Order is placed!")
    }else{
      alert("No enough mony ya fa2eer")
    }
  }

  const onDeposit =(amount)=>{
    console.log("amm",amount)
    const newAmount = creadit+ Number(amount)
    setcreadit(newAmount)
  }

  useEffect(() => {
  
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
        <div style={{ background: theme.palette.background.default ,minHeight:"100vh"}}>
            <BrowserRouter>
            <Navbar
       isHomePage={false}
          isDarkMode={true}
          // draweOpen={draweOpen}
          // toggleDrawer={toggleDrawer}
          draweOpen={()=>console.log("")}
          toggleDrawer={toggleDrawer}
          cartData={cartData}
        />

            <Drawer handleCheckout={handleCheckout} removeItem={removeItem} setsize={setsize} increaseQuantitly={increaseQuantitly} toggleDrawer={toggleDrawer} draweOpen={draweOpen}cartData={cartData} />
              <div style={{marginTop:84}}>
              <Switch>
                <Route exact path="/" render={props => <Home creadit={creadit}/>} />
                <Route exact path="/profile" render={props => <Profile onDeposit={onDeposit} creadit={creadit} setcreadit={setcreadit}/>} />
                <Route exact path="/login" render={props => <SignIn/>} />
                <Route exact path="/signUp" render={props => <Signup/>} />
                <Route exact path="/dash" render={props => <Dash creadit={creadit}/>} />
                <Route exact path="/success" render={props => <Sucess/>} />
                <Route exact path="/shop" render={props => <Shop cartData={cartData} addToCart={addToCart} toggleDrawer={toggleDrawer} products={products}/>}/>
                <Route exact path="/checkout" render={props => <Checkout cartData={cartData}/>} />
              </Switch>
              </div>

              {/* <Footer /> */}
            </BrowserRouter>
          </div>
  );
}

