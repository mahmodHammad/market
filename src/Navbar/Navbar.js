import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dropdwon from "./components/Dropdown";


const useStyles = makeStyles(theme => ({
  logoContainer: {
    flexGrow: 1,
    justifyContent: "left"
  },
  logo: { height: 60, margin: 3 },
  nav: { background: "#333"},
  study: {
    padding: "2px 10px",
    margin: 2,
    marginLeft: 5
  },
  themeicon: { marginLeft: 4 },
  "@media (max-width: 600px)": {
    logo:{height:45}
  },

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

export default function Navbar({ props }) {
  const classes = useStyles();
  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar color="transparent" className={classes.nav}>
          <Toolbar>
            <div className={classes.logoContainer}>
              <IconButton onClick={()=>window.scrollTo(0, 0)} color="inherit" component={Link} to="/" size="large">
                
                  <img
                  className={classes.logo}
                  src="https://upwork-usw2-prod-file-storage-wp4.s3.us-west-2.amazonaws.com/workplace/attachment/042b39b48a46976f37b5bbfae4d46de0?response-content-disposition=inline%3B%20filename%3D%22noise.jpg%22%3B%20filename%2A%3Dutf-8%27%27noise.jpg&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIFg1IikMZjroxCQlP3fMtA0ovvDjjBrOMPfruapVc3kgAiEA1iMOYVqsCov6ZOIgdcvKGIe0Ai%2FBMcxml02u2hy99pcq1gQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDMMrcyEyWWZkhVoQeCqqBNCIYGMsU43PQ8JVA%2BUhCgVUbN7pTN7yxojD8D46L7IqT0OUfvrxnaYfYTyuDkwbopb4s8dKNGO8ciKUho2jVN4IjjthlOFs1uQCxCjY8TyfSHyXGDMkAApDWkaq3VMD2PRpP7mIoSaMwyt2j%2Bb83URyWDhiriqFzwNpNJZx87rKmcYLrcXEHgnoK%2BBEfp9OVBY%2BpqKT%2B0ht3p%2B%2FBaKgFOicVtdvJ7degtBvAzRnYLCH9OXDzmWtK6b7PmiAXn0MTsK7twuWGy%2FpVvS%2BCZhSTzYIRq%2FIqhGh87IUsfhobpAmOoiqQQ%2FSzZLiAbnYf%2FDtI%2BtPBviL0GXny7vqMcnvfH88u11%2F5jbEDlTQgK6pZQEUFfCUQ5UtjYzfWzi3gCPs13ODCVcQJj4i3dcqDubNFmWneaCePOZ4kIeBiMiU%2FqUKTaaB8n7gn5RN5d4sYTp9RFQMsLisiInY5N1UtThKhdp0hJIl3%2Fwg4PE90ZU3k68vs7BNZATbgmCrgxrG0S8grMp7ovbSIAXn8eMlAkstwqkOTHkDNE4qW5Jp%2F%2F7Sayg%2F7qi%2FcoqtwKPo6psZVL56XqaRbM6IZKMEodEnX11ak%2B3bBAs0XIe9RiM5I5hqfMGnp4jfVun3jEIFmtFULRhnPKQ8b%2BD9li5dXK7jBNHWgFRJm0w3A3p82Y%2BcLZpteAhhD9H8xYCJKGinCg%2BiVsqxgG89QwsSNXbklJLI%2BeYrno%2FxYkmvj0S2EUR4MLeP8YQGOqcBm8N2Tml2h7U%2BClZckVv7Bgza3vTbGalugzmYdIAHDj8s74Gn3e2W2dy4sZK6Lhj0fDUs%2FJ66uj3JSfB2bMLkF7dGK%2Ba6y9SmhNy%2BmQ2JqSYYgJeukTU9hYjcoYQVqA3Ob9%2FltIN2BNJ%2FYfTnsCT1jPyrQjRBoybuNyWCd%2FK1YXVjWGVbnA4vjBOII686TtLi184%2BMD6Dc4u8H8QyFmqem4XsGF75Lgc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210513T000627Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW5VZRQP4X5%2F20210513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=118d3ec276048bbc0a4f374141dddec39ce83b47e1d86367ec72afcab315312d"
                  alt="Mahmoud Hammad"
                />
                
              </IconButton>
            </div>

            <Hidden smDown={true}>
              <Button
                size="large"
                className={classes.study}
                color="primary"
                component={Link}
                to={{
                  pathname: "/",
                  state: {
                    scrollTo: "contact"
                  }
                }}
              >
                contact
              </Button>
              <Button
                size="large"
                className={classes.study}
                variant="outlined"
                color="secondary"
                component={Link}
                to={{
                  pathname: "/",
                  state: {
                    scrollTo: "projects"
                  }
                }}
              >
                My Projects
              </Button>
            </Hidden>
            <Hidden mdUp={true}>
              <Dropdwon />
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}