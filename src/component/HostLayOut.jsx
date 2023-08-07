import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../index.css'

const HostLayOut = () => {
  return (
    <div>
      <nav className='host-nav'>
        <Link to='/host'  className={({isActive})=> isActive ? 'active-link':null}>DashBoard</Link>
        <Link to='income'  className={({isActive})=> isActive ? 'active-link':null}>Income</Link>
        <Link to='reviews'  className={({isActive})=> isActive ? 'active-link':null}>Reviews</Link>
      </nav>
      <Outlet />
    </div>

  )
}

export default HostLayOut