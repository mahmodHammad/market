import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import { TimeToLeaveRounded } from '@material-ui/icons';j

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '90vw',
    // maxWidth: '36ch',
    // backgroundColor:"#0009",
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
    //   color:"#fff"
  },
  price:{
    top: "28%",
    transform: "translateY(0)"
  },
  priceLable:{

  }
}));

export default function CartItem({img,title,quantity,price}) {
  const classes = useStyles();

  return (
    <ListItem alignItems="center" className={classes.listItemStyle}>
        <ListItemAvatar>
            {/* <img src={p1} width={60} height={60}/> */}
        <Avatar alt="Remy Sharp" src={img} className={classes.avLarge}/>
        </ListItemAvatar>
        <ListItemText
        primary={title}
        className={classes.title}
        secondary={
            <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
            >
                Quantity: {quantity}
            </Typography>
        }
        />
        <ListItemSecondaryAction className={classes.price}>
            <Typography variant="body2" aria-label="comments"className={classes.inline} >
            ${price} USD
            </Typography>
            </ListItemSecondaryAction>
    </ListItem>
  );
}
