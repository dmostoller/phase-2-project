import React from "react";

function Header() {
   return ( 
    <header className="ui container">
      <div className="ui four item menu">
        <a className="item active" >Home</a>
        <a className="item" >About Me</a>
        <a className="item" >Portfolio</a>
        <a className="item" >Contact</a>
      </div>
    </header>
    )
}

export default Header