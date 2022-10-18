import React from 'react'
import Filter from '../components/Filter'
import Listings from '../components/Listings'
import Search from '../components/Search'

const Home = () => {
  return (
    <div className='main-page'>
      <div className='container'>
        <Search />
        <Filter />
        <Listings />
      </div>
    </div>
  )
}

export default Home
