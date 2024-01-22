import React from "react";
import { Link } from "react-router-dom";


export default function AboutPage () {

return (
    <div style={{width: "75%", margin: "auto"}} class="ui card">
        <div class="image">
            <img class="ui huge image" src="./images/slider-2.jpg" />
        </div>
        <div class="content">
            <div class="header">
                Yasmin Mostoller
            </div>
            <div class="meta">
                <span class="category">Philadelphia, PA</span>
            </div>
            <div class="description">
                <p>A trained artist with a Master's degree in Fine Arts originally from Tehran, Iran and now living in Philadelphia, Pennsylvania. My paintings are colorful, abstract, geometric, and imaginative works that are a window into my creative mind. Thanks for visiting my website.</p>
            </div>
            <div>
                <a href="https://www.facebook.com/yasminmostollerart" target="none"><img style={{float: "left", padding:"5px"}} src="./icons/facebook.svg"></img></a>
                <a href="https://www.instagram.com/yasminnunsy/" target="none"><img style={{float: "left", padding:"5px"}} src="./icons/instagram.svg"></img></a>
            </div>
            <div style={{padding: "10px", float: "right"}}> 
                <Link to="/contact" className="ui button small teal">Contact Me</Link>
            </div>
        </div>
</div>




)
}