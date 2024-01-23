import React from "react";

function Search({searchQ, onSearch, searchSize, onSearchSize}) {
    return (
        <div className="ui container">
            <input 
            type="text"
            value={searchQ}
            placeholder="Search paintings..."
            onChange={(e) => onSearch(e.target.value)}
            />
            <select onChange={onSearchSize}>
                <option value="">All Sizes</option>
                <option value="small">Small (under 2 feet)</option>
                <option value="medium">Medium (2-5 feet)</option>
                <option value="large">Large (over 5 feet)</option>
            </select>
        </div>


    )

}
export default Search