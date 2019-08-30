import React, { Component } from "react";
import M from "materialize-css";
import "./CSS/NavBar.css";

class NavBar extends Component {
  // constructor() {
  //   super();
  // }

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
            <a href="#" class="brand-logo">
              Logo
            </a>
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <li>Home</li>
              <li>Projects</li>
              <li>Skills</li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <div className="logo-div indigo">
            <li className="indigo">Jonathan Erquinigo</li>
          </div>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </div>
    );
  };

  render() {
    return <div>{this.displayNavbar()}</div>;
  }
}

export default NavBar;
