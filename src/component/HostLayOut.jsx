import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../index.css';

const HostLayOut = () => {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
    
}
  return (
    <div>
      <nav className='host-nav'>
        <NavLink to='/host' className={(isActive) => (isActive ?activeStyles : null)}>
          DashBoard
        </NavLink>
        <NavLink to='income' className={(isActive) => (isActive ?activeStyles : null)}>
          Income
        </NavLink>
        <NavLink to='vans' className={(isActive) => (isActive ?activeStyles : null)}>
          Vans
        </NavLink>
        <NavLink to='reviews' className={(isActive) => (isActive ?activeStyles : null)}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayOut;
