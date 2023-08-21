import React from 'react';
import { Link, Outlet } from 'react-router-dom';
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
        <Link to='/host' className={(isActive) => (isActive ?activeStyles : null)}>
          DashBoard
        </Link>
        <Link to='income' className={(isActive) => (isActive ?activeStyles : null)}>
          Income
        </Link>
        <Link to='vans' className={(isActive) => (isActive ?activeStyles : null)}>
          Vans
        </Link>
        <Link to='reviews' className={(isActive) => (isActive ?activeStyles : null)}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayOut;
