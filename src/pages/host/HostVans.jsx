import React from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"
import { Suspense } from "react"

export async function loader() {
    await requireAuth()
    return defer({ hostVans: getHostVans() })
}

export default function HostVans() {
    const hostDataPromise = useLoaderData()



    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <Suspense fallback={<h1>Loading host vans .....</h1>}>
                <Await resolve={hostDataPromise.hostVans}>
                    {vans => {
                        const hostVansEls = vans.map(van => (
                            <Link
                                to={van.id}
                                key={van.id}
                                className="host-van-link-wrapper"
                            >
                                <div className="host-van-single" key={van.id}>
                                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                                    <div className="host-van-info">
                                        
                                        <h3>{van.name}</h3>
                                        <p>${van.price}/day</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                        return (
                            <div className="host-vans-list">
                                <section>
                                    {hostVansEls}
                                </section>
                            </div>
                        )
                    }}


                </Await>

            </Suspense>

        </section>
    )
}