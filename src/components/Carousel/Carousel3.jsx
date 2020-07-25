import React from "react";
import facilities from "./facilities.js";
import Facility from "./Facility";

const segThree ={
    facility:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "3rem auto",
        maxWidth: "90%",
        height:"auto"
    }
}

function createFacility(facility){
    return(
    <Facility 
    key={facility.id}
    icon={facility.icon}
    name={facility.name}
    description={facility.description}/>
    );
}

function Carousel3(){
    return (
        <dl style={segThree.facility} className="facilities">
         {facilities.map(createFacility)}
         
        </dl>
    );
}

export default Carousel3;