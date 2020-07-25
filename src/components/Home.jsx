import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../img/Logo-1.png";
import Image from "react-bootstrap/Image";
import desktopElevation from "../img/desktopElevation.jpg";


const homeStyle ={
  col:{
    backgroundColor: "#000000",
    
  },
  headDiv:{
    margin:"3rem 0",
    textAlign:"center"
  },
  heading:{
    fontFamily: "'Bitter', serif"
  },
  headp:{
    fontSize:"x-large",
    margin:"2rem 0",
  }
}


function Home(){
    return (
      <Container fluid>
      <Row>
      <Col md={4} lg={6} style={homeStyle.col}>
        <div style={homeStyle.headDiv}>
        <Image  src={Logo} alt="Logo" fluid/>
        <h2 style={homeStyle.heading}>2BHK Luxurious Apartment</h2>
        <h3 style={homeStyle.headp}>Project By : Kanha Realities</h3>
        {/* <div style={homeStyle.pDiv}>
        
        </div> */}
        </div>
      </Col>
      <Col  md={4} lg={6} style={homeStyle.col}>
           <div style={homeStyle.headDiv}>
           <Image  src={desktopElevation} alt="Elevation" fluid/>
           </div>
      </Col>
      </Row>
      </Container>
    );
  
  }

export default Home;