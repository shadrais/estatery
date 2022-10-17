import React from 'react'

const Search = () => {
  return (
    <div>
      <div className='search-bar'>
        <h1>Search Properties to Rent</h1>
        <input
          className='input input-search'
          type='text'
          placeholder='Search for a property'
        />
      </div>
    </div>
  )
}

export default Search
