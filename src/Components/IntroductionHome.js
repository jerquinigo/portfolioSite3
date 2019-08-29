import React, { Component } from "react";
import M from "materialize-css";
import subwayImg from "../Assets/subwayHeader.jpg";
import "./CSS/IntroductionHome.css";

class IntroductionHome extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems);
    });
  }

  displayParallaxHeader = () => {
    return (
      <div className="parallax-container" id="parallax-intro">
        <div className="parallax">
          <img src={subwayImg} alt="" />
          <div className="container-main-flexbox">
            <div className="container" id="displayNameHomePage">
              <div className="row">
                <span className="unique col s12 m12">Jonathan Erquinigo</span>
              </div>
            </div>
            <div className="row">
              <span className="unique col s12 m12">Software Engineer</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.displayParallaxHeader()}</div>;
  }
}

export default IntroductionHome;
