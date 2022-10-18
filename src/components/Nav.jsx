import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-wrapper'>
        <div className='nav-links'>
          <Link to='/'>
            <h3>Estatery</h3>
          </Link>
          <button className='btn'>Rent</button>
          <button className='btn'>Buy</button>
          <button className='btn'>Sell</button>
          <Link to='/favourites'>
            <button className='btn'>Favourites</button>
          </Link>
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
