import React, { useState, useEffect } from "react";
import { useParams,Link, Outlet,NavLink, useLoaderData } from "react-router-dom";
import { getVan } from "../../api";
import { requireAuth } from "../../utils";


export async function loader({params}){
    await requireAuth()
    return getVan(params.id)
}


export default function HostVanDetail() {
    // const { id } = useParams();
    // const [currentVan, setCurrentVan] = useState(null);
    const currentVan = useLoaderData()

    
    const VanDetailSection = ({ van })=> {
        const activeStyles = {
            fontWeight: "bold",
            textDecoration: "underline",
            color: "#161616",       
        }
        
        return (
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${van.type}`}>
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
    
                <nav className="host-van-detail-nav">
                <NavLink
                 to='.'
                 end //This remove the default style on this link
                  style={({isActive})=> isActive? activeStyles:null}>
                    Details
                </NavLink>
    
                <NavLink
                 to='pricing'
                 style={({isActive})=> isActive? activeStyles:null}>
                    Pricing
                </NavLink>
    
                <NavLink
                 to='photos' style={({isActive})=> isActive? activeStyles:null}>
                    Photos
                </NavLink>
    
                </nav>
                
                <Outlet context={{currentVan}}/>
                
            </div>
        );
    }

/*     useEffect(() => {
        const fetchVanData = async () => {
            try {
                const response = await fetch(`/api/host/vans/${id}`);
                const data = await response.json();
                setCurrentVan(data.vans[0]);
            } catch (error) {
                console.error("Error fetching van data:", error);
            }
        };

        fetchVanData();
    }, [id]); */

    return (
        <section>
            <Link 
                to='../'
                relative="path" //This is to make sure we're going one level up of the hierachy instead of the index route
                 className='back-button'>
                    &larr; <span>Bact to all vans</span>
            </Link>
            
                <VanDetailSection van={currentVan} />
                       
        </section>
    );
}
