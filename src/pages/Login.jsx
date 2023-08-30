import React, { useState } from "react"
import { useNavigate,useSearchParams,useLoaderData } from "react-router-dom"


export const loginLoader =  ({request})=>{
    const url =new  URL(request.url).searchParams.get('message')
    
    return url
}



export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData()

    // const [search,setSearch] = useSearchParams()
    // console.log(search.get('message'))
    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {message && <h2>{message}</h2>}
            <h1>Sign in to your account</h1>
            {/* Warning goes here. Give it a classname="red" */}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}