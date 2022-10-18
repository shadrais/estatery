import React, { useState, useEffect } from 'react'
import useListing from '../context/listingContext'
import useDebounce from '../hooks/useDebounce'

const Search = () => {
  const [search, setSearch] = useState('')
  const { handleSearch } = useListing()
  const debouncedSearchTerm = useDebounce(search, 500)

  useEffect(() => {
    handleSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  return (
    <div>
      <div className='search-bar'>
        <h1>Search Properties to Rent</h1>
        <input
          className='input input-search'
          type='text'
          placeholder='Search for a property'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
