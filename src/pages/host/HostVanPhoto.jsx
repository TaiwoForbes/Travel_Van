import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhoto = () => {
    const {currentVan} = useOutletContext()
  return (
    <img src={currentVan.imageUrl} alt={currentVan.name} className='host-van-detail-image' />
  )
}

export default HostVanPhoto