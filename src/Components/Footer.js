import React, { Component } from "react";

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
              <div className="col m4">
                <i class="fa fa-github fa-3x" />
              </div>
              <div className="col m4">
                <i class="fa fa-github fa-3x" />
              </div>
              <div className="col m4">
                <i class="fa fa-github fa-3x" />
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
