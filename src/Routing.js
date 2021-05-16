import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Cat from "./three/Cat"
import Shop from "./pages/shop/Shop"
import Checkout from "./pages/checkout/Checkout"
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import p1 from "./assets/p1.jpeg"
import p2 from "./assets/p2.jpeg"
import l1 from "./assets/l1.jpeg"
import l2 from "./assets/l2.jpeg"

const cartData=[
  {id:"1234",title:"EM TEE",quan:1,size:"XL", price:20,img:p1},
  {id:"1234",title:"ME FEE",quan:3,size:"XL", price:30,img:p2},
]
const products = [
  {
    id:"prod1",
    title:"hello",
    price:20,
    avatar:p1,
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
  }
  ]
const useStyles = makeStyles(theme => ({
  root: {
    // padding: 10,
    paddingTop: 90,
    color: theme.palette.txt.body,

    // textAlign: "center"
  },
  button:{
      margin:20,
    float:"right"
    }
}));


export default function Projec({ Cart,theme }) {
  const classes = useStyles();
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
              />
            
              <Switch>
                <Route exact path="/shop" render={props => <Shop products={products}/>}/>
                <Route exact path="/" render={props => <Cat/>} />
                <Route exact path="/checkout" render={props => <Checkout cartData={cartData}/>} />
              </Switch>
              {/* <Footer /> */}
            </BrowserRouter>
          </div>
  );
}

