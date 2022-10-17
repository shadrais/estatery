import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import Search from './components/Search'
import Filter from './components/Filter'
import Listings from './components/Listings'
const App = () => {
  return (
    <Router>
      <Nav />
      <div className='main-page'>
        <div className='container'>
          <Search />
          <Filter />
          <Listings />
        </div>
      </div>
    </Router>
  )
}

export default App
