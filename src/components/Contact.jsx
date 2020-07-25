import React from "react";
import Card from "react-bootstrap/Card";
import contacts from "../contacts";
import CardGroup from "react-bootstrap/CardGroup";

const contactStyle ={
    container:{
        marginTop:"5%"
    },
    img :
    {   
        // 18.75 20
        width:"75%",
        height:"60%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        marginTop:"2%",
        marginBottom:"2%"
    },
    main:{
        margin:"6%",
        backgroundColor:"black",
        padding:"2.5%"
    },
    title:
    {
        fontFamily:" 'Fredoka One', cursive",
        fontSize: "x-large",
        textAlign: "center",
        marginTop: "5%",
        color: "white"
    },
    text:
    {
        textAlign: "center"
    }
}



function createContact(contact,index){
    return(
        <Card style={contactStyle.main} key={index}>
            <Card.Img style={contactStyle.img} src={contact.img} alt="architect's-img"/>
            <Card.Title style={contactStyle.title}>{contact.name}</Card.Title>
            <Card.Text style={contactStyle.text}>{contact.phone}</Card.Text>
        </Card>
       
    );
}

function Contact(){

 return(
     <div style={contactStyle.container}>
     <h1>Project By</h1>
     <div style={contactStyle.text}>
     <CardGroup>
     {contacts.map(createContact)}
     </CardGroup>
     </div>
     </div>
 );

}

export default Contact;