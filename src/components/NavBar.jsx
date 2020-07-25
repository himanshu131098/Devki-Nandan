import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";







const navbarStyle={
    navDiv:{
        marginBottom:"1.5rem"
    },
    brand:{
        color:"#f8aa27",
        fontFamily: "'Bitter', serif",
        fontSize:"x-large"
    },
    control:{
        right:"0"
    },
    link:{
        fontFamily:" 'Fredoka One', cursive",
        color: "white"
    }
}

function NavigationBar(){
    return(
        
        <Navbar  style={navbarStyle.navDiv} sticky="top" bg="dark" expand="lg">
        <Navbar.Brand  style={navbarStyle.brand}>Devki Nandan</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbar-collapse">
        <Nav.Link style={navbarStyle.link} href="#home">Home</Nav.Link>
        <Nav.Link style={navbarStyle.link} href="#layout">Layout</Nav.Link>
        <Nav.Link style={navbarStyle.link} href="#location">Location</Nav.Link>
        <Nav.Link style={navbarStyle.link} href="#contact">Contact-Us</Nav.Link>
        </Navbar.Collapse>
        </Navbar>
        
    );
}

export default NavigationBar;

