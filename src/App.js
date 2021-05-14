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
    const isDarkMode = this.state.isDarkMode;

    console.log("apppppppppppply", isDarkMode);
    let oldTheme = { ...this.state.cutumeTheme };

    this.theme = createMuiTheme({
      palette: this.state.cutumeTheme
    });
    this.setState({ cutumeTheme: oldTheme });

    // prevent reverting the mode for the first time
  };

  changeTheme = isDarkMode => {
    const oldTheme = this.state.cutumeTheme;

    if (isDarkMode) dark(oldTheme);
    else light(oldTheme);
    this.setState({ isDarkMode });
    window.localStorage.setItem("mode", isDarkMode);
    this.applyMode();
  };

  clearLocalStorage = () => {
    window.localStorage.clear();
  };

  componentDidMount() {
    let getmode = window.localStorage.getItem("mode");
    if (getmode) {
      let isDarkMode = JSON.parse(getmode);

      const oldTheme = this.state.cutumeTheme;
      if (isDarkMode) dark(oldTheme);
      else light(oldTheme);
      this.setState({ isDarkMode });
      this.applyMode();
    } else {
      // dark mode by default
      window.localStorage.setItem("mode", true);
    }
    this.applyMode();

    // configureAnchors({ scrollDuration: 0 });
  }

  render() {
    const { theme } = this;
    return (
      <div
        className="App"
        style={{
          background: theme.palette.background.default,
          minHeight: "100vh"
        }}
      >
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div
            className="App"
            style={{ background: theme.palette.background.default }}
          >
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Navbar
                changeTheme={this.changeTheme}
                isDarkMode={this.state.isDarkMode}
              />

              {/* <Switch>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route exact path="/Project/:id" component={Projects} />
              </Switch> */}
              {/* <Footer /> */}
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


