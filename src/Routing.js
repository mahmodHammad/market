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
import axios from "axios"

import p1 from "./assets/p1.jpeg"
import Avatar from "./assets/avatar.jpeg"

 
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
  const [activeMarket, SetactiveMarket] = useState({});
  const [username, Setusername] = useState("");

  const [Tocken,setTocken]  = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxYjM3N2RhYjcyNzZkYTM2ZDE1MGJhMSIsInVzZXJuYW1lIjoia2lyb2xvcyIsImVtYWlsIjoia0BrMC5jbyIsImJhbGFuY2UiOjAsImVhcm5pbmdzIjowLCJsb2NhdGlvbiI6IkVhc3QifSwiaWF0IjoxNjM5MTUxOTAwLCJleHAiOjE2NzA3MDk1MDB9.Z5I5rRU000DycaYTlZHSq3PMbujCF6sBPCco43t8KD0")
  
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

  const addToCart = (item,openDrawer,sellerID)=>{
    
    const newItem = {...item}
    newItem.sellerID=sellerID;

    const found = cartData.findIndex(c=>c._id==item._id)
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


    cartItems.forEach(cartItem=>{
      axios({
        method: 'post',
        url: 'https://dd61-45-243-66-42.ngrok.io/api/purchase-product',
        headers: {"auth-token":Tocken}, 
        data: {
            "sellerID": cartItem.sellerID,
            "productID": cartItem._id
        }
      }).then(r=>{
        console.log("r",r)
        const newAmount = creadit+ Number(-(cartItem.price * cartItem.quan))
        setcreadit(newAmount)
        SetcartData([])
        alert("purches sucessfully")
        SetdraweOpen(false)
      }
      ).catch(err=>{
          alert("No enough money")
      })
    })

  }

  const onDeposit =(amount)=>{
    console.log("amm",amount)
    axios({
      method: 'post',
      url: 'https://dd61-45-243-66-42.ngrok.io/api/increase-balance',
      headers: {"auth-token":Tocken}, 
      data: {
        amount: amount, // This is the body part
      }
    }).then(r=>console.log("r",r))
    
    const newAmount = creadit+ Number(amount)
    setcreadit(newAmount)
  }

  useEffect(() => {
    axios.get('https://dd61-45-243-66-42.ngrok.io/api/auth',{headers:{"auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxYjM3N2RhYjcyNzZkYTM2ZDE1MGJhMSIsInVzZXJuYW1lIjoia2lyb2xvcyIsImVtYWlsIjoia0BrMC5jbyIsImJhbGFuY2UiOjAsImVhcm5pbmdzIjowLCJsb2NhdGlvbiI6IkVhc3QifSwiaWF0IjoxNjM5MTUxOTAwLCJleHAiOjE2NzA3MDk1MDB9.Z5I5rRU000DycaYTlZHSq3PMbujCF6sBPCco43t8KD0"}}).
  then(function (response) {
    const userName = response.data.user.username
    const balance = response.data.user.balance
    setcreadit(balance)
    Setusername("userName")

    console.log("RES",response)
  })

    
    // const info = AllProjects.find(e => e.id === projId);
  },[]);

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
                <Route exact path="/" render={props => <Home Tocken={Tocken} name={username} creadit={creadit}/>} />
                <Route exact path="/profile" render={props => <Profile Tocken={Tocken} onDeposit={onDeposit} creadit={creadit} setcreadit={setcreadit}/>} />
                <Route exact path="/login" render={props => <SignIn Tocken={Tocken}/>} />
                <Route exact path="/signUp" render={props => <Signup Tocken={Tocken}/>} />
                <Route exact path="/dash" render={props => <Dash Tocken={Tocken} name={username} SetactiveMarket={()=>console.log("HEYYYFYFYFY")} creadit={22}/>} />
                <Route exact path="/success" render={props => <Sucess/>} />
                <Route exact path="/shop" render={props => <Shop Tocken={Tocken} activeMarket={activeMarket} cartData={cartData} addToCart={addToCart} toggleDrawer={toggleDrawer} />}/>
                <Route exact path="/checkout" render={props => <Checkout cartData={cartData}/>} />
              </Switch>
              </div>

              {/* <Footer /> */}
            </BrowserRouter>
          </div>
  );
}

