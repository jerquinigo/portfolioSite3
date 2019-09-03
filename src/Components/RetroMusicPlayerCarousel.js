import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import RetroMusicPlayerNirvanna from "../Assets/RetroMusicPlayerCarousel/RetroMusicPlayerNirvanna.png";
import RetroMusicPlayerRiseAgainst from "../Assets/RetroMusicPlayerCarousel/RetroMusicPlayerRiseAgainst.png";
import RetroMusicPlayerSum41 from "../Assets/RetroMusicPlayerCarousel/RetroMusicPlayerSum41.png";
import RetroMusicPlayerPhum from "../Assets/RetroMusicPlayerCarousel/RetroMusicPlayerPhum.png";
class RetroMusicPlayerCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={RetroMusicPlayerNirvanna} alt="" />
        </div>
        <div>
          <img src={RetroMusicPlayerRiseAgainst} alt="" />
        </div>
        <div>
          <img src={RetroMusicPlayerSum41} alt="" />
        </div>
        <div>
          <img src={RetroMusicPlayerPhum} alt="" />
        </div>
      </Carousel>
    );
  }
}

export default RetroMusicPlayerCarousel;
