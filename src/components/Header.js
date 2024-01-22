import React from "react";

function Header() {
   return ( 
    <header className="ui container">
      <div className="ui three item menu">
        <a className="item active" >Home</a>
        <a className="item" >Portfolio</a>
        <a className="item" >About Me</a>
      </div>
    </header>
    )
}

export default Header