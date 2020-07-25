import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Parking from "../../img/Parking.jpg";

const carouselTwoStyle={
    container:{
        margin:"1rem auto",
        backgroundColor:"black"
    },
    col:{
        margin:"4rem 1rem 4rem 1rem",
        padding:"0.9rem",
    },
    floorPlan:{
        margin:"1rem 1rem 1rem 3rem",
        textAlign:"center",
        width:"75%",
    },
    imgFloor:{
        maxWidth:"100%",
        height:"auto"
    },
    parkingDiv:{
        textAlign:"center",
        margin:"1rem 2rem 1rem 1rem"
    },
    parking:{
       maxWidth:"100%",
       height:"auto"
    }
}

function Carousel2(){
    return(
        <div style={carouselTwoStyle.container}>
            <Row>
                <Col style={carouselTwoStyle.col}>
                    <h2>Floor-Plan</h2>
                    <div style={carouselTwoStyle.floorPlan}>
                    <Image style={carouselTwoStyle.imgFloor} src="https://i.pinimg.com/originals/56/fb/0d/56fb0d9ce05c0438f295c8d294a0d40b.jpg" alt="Floor-Plan"  />
                    </div>
                </Col>
                <Col style={carouselTwoStyle.col}>
                    <h2>Parking</h2>
                    <div style={carouselTwoStyle.parkingDiv}>
                    <Image style={carouselTwoStyle.parking} src={Parking} alt="Parking" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Carousel2;

