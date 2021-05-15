import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import p1 from "../../../assets/p1.jpeg"
import p2 from "../../../assets/p2.jpeg"
import p3 from "../../../assets/l2.jpeg"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { TimeToLeaveRounded } from '@material-ui/icons';

const data=[
    {id:"1234",title:"EM TEE",quan:1,size:"XL", price:20,img:p1},
    {id:"1234",title:"ME FEE",quan:3,size:"XL", price:30,img:p2},
    {id:"1234",title:"SHI ESS",quan:1,size:"XL", price:24,img:p3},
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor:"#aaa2",
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
    marginRight:15
  },
  listItemStyle:{
      paddingTop:20,
      paddingBottom:20,
    // background:"#f00"
  },
  dividerStyle:{
      background:"#fff3",
    //   color:"#fff"
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        {data.map((d,index)=><React.Fragment> 
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
                <ListItemSecondaryAction>
                    <Typography aria-label="comments">
                    ${d.price} USD
                    </Typography>
                    </ListItemSecondaryAction>
            </ListItem>
            {index !==data.length-1?<Divider variant="inset" component="li" className={classes.dividerStyle}/>:null
 }
             </React.Fragment>
  )}
    </List>
  );
}
