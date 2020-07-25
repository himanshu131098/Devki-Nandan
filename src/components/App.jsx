import React from "react";
import NavigationBar from "./NavBar";
import Home from "./Home";
import CarouselSeg from "./Carousel/CarouselSeg"
import Location from "./Location";
import Contact from "./Contact";
import Footer from "./Footer";
import "../App.css";



function App(){
  return (
    <div style={{backgroundColor:"#333333"}}>
    <NavigationBar />
    <div id="home">
    <Home />
    </div>
    <div id="layout">
    <CarouselSeg/>
    </div>
    <div id="location">
    <Location />
    </div>
    <div id="contact">
    <Contact />
    </div>
    <Footer />
    </div>
  );
}

export default App;