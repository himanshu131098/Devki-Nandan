import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Overview from "./Overview";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const carouselOneStyle={
    container:{
        margin:"2.8rem auto",
        backgroundColor:"black"
    },
    col:{
        margin:"2rem",
        padding:"0.9rem",
        marginLeft:"auto",
        marginRight:"auto"
    },
    button:{
        textAlign:"center",
        margin:"4rem"
    }
}

const link3d = "https://www.99acres.com/kanha-devki-nandan-manewada-nagpur-npxid-r320417#showModal";

function Carousel1(){
    return (
      <div style={carouselOneStyle.container}>
      <Row>
      <Col md={4} lg={6} >
            <div style={carouselOneStyle.col}>
            <Image  src="https://projectcdn.99acres.com/project_data/e905b4/block2_54741/3D/29367_B2_1F1_3D.jpg" alt="Layout" fluid/>
           </div>
      </Col>
      <Col md={4} lg={6} style={carouselOneStyle.col}>
       <Overview/>
       <div style={carouselOneStyle.button}>
       <Button size="lg"  href={link3d} variant="light" active>3D-VIEW</Button>
       </div>
      </Col>
      </Row>
      </div>
    );
}

export default Carousel1;