import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'


export function loader() {
    return getVans() 
}

const Vans = () => {
    // const [vans, setVans] = useState([])
    const [search, setSearch] = useSearchParams()
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    const typeFilter = search.get('type')

    const vans = useLoaderData()



    /* useEffect(() => {
        async function loadVan() {
            setLoading(true)
            try{
                const data = await getVan()
            setVans(data)
            }catch(err){
                console.log('error')
                setError(err)
            }finally{
                setLoading(false)
            }
            
            setLoading(false)
        }
        loadVan()
    }, []) */


    const displayVanElements = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans


    const vanElements = displayVanElements.map(van => {
        return (
            <div key={van.id} className='van-tile'>
                <Link to={`/vans/${van.id}`} state={{ search: `?${search.toString()}` }}>
                    <img src={van.imageUrl} alt={van.name} />
                    <div className='van-info'>
                        <h3>{van.name}</h3>
                        <p>${van.price} <span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

  /*   if (loading) {
        return <h1>Loading....</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    } */

    return (
        <div className='van-list-container'>
            <h1>Explore Our Van Options</h1>

            <div className='van-list-filter-buttons'>

                <button onClick={() => setSearch('?type=simple')} className={`van-type simple ${typeFilter === "simple" ? 'selected' : ""}`}>
                    Simple
                </button>

                <button onClick={() => setSearch('?type=rugged')} className={`van-type rugged ${typeFilter === "rugged" ? 'selected' : ""}`}>
                    Rugged
                </button>

                <button onClick={() => setSearch('?type=luxury')} className={`van-type luxury ${typeFilter === "luxury" ? 'selected' : ""}`}>
                    Luxury
                </button>

                {
                    typeFilter ? (
                        <button onClick={() => setSearch('?')} className='van-type clear-filters'>
                            Clear Filters
                        </button>
                    ) : null
                }
            </div>
            <div className="van-list">
                {vanElements}
            </div>


        </div>
    )
}

export default Vans