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
        <div className='main-page'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favourites' element={<Favorurites />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ContextProvider>
  )
}

export default App
