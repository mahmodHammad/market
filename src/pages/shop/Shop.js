import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "./components/Gridlist"

import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Drawer from "../../Navbar/components/Drawer"

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
    paddingTop: 160,
    // textAlign: "center"
  },
  img: {
    width: "100%",
    textAlign: "center",
    margin: "auto",
    borderRadius: 5
  },
  info:{
    color: theme.palette.txt.body,
    marginTop:20
  },
  header: {
    // fontSize: "2.4rem",
    // fontWeight: "bold",
    // textAlign: "center",
    color: theme.palette.txt.title
  },
  TechHeader: { fontSize: "1.4rem", letterSpacing: 1, marginTop: 7 },
  body: {
    fontSize: "1.2rem",
    color: theme.palette.txt.body,
    textAlign: "left"
  },
  techUsedHeader: { color: theme.palette.txt.title, fontSize: "1.6rem" },
  techUsed: { textAlign: "left", marginTop: 30, marginBottom: 50 },
  tech: { color: theme.palette.txt.body, fontSize: "1rem" },
  logoIcon: {
    width: 40,
    height: 40,
    color: "#222"
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    margin: "30px 20px",
    textShadow:"1px 1px 2px #0005",
    "&:hover": {
      textDecoration: "none"
    },
    // float:"right"
  },
  "@media (max-width: 600px)": {
    root: { paddingTop: 130 },
    // header: {fontSize: "1.8rem"},
    TechHeader:{fontSize:"1.2rem"}
  }
}));

export default function Projec({ addToCart,products,toggleDrawer }) {
  const classes = useStyles();
  useEffect(() => {
    // const info = AllProjects.find(e => e.id === projId);
  });

  return (
    <div className={classes.root}>
        <Container>
          {products.map(product=><div>
            <GridList tileData={product.images}/>
              <Typography className={classes.info} >
                {product.description}
              </Typography>

            <Button
              className={classes.button}
              fontSize="large"
              color="secondary"
              variant="contained"
              startIcon={<OpenInNewIcon />}
              onClick={()=>addToCart( product)}
              // component={Link}
              //   to={{
              //     pathname: "/checkout",
              //     state: {
              //       scrollTo: "shop"
              //     }
              //   }}
            >
              Add to cart
            </Button> 

          </div>)}
        
        </Container>
    </div>
  );
}