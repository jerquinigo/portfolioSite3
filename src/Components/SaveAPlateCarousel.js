import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SaveAPlateVendorProfile from "../Assets/SaveAPlateCarousel/SaveAPlateVendorProfile.png";
import SaveAPlateVendorFeedPage from "../Assets/SaveAPlateCarousel/SaveAPlateVendorFeedPage.png";
import SaveAPlateClientPage from "../Assets/SaveAPlateCarousel/SaveAPlateClientPage.png";
import SaveAPlateResources from "../Assets/SaveAPlateCarousel/SaveAPlateResources.png";
import SaveAPlateTeam from "../Assets/SaveAPlateCarousel/SaveAPlateTeam.png";

class SaveAPlateCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={SaveAPlateVendorProfile} alt="" />
        </div>
        <div>
          <img src={SaveAPlateVendorFeedPage} alt="" />
        </div>
        <div>
          <img src={SaveAPlateClientPage} alt="" />
        </div>
        <div>
          <img src={SaveAPlateResources} alt="" />
        </div>
        <div>
          <img src={SaveAPlateTeam} alt="" />
        </div>
      </Carousel>
    );
  }
}

export default SaveAPlateCarousel;
