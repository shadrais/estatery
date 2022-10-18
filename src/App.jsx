import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import Home from './pages/Home'
import { ContextProvider } from './context/listingContext'
import Favorurites from './pages/Favorurites'
const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favorurites />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App
