import React, { Component } from "react";
import "./App.css";
// installed components -------------------------
// import { configureAnchors } from "react-scrollable-anchor";
// Mui Components -------------------------------
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// My components --------------------------------
import Navbar from "./Navbar/Navbar";
import Cat from "./three/Cat"
import Shop from "./pages/shop/Shop"
import Checkout from "./pages/checkout/Checkout"
// import Footer from "./../shared/Footer/Footer";
// import Home from "../pages/Home/Home";
// import Projects from "../pages/Projects/Project";

import { dark, light, defaultMode } from "./config/Theme";

export default class App extends Component {
  state = {
    cutumeTheme: defaultMode,
    isDarkMode: true
  };
  // init
  theme = createMuiTheme({
    palette: defaultMode
  });

  applyMode = () => {

    this.theme = createMuiTheme({
      palette: this.state.cutumeTheme
    });

    // prevent reverting the mode for the first time
  };

  render() {
    const { theme } = this;
    return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{ background: theme.palette.background.default ,minHeight:"100vh"}}
          >
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Navbar
                isDarkMode={this.state.isDarkMode}
              />
            
              <Switch>
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/" render={props => <Cat/>} />
                <Route exact path="/checkout" render={props => <Checkout/>} />
              </Switch>
              {/* <Footer /> */}
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
    );
  }
}


