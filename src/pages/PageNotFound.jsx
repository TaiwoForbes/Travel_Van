import React from 'react'
import { Link } from 'react-router-dom' 

const PageNotFound = () => {
  return (
    <div>
      <h1>Sorry this page doesnt exit</h1>
      <Link to='/'>
        Bact to home
      </Link>

    </div>
  )
}

export default PageNotFound