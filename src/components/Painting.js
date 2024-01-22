import React from "react";

export default function Painting ({image, title, sold, width, height, materials, price, id}) {
    return (
        <div className="four wide columns">
        <div className="ui card">
            <div className="image">
                <img src={image}></img>
            </div>
            <div className="content">
                <a className="header">{title}</a>
                <div className="description">{materials}</div>
                <div className="description">{width}" x {height}"</div>
               
                <div className="description">
                    {sold ? "SOLD" : <a>{price}</a>}
                </div>

                <div style={{paddingBottom: "5px", float: "right"}}> 
                    <button className="ui button small teal">View Comments</button>
                </div>
            </div>
        </div>
        </div>
    );
}
