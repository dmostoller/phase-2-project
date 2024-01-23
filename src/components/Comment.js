import React from "react";

function Comment({name, comment, id}){
    return (
        <div key={id} className="ui cards">
            <div className="card">
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{comment}</div>
            </div>
            </div>
        </div>
    )
}

export default Comment