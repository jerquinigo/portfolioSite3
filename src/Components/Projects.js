import React, { Component } from "react";
import { Link } from "react-router-dom";
import SaveAPlateCarousel from "./SaveAPlateCarousel.js";
import InterestCarousel from "./InterestCarousel.js";
import RetroMusicPlayerCarousel from "./RetroMusicPlayerCarousel.js";
import M from "materialize-css";
import saveAPlate1 from "../Assets/saveAPlate1.png";
import interest1 from "../Assets/interest1.png";
import retroMusicPlayer from "../Assets/retroMusicPlayer.png";
import "./CSS/Projects.css";

class Projects extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // document.addEventListener("DOMContentLoaded", function() {
    //   var elems = document.querySelectorAll(".carousel");
    //
    //   M.Carousel.init(elems, { duration: 2000 });
    // });
  }

  displaySaveAPlate = () => {
    return (
      <div className="main-card-container">
        <div className="card col s12 m6">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={saveAPlate1} alt="" />
          </div>
          <div className="card-content">
            <div className="row">
              <span className="card-title activator grey-text text-darken-4 col s12">
                Save A Plate <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="row">
              <p className="col s6">
                <a
                  className="card-anchor-links"
                  target="blank"
                  href="http://save-a-plate.herokuapp.com/"
                >
                  Live Site
                </a>
              </p>
              <p className="col s6">
                <a
                  className="card-anchor-links"
                  target="blank"
                  href="https://github.com/jerquinigo/SaveAPlate"
                >
                  Github Code
                </a>
              </p>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Save A Plate<i className="material-icons right">close</i>
            </span>
            <div className="card-body-container">
              <div className="container">
                <span className="card-body">
                  A webapp that was created to reduce food waste and hunger in
                  NYC. There are two types of users: Vendors & Clients. Vendors
                  include businesses such as restaurants and catering halls.
                  They have the option to add food items for donation. On the
                  other hand, clients are non-profit organizations that can
                  claim those food items as well as favorite vendors.
                </span>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <SaveAPlateCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  displayInterest = () => {
    return (
      <div className="main-card-container">
        <div className="card col s12 m6">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={interest1} alt="" />
          </div>
          <div className="card-content">
            <div className="row">
              <span className="card-title activator grey-text text-darken-4 col s12">
                Interest <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="row">
              <p className="col s6">
                <a
                  className="card-anchor-links"
                  target="blank"
                  href="https://interest-clone-project.herokuapp.com/"
                >
                  Live Site
                </a>
              </p>
              <p className="col s6">
                <a
                  className="card-anchor-links"
                  target="blank"
                  href="https://github.com/jerquinigo/Pinterest_Clone"
                >
                  Github Code
                </a>
              </p>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Interest<i className="material-icons right">close</i>
            </span>
            <div className="card-body-container">
              <div className="container">
                <span className="card-body">
                  Interest is a clone of the Pinterest Website. I wanted to test
                  my skills and recreate the same functionality that The real
                  website offers. It was a challenging task, but managed to
                  replicate it. It is a fullstack application that uses all my
                  current tech stack skills. It has user authentications and
                  redux to manage the states.
                </span>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <InterestCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  displayRetroPlayer = () => {
    return (
      <div className="main-card-container">
        <div className="card col s12 m6">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={retroMusicPlayer} alt="" />
          </div>
          <div className="card-content">
            <div className="row">
              <span className="card-title activator grey-text text-darken-4 col s12">
                Retro Music Player{" "}
                <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div className="row">
              <p className="col s6">
                <a
                  className="card-anchor-links"
                  target="blank"
                  href="https://retroplayer-af548.firebaseapp.com/"
                >
                  Live Site
                </a>
              </p>
              <p className="col s6">
                <a
                  className="card-anchor-links"
                  target="blank"
                  href="https://github.com/jerquinigo/youtube-retro-player"
                >
                  Github Code
                </a>
              </p>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Retro Music Player<i className="material-icons right">close</i>
            </span>
            <div className="card-body-container">
              <div className="container">
                <span className="card-body">
                  A site that is using YouTube API to get videos by a search
                  request and play the video in an old school crt tv. The
                  application is meant to give the 90's MTV's aesthetic.
                </span>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col s12">
                    <RetroMusicPlayerCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div ref={this.props.projects}>
        <h2 className="projectHeader">My Projects</h2>
        <div className="container">
          {this.displaySaveAPlate()}
          <div className="col m4" />
          {this.displayInterest()}
          {this.displayRetroPlayer()}
        </div>
      </div>
    );
  }
}

export default Projects;
