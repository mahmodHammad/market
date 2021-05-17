import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
    //   margin: theme.spacing(1),
    },
  },txt:{
      color:"#eee",
      textAlign: "center",
      alignSelf: "center",
  },btn:{
    padding: 0
  }
}));

export default function BasicButtonGroup({counter,increaseQuantitly,productID}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" size="small" color="primary" aria-label="contained primary button group">
        <Button className={classes.btn} size="small" >-</Button>
        <span className={classes.txt}>{counter}</span>
        <Button className={classes.btn} onClick={()=>increaseQuantitly(productID)} >+</Button>
      </ButtonGroup>
      
    </div>
  );
}
