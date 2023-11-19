//login
import { useState } from 'react'
const Login = () => { 
    const [email , setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleSubmit1 = async(e) =>{
    e.preventDefault()

    const user = {email, password}
    const response = await fetch('http://localhost:4000/api/v1/users/login', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    } )
    const json = await response.json();

    if(!response.ok)
    {
        setError(json.error)
    }
    if(response.ok)
    {
        setEmail(null)
        setPassword(null)

        setError(null)
        console.log("Logged in", json)
    }
}

return (
    <div>
        <h2>Login</h2>
        <form className="create" onSubmit={handleSubmit1}>
            <label>Email</label>
            <input
            type= "text"
            onChange= {(e) => setEmail(e.target.value)}
            value = {email}
            />

            <label>Password</label>
            <input
            type= "password"
            onChange= {(e) => setPassword(e.target.value)}
            value = {password}
            />

            <button>Login</button>
            </form>
        
        </div>
)
}
export default Login