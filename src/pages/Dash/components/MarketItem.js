import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

 
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  header:{}
}))
 

export default function OutlinedCard() {
 

  const classes = useStyles();

  return (
      <Card variant="outlined">
        <CardContent >
    
        <Typography align="center" variant="h5" component="div" >
            Sigma
        </Typography>
        
        
        </CardContent>
        <CardActions className={classes.btn}>
        <Button component={Link} to="/shop" variant="outlined" fullWidth size="small">Visit store</Button>
        </CardActions>
    </Card>
    
  );
}
