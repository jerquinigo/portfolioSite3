import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class InterestCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://snworksceo.imgix.net/bsd/2af5201b-24a2-44ab-8aaf-c0194f7a82f0.sized-1000x1000.png?w=800" />
        </div>
        <div>
          <img src="https://snworksceo.imgix.net/bsd/2af5201b-24a2-44ab-8aaf-c0194f7a82f0.sized-1000x1000.png?w=800" />
        </div>
        <div>
          <img src="https://snworksceo.imgix.net/bsd/2af5201b-24a2-44ab-8aaf-c0194f7a82f0.sized-1000x1000.png?w=800" />
        </div>
      </Carousel>
    );
  }
}

export default InterestCarousel;
