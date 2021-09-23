import React from 'react'
import './search.css'


const Search = ({searchChange}) => {
        return(
            <div className='pa2'>
            <input
              className='pa3 ba b--green bg-lightest-blue'
              type='search'
              placeholder='Search Robots...'
              onChange={searchChange}
            />
            </div>
        )
    }

export default Search