import React from "react";

function Comment({name, comment, id, date}){
    return (
        <div key={id} className="ui comments">
            <div className="comment">
            <div className="content">
                <div className="author">{name}<div class="metadata"><span class="date">{date}</span></div></div>
                <div className="text">{comment}</div>
                
            </div>
            </div>
        </div>
    )
}

export default Comment