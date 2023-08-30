import { redirect } from "react-router-dom"

export async function requireAuth() {
    const response = redirect('/login?message=You must log in first')
    response.body = true  // It's silly, but it works
    return response
   
}