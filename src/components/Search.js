import React from "react";

function Search({searchQ, onSearch, sortBy}) {
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
                    <input type="radio" value="Default" checked={true} onChange={sortBy} />
                    Default
                </label>
                <label>
                    <input type="radio" value="Small" checked={false} onChange={sortBy} />
                    Smallest to Largest
                </label>
                <label>
                    <input type="radio" value="Large" checked={false} onChange={sortBy} />
                    Largest to Smallest
                </label>
            </div>
        </div>


    )

}
export default Search