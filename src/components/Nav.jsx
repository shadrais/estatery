import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-wrapper'>
        <div className='nav-links'>
          <h3>Estatery</h3>
          <button className='btn'>Rent</button>
          <button className='btn'>Buy</button>
          <button className='btn'>Sell</button>
          <button className='btn'>Manage Property</button>
        </div>
        <div className='nav-social'>
          <button className='btn'>Login</button>
          <button className='btn btn-filled'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
