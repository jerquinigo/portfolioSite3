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
      <div className="parallax-container">
        <div className="parallax">
          <img src={subwayImg} alt="" />
          <div className="container">
            <div className="row">
              <span className="unique col s12 m12">Jonathan Erquinigo</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.displayParallaxHeader()}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default IntroductionHome;
