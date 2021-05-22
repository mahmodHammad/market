import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import { TimeToLeaveRounded } from '@material-ui/icons';j
import Selector from "./Selector"

import Adder from "./Adder"
const useStyles = makeStyles((theme) => ({
  root: {
    padding:10
    // width: '90vw',
    // maxWidth: '36ch',
    // backgroundColor:"#0009",
    // marginBottom:40
  },
  title:{
    // color: theme.palette.txt.body,
    fontSize: "2rem",
  },
  inline: {
    fontSize: "0.88rem",
    display: 'flex',
    color: theme.palette.body2,
    paddingBottom:0,
    paddingTop:12,
  },
  avLarge:{
    width: theme.spacing(10),
    height: theme.spacing(14),
    marginRight:15,
    borderRadius: 5
  },
  listItemStyle:{
      paddingTop:20,
      paddingBottom:20,
  },
  dividerStyle:{
      background:"#fff3",
    //   color:"#fff"
  },
  price:{
  },
  priceLable:{
    // color: theme.palette.txt.body,
    // fontSize:10,
    display:"inline",
    paddingTop:4,
    fontSize:"0.7rem"
  },
  quantity:{
    margin:"5px 0"
  },
  sec:{
  },
  secTitle:{
    flexGrow: 1
  },
  DeleteBtn:{
    // fontSize: "0.5rem",
    fontSize:"0.65rem",
    marginLeft:-4,

    position:"relative"
  },DeleteBtnContainer:{
    flexGrow:1,

  }
}));


export default function CartItem({removeItem,size, setsize, productID,increaseQuantitly,img,title,quantity,price}) {
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
            <div className={classes.sec}>
               <Selector id={productID} size={size} setsize={setsize} />
            <Typography
                component="span"
                variant="body2"
                className={`${classes.inline} ${classes.quantity}`}
                color="textPrimary"
            >
               <span className={classes.secTitle} >Quantity:</span> <Adder productID={productID} increaseQuantitly={increaseQuantitly} counter={quantity}/>

            </Typography>
           
           <div  className={classes.inline} >
                <div className={classes.DeleteBtnContainer}>
                  <Button
                  className={classes.DeleteBtn}
                  size="small"
                  color="primary"
                  onClick={()=>removeItem(productID)}
                  startIcon={<DeleteForeverIcon size="small" fontSize="small" />}
                  >
                  Remove item
                  </Button>    
                </div>
                <Typography variant="body2" aria-label="comments"className={classes.priceLable} >
                    ${price/100}.00 USD
                </Typography>
                
            </div>

            </div>
        }
        />
  
    </ListItem>
  );
}
