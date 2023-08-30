import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export function loader({params}){
    return getVans(params.id)
}

const VanDetail = () => {
    // const params = useParams()
    // const [van, setVan] = useState(null)
    const location = useLocation()
    const van = useLoaderData()


    /* useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id]) */


    const search = location.state?.search || '' //Optional chaining
    const slice = search.slice(6)
   

    return (
        <div>
            {
                search.slice(1) ? (<Link
                    to={`..${search}`}
                    relative="path" //This is to make sure we're going one level up of the hierachy instead of the index route
                    className='back-button'>
                    &larr; <span>Bact to {slice} vans</span>
                </Link>) : (<Link
                    to={`..${search}`}
                    relative="path" //This is to make sure we're going one level up of the hierachy instead of the index route
                    className='back-button'>
                    &larr; <span>Bact to all vans</span>
                </Link>) 
            }
            

            <div className="van-detail-container">
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>
                            {van.type}
                        </i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
            </div>
        </div>
    )
}

export default VanDetail