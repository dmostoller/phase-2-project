import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
   return ( 
    <header className="ui container">
      <div className="ui four item menu">
        <NavLink to="/" className="item" >Home</NavLink>
        <NavLink to="/about" className="item" >About Me</NavLink>
        <NavLink to="/paintings" className="item" >Paintings</NavLink>
        <NavLink to="/contact" className="item" >Contact</NavLink>
      </div>
    </header>
    )
}

export default Header