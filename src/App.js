import React from "react";
import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home.js";
import IntroductionHome from "./Components/IntroductionHome.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroductionHome />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
