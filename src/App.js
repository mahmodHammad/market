import React from "react";
import "./App.css";
import Cat from "./three/Cat";
import Navbar from "./Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <div className="App">
        <Cat/>
      </div>
    </div>
  );
}

export default App;
