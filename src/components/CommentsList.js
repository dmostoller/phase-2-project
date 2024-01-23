import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentsList(){
    const [comments, setComments] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3004/comments`)
       .then((res) => res.json())
       .then((comments) => setComments(comments))
    }, []);

    const commentsSection = comments
    .filter(comment => comment.painting_id == id)
    .map(comment => (
        <Comment 
            key={comment.id} 
            name={comment.name} 
            comment={comment.comment} 
        />
        ))

    const addComment = (newComment) =>{
        setComments([...comments, newComment])
    }

    return (
        <div>
            {commentsSection}
            <div><CommentForm onAddComment={addComment}/></div>
        </div>
    );
}

export default CommentsList