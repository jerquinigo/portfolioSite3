import React, { Component } from "react";
import M from "materialize-css";

class NavBar extends Component {
  // constructor() {
  //   super();
  // }

  displayNavbar = () => {
    return (
      <div>
        <nav className="nav-wrapper indigo">
          <div className="container">
            <a href="#" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
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
