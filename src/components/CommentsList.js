import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Comment from "./Comment";

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

    return (
        <div>
            {commentsSection}
        </div>
    );
}

export default CommentsList