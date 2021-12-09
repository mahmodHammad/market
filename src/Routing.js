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
import SignIn from "./pages/sign/SignIn"
import Signup from "./pages/sign/Signup"

import p1 from "./assets/p1.jpeg"
import p2 from "./assets/p2.jpeg"
import l1 from "./assets/l1.jpeg"
import l2 from "./assets/l2.jpeg"
import Avatar from "./assets/avatar.jpeg"

const products = [
  {
    id:"prod1",
    title:"EM tee",
    size:"L",
    price:4000,
    avatar:Avatar,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
    images:[
      {
        img: p1,
        alt: 'Image',
        cols: 4,
      },
    ]
  },
  {
    id:"prod1",
    title:"EM tee",
    size:"L",
    price:4000,
    avatar:Avatar,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
    images:[
      {
        img: p1,
        alt: 'Image',
        cols: 4,
      },
    ]
  },

  {
    id:"prod1",
    title:"EM tee",
    size:"L",
    price:4000,
    avatar:Avatar,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
    images:[
      {
        img: p1,
        alt: 'Image',
        cols: 4,
      },
    ]
  },
  {
    id:"prod1",
    title:"EM tee",
    size:"L",
    price:4000,
    avatar:Avatar,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
    images:[
      {
        img: p1,
        alt: 'Image',
        cols: 4,
      },
    ]
  },
  {
    id:"prod1",
    title:"EM tee",
    size:"L",
    price:4000,
    avatar:Avatar,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
    images:[
      {
        img: p1,
        alt: 'Image',
        cols: 4,
      },
    ]
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

    newItem.quan=1
    const uniqueID = Math.ceil(Math.random()*100000000)
    newItem.id = uniqueID
    SetcartData([...cartData,newItem])

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

            <Drawer removeItem={removeItem} setsize={setsize} increaseQuantitly={increaseQuantitly} toggleDrawer={toggleDrawer} draweOpen={draweOpen}cartData={cartData} />
              <div style={{marginTop:84}}>
              <Switch>
                <Route exact path="/" render={props => <Home/>} />
                <Route exact path="/login" render={props => <SignIn/>} />
                <Route exact path="/signUp" render={props => <Signup/>} />
                <Route exact path="/dash" render={props => <Dash/>} />
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

