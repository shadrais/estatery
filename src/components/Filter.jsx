import React from 'react'

const Filter = () => {
  return (
    <div>
      <div className='filter'>
        <div className='filter-wrapper'>
          <div className='filter-item'>
            <h3>Location</h3>
            <input
              className='input'
              type='text'
              placeholder='Enter a location'
            />
          </div>
          <div className='filter-item'>
            <h3>When</h3>
            <input className='input' type='date' placeholder='Enter Date' />
          </div>
          <div className='filter-item'>
            <h3>Price</h3>
            <select className='input'>
              <option value=''>Select Price</option>
              <option value=''>1000</option>
              <option value=''>2000</option>
              <option value=''>3000</option>
            </select>
          </div>
          <div className='filter-item'>
            <h3>Property Type</h3>
            <select className='input'>
              <option value=''>Select Property Type</option>
              <option value=''>House</option>
              <option value=''>Apartment</option>
              <option value=''>Duplex</option>
            </select>
          </div>
          <div className='filter-item'>
            <button className='btn btn-filled'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
