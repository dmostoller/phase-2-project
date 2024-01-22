import React from "react";

export default function Painting ({image, title, sold, width, height, materials, price}) {
    return (
        <div className="four wide columns">
        <div class="ui card">
            <div class="image">
                <img src={image}></img>
            </div>
            <div class="content">
                <a class="header">{title}</a>
                <div class="description">{materials}</div>
                <div class="description">{width}" x {height}"</div>
               
                <div class="description">
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
