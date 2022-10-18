import React from 'react'
import Filter from '../components/Filter'
import Listings from '../components/Listings'
import Search from '../components/Search'

const Home = () => {
  return (
    <>
      <Search />
      <Filter />
      <Listings />
    </>
  )
}

export default Home
