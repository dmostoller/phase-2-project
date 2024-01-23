import React from "react";
import CarouselContainer from './CarouselContainer.js';

export default function HomePage () {

return (
    <div className="ui container">
        <div style={{float:"left", paddingLeft:"50px", paddingTop:"100px"}} className="ui container">
            <h1>Yasmin Mostoller</h1>
            <p>"To draw, you must close your eyes and sing."</p>
            <p style={{fontStyle:"italic"}}>-Pablo Picasso</p>
            
        </div>
        {/* <div style={{float:"right", paddingRight:"50px"}}><CarouselContainer /></div> */}
    </div>
)
}