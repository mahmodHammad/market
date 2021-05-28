import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CartItem from "../../pages/cart/components/Cart"

const useStyles = makeStyles({
    root:{
      // background:"#883355"
    },

});

export default function TemporaryDrawer({removeItem,setsize,increaseQuantitly,draweOpen,toggleDrawer,cartData}) {
 
    useEffect(() => {
        
        // const info = AllProjects.find(e => e.id === projId);
      },[cartData]);
    
    const classes = useStyles();
  return (
    <Drawer className={classes.root} anchor="right" open={draweOpen} onClose={()=>toggleDrawer( false)}>
        <CartItem removeItem={removeItem} setsize={setsize} increaseQuantitly={increaseQuantitly} cartData={cartData} toggleDrawer={toggleDrawer}/>
    </Drawer>
  );
}
