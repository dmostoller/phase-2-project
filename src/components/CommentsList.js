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

    const filteredComments = comments.filter(comment => {
        return(comment.painting_id === id)
    });
    console.log(filteredComments);

    if (!comments) {return <div>Loading...</div>}

    const commentsSection = filteredComments.map(comment => (
        <Comment 
            key={filteredComments.id} 
            name={filteredComments.name} 
            comment={filteredComments.comment} 
        />
    ))

    return (
        <div>
            {commentsSection}
        </div>
    );
}

export default CommentsList