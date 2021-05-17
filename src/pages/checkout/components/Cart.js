import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import CartItem from "./CartItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import { TimeToLeaveRounded } from '@material-ui/icons';j

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80vw',
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
  }
}));

export default function Cart({cartData}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {cartData.map((d,index)=><React.Fragment> 
          <CartItem img={d.avatar} title={d.title} quantity={d.quan} price={d.price} />
          {index !==cartData.length-1?<Divider  component="li" className={classes.dividerStyle}/>:null
      }
      </React.Fragment>
    )}
    </List>
  );
}
