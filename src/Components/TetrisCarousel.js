import React, {Component} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import tetrisGameOver from "../Assets/TetrisCarousel/tetrisGameOver.png"





class TetrisCarousel extends Component {
    render(){
        return(
            <Carousel>
                <div>
                    <img src={tetrisGameOver} alt=""/>
                </div>
            </Carousel>
        )
    }
}


export default TetrisCarousel;
