import React from "react";
import background from "../images/img.jpg";
import Quote from "./Quote"; 

function Jumbotron() {
    return (
    <div className="container justify ='center' "  style={{
    // width: "1700px",
    // paddingTop: "0px",
    // paddingBottom: "0px",
    marginBottom: "20px",
    // height: "190px",
    overflow: "auto",
     backgroundImage: `url(${background})`,

      }} >
         
     
    <div>
            <br></br>
            <br></br>
            <Quote />
            </div>
    </div>
    )
}


export default Jumbotron; 