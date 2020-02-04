import React, { Component } from "react";
import M from "materialize-css";
import JonResume from "./Jonathan_E_Software_Engineer_Resume.pdf";
import "./CSS/NavBar.css";

class NavBar extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    });
  }

  displayNavbar = () => {
    return (
      <div>
        <nav className="nav-wrapper indigo">
          <div className="container">
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <div className="row">
              <ul className="right hide-on-med-and-down">
                <li
                  className="col m3  nav-text-style"
                  onClick={this.props.clickHome}
                >
                  {" "}
                  <a className="nav-text-style">Home</a>
                </li>

                <li
                  className="col m3 nav-text-style"
                  onClick={this.props.clickProjects}
                >
                  <a className="nav-text-style">Projects</a>
                </li>
                <li
                  className="col m3 nav-text-style"
                  onClick={this.props.clickSkills}
                >
                  <a className="nav-text-style">Skills</a>
                </li>
                <li className="col m3 nav-text-style">
                  <a href="https://drive.google.com/file/d/1SmPW9UYgRuV2cetYOe0SXtUu3lHHZ7nT/view?usp=sharing" target="blank" className="nav-text-style">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mobile-menu container">
          <ul className="sidenav" id="mobile-links">
            <div
              className="logo-div sidenav-close indigo"
              onClick={this.props.clickHome}
            >
              <li
                className="sidenav-close logo-div white-text indigo customize-name"
                onClick={this.props.clickHome}
              >
                Jonathan Erquinigo
              </li>
            </div>
            <div
              className="sidenav-close sub-nav-item-divs "
              onClick={this.props.clickProjects}
            >
              <li
                className="sidenav-close sub-nav-item-divs customize-subnames"
                onClick={this.props.clickProjects}
              >
                Projects
              </li>
            </div>

            <div
              className="sidenav-close sub-nav-item-divs"
              onClick={this.props.clickSkills}
            >
              <li
                className="sidenav-close sub-nav-item-divs customize-subnames"
                onClick={this.props.clickSkills}
              >
                <span className="test">Skills</span>
              </li>
            </div>
            <a className="mobile-anchor-resume" href="https://drive.google.com/file/d/1SmPW9UYgRuV2cetYOe0SXtUu3lHHZ7nT/view?usp=sharing" target="blank">
              <div className="sidenav-close sub-nav-item-divs">
                <li className="sidenav-close sub-nav-item-divs customize-subnames">
                  Resume
                </li>

                <li />
              </div>
            </a>
          </ul>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.displayNavbar()}</div>;
  }
}

export default NavBar;
