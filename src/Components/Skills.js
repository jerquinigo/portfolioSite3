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
          <div className="container-main-flexbox">
            <div className="container" id="displayNameHomePage">
              <div className="row">
                <span className="unique col s12 m12 name-style">
                  My Tech Stack
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  displaySkills = () => {
    return (
      <div ref={this.props.skills}>
        <div className="container">
          <div className="row">
            <span className="col s12 m12 tech-title">Frontend</span>

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
        <div className="container">
          <div className="row">
            <span className="col s12 m12 tech-title">Backend</span>

            <img
              className="col s6 m3 skillImage2"
              src="https://icongr.am/devicon/postgresql-original.svg"
              alt=""
            />

            <img
              className="col s6 m3 skillImage2"
              src="https://icongr.am/devicon/nodejs-original-wordmark.svg"
              alt=""
            />

            <img
              className="col s6 m3 skillImage2"
              src="https://icongr.am/devicon/express-original-wordmark.svg"
              alt=""
            />

            <img
              className="col s6 m3 skillImage2"
              src="https://icongr.am/devicon/git-original.svg"
              alt=""
            />
          </div>
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
