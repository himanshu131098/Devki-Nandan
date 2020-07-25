import React from "react";
import Image from "react-bootstrap/Image";

const facilities ={
  entry:{
    textAlign:" center",
    maxWidth: "13rem",
    margin:"0.5rem",
    // marginBottom: "0.5rem",
    // marginLeft:"0.5rem",
    // marginRight:"0.5rem",
    padding: "1.2rem",
    borderRadius: "3px",
    boxShadow: "0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor:" #000000",
    transition: "all 100ms ease-in-out"
  },
  icon:{
    margin: "0 auto 20px",
    width: "30%",
    height: "30%"
  }
}


function Facility(props){
    return (
        <div style={facilities.entry}>
        <Image style={facilities.icon} src={props.icon} alt="Logo" fluid/>
          <dt>
            <span>{props.name}</span>
          </dt>
          <dd>{props.description}</dd>
        </div>
      );
}

export default Facility;