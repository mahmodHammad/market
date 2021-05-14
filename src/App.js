// import React from "react";
// import "./App.css";
// import Cat from "./three/Cat";
// import Navbar from "./three/shared/Navbar/Navbar"

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <div className="App">
//         <Cat/>
//       </div>
//     </div>
//   );
// }

// export default App;


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
            className="App"
            style={{ background: theme.palette.background.default }}
          >
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Navbar
                isDarkMode={this.state.isDarkMode}
              />
<Cat/>
              {/* <Switch>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route exact path="/Project/:id" component={Projects} />
              </Switch> */}
              {/* <Footer /> */}
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
    );
  }
}


