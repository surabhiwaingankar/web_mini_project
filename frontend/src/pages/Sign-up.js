import { useState } from 'react'
import './login.css'

const Signup = () => { 

    const [email1 , setEmail1] = useState("");
    const [password1, setPassword1] = useState("");

const [email , setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirm, setPasswordConfirm] = useState("");
const [name, setName] = useState("");
const [role, setRole] = useState("");
const [error, setError] = useState("");

const handleSubmit1 = async(e) =>{
    e.preventDefault()

    const user = {email: email1, password: password1}
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
        console.log(error)
    }
    if(response.ok)
    {
        setEmail1(null)
        setPassword1(null)

        setError(null)
        console.log("Logged in", json)
    }
}




    const handleSubmit2 = async(e) =>{
        e.preventDefault()

        const user = {email, password, passwordConfirm, name, role}
        const response = await fetch('http://localhost:4000/api/v1/users/signup', {
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
            setPasswordConfirm(null)
            setName(null)
            setRole(null)

            setError(null)
            console.log("Signed-up in", json)
        }
}

return (
    <div className="center-box">
    <div className="login-container">
      <h2>Sign-up</h2>
      <form className="login-form" onSubmit={handleSubmit2}>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <label>Password Confirm</label>
        <input
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          required
        />

        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <label>Role</label>
        <input
          type="text"
          onChange={(e) => setRole(e.target.value)}
          value={role}
          required
        />

        <button className="login-button">Sign-up</button>
      </form>
    </div>
  </div>
)
}
export default Signup