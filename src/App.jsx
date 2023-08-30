import { useState } from 'react'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route, createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  redirect,
  useNavigate
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader, loader as vansLoader } from './pages/vans/Vans'
import VanDetail, { loader as vansDetailLoader } from './pages/vans/VanDetail'
import DashBoard from './pages/host/DashBoard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import "./server"
import LayOut from './component/LayOut'
import HostLayOut from './component/HostLayOut'
import HostVans, { loader as HostVansLoader } from './pages/host/HostVans'
import HostVanDetail, { loader as HostVanDetailLoader } from './pages/host/HostVanDetails'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhoto from './pages/host/HostVanPhoto'
import PageNotFound from './pages/PageNotFound'
import Error from './component/Error'
import Login,{loginLoader} from './pages/Login'
import { requireAuth } from './utils'




const router = createBrowserRouter(createRoutesFromElements(
  
  <Route path='/' element={<LayOut />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route
      path="login"
      element={<Login /> }
      loader={loginLoader}
    />
    <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path='vans/:id' element={<VanDetail />} loader={vansDetailLoader} />


    <Route path="host" element={<HostLayOut />}>
      {/* Protected Path */}
      <Route index element={<DashBoard />} loader={async () => await requireAuth()}  />
      <Route path="income" element={<Income />} loader={async () => await requireAuth()}/>
      <Route path="reviews" element={<Reviews />} loader={async () => await requireAuth()} />
      <Route path="vans" element={<HostVans />} loader={HostVansLoader} />

      <Route path="vans/:id" element={<HostVanDetail />} loader={HostVanDetailLoader} >
        <Route index element={<HostVanInfo />} loader={async () => await requireAuth()} />
        <Route path='pricing' element={<HostVanPricing />} loader={async () => await requireAuth()}/>
        <Route path='photos' element={<HostVanPhoto />} loader={async () => await requireAuth()} />
      </Route  >
    </Route>
    <Route path='*' element={<PageNotFound />} />
  </Route>
))


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
