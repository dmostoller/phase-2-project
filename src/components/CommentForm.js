import React, {useState} from "react";

function CommentForm({onAddComment, paintingId}){
    const initialState = {
        painting_id: parseInt(paintingId),
        name: "",
        comment: ""
    }
    
    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        console.log(e.target.value)
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleAddNewComment(e){
        e.preventDefault()
        setFormData({...formData, painting_id: paintingId})
        fetch("http://localhost:3004/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...formData})
        })
            .then((res) => res.json())
            .then((comment) => {
                onAddComment(comment)
            })
        setFormData(initialState)
    }

    return (
        <form style={{width:"60%", margin:"auto"}} className="ui form" onSubmit={handleAddNewComment}>
            <div className="field">
                <label>Add Comment</label>
                <input type="text" name="name" placeholder="Your name here" onChange={handleChange}></input>
                <input type="text" name="comment" placeholder="Your comment here" onChange={handleChange}></input>               
            </div>
            <div className="field"></div>
            <button style={{float: "right"}} className="ui button small teal" type="submit">Submit</button>
        </form>
    )
}

export default CommentForm