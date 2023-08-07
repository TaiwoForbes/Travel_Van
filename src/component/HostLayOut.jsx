import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../index.css'

const HostLayOut = () => {
  return (
    <div>
      <nav className='host-nav'>
        <Link to='/host'>DashBoard</Link>
        <Link to='income'>Income</Link>
        <Link to='reviews'>Reviews</Link>
      </nav>
      <Outlet />
    </div>

  )
}

export default HostLayOut