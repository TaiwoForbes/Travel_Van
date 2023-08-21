import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VanDetailSection({ van }) {
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
        </div>
    );
}

export default function HostVanDetail() {
    const { id } = useParams();
    const [currentVan, setCurrentVan] = useState(null);

    useEffect(() => {
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
    }, [id]);

    return (
        <section>
            {currentVan ? (
                <VanDetailSection van={currentVan} />
            ) : (
                <h1>Loading...</h1>
            )}
        </section>
    );
}
