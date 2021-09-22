import React from 'react'
import './search.css'

const Search = () => {
    return(
        <div className = 'pa2'>
            <input className = 'pa3 bg-lightest-blue'
            type = 'search' 
            placeholder = 'Search Robots...'
            />
        </div>
    )
}

export default Search