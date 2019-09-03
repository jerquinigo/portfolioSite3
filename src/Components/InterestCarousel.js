import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import InterestLogin from "../Assets/InterestCarousel/InterestLogin.png";
import InterestAddingImage from "../Assets/InterestCarousel/InterestAddingImage.png";
import InterestPostMalone from "../Assets/InterestCarousel/InterestPostMalone.png";
import InterestDisplayOneImage from "../Assets/InterestCarousel/InterestDisplayOneImage.png";

class InterestCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={InterestLogin} alt="" />
        </div>
        <div>
          <img src={InterestAddingImage} alt="" />
        </div>
        <div>
          <img src={InterestPostMalone} alt="" />
        </div>
        <div>
          <img src={InterestDisplayOneImage} alt="" />
        </div>
      </Carousel>
    );
  }
}

export default InterestCarousel;
