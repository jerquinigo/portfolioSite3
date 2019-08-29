import React, { Component } from "react";
import nycPhone from "../Assets/nycphone.jpg";
import "./CSS/Skills.css";

class Skills extends Component {
  constructor() {
    super();
  }

  displayParallaxSkills = () => {
    return (
      <div className="parallax-container" id="parallax-skills">
        <div className="parallax">
          <img src={nycPhone} alt="" />
        </div>
      </div>
    );
  };

  displaySkills = () => {
    return (
      <div>
        <div className="container">
          <div className="row">
            <span className="col s12 m12">frontend</span>

            <img
              className="col s6 m3 skillImage"
              src="https://icongr.am/devicon/html5-original.svg"
              alt=""
            />
            <img
              className="col s6 m3 skillImage"
              src="https://icongr.am/devicon/css3-original.svg"
              alt=""
            />

            <img
              className="col s6 m3 skillImage"
              src="https://icongr.am/devicon/react-original.svg"
              alt=""
            />

            <img
              className="col s6 m3 skillImage"
              src="https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png"
              alt=""
            />

            <img
              className="col s6 m3 skillImage"
              src="https://icongr.am/devicon/javascript-original.svg"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <span className="col s12 m12">Backend</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.displayParallaxSkills()}
        {this.displaySkills()}
      </div>
    );
  }
}

export default Skills;
