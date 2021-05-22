import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Badge from "@material-ui/core/Badge";

import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dropdwon from "./components/Dropdown";
import logo from "../assets/logo.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
  logoContainer: {
    flexGrow: 1,
    justifyContent: "left"
  },
  logo: { height: 80, marginLeft: -10 },
  nav: { background: "#000"},
  study: {
    padding: "2px 10px",
    margin: 2,
  },
  themeicon: { marginLeft: 4 },
  "@media (max-width: 600px)": {
    logo:{height:45},
    // nav:{marginBottom:100}
  },badge:{
    marginRight:10,
    marginBottom: -3
  },
  badgeContainer:{
    padding: 20,
    paddingRight: 0
  }

}));

function HideOnScroll(props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({ toggleDrawer ,isHomePage,cartData}) {
  const classes = useStyles();
  const itemsNumberOnCart= isHomePage?0:cartData.length
  return (
    <div>
        <AppBar color="transparent" className={classes.nav}>
          <Toolbar>
            <div className={classes.logoContainer}>
              <IconButton onClick={()=>window.scrollTo(0, 0)} color="secondary" component={Link} to="/" size="large">
                  <img
                  className={classes.logo}
                  src={logo}
                  alt="Terraform"
                />
                
              </IconButton>
            </div>

            <Hidden smDown={true}>
            {true? <Button
                size="large"
                className={classes.study}
                variant="outlined"
                color="primary"
                component={Link}
                to={{
                  pathname: "/shop",
                  state: {
                    scrollTo: "shop"
                  }
                }}
              >
              Shop
              </Button>:null}
            </Hidden>

            <Hidden mdUp={true}>
            {isHomePage?
              <Dropdwon toggleDrawer={toggleDrawer}  />
              : 
             <div className={classes.badgeContainer} onClick={()=>toggleDrawer(true)}>
              <Badge className={classes.badge} badgeContent={itemsNumberOnCart} color="primary">
                 <ShoppingCartIcon onClick={()=>toggleDrawer(true)} color="primary" fontSize="small" />
              </Badge>
             </div> 

            }
            </Hidden>

           
        



          </Toolbar>
        </AppBar>
    </div>
  );
}


