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
    width: '100%',
    // maxWidth: '36ch',
    // backgroundColor:"#aaa2",
  },
  title:{
    color: theme.palette.txt.title,

  },
  inline: {
    display: 'inline',
    color: theme.palette.txt.body,
  },
  avLarge:{
    width: theme.spacing(12),
    height: theme.spacing(12),
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
    top: "30%",
    transform: "translateY(0)"
  }
}));

export default function CartItem({cartData}) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {cartData.map((d,index)=><React.Fragment> 
            <ListItem alignItems="center" className={classes.listItemStyle}>
                <ListItemAvatar>
                    {/* <img src={p1} width={60} height={60}/> */}
                <Avatar alt="Remy Sharp" src={d.img} className={classes.avLarge}/>
                </ListItemAvatar>
                <ListItemText
                primary={d.title}
                className={classes.title}
                secondary={
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        Quantity: {d.quan}
                    </Typography>
                }
                />
                <ListItemSecondaryAction className={classes.price}>
                    <Typography aria-label="comments" >
                    ${d.price} USD
                    </Typography>
                    </ListItemSecondaryAction>
            </ListItem>
            {index !==cartData.length-1?<Divider  component="li" className={classes.dividerStyle}/>:null
 }
             </React.Fragment>
  )}
    </List>
  );
}
