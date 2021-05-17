import React, { Component } from "react";
import "./App.css";
// installed components -------------------------
// import { configureAnchors } from "react-scrollable-anchor";
// Mui Components -------------------------------
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
// My components --------------------------------

import Routeer from "./Routing"

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
          <Routeer theme={theme} />
        </MuiThemeProvider>
    );
  }
}


