import React, { Component } from "react";
import M from "materialize-css";
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
                <li className="col m3">Home</li>
                <li className="col m3" onClick={this.props.clickProjects}>
                  Projects
                </li>
                <li className="col m3" onClick={this.props.clickSkills}>
                  Skills
                </li>
                <li className="col m3">Resume</li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <div className="logo-div indigo">
            <li className="sidenav-close indigo">Jonathan Erquinigo</li>
          </div>
          <li>link 1</li>
          <li className="sidenav-close" onClick={this.props.clickProjects}>
            Projects
          </li>
          <li className="sidenav-close" onClick={this.props.clickSkills}>
            Skills
          </li>
        </ul>
      </div>
    );
  };

  render() {
    return <div>{this.displayNavbar()}</div>;
  }
}

export default NavBar;
