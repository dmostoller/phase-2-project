import React from "react";
import {Link} from "react-router-dom";

export default function Painting ({image, title, sold, width, height, materials, price, id}) {
    return (
        <div className="four wide columns">
            <div className="ui card">
                <div className="image">
                    <img src={image} alt={title}></img>
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="description">{materials}</div>
                    <div className="description">{width}" x {height}"</div>
                
                    <div className="description">
                        {sold ? "SOLD" : <a>{price}</a>}
                    </div>
                    <div style={{paddingBottom: "5px", float: "right"}}> 
                        <Link to={`/paintings/${id}`} className="ui button small teal">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
