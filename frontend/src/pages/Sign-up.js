import { useState } from 'react'
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
    <div>
            <h2>Login</h2>
        <form className="create" onSubmit={handleSubmit1}>
            <label>Email</label>
            <input
            type= "text"
            onChange= {(e) => setEmail1(e.target.value)}
            value = {email1}
            />

            <label>Password</label>
            <input
            type= "password"
            onChange= {(e) => setPassword1(e.target.value)}
            value = {password1}
            />

            <button>Login</button>
            </form>
        


            <h2>Sign-up</h2>
            <form className="create" onSubmit={handleSubmit2}>
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

            <label>Password Confirm</label>
            <input
            type= "password"
            onChange= {(e) => setPasswordConfirm(e.target.value)}
            value = {passwordConfirm}
            />

            <label>Name</label>
            <input
            type= "text"
            onChange= {(e) => setName(e.target.value)}
            value = {name}
            />

            <label>Role</label>
            <input
            type= "text"
            onChange= {(e) => setRole(e.target.value)}
            value = {role}
            />

            <button>Sign-up</button>

        </form>
        
        </div>
)
}
export default Signup