import React from "react";

function Comment({name, comment, id}){
    return (
        <div key={id} className="ui segment">
            <div className="content">
                <p className="header">{name}</p>
                <div className="description">{comment}</div>
            </div>
        </div>
    )
}

export default Comment