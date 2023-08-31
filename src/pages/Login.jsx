import React, { useState } from "react"
import {redirect, useNavigate,useNavigation, useSearchParams, useLoaderData,useActionData,Form } from "react-router-dom"
import { loginUser } from "../api"


export const action = async ({request})=>{
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    //Process the info by passing to the loginUser function
    try{
        const data = await loginUser({email,password})
    localStorage.setItem("loggedIn", true)
    
    const response = redirect('/host')
    response.body = true  // It's silly, but it works
    return response
    }
    catch(error){
        return error.message

    }
    
}


export const loginLoader = ({ request }) => {
    const url = new URL(request.url).searchParams.get('message')

    return url
}



export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status,setStatus] = useState('idle')
    const navigation = useNavigation().state
    // const [error,setError] = useState(null)

    const errorMessage = useActionData()

    const message = useLoaderData()
    const navigate = useNavigate()

    // const [search,setSearch] = useSearchParams()
    // console.log(search.get('message'))

   /*  function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        setError(null)
        loginUser(loginFormData)
        
        .then(data => navigate("/host",{replace: true}))
        .catch(err => setError(err))
        .finally(()=> setStatus('idle'))
        
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    } */

    return (
        <div className="login-container">
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}
            <h1>Sign in to your account</h1>
            {/* Warning goes here. Give it a classname="red" */}
            <Form method="post" replace className="login-form">
                <input
                    name="email"
                    
                    type="email"
                    placeholder="Email address"
                    
                />
                <input
                    name="password"
                   
                    type="password"
                    placeholder="Password"
                   
                />
                <button disabled={navigation === 'submitting'}>
                    {navigation === 'submitting'? 'Loggin in....': 'Log in'}</button>
            </Form>
        </div>
    )

}