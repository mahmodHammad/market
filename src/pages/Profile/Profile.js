import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Item from "./components/Item"
import AddIcon from '@material-ui/icons/Add';
// import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Edit from "./components/Edit"
import axios from "axios"


const useStyles = makeStyles(theme => ({

  root: {
    // padding: 10,
    paddingTop: 40,
    minHeight:"100vh"
    // textAlign: "center"
  },
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
  headerTitle:{
    marginBottom:40
  },

}));

export default function Projec({ creadit,setcreadit,onDeposit}) {
  const classes = useStyles();
  const [openAdd, setopenAdd] = useState(false);
  const [openCredit, setopenCredit] = useState(false);

  const [YourProducts,setYourProducts]  = useState([
    {
        id:"1",
        name:"first porduct",
        price:500,
        description:"this is the description of the product",
        isMine:true,
    }, {
      id:"2",
        name:"sec porduct",
        price:300,
        description:"this is the description of the product",
        isMine:true,
    }, {
      id:"3",
        name:"other porduct",
        price:900,
        description:"this is the description of the product",
        isMine:true,
    }
])
const onDelete = (id)=>{
  const newProducts = YourProducts.filter(p=>p.id!==id)
  setYourProducts(newProducts)
}

const onCreate = (data)=>{
  const old = [...YourProducts,data]
  setYourProducts(old)
  console.log("Prouct created",data)
}

const onUpdate = (data)=>{
  const changedIndex= YourProducts.findIndex(p=>p.id==data.id)
  const old = [...YourProducts]
  old[changedIndex]=data
  console.log("UPPPPPPP",data)
  console.log("old",old)
  setYourProducts(old)
}



useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
    <Edit open={openAdd} setOpen={setopenAdd} isCreate={true} onSubmit={onCreate} onDeposit={onDeposit} />
    <Edit open={openCredit} setOpen={setopenCredit} isCreate={true} onSubmit={onCreate} isDeposit={true} onDeposit={onDeposit} />

        <Container  className = {classes.body}>
        <div className={classes.header}>
              <Typography className={classes.headerItem}> Current Credit: ${creadit} </Typography>
         <div>
              <Button size="small" style={{marginRight:20}} onClick={()=>setopenCredit(true)} variant="outlined"> Deposit credit </Button> 
              <Button 
              onClick={()=>setopenAdd(true)}
              startIcon={<AddIcon/>}
              size="small" variant="contained"> Add prodcut </Button> 
        </div>
       
          </div>
          <Typography className={classes.headerTitle} variant="h5" justifyContent="center" align="center">
            Your Products
          </Typography>
 
        <Grid container spacing={6}>
            {YourProducts.map(product=>  <Grid item xs={4} className={classes.product} >
                <Item product={product} onUpdate={onUpdate} onDelete={onDelete}/>
            </Grid>
            )}
         </Grid>    
        </Container>
    </div>
  );
}