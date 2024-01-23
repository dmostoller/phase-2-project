import React, {useState, useEffect} from "react";
import PaintingsList from "./PaintingsList";
import Search from "./Search";

function PaintingsPage () {

    const [paintings, setPaintings] = useState([])
    const [searchQ, setSearchQ] = useState("")
    const [sortSize, setSortSize] = useState("")

    

    useEffect(() => {
      fetch("http://localhost:3004/paintings")
      .then((res) => res.json())
      .then((paintings) => {setPaintings(paintings)})
    }, []);

    const searchResults = paintings
    .filter(painting => {
        return (
            painting.title.toLowerCase().includes(searchQ.toLowerCase())        
        )
    })


    return (
        <div className="ui container">
            <div className="ui container">
                <Search searchQ={searchQ} onSearch={setSearchQ} sortSize={sortSize} onSortSize={setSortSize}/>
            </div>
            <div className="ui container" style={{marginTop:"50px"}}>
                <PaintingsList paintings={searchResults} />
            </div>
        </div>
    )
}

export default PaintingsPage