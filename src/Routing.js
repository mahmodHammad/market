import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Cat from "./three/Cat"
import Shop from "./pages/shop/Shop"
import Checkout from "./pages/checkout/Checkout"
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Drawer from "./Navbar/components/Drawer"
import Button from '@material-ui/core/Button';
import "./App.css";
import Sucess from "./pages/feedback/Sucess"


import p1 from "./assets/p1.jpeg"
import p2 from "./assets/p2.jpeg"
import l1 from "./assets/l1.jpeg"
import l2 from "./assets/l2.jpeg"
import Avatar from "./assets/avatar.jpeg"

const products = [
  {
    id:"prod1",
    title:"hello",
    size:"L",
    price:1599,
    avatar:Avatar,
    description:"  THE EM TEE, A REDISCOVERY OF THE FLEXIBLE CAGE THAT GIVES OUR BODIES SHAPE.",
    images:[
      {
        img: l1,
        alt: 'Image',
        cols: 2,
      },
      {
          img: p2,
          alt: 'Image',
          cols: 1,
        },
      {
          img: l2,
          alt: 'Image',
          cols: 2,
        },
        {
          img: p1,
          alt: 'Image',
          cols: 1,
        },
    ]
  },
  {
    id:"Mahmoud",
    title:"Mahmoud",
    size:"L",
    price:1899,
    avatar:Avatar,
    description:"  I need to sleep :( ",
    images:[
      {
        img: l1,
        alt: 'Image',
        cols: 2,
      },
      {
          img: p2,
          alt: 'Image',
          cols: 1,
        },
      {
          img: l2,
          alt: 'Image',
          cols: 2,
        },
        {
          img: p1,
          alt: 'Image',
          cols: 1,
        },
    ]
  }
  ]
const useStyles = makeStyles(theme => ({
  root: {
    // padding: 10,
    paddingTop: 90,
    // color: theme.palette.txt.body,
  },
  button:{
      margin:20,
    float:"right"
    }
}));


export default function Projec({ Cart,theme }) {
  const classes = useStyles();
  const [draweOpen, SetdraweOpen] = useState(true);
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
   console.log("ADDING WOW",cartData)
   const old = [...cartData]
    SetcartData(old)
  }
}
 
  const toggleDrawer = ( open) => {
    console.log("TOGGLE",open)
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    SetdraweOpen( open );
  };

  const addToCart = item=>{
    const {id} = item
    const indd = cartData.findIndex(cd=>id===cd.id)
    if(indd !==-1){
      // EXISTED
     cartData[indd].quan +=1
      SetcartData(cartData)

    }else{
      item.quan=1
      SetcartData([...cartData,item])
    }
    SetdraweOpen( true );
  }

  const increaseQuantitly = (itemID,sign=1)=>{
    console.log("ADD ITEM",itemID)
    const indd = cartData.findIndex(cd=>itemID===cd.id)
    if(indd !==-1){
      // EXISTED
      
     cartData[indd].quan += sign
     console.log("ADDING WOW",cartData)
     const old = [...cartData]
      SetcartData(old)
    }
  }

  useEffect(() => {
  
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
        <div
            style={{ background: theme.palette.background.default ,minHeight:"100vh"}}
          >
            <BrowserRouter>
              <Navbar
                isDarkMode={true}
                draweOpen={draweOpen}
                toggleDrawer={toggleDrawer}
              />
            <Drawer removeItem={removeItem} setsize={setsize} increaseQuantitly={increaseQuantitly} toggleDrawer={toggleDrawer} draweOpen={draweOpen}cartData={cartData} />

              <Switch>
                <Route exact path="/" render={props => <Cat/>} />
                <Route exact path="/success" render={props => <Sucess/>} />
                <Route exact path="/shop" render={props => <Shop addToCart={addToCart} toggleDrawer={toggleDrawer} products={products}/>}/>
                <Route exact path="/checkout" render={props => <Checkout cartData={cartData}/>} />
              </Switch>
              {/* <Footer /> */}
            </BrowserRouter>
          </div>
  );
}

