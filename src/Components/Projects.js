import React, { Component } from "react";
import saveAPlate1 from "../Assets/saveAPlate1.png";

class Projects extends Component {
  constructor() {
    super();
  }

  displaySaveAPlate = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="card col s12 m6">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={saveAPlate1} alt="" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Save A Plate <i className="material-icons right">more_vert</i>
              </span>
              <div className="row">
                <p className="col s6">
                  <a href="#">This is a link</a>
                </p>
                <p className="col s6">
                  <a href="#">This is a link</a>
                </p>
              </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Card Title<i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.displaySaveAPlate()}</div>;
  }
}

export default Projects;
