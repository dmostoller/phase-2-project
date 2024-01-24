import React from "react";

function Search({searchQ, onSearch, sortBy, selected}) {
    return (
        <div className="ui container">
            <input 
            type="text"
            value={searchQ}
            placeholder="Search paintings..."
            onChange={(e) => onSearch(e.target.value)}
            />
            <div>
                <label>
                    <input type="radio" value="Default" checked={selected === "Default"} onChange={sortBy} />
                    Default
                </label>
                <label>
                    <input type="radio" value="Small" checked={selected === "Small"} onChange={sortBy} />
                    Smallest to Largest
                </label>
                <label>
                    <input type="radio" value="Large" checked={selected === "Large"} onChange={sortBy} />
                    Largest to Smallest
                </label>
            </div>
        </div>
    )

}
export default Search