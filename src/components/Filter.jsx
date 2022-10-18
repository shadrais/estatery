import React from 'react'
import { useState } from 'react'
import useListing from '../context/listingContext'

const Filter = () => {
  const [filter, setFilter] = useState({
    location: '',
    date: '',
    range: '',
    type: '',
  })
  const { filteredTerms } = useListing()
  const handleFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    console.log(filter)
    filteredTerms(filter)
  }

  return (
    <div>
      <div className='filter'>
        <div className='filter-wrapper'>
          <div className='filter-item'>
            <h4>Location</h4>
            <input
              className='input'
              type='text'
              name='location'
              placeholder='Enter a location'
              value={filter.location}
              onChange={handleFilter}
            />
          </div>
          <div className='filter-item'>
            <h4>When</h4>
            <input
              className='input'
              type='date'
              placeholder='Enter Date'
              name='date'
              value={filter.date}
              onChange={handleFilter}
            />
          </div>
          <div className='filter-item'>
            <h4>Price</h4>
            <select
              className='input'
              name='range'
              value={filter.range}
              onChange={handleFilter}>
              <option value=''>Select Price</option>
              <option value={[0, 1000]}>$0-$1000</option>
              <option value={[1000, 2000]}>$1000-$2000</option>
              <option value={[2000, 3000]}>$2000-$3000</option>
              <option value={[3000, 5000]}>$2000-$5000</option>
            </select>
          </div>
          <div className='filter-item'>
            <h4>Property Type</h4>
            <select
              className='input'
              name='type'
              value={filter.type}
              onChange={handleFilter}>
              <option value=''>Select Property Type</option>
              <option value='House'>House</option>
              <option value='Apartment'>Apartment</option>
              <option value='Duplex'>Duplex</option>
            </select>
          </div>
          <div className='filter-item'>
            <button className='btn btn-filled' onClick={handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
