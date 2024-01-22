import React, {useState, useEffect} from "react";
import PaintingsList from "./PaintingsList";

function PaintingsPage () {

    const [paintings, setPaintings] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:3004/paintings")
      .then((res) => res.json())
      .then((paintings) => {setPaintings(paintings)})
    }, []);

    return (
        <div className="ui container">
            <PaintingsList paintings={paintings} />
        </div>
    )
}

export default PaintingsPage