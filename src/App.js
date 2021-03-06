import React, { Component } from "react";
import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home.js";
import IntroductionHome from "./Components/IntroductionHome.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills.js";
import Footer from "./Components/Footer.js";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.projects = React.createRef();
    this.skills = React.createRef();
    this.home = React.createRef();
  }

  clickHome = e => {
    if (this.home.current) {
      this.home.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  clickProjects = e => {
    //.current is verification that your element has rendered
    if (this.projects.current) {
      this.projects.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  clickSkills = e => {
    //.current is verification that your element has rendered
    if (this.skills.current) {
      this.skills.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar
          clickProjects={this.clickProjects}
          clickSkills={this.clickSkills}
          clickHome={this.clickHome}
        />
        <IntroductionHome home={this.home} />
        <Projects projects={this.projects} />
        <Skills skills={this.skills} />
        <Footer />
      </div>
    );
  }
}

export default App;
