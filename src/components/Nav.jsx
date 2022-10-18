import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [activeTab, setActiveTab] = useState('home')
  return (
    <div className='nav'>
      <div className='nav-wrapper'>
        <div className='nav-links'>
          <Link to='/'>
            <h3>Estatery</h3>
          </Link>
          <Link to='/'>
            <button
              className={`btn ${activeTab === 'home' && 'active'}`}
              onClick={() => setActiveTab('home')}>
              Rent
            </button>
          </Link>
          <button className='btn'>Buy</button>
          <button className='btn'>Sell</button>
          <Link to='/favourites'>
            <button
              className={`btn ${activeTab === 'favourites' && 'active'}`}
              onClick={() => setActiveTab('favourites')}>
              Favourites
            </button>
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
