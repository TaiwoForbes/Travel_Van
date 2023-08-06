import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans'
import VanDetail from './pages/vanDetail'
import "./server"




function App() {


  return (
    <>
      <BrowserRouter>
        <header>
          <Link className='site-logo' to='/Home'>TravelVan</Link>
          <nav>
            <Link to='/about'>About</Link>
            <Link to='/vans'>Vans</Link>
          </nav>
        </header>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
