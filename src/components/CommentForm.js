import React from "react";

function CommentForm(){
    return (
        <form style={{width:"60%", margin:"auto"}}className="ui form">
            <div className="field">
                <label>Add Comment</label>
                <input type="text" name="name" placeholder="Your name here"></input>
                <textarea id="comment" name="comment" placeholder="Your comment here"></textarea>               
            </div>
            <div className="field"></div>
            <button style={{float: "right"}} className="ui button small teal" type="submit">Submit</button>
        </form>
    )
}

export default CommentForm