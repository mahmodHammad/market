import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MateriaLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
 
  cont:{
    background:"#222",
    borderRadius:10,
    padding:"40px 40px",
  },
  box:{
      borderRadius:8,
      padding:20,
      background:"#0006",
       marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: "1px solid #888"
  }
  }))

export default function SignIn() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('title'),
      price: data.get('price'),
      description: data.get('description'),

    });
  };

  return (
 
        <Box
        className={classes.box}
        
        >
         
          <Typography component="h1" variant="h5">
            Update a product
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={6}>

            <TextField
              margin="normal"
              fullWidth
              id="title"
              label="Product title"
              name="title"
              autoFocus
            />
          </Grid>

          <Grid item xs={6}>

            <TextField
              margin="normal"
              fullWidth
              name="price"
              label="price"
              type="number"
              id="price"
            />
          </Grid>
          </Grid>

           <TextField
              margin="normal"
              fullWidth
              name="description"
              label="description"
              rows={3}
              multiline={true}
              id="description"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
  );
}