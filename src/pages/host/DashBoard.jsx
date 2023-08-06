import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div>
       <h1>Dashboard</h1> 
       <Outlet/>
    </div>
  )
}

export default DashBoard