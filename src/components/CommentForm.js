import React from "react";

function CommentForm(){
    return (
        <form className="ui form">
            <div className="field">
                <label>Comment</label>
                <input type="text" name="comment" placeholder="comment"></input>
                <input type="text" name="first name" placeholder="first name"></input>
            </div>
            <div className="field"></div>
            <button style={{paddingBottom: "5px", float: "right"}} className="ui button teal" type="submit">Submit</button>
        </form>
    )
}

export default CommentForm