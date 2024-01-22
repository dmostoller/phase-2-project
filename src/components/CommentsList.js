import React, {useEffect, useState} from "react";

function CommentsList(){
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("http://localhost:3004/comments")
       .then((res) => res.json())
       .then((comments) => setComments(comments))
    }, []);

    if (!comments) {return <div>Loading...</div>}

    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id} className="ui segment">
                    <div className="content">
                        <a className="header">{comment.name}</a>
                        <div className="description">{comment.comment}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentsList