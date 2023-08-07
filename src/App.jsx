import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import VanDetail from './pages/vans/VanDetail'
import DashBoard from './pages/host/DashBoard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import "./server"
import LayOut from './component/LayOut'
import HostLayOut from './component/HostLayOut'




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />
            

            <Route path="host" element={<HostLayOut />}>
              <Route index element={<DashBoard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
