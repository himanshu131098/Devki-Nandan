import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";

const carouselStyle={
    div:{
        marginTop:"3%"
    },
    carouselMain:{
        marginLeft:"0",
        marginRight:"0"
    }
}

function CarouselSeg(){
    return(
        <Container style={carouselStyle.div} fluid>
        <h1>Layout & Facilities</h1>
        <Carousel style={carouselStyle.carouselMain} interval={3000}>
            <Carousel.Item>
                <Carousel1/>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel2/>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel3/>
            </Carousel.Item> 
        </Carousel>
        </Container>
    );

}

export default CarouselSeg;

