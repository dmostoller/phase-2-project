import React, {useState} from "react";

function CommentForm({onAddComment, paintingId, onChangeIsComFormVis}){
    const initialState = {
        painting_id: parseInt(paintingId),
        name: "",
        comment: ""
    }
    
    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
        //console.log(e.target.value)
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
            .then((newComment) => {
                onAddComment(newComment)
            })
        setFormData(initialState)
    }

    return (
        <div className="ui container">
        <form style={{width:"60%", margin:"auto", padding:"25px"}} className="ui form" onSubmit={handleAddNewComment}>
            <div className="field">
                <label>Add Comment</label>
                <input type="text" id="name" name="name" value={formData.name} placeholder="Your name here" onChange={handleChange}></input>
                <textarea type="text" id="comment" name="comment" value={formData.comment} placeholder="Your comment here" onChange={handleChange}></textarea>               
            </div>
            <div className="field"></div>
            <button onClick={onChangeIsComFormVis} style={{float: "left"}} className="ui button small teal" type="button">Hide Form</button>
            <button style={{float: "right"}} className="ui button small teal" type="submit">Submit</button>
            {/* Alert box to show are you sure this is what you want? */}
        </form>
         
         </div>
    )
}

export default CommentForm