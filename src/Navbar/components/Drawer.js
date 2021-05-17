import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CartItem from "../../pages/checkout/components/Cart"

const useStyles = makeStyles({
    root:{
    },

});

export default function TemporaryDrawer({draweOpen,toggleDrawer,cartData}) {
  const classes = useStyles();
  return (
    <Drawer className={classes.root} anchor="right" open={draweOpen} onClose={toggleDrawer( false)}>
        <CartItem cartData={cartData}/>
    </Drawer>
  );
}
