import React, {Component} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import subRedditCar1 from "../Assets/subRedditCarousel/subRedditCar1.png"
import subRedditCar2 from "../Assets/subRedditCarousel/subRedditCar2.png"



class SubRedditCarousel extends Component {
    render(){
        return(
            <Carousel>
                <div>
                    <img src={subRedditCar1} alt=""/>
                </div>
                <div>
                    <img src={subRedditCar2} alt=""/>
                </div>
            </Carousel>
        )
    }
}


export default SubRedditCarousel;

