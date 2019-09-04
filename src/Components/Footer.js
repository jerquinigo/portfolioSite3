import React, { Component } from "react";
import "./CSS/Footer.css";
class Footer extends Component {
  constructor() {
    super();
  }

  displayFooter = () => {
    return (
      <footer class="page-footer indigo">
        <div class="container">
          <div class="row">
            <div class="col l12 s12 m12">
              <h5 class="white-text">Get in contact with me</h5>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <a href="https://github.com/jerquinigo" target="blank">
                <div className="col s4 m4">
                  <i class="fa fa-github fa-4x" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/jerquinigo/" target="blank">
                <div className="col s4 m4">
                  <i class="fa fa-linkedin-square fa-4x" />
                </div>
              </a>
              <div className="col s4 m4">
                <i class="fa fa-id-card-o fa-4x" />
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2019 Jonathan E</div>
        </div>
      </footer>
    );
  };

  render() {
    return <div>{this.displayFooter()}</div>;
  }
}

export default Footer;
