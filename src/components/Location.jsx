import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Locate from "../img/Location.jpg";
import Image from "react-bootstrap/Image";

const locationStyle = {
  col:{
    backgroundColor: "#000000"
  },
  address:{
    marginTop: "10%",
    textAlign: "center",
    lineHeight: "2.5",
    fontSize: "large"
  },
  locationImg:{
  marginTop: "2%",
  marginBottom:"10%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
  }
}

function Location(){
    return(
      <Container fluid>
      <Row>
      <Col md={4} lg={6} style={locationStyle.col}>
      <div style={locationStyle.address}>
        <h1>Site Address</h1>
        <p>
        {/* Find Way to Break line div cannot appear after p (warning)*/}
        <div>
        Plot No 3 <br /> 
      
        East New Amar Nagar<br />

        Manewada,Nagpur<br />
        </div>
        </p>
      </div>
      <div style={locationStyle.address}>
        <h1>Office Address</h1>
        <p>
        <div>
        Plot No 2D Jaiprabhu Layout <br /> 
      
        Opp. Stake Bank of Travancore<br />

        Manish Nagar,Nagpur<br />
        </div>
        </p>
      </div>
      </Col>
      <Col md={4} lg={6} style={locationStyle.col}>
           <Image style={locationStyle.locationImg} src={Locate} alt="Location" fluid/>
      </Col>
      </Row>
      </Container>
    );
}

export default Location;

// style={locationStyle.locationImg}