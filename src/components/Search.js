import React from "react";

const Searchbox =  ({searchfiled,searchChange}) => {
    return (
        <div>
            <input
                className= 'searchfield'
                type='search'
                onChange={searchChange}/>
        </div>
        )
}

export default Searchbox

// i think i need to export capital letter only. 