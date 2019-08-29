import React from "react";
import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home.js";
import IntroductionHome from "./Components/IntroductionHome.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroductionHome />
    </div>
  );
}

export default App;
