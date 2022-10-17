import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import Search from './components/Search'
import Filter from './components/Filter'
const App = () => {
  return (
    <Router>
      <Nav />
      <div className='main-page'>
        <div className='container'>
          <Search />
          <Filter />
        </div>
      </div>
    </Router>
  )
}

export default App
