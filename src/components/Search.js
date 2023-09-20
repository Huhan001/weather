import React from "react";

const Searchbox =  ({searchfield,searchChange}) => {
    return (
        <div>
            <input
                placeholder= 'Country Search'
                className= 'searchfield'
                type='search'
                onChange={searchChange}/>
        </div>
        )
}

export default Searchbox

// i think i need to export capital letter only.searchfield