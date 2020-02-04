import React, { Component } from "react";
import "./CSS/Footer.css";
import JonResume from "./Jonathan_E_Software_Engineer_Resume.pdf";
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
              <a
                className="footer-anchor"
                href="https://github.com/jerquinigo"
                target="blank"
              >
                <div className="col s4 m4">
                  <i class="fa fa-github fa-4x" />
                </div>
              </a>
              <a
                className="footer-anchor"
                href="https://www.linkedin.com/in/jerquinigo/"
                target="blank"
              >
                <div className="col s4 m4">
                  <i class="fa fa-linkedin-square fa-4x" />
                </div>
              </a>
              <a className="footer-anchor" href="https://drive.google.com/file/d/1SmPW9UYgRuV2cetYOe0SXtUu3lHHZ7nT/view?usp=sharing" target="blank">
                <div className="col s4 m4">
                  <i class="fa fa-id-card-o fa-4x" />
                </div>
              </a>
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
