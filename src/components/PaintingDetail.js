import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";

function PaintingDetail(){
    const [painting, setPainting] = useState({})
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:3004/paintings/${id}`)
        .then((res) => res.json())
        .then((painting) => setPainting(painting))
    }, []);

    if (!painting) {return <div>Loading...</div>}

    return (
        <div className="ui horizontal box">
            <div className="image">
                <img src={painting.image} alt={painting.title}></img>
            </div>
            <div className="content">
                <a className="header">{painting.title}</a>
                <div className="description">{painting.materials}</div>
                <div className="description">{painting.width}" x {painting.height}"</div>
            
                <div className="description">
                    {painting.sold ? "SOLD" : <a>{painting.price}</a>}
                </div>
                <div><CommentsList /></div>
                <div><CommentForm /></div>
                <div style={{paddingBottom: "5px", float: "right"}}> 
                    <Link to="/paintings" className="ui button small teal" >Back</Link>
                </div>
            </div>
        </div>
    );
}

export default PaintingDetail